import Hero from './components/Hero';
import { Repertoire } from './components/ContentSections';
import AboutSection from './components/PhotoAlbum';
import Band from './components/Band';
import VideoSection from './components/VideoSection';
import Footer from './components/Footer';
import ScrollReveal from './components/ScrollReveal';
import BackgroundEffects from './components/BackgroundEffects';
import CanvasCursor from './components/CanvasCursor';
import './index.css';

function App() {
  return (
    <div className="app-container">
      <CanvasCursor />
      <BackgroundEffects />
      <div className="grain-overlay"></div>
      <header>
        <Hero />
      </header>
      <main>
        <ScrollReveal>
          <AboutSection />
        </ScrollReveal>
        <ScrollReveal>
          <Band />
        </ScrollReveal>
        <ScrollReveal>
          <VideoSection />
        </ScrollReveal>
        <ScrollReveal>
          <Repertoire />
        </ScrollReveal>
      </main>
      <ScrollReveal>
        <Footer />
      </ScrollReveal>
    </div>
  );
}

export default App;
