import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { G, N, U } from '../data';

export default function Navbar({ isUnitPage, onScrollTo }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [ddOpen, setDdOpen] = useState(false);
  const navRef = useRef(null);
  const ddRef = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const onDocClick = (e) => {
      if (ddRef.current && !ddRef.current.contains(e.target)) {
        setDdOpen(false);
      }
      if (navRef.current && !navRef.current.contains(e.target)) {
        setMobileOpen(false);
      }
    };
    document.addEventListener('click', onDocClick);
    return () => document.removeEventListener('click', onDocClick);
  }, []);

  const closeMenus = () => {
    setDdOpen(false);
    setMobileOpen(false);
  };

  const handleSectionClick = (e, id) => {
    e.preventDefault();
    closeMenus();
    onScrollTo(id);
  };

  const toggleTheme = () => {
    const root = document.documentElement;
    const isDark = root.getAttribute('data-theme') === 'dark';
    root.setAttribute('data-theme', isDark ? 'light' : 'dark');
  };

  const navClasses = [
    scrolled ? 'sc' : '',
    mobileOpen ? 'mo' : '',
    isUnitPage ? 'pg' : '',
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <nav id="nv" ref={navRef} className={navClasses}>
      <div className="ni">
        <Link className="logo" to="/" onClick={closeMenus}>
          SACRED HEART COLLEGE
          <small>SHEMBAGANUR · KODAIKANAL</small>
        </Link>

        <div className="links" id="lk">
          <Link to="/" onClick={closeMenus}>
            Home
          </Link>
          <a href="#about" onClick={(e) => handleSectionClick(e, 'about')}>
            Heritage
          </a>
          <a href="#eco" onClick={(e) => handleSectionClick(e, 'eco')}>
            Eco Sanctuary
          </a>

          <div className={`dd${ddOpen ? ' ddo' : ''}`} ref={ddRef}>
            <button
              className="ddt"
              id="ddt"
              type="button"
              aria-haspopup="true"
              aria-expanded={ddOpen}
              onClick={() => setDdOpen((prev) => !prev)}
            >
              Units <i>▾</i>
            </button>
            <div className="ddm" id="ddm">
              <div className="ddi">
                <a href="#units" onClick={(e) => handleSectionClick(e, 'units')}>
                  <b>→</b>All units
                </a>
                {G.map(([groupTitle, keys], idx) => (
                  <div key={idx}>
                    {groupTitle && <h6>{groupTitle}</h6>}
                    {keys.map((k) => (
                      <Link
                        key={k}
                        to={`/${k}`}
                        className={groupTitle ? 'sub' : ''}
                        onClick={closeMenus}
                      >
                        <b>{N[k]}</b>
                        {U[k].t}
                      </Link>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <a
            href="#contact"
            className="mc"
            onClick={(e) => handleSectionClick(e, 'contact')}
          >
            Contact
          </a>
        </div>

        <div className="nr">
          <a
            href="#contact"
            className="gold"
            onClick={(e) => handleSectionClick(e, 'contact')}
          >
            Contact us
          </a>
          <button
            className="tg"
            id="th"
            type="button"
            aria-label="Toggle theme"
            onClick={toggleTheme}
          >
            ◐
          </button>
          <button
            className="burger"
            id="bg"
            type="button"
            aria-label="Menu"
            onClick={() => setMobileOpen((prev) => !prev)}
          >
            <i />
            <i />
          </button>
        </div>
      </div>
    </nav>
  );
}