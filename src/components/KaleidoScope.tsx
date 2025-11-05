"use client";

import { useTheme } from "next-themes";
import { useEffect, useRef, useId } from "react";

export default function Kaleidoscope() {
  const id = useId();
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    canvas.width = window.innerWidth;
    let w = canvas.width;
    canvas.height = window.innerHeight;
    let h = canvas.height;
    let w2 = w / 2,
      h2 = h / 2;

    const { PI, sin, cos } = Math;
    const PI2 = PI * 2;
    const slices = 15;
    const mirror = true;

    let img: HTMLImageElement;
    let pattern: CanvasPattern | null = null;
    const offset = { x: 50, y: 10 };

    // --- Grain setup ---
    const grainCanvas = document.createElement("canvas");
    const grainCtx = grainCanvas.getContext("2d");
    if (!grainCtx) return;
    const grainOpacity = 0.1; // Adjust for subtlety
    function generateGrain() {
      grainCanvas.width = w;
      grainCanvas.height = h;
      const imageData = grainCtx?.createImageData(w, h);
      if (!imageData) return;
      const buffer = imageData?.data;
      for (let i = 0; i < buffer.length; i += 4) {
        const val = Math.random() * 255;
        buffer[i] = val;
        buffer[i + 1] = val;
        buffer[i + 2] = val;
        buffer[i + 3] = 255 * grainOpacity;
      }
      grainCtx?.putImageData(imageData, 0, 0);
    }

    const handleResize = () => {
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
      w2 = w / 2;
      h2 = h / 2;
      generateGrain(); // regenerate on resize
    };

    const handleClick = () => {
      offset.x = 0;
      offset.y = 0;
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (!img) return;
      offset.x += img.width * (e.movementX / w);
      offset.y += img.height * (e.movementY / h);
    };

    const setup = () => {
      img = new Image();
      img.src =
        "https://res.cloudinary.com/dobs3jkdj/image/upload/v1759935850/beautiful-apricot-flower-graceful-thin-lines-vector-55561930_wy7j2t.png";
      img.onload = () => {
        pattern = ctx.createPattern(img, "repeat");
        generateGrain();
        loop();
      };
    };

    const loop = () => {
      ctx.clearRect(0, 0, w, h);

      const radius = w2 + h2;
      const deltaAngle = PI2 / slices;

      const x = [
        -1,
        -1,
        radius * sin(deltaAngle),
        radius * sin(deltaAngle / 2),
      ];
      const y = [
        -1,
        radius,
        radius * cos(deltaAngle),
        radius * cos(deltaAngle / 2),
      ];

      for (let i = 0; i < slices; i++) {
        ctx.translate(w2, h2);
        ctx.rotate(i * deltaAngle);
        ctx.translate(offset.x, offset.y);
        ctx.beginPath();
        ctx.moveTo(x[0] - offset.x, y[0] - offset.y);
        ctx.lineTo(x[1] - offset.x, y[1] - offset.y);
        ctx.lineTo(x[2] - offset.x, y[2] - offset.y);
        ctx.lineTo(x[0] - offset.x, y[0] - offset.y);
        if (pattern) {
          ctx.fillStyle = pattern;
        }
        ctx.fill();
        ctx.resetTransform();

        if (mirror) {
          ctx.translate(w2, h2);
          ctx.rotate((i - 1) * deltaAngle);
          ctx.scale(-1, 1);
          ctx.translate(offset.x, offset.y);
          ctx.beginPath();
          ctx.moveTo(x[0] - offset.x, y[0] - offset.y);
          ctx.lineTo(x[1] - offset.x, y[1] - offset.y);
          ctx.lineTo(x[3] - offset.x, y[3] - offset.y);
          ctx.lineTo(x[0] - offset.x, y[0] - offset.y);
          if (pattern) {
            ctx.fillStyle = pattern;
          }
          ctx.fill();
          ctx.resetTransform();
        }
      }

      if (img) {
        offset.x = (offset.x + 0.2) % img.width;
        offset.y = (offset.y + 0.05) % img.height;
      }

      // --- Draw grain overlay ---
      ctx.drawImage(grainCanvas, 0, 0);

      requestAnimationFrame(loop);
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("mousemove", handleMouseMove);
    canvas.addEventListener("click", handleClick);

    setup();

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      canvas.removeEventListener("click", handleClick);
    };
  }, []);
  const { theme } = useTheme();

  return (
    <canvas
      ref={canvasRef}
      id={id}
      className={`fixed bg-white top-0 left-0 w-full h-full ${
        theme !== "light" ? " invert " : " invert-0"
      }`}
    ></canvas>
  );
}
