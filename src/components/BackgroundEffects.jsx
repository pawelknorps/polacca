import { useEffect, useRef } from 'react';
import './BackgroundEffects.css';

const BackgroundEffects = () => {
    const containerRef = useRef(null);

    useEffect(() => {
        let ticking = false;

        const handleMouseMove = (e) => {
            if (!ticking) {
                window.requestAnimationFrame(() => {
                    const x = (e.clientX / window.innerWidth - 0.5) * 2; // -1 to 1
                    const y = (e.clientY / window.innerHeight - 0.5) * 2; // -1 to 1
                    
                    document.documentElement.style.setProperty('--mouse-x', x);
                    document.documentElement.style.setProperty('--mouse-y', y);
                    
                    ticking = false;
                });
                ticking = true;
            }
        };

        const handleScroll = () => {
            if (!ticking) {
                window.requestAnimationFrame(() => {
                    const scrollY = window.scrollY;
                    const height = document.body.scrollHeight - window.innerHeight;
                    const progress = height > 0 ? Math.min(scrollY / height, 1) : 0;
                    
                    document.documentElement.style.setProperty('--scroll-progress', progress);
                    
                    ticking = false;
                });
                ticking = true;
            }
        };

        window.addEventListener('mousemove', handleMouseMove, { passive: true });
        window.addEventListener('scroll', handleScroll, { passive: true });

        // Init
        handleScroll();

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('scroll', handleScroll);
        };
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
