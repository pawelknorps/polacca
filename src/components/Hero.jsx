import { useEffect, useRef, useState, useCallback } from 'react';
import './Hero.css';
import Marquee from './Marquee';
import { Picture } from './Picture';

import img1Avif from '../assets/zdjecia/IMG_6676.jpeg?w=400;800;1200&format=avif&as=srcset';
import img1Webp from '../assets/zdjecia/IMG_6676.jpeg?w=400;800;1200&format=webp&as=srcset';
import img1Fallback from '../assets/zdjecia/IMG_6676.jpeg?w=800';

import img2Avif from '../assets/zdjecia/IMG_6730.jpeg?w=400;800;1200&format=avif&as=srcset';
import img2Webp from '../assets/zdjecia/IMG_6730.jpeg?w=400;800;1200&format=webp&as=srcset';
import img2Fallback from '../assets/zdjecia/IMG_6730.jpeg?w=800';

import img3Avif from '../assets/zdjecia/IMG_6736.jpeg?w=400;800;1200&format=avif&as=srcset';
import img3Webp from '../assets/zdjecia/IMG_6736.jpeg?w=400;800;1200&format=webp&as=srcset';
import img3Fallback from '../assets/zdjecia/IMG_6736.jpeg?w=800';

import img4Avif from '../assets/zdjecia/IMG_6752.jpeg?w=400;800;1200&format=avif&as=srcset';
import img4Webp from '../assets/zdjecia/IMG_6752.jpeg?w=400;800;1200&format=webp&as=srcset';
import img4Fallback from '../assets/zdjecia/IMG_6752.jpeg?w=800';

import img5Avif from '../assets/zdjecia/IMG_0497.jpeg?w=400;800;1200&format=avif&as=srcset';
import img5Webp from '../assets/zdjecia/IMG_0497.jpeg?w=400;800;1200&format=webp&as=srcset';
import img5Fallback from '../assets/zdjecia/IMG_0497.jpeg?w=800';

import img6Avif from '../assets/zdjecia/IMG_0001.jpeg?w=400;800;1200&format=avif&as=srcset';
import img6Webp from '../assets/zdjecia/IMG_0001.jpeg?w=400;800;1200&format=webp&as=srcset';
import img6Fallback from '../assets/zdjecia/IMG_0001.jpeg?w=800';

import img7Avif from '../assets/zdjecia/IMG_6696.jpeg?w=400;800;1200&format=avif&as=srcset';
import img7Webp from '../assets/zdjecia/IMG_6696.jpeg?w=400;800;1200&format=webp&as=srcset';
import img7Fallback from '../assets/zdjecia/IMG_6696.jpeg?w=800';

/* ── Layout presets ──
   Each layout is an array of 7 objects: { top, left, width, height, rotate, z }
   Values in % except rotate (deg) and z (int).
   null = use CSS default (layout 0). */
