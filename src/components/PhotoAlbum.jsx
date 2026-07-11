import { useState } from 'react';
import './PhotoAlbum.css';
import { Picture } from './Picture';

import img1Avif from '../assets/zdjecia/IMG_6730.jpeg?w=400;800;1200&format=avif&as=srcset';
import img1Webp from '../assets/zdjecia/IMG_6730.jpeg?w=400;800;1200&format=webp&as=srcset';
import img1Fallback from '../assets/zdjecia/IMG_6730.jpeg?w=1200';

import img2Avif from '../assets/zdjecia/IMG_6736.jpeg?w=400;800;1200&format=avif&as=srcset';
import img2Webp from '../assets/zdjecia/IMG_6736.jpeg?w=400;800;1200&format=webp&as=srcset';
import img2Fallback from '../assets/zdjecia/IMG_6736.jpeg?w=1200';

import img3Avif from '../assets/zdjecia/IMG_6752.jpeg?w=400;800;1200&format=avif&as=srcset';
import img3Webp from '../assets/zdjecia/IMG_6752.jpeg?w=400;800;1200&format=webp&as=srcset';
import img3Fallback from '../assets/zdjecia/IMG_6752.jpeg?w=1200';

import img4Avif from '../assets/zdjecia/IMG_0497.jpeg?w=400;800;1200&format=avif&as=srcset';
import img4Webp from '../assets/zdjecia/IMG_0497.jpeg?w=400;800;1200&format=webp&as=srcset';
import img4Fallback from '../assets/zdjecia/IMG_0497.jpeg?w=1200';

import img5Avif from '../assets/zdjecia/IMG_6758.jpeg?w=400;800;1200&format=avif&as=srcset';
import img5Webp from '../assets/zdjecia/IMG_6758.jpeg?w=400;800;1200&format=webp&as=srcset';
import img5Fallback from '../assets/zdjecia/IMG_6758.jpeg?w=1200';

import img6Avif from '../assets/zdjecia/IMG_6676.jpeg?w=400;800;1200&format=avif&as=srcset';
import img6Webp from '../assets/zdjecia/IMG_6676.jpeg?w=400;800;1200&format=webp&as=srcset';
import img6Fallback from '../assets/zdjecia/IMG_6676.jpeg?w=1200';

const albumPhotos = [
    { avif: img1Avif, webp: img1Webp, fallback: img1Fallback },
    { avif: img2Avif, webp: img2Webp, fallback: img2Fallback },
    { avif: img3Avif, webp: img3Webp, fallback: img3Fallback },
    { avif: img4Avif, webp: img4Webp, fallback: img4Fallback },
    { avif: img5Avif, webp: img5Webp, fallback: img5Fallback },
    { avif: img6Avif, webp: img6Webp, fallback: img6Fallback },
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
                {albumPhotos.map((photo, index) => (
                    <div
                        key={index}
                        className={`photo-card rotate-${index % 3}`}
                        onClick={() => setSelectedImage(photo)}
                    >
                        <div className="photo-inner">
                            <Picture avif={photo.avif} webp={photo.webp} fallback={photo.fallback} alt={`Zdjęcie pamiątkowe ${index + 1}`} lazy={true} />
                        </div>
                        <div className="tape"></div>
                    </div>
                ))}
            </div>

            {selectedImage && (
                <div className="lightbox-overlay" onClick={() => setSelectedImage(null)}>
                    <div className="lightbox-content">
                        <Picture avif={selectedImage.avif} webp={selectedImage.webp} fallback={selectedImage.fallback} alt="Powiększone zdjęcie" priority={true} lazy={false} />
                        <button className="lightbox-close">X</button>
                    </div>
                </div>
            )}
        </section>
    );
};

export default AboutSection;
