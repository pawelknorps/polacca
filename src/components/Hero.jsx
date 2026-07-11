import { useEffect, useRef } from 'react';
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

const Hero = () => {
    const heroRef = useRef(null);

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

    return (
        <section className="hero" ref={heroRef}>
            <div className="crt-overlay"></div>
            <div className="hero-overlay"></div>

            {/* Wycinanka Collage Background */}
            <div className="collage-background">
                <Picture avif={img1Avif} webp={img1Webp} fallback={img1Fallback} alt="Zdjęcie z koncertu 1" className="collage-img img-1" priority={true} lazy={false} />
                <Picture avif={img2Avif} webp={img2Webp} fallback={img2Fallback} alt="Zdjęcie z koncertu 2" className="collage-img img-2" priority={true} lazy={false} />
                <Picture avif={img3Avif} webp={img3Webp} fallback={img3Fallback} alt="Zdjęcie z koncertu 3" className="collage-img img-3" priority={true} lazy={false} />
                <Picture avif={img4Avif} webp={img4Webp} fallback={img4Fallback} alt="Zdjęcie z koncertu 4" className="collage-img img-4" priority={true} lazy={false} />
                <Picture avif={img5Avif} webp={img5Webp} fallback={img5Fallback} alt="Zdjęcie z koncertu 5" className="collage-img img-5" priority={true} lazy={false} />
                <Picture avif={img6Avif} webp={img6Webp} fallback={img6Fallback} alt="Zdjęcie z koncertu 6" className="collage-img img-6" priority={true} lazy={false} />
                <Picture avif={img7Avif} webp={img7Webp} fallback={img7Fallback} alt="Zdjęcie z koncertu 7" className="collage-img img-7" priority={true} lazy={false} />
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
                    <a href="#video" className="btn-secondary blink-hover">Posłuchaj Nas</a>
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