const LAYOUTS = [
    // 0 — default scattered (explicit coordinates matching CSS)
    [
        { left: '28%', top: '10%', width: '45%', height: '65%', rotate: -10, z: 1, ml: '0' },
        { left: '-10%', top: '-10%', width: '35%', height: '45%', rotate: 20, z: 2, ml: '0' },
        { left: '70%', top: '60%', width: '40%', height: '55%', rotate: -15, z: 2, ml: '0' },
        { left: '5%', top: '60%', width: '30%', height: '40%', rotate: 25, z: 3, ml: '0' },
        { left: '68%', top: '10%', width: '30%', height: '35%', rotate: 8, z: 3, ml: '0' },
        { left: '55%', top: '50%', width: '25%', height: '30%', rotate: -15, z: 1, ml: '0' },
        { left: '-5%', top: '40%', width: '28%', height: '35%', rotate: 5, z: 2, ml: '0' },
    ],
    // 1 — fan spread from center bottom
    [
        { left: '50%', top: '15%', width: '28%', height: '50%', rotate: -18, z: 1, ml: '-14%' },
        { left: '50%', top: '12%', width: '28%', height: '50%', rotate: -12, z: 2, ml: '-14%' },
        { left: '50%', top: '10%', width: '28%', height: '50%', rotate: -6,  z: 3, ml: '-14%' },
        { left: '50%', top: '8%',  width: '28%', height: '50%', rotate: 0,   z: 7, ml: '-14%' },
        { left: '50%', top: '10%', width: '28%', height: '50%', rotate: 6,   z: 3, ml: '-14%' },
        { left: '50%', top: '12%', width: '28%', height: '50%', rotate: 12,  z: 2, ml: '-14%' },
        { left: '50%', top: '15%', width: '28%', height: '50%', rotate: 18,  z: 1, ml: '-14%' },
    ],
    // 2 — spotlight: one big center, rest small around edges
    [
        { left: '25%', top: '10%', width: '50%', height: '70%', rotate: -2, z: 7, ml: '0' },
        { left: '-5%', top: '5%',  width: '22%', height: '30%', rotate: -15, z: 2, ml: '0' },
        { left: '78%', top: '0%',  width: '22%', height: '30%', rotate: 12,  z: 2, ml: '0' },
        { left: '-3%', top: '60%', width: '20%', height: '28%', rotate: 8,   z: 2, ml: '0' },
        { left: '80%', top: '55%', width: '20%', height: '28%', rotate: -10, z: 2, ml: '0' },
        { left: '15%', top: '70%', width: '18%', height: '25%', rotate: 5,   z: 1, ml: '0' },
        { left: '65%', top: '72%', width: '18%', height: '25%', rotate: -8,  z: 1, ml: '0' },
    ],
    // 3 — diagonal cascade (staircase)
    [
        { left: '2%',  top: '5%',  width: '26%', height: '35%', rotate: -5,  z: 7, ml: '0' },
        { left: '14%', top: '18%', width: '26%', height: '35%', rotate: 3,   z: 6, ml: '0' },
        { left: '26%', top: '5%',  width: '26%', height: '35%', rotate: -2,  z: 5, ml: '0' },
        { left: '38%', top: '18%', width: '26%', height: '35%', rotate: 4,   z: 4, ml: '0' },
        { left: '50%', top: '5%',  width: '26%', height: '35%', rotate: -3,  z: 3, ml: '0' },
        { left: '62%', top: '18%', width: '26%', height: '35%', rotate: 2,   z: 2, ml: '0' },
        { left: '74%', top: '5%',  width: '26%', height: '35%', rotate: -4,  z: 1, ml: '0' },
    ],
    // 4 — orbit / circle
    [
        { left: '38%', top: '2%',  width: '24%', height: '32%', rotate: 0,   z: 4, ml: '0' },
        { left: '65%', top: '10%', width: '24%', height: '32%', rotate: 8,   z: 3, ml: '0' },
        { left: '75%', top: '38%', width: '24%', height: '32%', rotate: 15,  z: 2, ml: '0' },
        { left: '60%', top: '62%', width: '24%', height: '32%', rotate: 5,   z: 1, ml: '0' },
        { left: '30%', top: '62%', width: '24%', height: '32%', rotate: -5,  z: 1, ml: '0' },
        { left: '2%',  top: '38%', width: '24%', height: '32%', rotate: -15, z: 2, ml: '0' },
        { left: '10%', top: '10%', width: '24%', height: '32%', rotate: -8,  z: 3, ml: '0' },
    ],
];

const images = [
    { avif: img1Avif, webp: img1Webp, fallback: img1Fallback, alt: 'Zdjęcie z koncertu 1' },
    { avif: img2Avif, webp: img2Webp, fallback: img2Fallback, alt: 'Zdjęcie z koncertu 2' },
    { avif: img3Avif, webp: img3Webp, fallback: img3Fallback, alt: 'Zdjęcie z koncertu 3' },
    { avif: img4Avif, webp: img4Webp, fallback: img4Fallback, alt: 'Zdjęcie z koncertu 4' },
    { avif: img5Avif, webp: img5Webp, fallback: img5Fallback, alt: 'Zdjęcie z koncertu 5' },
    { avif: img6Avif, webp: img6Webp, fallback: img6Fallback, alt: 'Zdjęcie z koncertu 6' },
    { avif: img7Avif, webp: img7Webp, fallback: img7Fallback, alt: 'Zdjęcie z koncertu 7' },
];

