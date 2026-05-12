import { useEffect, useRef } from 'react';
import Lenis from 'lenis';
import { GrainOverlay } from './components/GrainOverlay';
import { CustomCursor } from './components/CustomCursor';
import { Hero } from './sections/Hero';
import { Shop } from './sections/Shop';
import { About } from './sections/About';
import { CollectionBanner } from './sections/CollectionBanner';
import { Contact } from './sections/Contact';
import { Footer } from './sections/Footer';

function App() {
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });
    lenisRef.current = lenis;

    // Integrate with Framer Motion's useScroll
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div className="relative">
      <GrainOverlay />
      <CustomCursor />

      <main>
        <Hero />
        <Shop />
        <About />
        <CollectionBanner />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;
