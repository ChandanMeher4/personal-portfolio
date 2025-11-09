import { useEffect, useState } from "react";
const CURSOR_COLOR_START = "rgba(200, 230, 255, 0.5)"; 
const CURSOR_COLOR_END = "rgba(255, 255, 255, 0.3)";

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const moveHandler = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", moveHandler);
    return () => {
      window.removeEventListener("mousemove", moveHandler);
    };
  }, []);

  return (
    <div
      className="pointer-events-none fixed top-0 left-0 z-50 transition-transform duration-150 ease-out"
      style={{
        transform: `translate(${position.x - 30}px , ${position.y - 30}px)`,
      }}
    >
      <div
        className="w-20 h-20 rounded-full blur-xl opacity-50"
        style={{
          background: `linear-gradient(to right, ${CURSOR_COLOR_START}, ${CURSOR_COLOR_END})`,
        }}
      />
    </div>
  );
};

export default CustomCursor;
