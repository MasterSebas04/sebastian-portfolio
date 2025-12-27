import { useEffect } from "react";
import { vs, fs } from "./dna.js";

const BACKGROUND = "#FFFFFF";
const FOREGROUND = "#2563eb";

const FPS = 60;
let dz = 2.5;
let angle = 0;
let tilt_x = 0;
let tilt_z= 0;

export default function ThreeModel() {
  useEffect(() => {
    const game = document.getElementById("game");
    if (!game) return;

    console.log(game);
    game.width = 60;
    game.height = 60;

    const ctx = game.getContext("2d");
    console.log(ctx);

    function clear() {
      ctx.fillStyle = BACKGROUND;
      ctx.fillRect(0, 0, game.width, game.height);
    }

    function point({ x, y }) {
      const s = 20; // was global before
      ctx.fillStyle = FOREGROUND;
      ctx.fillRect(x - s / 2, y - s / 2, s, s);
    }

    function line(p1, p2) {
      ctx.strokeStyle = FOREGROUND;
      ctx.beginPath();
      ctx.moveTo(p1.x, p1.y);
      ctx.lineTo(p2.x, p2.y);
      ctx.lineWidth = 0.15;
      ctx.stroke();
    }

    function drawText(text, x, y) {
      ctx.fillStyle = FOREGROUND;
      ctx.font = 'bold 8px Arial';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText(text, x, y);
    }

    function screen(p) {
      return {
        x: ((p.x + 1) / 2) * game.width,
        y: (1 - (p.y + 1) / 2) * game.height,
      };
    }

    function project({ x, y, z }) {
      return { x: x / z, y: y / z };
    }

    function translate_z({ x, y, z }, dz) {
      return { x, y, z: z + dz };
    }

    function rotate_y({ x, y, z }, angle) {
      const x_hat = x * Math.cos(angle) - z * Math.sin(angle);
      const z_hat = x * Math.sin(angle) + z * Math.cos(angle);
      return { x: x_hat, y, z: z_hat };
    }

    function rotate_x({ x, y, z }, angle) {
      const y_hat = y * Math.cos(angle) - z * Math.sin(angle);
      const z_hat = y * Math.sin(angle) + z * Math.cos(angle);
      return { x, y: y_hat, z: z_hat };
    }

    function rotate_z({ x, y, z }, angle) {
      const x_hat = x * Math.cos(angle) - y * Math.sin(angle);
      const y_hat = x * Math.sin(angle) + y * Math.cos(angle);
      return { x: x_hat, y: y_hat, z };
    }
    

    let timerId = null;

    function frame() {
      const dt = 1 / FPS;

 
      tilt_x += (Math.PI/2)*dt;
      tilt_z = Math.PI/2;


      clear();

      for (const f of fs) {
        for (let i = 0; i < f.length; i++) {
          const a = vs[f[i]];
          const b = vs[f[(i + 1) % f.length]];

          const pa = screen(project(translate_z(rotate_y(rotate_x(rotate_z(a, tilt_z), tilt_x), angle), dz)));
          const pb = screen(project(translate_z(rotate_y(rotate_x(rotate_z(b, tilt_z), tilt_x), angle), dz)));

          line(pa, pb);
        }
      }


      timerId = setTimeout(frame, 1000 / FPS);
    }

    timerId = setTimeout(frame, 1000 / FPS);

    // cleanup so React doesn't keep old loops running on refresh/unmount
    return () => {
      if (timerId) clearTimeout(timerId);
    };
  }, []);

  return <canvas id="game"></canvas>;
}
