import './Marquee.css';

const Marquee = ({ text, direction = 'left', speed = 20 }) => {
    return (
        <div className="marquee-container">
            <div className="marquee-content" style={{ animationDuration: `${speed}s`, animationDirection: direction === 'right' ? 'reverse' : 'normal' }}>
                {text} &nbsp; ★ &nbsp; {text} &nbsp; ★ &nbsp; {text} &nbsp; ★ &nbsp; {text}
            </div>
            <div className="marquee-content" aria-hidden="true" style={{ animationDuration: `${speed}s`, animationDirection: direction === 'right' ? 'reverse' : 'normal' }}>
                {text} &nbsp; ★ &nbsp; {text} &nbsp; ★ &nbsp; {text} &nbsp; ★ &nbsp; {text}
            </div>
        </div>
    );
};

export default Marquee;
