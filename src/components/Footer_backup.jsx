import { useState } from 'react';
import './Footer.css';

const Footer = () => {
    const [status, setStatus] = useState('idle'); // idle, submitting, success

    const handleSubmit = (e) => {
        e.preventDefault();
        setStatus('submitting');
        // Simulate network request
        setTimeout(() => {
            setStatus('success');
        }, 1500);
    };

    return (
        <footer className="footer">
            <h2 className="section-title blink-cursor">> Zróbmy razem dancing!_</h2>

            <div className="terminal-window">
                <div className="terminal-header">
                    <span className="dot red"></span>
                    <span className="dot yellow"></span>
                    <span className="dot green"></span>
                    <span className="terminal-title">contact.exe</span>
                </div>

                <div className="footer-content">
                    {status === 'success' ? (
                        <div className="success-message">
                            <p>> Wiadomość wysłana pomyślnie.</p>
                            <p>> Oczekiwanie na odpowiedź serwera...</p>
                            <p style={{ color: '#00ff00' }}>[OK] Do usłyszenia!</p>
                            <button className="btn-reset" onClick={() => setStatus('idle')}>[Wyślij nową]</button>
                        </div>
                    ) : (
                        <form className="contact-form" onSubmit={handleSubmit} data-netlify="true" name="contact">
                            <input type="hidden" name="form-name" value="contact" />

                            <div className="input-group">
                                <label>> Obywatel / Firma:</label>
                                <input type="text" name="name" placeholder="Jan Kowalski..." className="terminal-input" required />
                            </div>

                            <div className="input-group">
                                <label>> Data i Cel misji:</label>
                                <input type="text" name="date" placeholder="DD.MM.YYYY, Warszawa..." className="terminal-input" required />
                            </div>

                            <div className="input-group">
                                <label>> Treść depeszy:</label>
                                <textarea name="message" placeholder='"Potrzebujemy saksofonu!"' className="terminal-input" rows="4" required></textarea>
                            </div>

                            <button type="submit" className="btn-terminal" disabled={status === 'submitting'}>
                                {status === 'submitting' ? 'WYSYŁANIE...' : '[ ENTER ] WYŚLIJ'}
                            </button>
                        </form>
                    )}
                </div>
            </div>

            <div className="copyright">
                © 2026 Ala Polacca Systems. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;
