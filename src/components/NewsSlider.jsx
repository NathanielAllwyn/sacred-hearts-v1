import { useEffect, useRef, useState } from 'react';
import { SL } from '../data';

export default function NewsSlider() {
  const [active, setActive] = useState(0);
  const timerRef = useRef(null);

  useEffect(() => {
    timerRef.current = setInterval(() => {
      setActive((prev) => (prev + 1) % SL.length);
    }, 5200);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, []);

  const handleDotClick = (index) => {
    setActive(index);
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
  };

  return (
    <section
      className="sec"
      id="news"
      style={{ paddingTop: '70px', paddingBottom: 0 }}
    >
      <div className="eyebrow">News and message</div>
      <h2 className="rv">Voices from the Palni Hills</h2>
      <div className="glass slider rv" id="sl">
        {SL.map(([label, text], i) => (
          <div key={label} className={`slide${i === active ? ' on' : ''}`}>
            <em>{label}</em>
            <p>{text}</p>
          </div>
        ))}
        <div className="dots">
          {SL.map(([label], i) => (
            <button
              key={label}
              type="button"
              className={i === active ? 'on' : ''}
              aria-label={`Slide ${i + 1}`}
              onClick={() => handleDotClick(i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}