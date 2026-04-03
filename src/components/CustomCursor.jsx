import { useEffect, useRef, useState } from "react";

const CustomCursor = () => {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const trailsRef = useRef([]);
  const pos = useRef({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if touch device
    if ('ontouchstart' in window) return;

    const handleMove = (e) => {
      pos.current = { x: e.clientX, y: e.clientY };
      if (!isVisible) setIsVisible(true);

      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${e.clientX - 4}px, ${e.clientY - 4}px)`;
      }
    };

    const handleRingMove = () => {
      if (!ringRef.current) return;
      const ring = ringRef.current;
      const currentX = parseFloat(ring.dataset.x || pos.current.x);
      const currentY = parseFloat(ring.dataset.y || pos.current.y);
      const dx = pos.current.x - currentX;
      const dy = pos.current.y - currentY;
      const newX = currentX + dx * 0.15;
      const newY = currentY + dy * 0.15;
      ring.dataset.x = newX;
      ring.dataset.y = newY;

      const size = isHovering ? 56 : 36;
      ring.style.transform = `translate(${newX - size / 2}px, ${newY - size / 2}px)`;
      requestAnimationFrame(handleRingMove);
    };

    const animId = requestAnimationFrame(handleRingMove);

    const handleOver = (e) => {
      const target = e.target.closest("a, button, [role='button'], input, textarea, [data-cursor-hover]");
      if (target) setIsHovering(true);
    };
    const handleOut = (e) => {
      const target = e.target.closest("a, button, [role='button'], input, textarea, [data-cursor-hover]");
      if (target) setIsHovering(false);
    };
    const handleLeave = () => setIsVisible(false);
    const handleEnter = () => setIsVisible(true);

    window.addEventListener("mousemove", handleMove);
    document.addEventListener("mouseover", handleOver);
    document.addEventListener("mouseout", handleOut);
    document.addEventListener("mouseleave", handleLeave);
    document.addEventListener("mouseenter", handleEnter);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("mousemove", handleMove);
      document.removeEventListener("mouseover", handleOver);
      document.removeEventListener("mouseout", handleOut);
      document.removeEventListener("mouseleave", handleLeave);
      document.removeEventListener("mouseenter", handleEnter);
    };
  }, [isHovering, isVisible]);

  // Don't render on touch devices
  if (typeof window !== 'undefined' && 'ontouchstart' in window) return null;

  return (
    <>
      {/* Inner dot */}
      <div
        ref={dotRef}
        className="pointer-events-none fixed top-0 left-0 z-[9999] mix-blend-difference"
        style={{
          opacity: isVisible ? 1 : 0,
          transition: "opacity 0.3s ease",
        }}
      >
        <div
          className="rounded-full bg-white"
          style={{
            width: isHovering ? 6 : 8,
            height: isHovering ? 6 : 8,
            transition: "width 0.3s ease, height 0.3s ease",
          }}
        />
      </div>

      {/* Outer ring */}
      <div
        ref={ringRef}
        className="pointer-events-none fixed top-0 left-0 z-[9998]"
        style={{
          opacity: isVisible ? 1 : 0,
          transition: "opacity 0.3s ease",
        }}
      >
        <div
          className="rounded-full border mix-blend-difference"
          style={{
            width: isHovering ? 56 : 36,
            height: isHovering ? 56 : 36,
            borderColor: isHovering ? "rgba(0, 198, 255, 0.6)" : "rgba(255, 255, 255, 0.5)",
            borderWidth: isHovering ? 2 : 1.5,
            transition: "width 0.4s cubic-bezier(0.22, 1, 0.36, 1), height 0.4s cubic-bezier(0.22, 1, 0.36, 1), border-color 0.3s ease, border-width 0.3s ease",
            boxShadow: isHovering ? "0 0 20px rgba(0, 198, 255, 0.2)" : "none",
          }}
        />
      </div>

      {/* Ambient glow that follows cursor */}
      <div
        className="pointer-events-none fixed top-0 left-0 z-[9997]"
        style={{
          transform: `translate(${pos.current.x - 80}px, ${pos.current.y - 80}px)`,
          opacity: isVisible ? 0.12 : 0,
          transition: "opacity 0.5s ease",
        }}
      >
        <div
          className="w-40 h-40 rounded-full blur-2xl"
          style={{
            background: "radial-gradient(circle, rgba(0,198,255,0.4) 0%, rgba(0,114,255,0.1) 50%, transparent 70%)",
          }}
        />
      </div>
    </>
  );
};

export default CustomCursor;
