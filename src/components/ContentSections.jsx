import './About.css';

import './About.css';


export const Repertoire = () => (
    <section className="repertoire-section">
        <h2 className="section-title">Gramy wspomnienia</h2>
        <p className="repertoire-subtitle">Nasza setlista to starannie wyselekcjonowane perły polskiej muzyki rozrywkowej.</p>

        <div className="repertoire-list">
            <div className="setlist-column">
                <h4>Perły lat 90. & Energia lat 00.</h4>
                <ul>
                    <li>07 Zgłoś się</li>
                    <li>Opowiadaj</li>
                    <li>Historia jednej znajomości</li>
                    <li>Goniąc kormorany</li>
                    <li>Chodź pomaluj mój świat</li>
                    <li>Dmuchawce latawce wiatr</li>
                    <li>Już nie ma dzikich plaż + Careless whisper</li>
                    <li>Nie liczę godzin i lat + I just called</li>
                    <li>Bajo bongo + Lambada</li>
                </ul>
            </div>
            <div className="setlist-column">
                <h4>Dancing Standard</h4>
                <ul>
                    <li>Nasze rendez vous</li>
                    <li>Papierowy księżyc + Moonlight Shadow</li>
                    <li>Daj mi tę noc</li>
                    <li>Nie zadzieraj nosa</li>
                    <li>Wszystko mi mówi + La Bamba</li>
                    <li>Płoną góry, płoną lasy</li>
                    <li>Z poradnika młodego zielarza</li>
                    <li>Kwiaty we włosach + Baranek</li>
                    <li>Pamelo żegnaj</li>
                    <li>Wszystko czego dziś chcę</li>
                    <li>Ostatni raz zatańczysz</li>
                </ul>
            </div>
        </div>

        <div className="repertoire-grid">
            <div className="vibe-card">
                <h3>Perły lat 90.</h3>
                <p>Klasyka dancingu, elegancja i pierwsze polskie hity nowoczesnej ery.</p>
            </div>
            <div className="vibe-card">
                <h3>Energia lat 00.</h3>
                <p>Radiowe blockbustery, które definiowały polskie listy przebojów po 2000 roku.</p>
            </div>
            <div className="vibe-card">
                <h3>Dancing Standard</h3>
                <p>Utwory, bez których żadna szanująca się zabawa nie może się odbyć – od Krawczyka po Kayah.</p>
            </div>
        </div>
    </section>
);

