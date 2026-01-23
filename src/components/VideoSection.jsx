import { useState, useRef, useEffect } from 'react';
import './VideoSection.css';

const VideoSection = () => {
    const [isOn, setIsOn] = useState(true);
    const videoRef = useRef(null);

    const togglePower = () => {
        setIsOn(!isOn);
    };

    useEffect(() => {
        const handleHashChange = () => {
            if (window.location.hash === '#video' && videoRef.current) {
                videoRef.current.play().catch(error => {
                    console.log("Autoplay prevented:", error);
                });
            }
        };

        // Check initial hash
        if (window.location.hash === '#video') {
            handleHashChange();
        }

        // Listen for hash changes (clicking the button)
        window.addEventListener('hashchange', handleHashChange);

        return () => {
            window.removeEventListener('hashchange', handleHashChange);
        };
    }, []);

    return (
        <section className="video-section" id="video">
            <h2 className="section-title" style={{ marginBottom: '2rem' }}>Taśmy Prawdy</h2>

            <div className="tv-set">
                <div className="tv-screen-container">
                    <div className="tv-screen" style={{ backgroundColor: isOn ? '#111' : '#050505' }}>
                        {isOn ? (
                            <>
                                <video
                                    ref={videoRef}
                                    className="tv-video"
                                    src={`${import.meta.env.BASE_URL}assets/9ce7488c-9f40-4a20-917b-4fd1439f5339.mp4`}
                                    controls
                                    loop
                                    playsInline
                                />
                                <div className="scanlines"></div>
                            </>
                        ) : (
                            <div className="reflection"></div>
                        )}
                    </div>
                </div>

                <div className="tv-controls">
                    <div className="brand-badge">POLACCA 2000</div>
                    <div className="knobs">
                        <div className="knob" onClick={togglePower} title="Power / Volume"></div>
                        <div className="knob" title="Channel"></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default VideoSection;
