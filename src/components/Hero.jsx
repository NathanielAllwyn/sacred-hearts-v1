import { useEffect, useRef } from 'react';
import { IMG } from '../data';

export default function Hero({ onScrollTo }) {
  const bigRef = useRef(null);

  useEffect(() => {
    const mq = window.matchMedia('(max-width:1024px)');
    let mx = 0;
    let rafId = 0;

    const updateParallax = () => {
      rafId = 0;
      if (!bigRef.current) return;
      bigRef.current.style.transform = mq.matches
        ? ''
        : `translate3d(${(-22 * mx).toFixed(1)}px,${(
            Math.min(window.scrollY, 900) * 0.25
          ).toFixed(1)}px,0)`;
    };

    const schedule = () => {
      if (!rafId) {
        rafId = requestAnimationFrame(updateParallax);
      }
    };

    const onMouseMove = (e) => {
      mx = e.clientX / window.innerWidth - 0.5;
      schedule();
    };

    document.addEventListener('mousemove', onMouseMove);
    window.addEventListener('scroll', schedule, { passive: true });
    window.addEventListener('resize', schedule);
    schedule();

    return () => {
      document.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('scroll', schedule);
      window.removeEventListener('resize', schedule);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <header className="hv">
      <div className="stage">
        <div className="big" ref={bigRef} aria-hidden="true">
          SACRED
        </div>
        <img
          className="bld"
          alt="The Museum at Sacred Heart College, Shembaganur"
          src={IMG}
        />
      </div>
      <div className="hl">
        <span>Welcome to</span>
        <h1>Sacred Heart College</h1>
        <p>Eco Sanctuary, Spirituality and Heritage Centre</p>
      </div>
      <a
        className="tour"
        href="#news"
        onClick={(e) => {
          e.preventDefault();
          onScrollTo('news');
        }}
      >
        <i>▶</i>Explore the campus
      </a>
    </header>
  );
}