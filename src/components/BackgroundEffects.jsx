import { useEffect, useRef } from 'react';
import './BackgroundEffects.css';

const BackgroundEffects = () => {
    const containerRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            if (!containerRef.current) return;
            const scrollY = window.scrollY;
            const height = document.body.scrollHeight - window.innerHeight;
            const progress = Math.min(scrollY / height, 1);

            // Modulate opacity and position based on scroll
            const orbs = containerRef.current.querySelectorAll('.bg-orb');

            // Orb 1: Moves down and rotates
            if (orbs[0]) {
                orbs[0].style.transform = `translate(${progress * 50}px, ${progress * 200}px) rotate(${progress * 360}deg)`;
            }

            // Orb 2: Moves up and scales
            if (orbs[1]) {
                orbs[1].style.transform = `translate(${-progress * 100}px, ${-progress * 150}px) scale(${1 + progress * 0.5})`;
            }

            // Orb 3: Pulses and shifts color hue (simulated by opacity)
            if (orbs[2]) {
                orbs[2].style.opacity = 0.3 + (Math.sin(progress * Math.PI) * 0.4);
            }

            // Grid perspective shift?
            const grid = containerRef.current.querySelector('.retro-grid');
            if (grid) {
                // Flatten the grid as we scroll? Or steepen?
                // Let's make it travel faster
                grid.style.transform = `perspective(500px) rotateX(${60 + progress * 10}deg) translateY(${progress * 100}px)`;
            }
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="background-effects-container" ref={containerRef}>
            <div className="retro-grid"></div>
            <div className="bg-orb orb-1"></div>
            <div className="bg-orb orb-2"></div>
            <div className="bg-orb orb-3"></div>
            <div className="scanlines-global"></div>
        </div>
    );
};

export default BackgroundEffects;
