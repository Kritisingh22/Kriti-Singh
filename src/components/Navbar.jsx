import { PERSONAL } from '../data/portfolio';

const NAV_LINKS = ['About','Skills','Projects','Certificates','Contact'];

export default function Navbar({ light, onToggleLight }) {
  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  const openWhatsApp = () => {
    const message = encodeURIComponent(`Interested in Working Together? 🚀

Have a project, opportunity, or idea in mind? Feel free to reach out! I'm open to internships, entry-level roles, and collaborations where I can contribute, learn, and grow as a developer.

Let's connect and build something great together.`);
    window.open(`https://wa.me/${PERSONAL.whatsapp}?text=${message}`, '_blank', 'noreferrer');
  };

  return (
    <nav className="ks-nav">
      <div className="ks-logo-text">KS</div>

      <ul className="ks-nav-links">
        {NAV_LINKS.map((l) => (
          <li key={l}>
            <a href={`#${l.toLowerCase()}`} onClick={(e) => { e.preventDefault(); scrollTo(l.toLowerCase()); }}>
              {l}
            </a>
          </li>
        ))}
      </ul>

      <div className="ks-nav-right">
        <button className="ks-toggle" onClick={onToggleLight} title="Toggle theme">
          {light ? '🌙' : '☀️'}
        </button>
        <button className="ks-cta-nav" onClick={openWhatsApp}>
          Hire Me
        </button>
      </div>
    </nav>
  );
}
