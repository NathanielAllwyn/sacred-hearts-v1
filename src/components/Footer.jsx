import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer>
      <div className="fi">
        <div>
          <Link className="logo" to="/" style={{ display: 'block' }}>
            SACRED HEART COLLEGE
            <small>SHEMBAGANUR · KODAIKANAL</small>
          </Link>
          <p>
            Eco Sanctuary, Spirituality and Heritage Centre. Shembaganur,
            Kodaikanal 624 101, Tamil Nadu.
          </p>
        </div>

        <div>
          <h5>Our units</h5>
          <Link to="/museum">
            1. The Museum of Natural Science History of Palni Hills
          </Link>
          <Link to="/archives">2. Jesuit Madurai Province Archives</Link>
          <Link to="/anglade">3. Anglade Institute of Natural History</Link>
          <Link to="/schools">4.1 Shembaganur Social Service Schools</Link>
          <Link to="/peak">4.2 PEAK</Link>
          <Link to="/grihini">4.3 Grihini Community College</Link>
          <Link to="/tertianship">5.1 Tertianship</Link>
          <Link to="/listen">
            5.2 Loyola Institute of Spiritual Training [LISTEN]
          </Link>
        </div>

        <div>
          <h5>Connect</h5>
          <a
            href="https://mdusj.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Jesuit Madurai Province
          </a>
          <a
            href="https://archivesj.in/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Jesuit Madurai Province Archives
          </a>
          <a href="mailto:min.shc@mdusj.org">min.shc@mdusj.org</a>
        </div>
      </div>

      <div className="fb">
        <span>© 2026 Sacred Heart College, Shembaganur</span>
        <span>Eco Sanctuary · Spirituality · Heritage</span>
      </div>
    </footer>
  );
}