import { Link, useParams } from 'react-router-dom';
import { G, IMG2, N, ORD, U } from '../data';
import Contact from './Contact';
import Hero from './Hero';
import Stats from './Stats';
import NewsSlider from './NewsSlider';
import About from './About';
import EcoSanctuary from './EcoSanctuary';
import UnitsGrid from './UnitsGrid';

export default function UnitPage({ onScrollTo }) {
  const { unit: key } = useParams();
  const u = U[key];

  // Unknown routes show home
  if (!u) {
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

  const idx = ORD.indexOf(key);
  const prevKey = ORD[(idx + ORD.length - 1) % ORD.length];
  const nextKey = ORD[(idx + 1) % ORD.length];
  const prevUnit = U[prevKey];
  const nextUnit = U[nextKey];
  const groupTitle = G.find((g) => g[1].includes(key))?.[0] || 'Units';

  return (
    <>
      <div className="uhb">
        <div className="wrap uh">
          <Link to="/">← Home</Link>
          <div className="eyebrow rv in" style={{ margin: '18px 0 10px' }}>
            {N[key]} · {groupTitle}
          </div>
          <h1 className="rv in" style={{ '--d': '.1s' }}>
            {u.t}
          </h1>
        </div>
      </div>

      <div className="wrap" style={{ marginTop: '34px' }}>
        <div className="glass blk rv">
          <h3>Introduction</h3>
          {u.p.map((para, i) =>
            para.startsWith('Q:') ? (
              <p key={i} className="quote">
                {para.slice(2)}
              </p>
            ) : (
              <p key={i}>{para}</p>
            )
          )}
        </div>

        <div className="glass blk rv">
          <h3>Director’s list</h3>
          {u.dir ? (
            <ol
              style={{
                color: 'var(--mut)',
                margin: 0,
                paddingLeft: '22px',
              }}
            >
              {u.dir.map((d) => (
                <li key={d}>{d}</li>
              ))}
            </ol>
          ) : (
            <p style={{ margin: 0 }}>
              The list of directors will be added here.
            </p>
          )}
        </div>

        <div className="glass blk rv">
          <h3>Gallery</h3>
          <div className="gal">
            {[0, 1, 2, 3].map((n) => (
              <figure
                key={n}
                style={{
                  '--h': 210 + n * 28,
                  ...(key === 'museum' && n === 0
                    ? { background: `url(${IMG2}) center/cover` }
                    : {}),
                }}
              >
                <figcaption>
                  {u.g ? u.g[n] : 'Photograph to be added'}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>

        <div className="dkb">
          <Contact address={u.ad} isUnit />
        </div>

        <div className="nxt">
          <Link
            className="glass card"
            to={`/${prevKey}`}
            style={{ padding: '18px 26px' }}
          >
            <p>Previous</p>
            <h4 style={{ margin: 0, fontSize: '22px' }}>{prevUnit.t}</h4>
          </Link>
          <Link
            className="glass card"
            to={`/${nextKey}`}
            style={{ padding: '18px 26px', textAlign: 'right' }}
          >
            <p>Next</p>
            <h4 style={{ margin: 0, fontSize: '22px' }}>{nextUnit.t}</h4>
          </Link>
        </div>
      </div>
    </>
  );
}