import React, { useEffect, useState, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

function IntroAnimation({ onComplete }) {
  const [phase, setPhase] = useState("warp"); // warp → text → exit
  const [text, setText] = useState("");
  const fullText = "<Hello World/>";
  const canvasRef = useRef(null);

  // Hyperspace warp-speed animation
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");

    let w = (canvas.width = window.innerWidth);
    let h = (canvas.height = window.innerHeight);
    const cx = w / 2;
    const cy = h / 2;

    const starCount = 300;
    const stars = [];
    const colors = [
      "#00C6FF",
      "#0072FF",
      "#7B2FFF",
      "#935D8C",
      "#ffffff",
      "#ffffff",
      "#ffffff",
    ];

    // Each star starts near center and flies outward
    for (let i = 0; i < starCount; i++) {
      const angle = Math.random() * Math.PI * 2;
      const startDist = Math.random() * 5 + 1;
      stars.push({
        angle,
        dist: startDist,
        speed: Math.random() * 4 + 2,
        size: Math.random() * 2 + 0.5,
        color: colors[Math.floor(Math.random() * colors.length)],
        trailLength: 0,
        opacity: Math.random() * 0.5 + 0.5,
      });
    }

    let startTime = Date.now();
    const warpDuration = 2200; // total warp phase ms
    const accelerationPhase = 800; // stars start moving slowly, then accelerate
    let animId;

    function animate() {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / warpDuration, 1);

      // Speed multiplier: starts slow, accelerates dramatically
      let speedMult;
      if (elapsed < accelerationPhase) {
        // Slow start, gentle acceleration
        const t = elapsed / accelerationPhase;
        speedMult = 0.3 + t * t * 2;
      } else {
        // Dramatic acceleration: exponential ramp
        const t = (elapsed - accelerationPhase) / (warpDuration - accelerationPhase);
        speedMult = 2.3 + t * t * 25;
      }

      // Trail length grows as speed increases
      const trailMult = Math.min(speedMult * 8, 80);

      // Fade out white flash at the very end
      const flashProgress = Math.max(0, (progress - 0.85) / 0.15);

      // Clear with motion blur effect
      ctx.fillStyle = `rgba(0, 0, 0, ${progress > 0.7 ? 0.3 : 0.15})`;
      ctx.fillRect(0, 0, w, h);

      stars.forEach((star) => {
        // Move star outward
        star.dist += star.speed * speedMult * 0.3;
        star.trailLength = star.speed * trailMult;

        const x = cx + Math.cos(star.angle) * star.dist;
        const y = cy + Math.sin(star.angle) * star.dist;

        // Trail end point (behind the star)
        const trailX = cx + Math.cos(star.angle) * Math.max(0, star.dist - star.trailLength);
        const trailY = cy + Math.sin(star.angle) * Math.max(0, star.dist - star.trailLength);

        // Only draw if on screen (with generous margin)
        const margin = 200;
        if (x < -margin || x > w + margin || y < -margin || y > h + margin) {
          // Reset star to center
          star.dist = Math.random() * 3 + 1;
          star.angle = Math.random() * Math.PI * 2;
          return;
        }

        // Draw the streak line
        const gradient = ctx.createLinearGradient(trailX, trailY, x, y);
        gradient.addColorStop(0, "transparent");
        gradient.addColorStop(1, star.color);

        ctx.beginPath();
        ctx.moveTo(trailX, trailY);
        ctx.lineTo(x, y);
        ctx.strokeStyle = gradient;
        ctx.lineWidth = star.size * (1 + speedMult * 0.05);
        ctx.globalAlpha = star.opacity * (1 - flashProgress * 0.5);
        ctx.stroke();

        // Bright dot at the head of the streak
        if (speedMult > 3) {
          ctx.beginPath();
          ctx.arc(x, y, star.size * 0.8, 0, Math.PI * 2);
          ctx.fillStyle = star.color;
          ctx.globalAlpha = star.opacity * 0.6;
          ctx.fill();
        }

        ctx.globalAlpha = 1;
      });

      // Central glow that pulses
      const glowSize = 60 + Math.sin(elapsed * 0.003) * 20;
      const glowGradient = ctx.createRadialGradient(cx, cy, 0, cx, cy, glowSize);
      glowGradient.addColorStop(0, `rgba(0, 198, 255, ${0.15 * (1 - progress * 0.5)})`);
      glowGradient.addColorStop(0.5, `rgba(0, 114, 255, ${0.05 * (1 - progress * 0.5)})`);
      glowGradient.addColorStop(1, "transparent");
      ctx.fillStyle = glowGradient;
      ctx.fillRect(cx - glowSize, cy - glowSize, glowSize * 2, glowSize * 2);

      // White flash at the end
      if (flashProgress > 0) {
        ctx.fillStyle = `rgba(255, 255, 255, ${flashProgress * 0.15})`;
        ctx.fillRect(0, 0, w, h);
      }

      if (progress < 1) {
        animId = requestAnimationFrame(animate);
      } else {
        // Clear to black smoothly
        ctx.fillStyle = "rgba(0, 0, 0, 1)";
        ctx.fillRect(0, 0, w, h);
      }
    }

    animate();

    const timer = setTimeout(() => setPhase("text"), warpDuration + 200);

    const handleResize = () => {
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animId);
      clearTimeout(timer);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Typing animation
  useEffect(() => {
    if (phase !== "text") return;

    let index = 0;
    const interval = setInterval(() => {
      setText(fullText.substring(0, index));
      index++;
      if (index > fullText.length) {
        clearInterval(interval);
        setTimeout(() => setPhase("exit"), 600);
      }
    }, 70);

    return () => clearInterval(interval);
  }, [phase]);

  // Exit
  useEffect(() => {
    if (phase !== "exit") return;
    const timer = setTimeout(() => onComplete(), 800);
    return () => clearTimeout(timer);
  }, [phase, onComplete]);

  return (
    <AnimatePresence>
      {phase !== "done" && (
        <motion.div
          className="fixed inset-0 z-[100] bg-black flex flex-col items-center justify-center overflow-hidden"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          {/* Warp speed canvas */}
          <canvas
            ref={canvasRef}
            className="absolute inset-0 z-0"
            style={{
              opacity: phase === "warp" ? 1 : 0,
              transition: "opacity 0.5s ease",
            }}
          />

          {/* Text content — appears after warp */}
          <motion.div
            className="relative z-10 flex flex-col items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: phase === "text" || phase === "exit" ? 1 : 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              className="mb-6 text-3xl sm:text-4xl md:text-5xl font-mono font-bold text-white"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{
                opacity: phase === "text" || phase === "exit" ? 1 : 0,
                scale: phase === "text" || phase === "exit" ? 1 : 0.9,
              }}
              transition={{ duration: 0.5 }}
            >
              <span className="text-gradient">{text}</span>
              <motion.span
                className="ml-1 text-cyan-400"
                animate={{ opacity: [1, 0] }}
                transition={{
                  duration: 0.5,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              >
                |
              </motion.span>
            </motion.div>

            {/* Loading bar */}
            <motion.div
              className="w-[200px] h-[2px] bg-white/5 rounded-full relative overflow-hidden"
              initial={{ opacity: 0 }}
              animate={{
                opacity: phase === "text" || phase === "exit" ? 1 : 0,
              }}
              transition={{ delay: 0.2 }}
            >
              <motion.div
                className="h-full rounded-full"
                style={{
                  background:
                    "linear-gradient(90deg, #00C6FF, #0072FF, #7B2FFF)",
                }}
                initial={{ width: "0%" }}
                animate={{
                  width: phase === "text" || phase === "exit" ? "100%" : "0%",
                }}
                transition={{ duration: 2, ease: "easeInOut" }}
              />
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default IntroAnimation;