import './Hero.css';
import Marquee from './Marquee';

const Hero = () => {
    return (
        <section className="hero">
            <div className="crt-overlay"></div>
            <div className="hero-overlay"></div>

            {/* Wycinanka Collage Background */}
            <div className="collage-background">
                <img src="/assets/sylwester/IMG_6692.jpeg" className="collage-img img-1" alt="" />
                <img src="/assets/sylwester/IMG_6668.jpeg" className="collage-img img-2" alt="" />
                <img src="/assets/sylwester/IMG_6748.jpeg" className="collage-img img-3" alt="" />
                <img src="/assets/sylwester/IMG_6780.jpeg" className="collage-img img-4" alt="" />
                <img src="/assets/sylwester/IMG_6768.jpeg" className="collage-img img-5" alt="" />
                <img src="/assets/sylwester/IMG_6718.jpeg" className="collage-img img-6" alt="" />
                <img src="/assets/sylwester/IMG_6689.jpeg" className="collage-img img-7" alt="" />
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
