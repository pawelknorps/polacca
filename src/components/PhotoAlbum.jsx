import { useState } from 'react';
import './PhotoAlbum.css';

// Selection of photos for the album
const albumPhotos = [
    `${import.meta.env.BASE_URL}assets/sylwester/IMG_6668.jpeg`,
    `${import.meta.env.BASE_URL}assets/sylwester/IMG_6689.jpeg`,
    `${import.meta.env.BASE_URL}assets/sylwester/IMG_6718.jpeg`,
    `${import.meta.env.BASE_URL}assets/sylwester/IMG_6748.jpeg`,
    `${import.meta.env.BASE_URL}assets/sylwester/IMG_6768.jpeg`,
    `${import.meta.env.BASE_URL}assets/sylwester/IMG_6780.jpeg`,
];

const AboutSection = () => {
    const [selectedImage, setSelectedImage] = useState(null);

    return (
        <section className="album-section about-section-combined">
            <div className="about-text-container">
                <h2 className="section-title">Sentymentalna podróż na parkiet</h2>
                <div className="about-content">
                    <p>
                        Ala Polacca to nie jest zwykły zespół coverowy. To muzyczny wehikuł czasu, który zabierze Cię prosto do serca polskich dancingu z przełomu tysiącleci.
                    </p>
                    <p>
                        W naszej muzyce łączymy czar eleganckich hoteli lat 90. z nieokiełznaną energią klubowych parkietów wczesnych lat dwutysięcznych.
                        Wybieramy to, co w tamtej epoce było najlepsze – od synth-popowych hymnów, przez dancingowe szlagiery, aż po ikoniczne polskie przeboje.
                    </p>
                    <p>
                        Wszystko gramy 100% na żywo, z szacunkiem do oryginału, ale z nowoczesnym sznytem.
                    </p>
                </div>
            </div>

            <h3 className="section-subtitle-rotated" style={{ textShadow: '3px 3px 0 #ff007f', transform: 'rotate(-2deg)', textAlign: 'center', fontSize: '2.5rem', margin: '3rem 0' }}>Wspomnienia z Parkietu</h3>
            <div className="album-container">
                {albumPhotos.map((src, index) => (
                    <div
                        key={index}
                        className={`photo-card rotate-${index % 3}`}
                        onClick={() => setSelectedImage(src)}
                    >
                        <div className="photo-inner">
                            <img src={src} alt={`Album photo ${index + 1}`} loading="lazy" />
                        </div>
                        <div className="tape"></div>
                    </div>
                ))}
            </div>

            {selectedImage && (
                <div className="lightbox-overlay" onClick={() => setSelectedImage(null)}>
                    <div className="lightbox-content">
                        <img src={selectedImage} alt="Enlarged memory" />
                        <button className="lightbox-close">X</button>
                    </div>
                </div>
            )}
        </section>
    );
};

export default AboutSection;
