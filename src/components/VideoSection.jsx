import { useState, useRef, useEffect } from 'react';
import './VideoSection.css';

const videos = [
    {
        id: 1,
        title: "CH 1 - GŁÓWNY",
        sources: [
            { src: `${import.meta.env.BASE_URL}assets/optimized_videos/video1.webm`, type: 'video/webm' }
        ]
    },
    {
        id: 2,
        title: "CH 2 - SYLWESTER",
        sources: [
            { src: `${import.meta.env.BASE_URL}assets/optimized_videos/video2.webm`, type: 'video/webm' }
        ]
    },
    {
        id: 3,
        title: "CH 3 - MASHUP",
        sources: [
            { src: `${import.meta.env.BASE_URL}assets/optimized_videos/video3.webm`, type: 'video/webm' }
        ]
    },
    {
        id: 4,
        title: "CH 4 - KWIATY",
        sources: [
            { src: `${import.meta.env.BASE_URL}assets/optimized_videos/video4.webm`, type: 'video/webm' }
        ]
    }
];

const VideoSection = () => {
    const [isOn, setIsOn] = useState(true);
    const [currentChannel, setCurrentChannel] = useState(0);
    const [isStatic, setIsStatic] = useState(false);
    const [showOSD, setShowOSD] = useState(true);
    const [demoMode, setDemoMode] = useState(true);
    const videoRef = useRef(null);

    const switchChannel = (manual = false) => {
        if (!isOn) return;
        if (manual) setDemoMode(false);
        
        setIsStatic(true);
        setShowOSD(true);
        
        setCurrentChannel((prev) => (prev + 1) % videos.length);
        
        setTimeout(() => {
            setIsStatic(false);
            if (videoRef.current) {
                videoRef.current.load();
                videoRef.current.play().catch(e => console.log("Autoplay prevented", e));
            }
        }, 500);
        
        setTimeout(() => {
            setShowOSD(false);
        }, 3000);
    };

    const togglePower = () => {
        setIsOn(!isOn);
        if (!isOn) {
            setIsStatic(true);
            setShowOSD(true);
            setTimeout(() => {
                setIsStatic(false);
                if (videoRef.current) {
                    videoRef.current.play().catch(() => {});
                }
            }, 600);
            setTimeout(() => setShowOSD(false), 3000);
        } else {
            if (videoRef.current) videoRef.current.pause();
        }
    };

    useEffect(() => {
        let interval;
        if (isOn && demoMode && !isStatic) {
            interval = setInterval(() => {
                switchChannel(false);
            }, 10000);
        }
        return () => clearInterval(interval);
    }, [isOn, demoMode, isStatic]);

    useEffect(() => {
        const timer = setTimeout(() => setShowOSD(false), 3000);
        return () => clearTimeout(timer);
    }, []);

    return (
        <section className="video-section" id="video">
            <h2 className="section-title" style={{ marginBottom: '2rem' }}>Taśmy Prawdy</h2>

            <div className="tv-set">
                <div className="tv-screen-container">
                    <div className="tv-screen" style={{ backgroundColor: isOn ? '#111' : '#050505' }}>
                        {isOn ? (
                            <>
                                {isStatic && <div className="tv-static-intense"></div>}
                                
                                <div className={`tv-osd ${showOSD && !isStatic ? '' : 'hidden'}`}>
                                    {videos[currentChannel].title}
                                </div>

                                <video
                                    ref={videoRef}
                                    className="tv-video"
                                    controls
                                    loop
                                    playsInline
                                    preload="auto"
                                    onPlay={() => { if (!demoMode && videoRef.current) videoRef.current.muted = false; }}
                                    onClick={() => setDemoMode(false)}
                                    muted={demoMode}
                                >
                                    {videos[currentChannel].sources.map((s, idx) => (
                                        <source key={idx} src={s.src} type={s.type} />
                                    ))}
                                </video>
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
                        <div className="knob" onClick={() => switchChannel(true)} title="Zmień Kanał"></div>
                    </div>
                </div>
            </div>
            
            <p style={{ marginTop: '1rem', color: '#888', fontStyle: 'italic', fontSize: '0.9rem' }}>
                * Kliknij prawe pokrętło, aby zmienić kanał. Wideo odtwarza się w pętli.
            </p>
        </section>
    );
};

export default VideoSection;
