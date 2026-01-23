import Hero from './components/Hero';
import { About, Repertoire } from './components/ContentSections';
import PhotoAlbum from './components/PhotoAlbum';
import Band from './components/Band';
import VideoSection from './components/VideoSection';
import Footer from './components/Footer';
import ScrollReveal from './components/ScrollReveal';
import BackgroundEffects from './components/BackgroundEffects';
import './index.css';

function App() {
  return (
    <div className="app-container">
      <BackgroundEffects />
      <div className="grain-overlay"></div>
      <Hero />
      <ScrollReveal>
        <About />
      </ScrollReveal>
      <ScrollReveal>
        <PhotoAlbum />
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
      <ScrollReveal>
        <Footer />
      </ScrollReveal>
    </div>
  );
}

export default App;
