import './Band.css';

const members = [
    { name: 'Michał Fetler', role: 'wokal, saksofony', desc: 'Niestrudzony lider i mistrz sekcji dętej.', img: '/assets/sylwester/IMG_6743.jpeg' },
    { name: 'Malwina Paszek', role: 'wokal, pianino, akordeon', desc: 'Głos pełen emocji i wirtuozeria klawiszowa.', img: '/assets/sylwester/IMG_6774.jpeg' },
    { name: 'Paulina Frąckowiak', role: 'wokal, gitara basowa', desc: 'Fundament rytmu i kobieca energia.', img: '/assets/sylwester/IMG_6761.jpeg' },
    { name: 'Paweł Knorps', role: 'gitara elektryczna, chórki', desc: 'Stylowe riffy lat 90. i taneczne brzmienia.', img: '/assets/sylwester/IMG_6755.jpeg' },
    { name: 'Daniel Karpiński', role: 'perkusja', desc: 'Serce zespołu, które dba o puls parkietu.', img: '/assets/sylwester/IMG_6708.jpeg' }
];

const Band = () => {
    return (
        <section className="band-section">
            <h2 className="section-title">Poznaj Skład Ala Polacca</h2>
            <div className="members-grid">
                {members.map((member, index) => (
                    <div key={index} className="member-card">
                        <div className="member-image-wrapper">
                            <img src={member.img} alt={member.name} className="member-image" loading="lazy" />
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
