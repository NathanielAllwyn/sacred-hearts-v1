import { useEffect, useState } from 'react';

export default function Loader() {
  const [gone, setGone] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setGone(true), 1100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`cur${gone ? ' go' : ''}`} id="cur">
      <b>Sacred Heart College</b>
    </div>
  );
}