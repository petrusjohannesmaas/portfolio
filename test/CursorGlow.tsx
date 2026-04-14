import { useEffect, useRef } from "react";

export default function CursorGlow() {
    const glowRef = useRef<HTMLDivElement | null>(null);

    const mouse = useRef({ x: 0, y: 0 });
    const current = useRef({ x: 0, y: 0 });

    const speed = 0.08;

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            mouse.current.x = e.clientX;
            mouse.current.y = e.clientY;
        };

        window.addEventListener("mousemove", handleMouseMove);

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
            window.removeEventListener("mousemove", handleMouseMove);
        };
    }, []);

    return (
        <div
            ref={glowRef}
            className="pointer-events-none fixed top-0 left-0 w-[300px] h-[300px] rounded-full blur-[80px]"
            style={{
                background:
                    "radial-gradient(circle, rgba(56,189,248,0.5), transparent 60%)",
            }}
        />
    );
}