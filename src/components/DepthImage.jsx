import * as THREE from 'three';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { useTexture } from '@react-three/drei';
import { useMemo, useRef } from 'react';

const vert = `
  uniform sampler2D uDepth;
  uniform float uStrength;
  varying vec2 vUv;
  float remapDepth(float d) { return 0.5 - d; }
  void main() {
    vUv = uv;
    vec3 pos = position;
    float depth = texture2D(uDepth, vUv).r;
    float disp = remapDepth(depth) * uStrength;
    pos.z += disp;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
  }
`;

const frag = `
  uniform sampler2D uColor;
  varying vec2 vUv;
  void main() {
    gl_FragColor = texture2D(uColor, vUv);
  }
`;

function DepthPlane({ colorURL, depthURL, strength = 0.18, scale = 1 }) {
  const mesh = useRef();
  const { size } = useThree();
  const [colorMap, depthMap] = useTexture([colorURL, depthURL]);

  const aspect = size.width / size.height;
  const planeScale = useMemo(() => {
    const imgAspect = colorMap.image ? colorMap.image.width / colorMap.image.height : 1.5;
    return imgAspect > aspect
      ? [1.0, 1.0 / imgAspect, 1]
      : [aspect * imgAspect, aspect, 1];
  }, [aspect, colorMap.image]);

  const uniforms = useMemo(
    () => ({
      uColor: { value: colorMap },
      uDepth: { value: depthMap },
      uStrength: { value: strength },
    }),
    [colorMap, depthMap, strength]
  );

  useFrame(({ mouse }) => {
    if (!mesh.current) return;
    const targetY = THREE.MathUtils.clamp(mouse.x * 0.06, -0.06, 0.06);
    const targetX = THREE.MathUtils.clamp(-mouse.y * 0.05, -0.05, 0.05);
    mesh.current.rotation.y = THREE.MathUtils.lerp(mesh.current.rotation.y, targetY, 0.12);
    mesh.current.rotation.x = THREE.MathUtils.lerp(mesh.current.rotation.x, targetX, 0.12);
  });

  return (
    <mesh ref={mesh} scale={planeScale.map((v) => v * scale)}>
      <planeGeometry args={[1, 1, 256, 256]} />
      <shaderMaterial
        vertexShader={vert}
        fragmentShader={frag}
        uniforms={uniforms}
        depthTest
        depthWrite
        transparent={false}
        glslVersion={THREE.GLSL1}
      />
    </mesh>
  );
}

export default function DepthImage({
  color = '/sebastian_lange_pro.jpg',
  depth = '/seb_depthmap/professional_seb_depth.png',
  strength = 0.05,
  scale = 0.5,
}) {
  return (
    <div style={{ width: '100%', maxWidth: 560, margin: '0 auto', height: 460, borderRadius: 16, overflow: 'hidden' }}>
      <Canvas camera={{ position: [0, 0, 1.5], fov: 50 }}>
        <ambientLight intensity={1} />
        <DepthPlane colorURL={color} depthURL={depth} strength={strength} scale={scale} />
      </Canvas>
    </div>
  );
}
