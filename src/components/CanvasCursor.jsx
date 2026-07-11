import { useEffect, useRef } from 'react';

const CanvasCursor = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        // Disable on touch devices immediately
        if (window.matchMedia("(pointer: coarse)").matches) {
            return;
        }

        const canvas = canvasRef.current;
        if (!canvas) return;
        
        const ctx = canvas.getContext('2d');
        let animationFrameId;
        
        let width = window.innerWidth;
        let height = window.innerHeight;
        canvas.width = width;
        canvas.height = height;

        const handleResize = () => {
            width = window.innerWidth;
            height = window.innerHeight;
            canvas.width = width;
            canvas.height = height;
        };

        window.addEventListener('resize', handleResize);

        const mouse = { x: width / 2, y: height / 2 };
        const dot = { x: width / 2, y: height / 2 };

        const handleMouseMove = (e) => {
            mouse.x = e.clientX;
            mouse.y = e.clientY;
        };

        window.addEventListener('mousemove', handleMouseMove, { passive: true });

        const render = () => {
            ctx.clearRect(0, 0, width, height);

            // Lerp the dot towards the mouse
            dot.x += (mouse.x - dot.x) * 0.15;
            dot.y += (mouse.y - dot.y) * 0.15;

            // Draw glowing dot
            ctx.beginPath();
            ctx.arc(dot.x, dot.y, 5, 0, Math.PI * 2);
            ctx.fillStyle = '#ff007f';
            ctx.shadowBlur = 12;
            ctx.shadowColor = '#ff007f';
            ctx.fill();
            
            // Draw secondary outer ring
            ctx.beginPath();
            ctx.arc(dot.x, dot.y, 10, 0, Math.PI * 2);
            ctx.strokeStyle = 'rgba(0, 255, 234, 0.4)';
            ctx.lineWidth = 1;
            ctx.stroke();

            animationFrameId = window.requestAnimationFrame(render);
        };

        render();

        return () => {
            window.removeEventListener('resize', handleResize);
            window.removeEventListener('mousemove', handleMouseMove);
            window.cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <canvas 
            ref={canvasRef} 
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100vw',
                height: '100vh',
                pointerEvents: 'none',
                zIndex: 99999
            }}
            aria-hidden="true"
        />
    );
};

export default CanvasCursor;
