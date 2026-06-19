import { PERSONAL, SOCIALS } from '../data/portfolio';

export default function Contact() {
  const whatsappMessage = encodeURIComponent("Hi Kriti, I’d like to connect with you about a project opportunity.");
  const mailtoLink = `mailto:${PERSONAL.email}`;
  const whatsappLink = `https://wa.me/${PERSONAL.whatsapp}?text=${whatsappMessage}`;

  return (
    <section
      className="ks-section"
      id="contact"
      style={{ background: 'linear-gradient(180deg,var(--navy),var(--navy2))' }}
    >
      <div className="ks-section-label">Get In Touch</div>
      <h2 className="ks-section-title reveal">Let's <span>Connect</span></h2>

      <div className="ks-contact-grid">
        {/* Left — info */}
        <div className="reveal">
          <p className="ks-contact-tagline">"The best projects start with a great conversation."</p>
          <p className="ks-contact-desc">
            Whether you're looking for a developer intern, a collaborator for your next big idea, or
            just want to geek out about tech — my inbox is always open. I respond within 24 hours,
            promise! ✨
          </p>

          <div style={{ marginBottom: 28 }}>
            {[
              { icon: '📧', label: PERSONAL.email },
              { icon: '📍', label: PERSONAL.location },
              { icon: '🕐', label: `Available ${PERSONAL.availability}` },
            ].map(({ icon, label }) => (
              <div key={label} style={{ display: 'flex', gap: 12, alignItems: 'center', marginBottom: 14, fontFamily: 'Space Grotesk,sans-serif', fontSize: '0.85rem', color: 'var(--muted)' }}>
                <span style={{ fontSize: '1.1rem' }}>{icon}</span>{label}
              </div>
            ))}
          </div>

          <div className="ks-social-links">
            {SOCIALS.map((s) => (
              <a key={s.label} href={s.href} className="ks-social-btn" target="_blank" rel="noreferrer">
                <span>{s.icon}</span>{s.label}
              </a>
            ))}
          </div>
        </div>

        {/* Right — direct contact buttons */}
        <div className="reveal">
          <div className="ks-contact-card">
            <p className="ks-contact-card-title">Choose your preferred channel</p>
            <p className="ks-contact-card-text">
              Use email for detailed notes or WhatsApp for a quick intro. Both go directly to me.
            </p>

            <div className="ks-contact-actions">
              <a className="ks-submit ks-contact-action" href={mailtoLink}>
                <span>📧</span>
                Contact
              </a>
              <a className="ks-submit ks-contact-action ks-whatsapp-action" href={whatsappLink} target="_blank" rel="noreferrer">
                <span>💬</span>
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
