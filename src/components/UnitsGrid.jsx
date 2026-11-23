import { Link } from 'react-router-dom';
import { G, N, U } from '../data';

export default function UnitsGrid() {
  return (
    <section className="sec" id="units">
      <div className="eyebrow">Our units</div>
      <h2 className="rv">Eight units, one mission</h2>
      {G.map(([groupTitle, keys], gIdx) => (
        <div className="grp" key={gIdx}>
          {groupTitle && <h3 className="rv">{groupTitle}</h3>}
          <div className="cards">
            {keys.map((k, i) => (
              <Link
                key={k}
                className="glass card rv"
                to={`/${k}`}
                style={{ '--d': `${i * 0.1}s` }}
              >
                <span className="nb">{N[k]}</span>
                <h4>{U[k].t}</h4>
                <p>{U[k].d}</p>
                <u>VIEW PAGE</u>
              </Link>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}