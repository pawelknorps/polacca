import './Hero.css';
import Marquee from './Marquee';

const Hero = () => {
    return (
        <section className="hero">
            <div className="crt-overlay"></div>
            <div className="hero-overlay"></div>

            {/* Wycinanka Collage Background */}
            <div className="collage-background">
                <img src={`${import.meta.env.BASE_URL}assets/sylwester/IMG_6692.jpeg`} className="collage-img img-1" alt="" />
                <img src={`${import.meta.env.BASE_URL}assets/sylwester/IMG_6668.jpeg`} className="collage-img img-2" alt="" />
                <img src={`${import.meta.env.BASE_URL}assets/sylwester/IMG_6748.jpeg`} className="collage-img img-3" alt="" />
                <img src={`${import.meta.env.BASE_URL}assets/sylwester/IMG_6780.jpeg`} className="collage-img img-4" alt="" />
                <img src={`${import.meta.env.BASE_URL}assets/sylwester/IMG_6768.jpeg`} className="collage-img img-5" alt="" />
                <img src={`${import.meta.env.BASE_URL}assets/sylwester/IMG_6718.jpeg`} className="collage-img img-6" alt="" />
                <img src={`${import.meta.env.BASE_URL}assets/sylwester/IMG_6689.jpeg`} className="collage-img img-7" alt="" />
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
                    <button className="btn-primary swing-hover">Zarezerwuj Termin</button>
                    <button className="btn-secondary blink-hover">Posłuchaj Nas</button>
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
