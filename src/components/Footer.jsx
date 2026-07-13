import { useState } from 'react';
import './Footer.css';

const Footer = () => {
    const [status, setStatus] = useState('idle'); // idle, submitting, success

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('submitting');
        
        const form = e.target;
        const formData = new FormData(form);

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                body: formData
            });

            if (response.ok) {
                setStatus('success');
                form.reset();
            } else {
                console.error('Failed to send email');
                setStatus('idle');
                alert('Wystąpił błąd podczas wysyłania wiadomości.');
            }
        } catch (error) {
            console.error('Network error:', error);
            setStatus('idle');
            alert('Wystąpił błąd połączenia.');
        }
    };

    return (
        <footer className="footer" id="contact">
            <h2 className="section-title blink-cursor">&gt; Zróbmy razem dancing!_</h2>

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
                            <p>&gt; Wiadomość wysłana pomyślnie.</p>
                            <p>&gt; Oczekiwanie na odpowiedź serwera...</p>
                            <p style={{ color: '#00ff00' }}>[OK] Do usłyszenia!</p>
                            <button className="btn-reset" onClick={() => setStatus('idle')}>[Wyślij nową]</button>
                        </div>
                    ) : (
                        <form className="contact-form" onSubmit={handleSubmit} data-netlify="true" name="contact">
                            <input type="hidden" name="form-name" value="contact" />

                            <div className="input-group">
                                <label>&gt; Obywatel / Firma:</label>
                                <input type="text" name="name" placeholder="Jan Kowalski..." className="terminal-input" required />
                            </div>

                            <div className="input-group">
                                <label>&gt; Adres e-mail:</label>
                                <input type="email" name="email" placeholder="jan.kowalski@example.com..." className="terminal-input" required />
                            </div>

                            <div className="input-group">
                                <label>&gt; Treść depeszy:</label>
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
