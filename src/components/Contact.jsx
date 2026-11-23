import { AD, MAP } from '../data';

export default function Contact({ address, isUnit = false }) {
  return (
    <>
      <div className="eyebrow">Get in touch</div>
      <h2 className="rv">
        {isUnit ? 'Contact details' : 'Visit us on the Palni Hills'}
      </h2>
      <div className="cg">
        <div className="glass cc rv">
          <h4>Address</h4>
          <p>{address || `${AD}, Tamil Nadu, India`}</p>
          <a className="cta" href="mailto:min.shc@mdusj.org">
            Write to us
          </a>
        </div>
        <div className="glass cc rv" style={{ '--d': '.1s' }}>
          <h4>Email and phone</h4>
          <p>
            <a href="mailto:min.shc@mdusj.org">min.shc@mdusj.org</a>
            <br />
            +91 (number to be added)
          </p>
        </div>
        <div className="glass cc rv" style={{ '--d': '.2s' }}>
          <h4>Map and QR code</h4>
          <p>To be added. Until then, find us on the map.</p>
          <a
            className="cta ghost"
            href={MAP}
            target="_blank"
            rel="noopener noreferrer"
          >
            Open in Maps
          </a>
        </div>
      </div>
    </>
  );
}