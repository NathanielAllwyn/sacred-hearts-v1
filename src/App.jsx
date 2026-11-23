import { useEffect, useRef, useState, useCallback } from 'react';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import { U } from './data';
import { useReveal } from './hooks/useReveal';
import Loader from './components/Loader';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import NewsSlider from './components/NewsSlider';
import About from './components/About';
import EcoSanctuary from './components/EcoSanctuary';
import UnitsGrid from './components/UnitsGrid';
import Contact from './components/Contact';
import Footer from './components/Footer';
import UnitPage from './components/UnitPage';

function HomePage({ onScrollTo }) {
  return (
    <>
      <Hero onScrollTo={onScrollTo} />
      <Stats />
      <NewsSlider />
      <About />
      <EcoSanctuary />
      <UnitsGrid />
      <div className="dkw" id="contact">
        <section className="sec">
          <Contact />
        </section>
      </div>
    </>
  );
}

export default function App() {
  const location = useLocation();
  const navigate = useNavigate();
  const appRef = useRef(null);
  const pendingScrollRef = useRef(null);

  const [displayLocation, setDisplayLocation] = useState(location);
  const [transitioning, setTransitioning] = useState(false);

  const unitKey = displayLocation.pathname.replace(/^\//, '');
  const isUnitPage = Boolean(U[unitKey]);

  // Mark document ready after opening animations
  useEffect(() => {
    const timer = setTimeout(() => {
      document.documentElement.classList.add('rdy');
    }, 3800);
    return () => clearTimeout(timer);
  }, []);

  // Page-change fade/blur transition and instant scroll to top
  useEffect(() => {
    if (location.pathname === displayLocation.pathname) return;

    setTransitioning(true);
    const timer = setTimeout(() => {
      setDisplayLocation(location);
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
      requestAnimationFrame(() => {
        setTransitioning(false);
        if (pendingScrollRef.current) {
          const targetId = pendingScrollRef.current;
          pendingScrollRef.current = null;
          setTimeout(() => {
            const el = document.getElementById(targetId);
            if (el) el.scrollIntoView();
          }, 350);
        }
      });
    }, 380);

    return () => clearTimeout(timer);
  }, [location, displayLocation]);

  // Update document title
  useEffect(() => {
    document.title = isUnitPage
      ? `${U[unitKey].t} – Sacred Heart College`
      : 'Sacred Heart College – Eco Sanctuary, Spirituality and Heritage Centre';
  }, [isUnitPage, unitKey]);

  // Scroll-reveal observer on every rendered page
  useReveal(appRef, displayLocation.pathname);

  // Glass glow + card 3D tilt on mousemove
  useEffect(() => {
    const handleMouseMove = (e) => {
      const card = e.target.closest('.glass');
      if (!card) return;
      const r = card.getBoundingClientRect();
      card.style.setProperty('--mx', `${e.clientX - r.left}px`);
      card.style.setProperty('--my', `${e.clientY - r.top}px`);
      if (card.classList.contains('card')) {
        card.style.setProperty('--ry', `${((e.clientX - r.left) / r.width - 0.5) * 7}deg`);
        card.style.setProperty('--rx', `${(0.5 - (e.clientY - r.top) / r.height) * 7}deg`);
      }
    };

    const handleMouseOut = (e) => {
      const card = e.target.closest && e.target.closest('.card');
      if (card) {
        card.style.setProperty('--rx', '0deg');
        card.style.setProperty('--ry', '0deg');
      }
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseout', handleMouseOut);
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseout', handleMouseOut);
    };
  }, []);

  // Scroll to home section (navigate home first if on a unit page)
  const handleScrollTo = useCallback(
    (sectionId) => {
      const currentKey = location.pathname.replace(/^\//, '');
      if (U[currentKey]) {
        pendingScrollRef.current = sectionId;
        navigate('/');
      } else {
        const el = document.getElementById(sectionId);
        if (el) el.scrollIntoView();
      }
    },
    [location.pathname, navigate]
  );

  return (
    <>
      <Loader />
      <div className="blobs">
        <i />
        <i />
        <i />
      </div>
      <Navbar isUnitPage={isUnitPage} onScrollTo={handleScrollTo} />
      <main id="app" ref={appRef} className={transitioning ? 'out' : ''}>
        <Routes location={displayLocation}>
          <Route path="/" element={<HomePage onScrollTo={handleScrollTo} />} />
          <Route path="/:unit" element={<UnitPage onScrollTo={handleScrollTo} />} />
          <Route path="*" element={<HomePage onScrollTo={handleScrollTo} />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}