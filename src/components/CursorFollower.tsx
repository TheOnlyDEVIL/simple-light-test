
import { useEffect, useState } from "react";

const CursorFollower = () => {
  const [cursorPosition, setCursorPosition] = useState({ x: -100, y: -100 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const updateCursorPosition = (e: MouseEvent) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseEnter = () => {
      document.body.style.cursor = "none";
    };

    const handleMouseLeave = () => {
      document.body.style.cursor = "auto";
      setCursorPosition({ x: -100, y: -100 });
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === "A" || 
          target.tagName === "BUTTON" || 
          target.closest("a") || 
          target.closest("button")) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener("mousemove", updateCursorPosition);
    window.addEventListener("mouseenter", handleMouseEnter);
    window.addEventListener("mouseleave", handleMouseLeave);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", updateCursorPosition);
      window.removeEventListener("mouseenter", handleMouseEnter);
      window.removeEventListener("mouseleave", handleMouseLeave);
      window.removeEventListener("mouseover", handleMouseOver);
      document.body.style.cursor = "auto";
    };
  }, []);

  return (
    <>
      <div 
        className="cursor-dot"
        style={{ 
          left: `${cursorPosition.x}px`, 
          top: `${cursorPosition.y}px`
        }}
      />
      <div 
        className="cursor-outline"
        style={{ 
          left: `${cursorPosition.x}px`, 
          top: `${cursorPosition.y}px`,
          width: isHovering ? "60px" : "40px",
          height: isHovering ? "60px" : "40px",
          opacity: cursorPosition.x === -100 ? 0 : 1
        }}
      />
    </>
  );
};

export default CursorFollower;
