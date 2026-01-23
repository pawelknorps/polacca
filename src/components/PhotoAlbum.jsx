import { useState } from 'react';
import './PhotoAlbum.css';

// Selection of photos for the album
const albumPhotos = [
    '/assets/sylwester/IMG_6668.jpeg',
    '/assets/sylwester/IMG_6689.jpeg',
    '/assets/sylwester/IMG_6718.jpeg',
    '/assets/sylwester/IMG_6748.jpeg',
    '/assets/sylwester/IMG_6768.jpeg',
    '/assets/sylwester/IMG_6780.jpeg',
];

const PhotoAlbum = () => {
    const [selectedImage, setSelectedImage] = useState(null);

    return (
        <section className="album-section">
            <h2 className="section-title" style={{ textShadow: '3px 3px 0 #ff007f', transform: 'rotate(-2deg)' }}>Wspomnienia z Parkietu</h2>
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

export default PhotoAlbum;
