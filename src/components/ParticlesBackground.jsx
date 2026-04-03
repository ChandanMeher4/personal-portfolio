import React, { useEffect, useRef } from "react";

const ParticlesBackground = () => {
  const canvasRef = useRef(null);
  const mouseRef = useRef({ x: -9999, y: -9999 });

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    let particles = [];
    const particleCount = 70;
    const connectionDistance = 150;
    const mouseRadius = 120;
    const colors = [
      "rgba(0, 198, 255, 0.6)",
      "rgba(0, 114, 255, 0.5)",
      "rgba(123, 47, 255, 0.4)",
      "rgba(255, 255, 255, 0.5)",
      "rgba(147, 93, 140, 0.4)",
    ];

    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.radius = Math.random() * 2 + 0.5;
        this.baseRadius = this.radius;
        this.color = colors[Math.floor(Math.random() * colors.length)];
        this.speedX = (Math.random() - 0.5) * 0.4;
        this.speedY = (Math.random() - 0.5) * 0.4;
        this.opacity = Math.random() * 0.5 + 0.3;
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.shadowBlur = this.radius * 4;
        ctx.shadowColor = this.color;
        ctx.globalAlpha = this.opacity;
        ctx.fill();
        ctx.globalAlpha = 1;
        ctx.shadowBlur = 0;
      }

      update() {
        // Mouse repulsion
        const dx = this.x - mouseRef.current.x;
        const dy = this.y - mouseRef.current.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < mouseRadius && dist > 0) {
          const force = (mouseRadius - dist) / mouseRadius;
          const angle = Math.atan2(dy, dx);
          this.x += Math.cos(angle) * force * 2;
          this.y += Math.sin(angle) * force * 2;
          this.radius = this.baseRadius * (1 + force * 0.5);
        } else {
          this.radius += (this.baseRadius - this.radius) * 0.05;
        }

        this.x += this.speedX;
        this.y += this.speedY;

        if (this.x < -10) this.x = canvas.width + 10;
        if (this.x > canvas.width + 10) this.x = -10;
        if (this.y < -10) this.y = canvas.height + 10;
        if (this.y > canvas.height + 10) this.y = -10;

        this.draw();
      }
    }

    function drawConnections() {
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < connectionDistance) {
            const opacity = (1 - dist / connectionDistance) * 0.15;
            ctx.beginPath();
            ctx.strokeStyle = `rgba(0, 198, 255, ${opacity})`;
            ctx.lineWidth = 0.5;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }
    }

    function createParticles() {
      particles = [];
      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
      }
    }

    function handleResize() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      createParticles();
    }

    function handleMouse(e) {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    }

    function handleMouseLeave() {
      mouseRef.current = { x: -9999, y: -9999 };
    }

    handleResize();
    window.addEventListener("resize", handleResize);
    window.addEventListener("mousemove", handleMouse);
    window.addEventListener("mouseleave", handleMouseLeave);

    let animationID;
    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      drawConnections();
      particles.forEach((p) => p.update());
      animationID = requestAnimationFrame(animate);
    }
    animate();

    return () => {
      cancelAnimationFrame(animationID);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouse);
      window.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full pointer-events-none z-0"
    />
  );
};

export default ParticlesBackground;
