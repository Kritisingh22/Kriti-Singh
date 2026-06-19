import { useState } from "react";
import { CERTIFICATES } from "../data/portfolio";

function CertModal({ cert, onClose }) {
  return (
    <div className="ks-modal-overlay" onClick={onClose}>
      <div className="ks-modal" onClick={(e) => e.stopPropagation()}>
        <button className="ks-modal-close" onClick={onClose}>
          ✕
        </button>
        <div
          style={{ textAlign: "center", fontSize: "5rem", marginBottom: 20 }}
        >
          {cert.emoji}
        </div>
        <div
          style={{
            fontFamily: "Playfair Display,serif",
            fontSize: "1.5rem",
            color: "var(--white)",
            textAlign: "center",
            marginBottom: 8,
          }}
        >
          {cert.title}
        </div>
        <div
          style={{
            fontFamily: "Space Grotesk,sans-serif",
            fontSize: "0.85rem",
            color: "var(--gold)",
            textAlign: "center",
            marginBottom: 24,
          }}
        >
          {cert.issuer}
        </div>
        <div
          style={{
            background: "var(--glass)",
            border: "1px solid var(--border)",
            borderRadius: 12,
            padding: "16px 20px",
            fontFamily: "Space Grotesk,sans-serif",
            fontSize: "0.82rem",
            color: "var(--muted)",
            lineHeight: 1.7,
          }}
        >
          This certification validates proficiency in{" "}
          <strong style={{ color: "var(--lav2)" }}>{cert.title}</strong>,
          demonstrating hands-on expertise and theoretical understanding at a
          professional level.
        </div>
        <button
          className="ks-btn-primary"
          style={{ width: "100%", marginTop: 20, border: "none" }}
          onClick={() =>
            window.open("https://www.linkedin.com/in/-kriti-singh", "_blank")
          }
        >
          🔗 Verify Certificate
        </button>
      </div>
    </div>
  );
}

export default function Certificates() {
  const [modal, setModal] = useState(null);

  return (
    <section className="ks-section" id="certificates">
      <div className="ks-section-label">Credentials</div>
      <h2 className="ks-section-title reveal">
        Certificate <span>Wall</span>
      </h2>

      <div className="ks-certs-grid">
        {CERTIFICATES.map((c, i) => (
          <div
            key={i}
            className="ks-cert-card reveal"
            style={{ "--tilt": c.tilt }}
            onClick={() => setModal(c)}
          >
            <div className="ks-cert-img">{c.emoji}</div>
            <div className="ks-cert-title">{c.title}</div>
            <div className="ks-cert-issuer">{c.issuer}</div>
            <div
              style={{
                textAlign: "center",
                marginTop: 10,
                fontSize: "0.65rem",
                color: "var(--muted)",
                fontFamily: "Space Grotesk,sans-serif",
              }}
            >
              Click to preview →
            </div>
          </div>
        ))}

        <div className="ks-cert-card ks-cert-loading reveal" style={{ "--tilt": "0deg" }}>
          <div className="ks-cert-img ks-cert-loading-img">⏳</div>
          <div className="ks-cert-loading-badge">Loading</div>
          <div className="ks-cert-title">More Certificates Coming Soon</div>
          <div className="ks-cert-loading-desc">
            I&apos;m continuously learning and earning new certifications. Additional
            certificates are currently being verified and will be added here soon.
          </div>
        </div>
      </div>

      {modal && <CertModal cert={modal} onClose={() => setModal(null)} />}
    </section>
  );
}
