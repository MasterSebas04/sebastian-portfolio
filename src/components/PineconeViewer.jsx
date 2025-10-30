import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';

function PineconeModel() {
  // Handle filename with space by encoding
  const url = encodeURI('/Pinecone .glb');
  const { scene } = useGLTF(url);
  return <primitive object={scene} scale={0.3} />;
}

export default function PineconeViewer() {
  return (
    <div style={{ width: '1000px', height: '1000px', margin: '0 auto' }}>
      <Canvas camera={{ position: [0, 0.6, 1.2], fov: 45 }}>
        <ambientLight intensity={0.6} />
        <directionalLight position={[2, 3, 2]} intensity={0.8} />
        <PineconeModel />
        <OrbitControls enablePan={false} enableZoom={false} />
      </Canvas>
    </div>
  );
}

// Drei GLTF loader needs this once
useGLTF.preload(encodeURI('/Pinecone .glb'));