const Hero = () => {
    const heroRef = useRef(null);
    const [layoutIndex, setLayoutIndex] = useState(0);
    const [hasClicked, setHasClicked] = useState(false);

    useEffect(() => {
        const handleMouseMove = (e) => {
            if (!heroRef.current) return;
            const x = (e.clientX / window.innerWidth - 0.5) * 2;
            const y = (e.clientY / window.innerHeight - 0.5) * 2;
            heroRef.current.style.setProperty('--mouse-x', x);
            heroRef.current.style.setProperty('--mouse-y', y);
        };
        
        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    const cycleLayout = useCallback(() => {
        setHasClicked(true);
        setLayoutIndex(prev => (prev + 1) % LAYOUTS.length);
    }, []);

    const currentLayout = LAYOUTS[layoutIndex];

    const getGlowAnimation = (i) => {
        const type = ['pink', 'cyan', 'gold', 'pink', 'cyan', 'gold', 'pink'][i];
        const duration = [6, 7, 8, 9, 6.5, 7.5, 8][i];
        return `neon-glow-${type} ${duration}s ease-in-out infinite`;
    };

    /** Build inline style for a card when in a non-default layout */
    const getCardStyle = (i) => {
        if (!hasClicked) return undefined;
        const c = currentLayout[i];
        return {
            left: c.left,
            top: c.top,
            bottom: 'auto',
            right: 'auto',
            width: c.width,
            height: c.height,
            transform: `rotate(${c.rotate}deg)`,
            zIndex: c.z,
            marginLeft: c.ml || '0',
            // Keep glow, disable float/entrance
            animation: getGlowAnimation(i),
            opacity: 1,
        };
    };

    return (
        <section className="hero" ref={heroRef}>
            <div className="crt-overlay"></div>
            <div className="hero-overlay"></div>

            {/* Wycinanka Collage Background */}
            <div className={`collage-background ${hasClicked ? 'layout-active' : ''}`}>
                {images.map((img, i) => (
                    <Picture
                        key={i}
                        avif={img.avif}
                        webp={img.webp}
                        fallback={img.fallback}
                        alt={img.alt}
                        className={`collage-img img-${i + 1}`}
                        priority={true}
                        lazy={false}
                        style={currentLayout ? getCardStyle(i) : undefined}
                        onClick={cycleLayout}
                    />
                ))}
            </div>

            <div className="hero-content">
                <div className="glitch-wrapper">
                    <h1 className="hero-title glitch" data-text="Ala Polacca">Ala Polacca</h1>
                </div>

                <p className="hero-subtitle">★ Złota Era Polskiego Dancingu ★</p>

                <p className="hero-description">
                    Przywracamy blask i energię parkietów lat 90. i 00.
                </p>

                <div className="hero-actions">
                    <a href="#contact" className="btn-primary swing-hover">Zarezerwuj Termin</a>
                    <a href="#video" className="btn-secondary blink-hover" onClick={() => window.dispatchEvent(new CustomEvent('playVideo'))}>Posłuchaj Nas</a>
                </div>

                <div className="social-links">
                    <a href="https://www.facebook.com/profile.php?id=61586682825893" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="Facebook">
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
                    </a>
                    <a href="https://www.instagram.com/alapolacca/" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="Instagram">
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                    </a>
                </div>
            </div>

            <div className="sticker-badge">
                100%<br />LIVE!
            </div>

            <div className="marquee-wrapper-bottom">
                <Marquee text="WESELA ★ BANKIETY ★ DANCINGI ★ IMPREZY FIRMOWE ★ MUZYKA NA ŻYWO" speed={15} />
            </div>
        </section>
    );
};

export default Hero;
