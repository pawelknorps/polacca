import './Band.css';
import { Picture } from './Picture';

import img1Avif from '../assets/ZDJĘCIA/IMG_6758.jpeg?w=400;800;1200&format=avif&as=srcset';
import img1Webp from '../assets/ZDJĘCIA/IMG_6758.jpeg?w=400;800;1200&format=webp&as=srcset';
import img1Fallback from '../assets/ZDJĘCIA/IMG_6758.jpeg?w=800';

import img2Avif from '../assets/ZDJĘCIA/IMG_0001.jpeg?w=400;800;1200&format=avif&as=srcset';
import img2Webp from '../assets/ZDJĘCIA/IMG_0001.jpeg?w=400;800;1200&format=webp&as=srcset';
import img2Fallback from '../assets/ZDJĘCIA/IMG_0001.jpeg?w=800';

import img3Avif from '../assets/ZDJĘCIA/IMG_6696.jpeg?w=400;800;1200&format=avif&as=srcset';
import img3Webp from '../assets/ZDJĘCIA/IMG_6696.jpeg?w=400;800;1200&format=webp&as=srcset';
import img3Fallback from '../assets/ZDJĘCIA/IMG_6696.jpeg?w=800';

import img4Avif from '../assets/ZDJĘCIA/IMG_6753.jpeg?w=400;800;1200&format=avif&as=srcset';
import img4Webp from '../assets/ZDJĘCIA/IMG_6753.jpeg?w=400;800;1200&format=webp&as=srcset';
import img4Fallback from '../assets/ZDJĘCIA/IMG_6753.jpeg?w=800';

import img5Avif from '../assets/ZDJĘCIA/IMG_0497.jpeg?w=400;800;1200&format=avif&as=srcset';
import img5Webp from '../assets/ZDJĘCIA/IMG_0497.jpeg?w=400;800;1200&format=webp&as=srcset';
import img5Fallback from '../assets/ZDJĘCIA/IMG_0497.jpeg?w=800';

const members = [
    { name: 'Michał Fetler', role: 'wokal, saksofony', desc: 'Niestrudzony lider i mistrz sekcji dętej.', avif: img1Avif, webp: img1Webp, fallback: img1Fallback },
    { name: 'Malwina Paszek', role: 'wokal, pianino, akordeon', desc: 'Głos pełen emocji i wirtuozeria klawiszowa.', avif: img2Avif, webp: img2Webp, fallback: img2Fallback },
    { name: 'Paulina Frąckowiak', role: 'wokal, gitara basowa', desc: 'Fundament rytmu i kobieca energia.', avif: img3Avif, webp: img3Webp, fallback: img3Fallback },
    { name: 'Paweł Knorps', role: 'gitara elektryczna, chórki', desc: 'Stylowe riffy lat 90. i taneczne brzmienia.', avif: img4Avif, webp: img4Webp, fallback: img4Fallback },
    { name: 'Staś Aleksandrowicz', role: 'perkusja', desc: 'Serce zespołu, które dba o puls parkietu.', avif: img5Avif, webp: img5Webp, fallback: img5Fallback }
];

const Band = () => {
    return (
        <section className="band-section">
            <h2 className="section-title">Poznaj Skład Ala Polacca</h2>
            <div className="members-grid">
                {members.map((member, index) => (
                    <div key={index} className="member-card">
                        <div className="member-image-wrapper">
                            <Picture avif={member.avif} webp={member.webp} fallback={member.fallback} alt={member.name} className="member-image" priority={false} lazy={true} />
                        </div>
                        <h3 className="member-name">{member.name}</h3>
                        <p className="member-role">{member.role}</p>
                        <p className="member-desc">{member.desc}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Band;
