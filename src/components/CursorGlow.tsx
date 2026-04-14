import { useEffect, useRef } from 'react';

export default function CursorGlow() {
  const glowRef = useRef<HTMLDivElement | null>(null);
  const mouse = useRef({ x: 0, y: 0 });
  const current = useRef({ x: 0, y: 0 });

  const speed = 0.08;

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Get position relative to the document
      mouse.current.x = e.pageX;
      mouse.current.y = e.pageY;
    };

    window.addEventListener('mousemove', handleMouseMove);

    const animate = () => {
      current.current.x += (mouse.current.x - current.current.x) * speed;
      current.current.y += (mouse.current.y - current.current.y) * speed;

      if (glowRef.current) {
        glowRef.current.style.transform = `translate(${current.current.x}px, ${current.current.y}px) translate(-50%, -50%)`;
      }

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div
      ref={glowRef}
      className="pointer-events-none absolute top-0 left-0 w-[400px] h-[400px] rounded-full blur-[100px] opacity-40 z-0"
      style={{
        background: 'radial-gradient(circle, #1d6bf3 0%, transparent 70%)',
      }}
    />
  );
}
