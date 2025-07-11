// src/components/ParticleBackground.jsx
import React, { useRef, useEffect } from "react";

const PARTICLE_COUNT = 80;
const PARTICLE_COLOR = "#333";
const LINE_COLOR = "rgba(160,160,160,0.5)";
const BG_COLOR = "#fff";
const PARTICLE_SIZE = { min: 1, max: 3 };
const SPEED = 0.6;
const LINK_DISTANCE = 150;

function randomBetween(min, max) {
  return Math.random() * (max - min) + min;
}

function createParticle(width, height) {
  return {
    x: Math.random() * width,
    y: Math.random() * height,
    vx: randomBetween(-SPEED, SPEED),
    vy: randomBetween(-SPEED, SPEED),
    size: randomBetween(PARTICLE_SIZE.min, PARTICLE_SIZE.max),
  };
}

export default function ParticleBackground() {
  const canvasRef = useRef(null);
  const particlesRef = useRef([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let animationId;
    let width = window.innerWidth;
    let height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;

    // Create particles
    particlesRef.current = Array.from({ length: PARTICLE_COUNT }, () =>
      createParticle(width, height)
    );

    function draw() {
      ctx.fillStyle = BG_COLOR;
      ctx.fillRect(0, 0, width, height);

      // Draw lines
      for (let i = 0; i < PARTICLE_COUNT; i++) {
        for (let j = i + 1; j < PARTICLE_COUNT; j++) {
          const p1 = particlesRef.current[i];
          const p2 = particlesRef.current[j];
          const dist = Math.hypot(p1.x - p2.x, p1.y - p2.y);
          if (dist < LINK_DISTANCE) {
            ctx.strokeStyle = LINE_COLOR;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }
      }

      // Draw particles
      for (let i = 0; i < PARTICLE_COUNT; i++) {
        const p = particlesRef.current[i];
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = PARTICLE_COLOR;
        ctx.globalAlpha = 0.5;
        ctx.fill();
        ctx.globalAlpha = 1;
      }
    }

    function update() {
      for (let i = 0; i < PARTICLE_COUNT; i++) {
        const p = particlesRef.current[i];
        p.x += p.vx;
        p.y += p.vy;
        // Bounce off edges
        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;
      }
    }

    function animate() {
      update();
      draw();
      animationId = requestAnimationFrame(animate);
    }

    animate();

    // Resize handler
    function handleResize() {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
      particlesRef.current = Array.from({ length: PARTICLE_COUNT }, () =>
        createParticle(width, height)
      );
    }
    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div
      style={{
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none",
        zIndex: -1,
      }}
    >
      <canvas
        ref={canvasRef}
        style={{ width: "100%", height: "100%", display: "block" }}
      />
    </div>
  );
}
