export default function Footer() {
  return (
    <footer className="ks-footer">
      <div style={{ fontFamily: 'Playfair Display,serif', fontSize: '1.1rem', marginBottom: 8, color: 'var(--lav2)' }}>
        Kriti Singh
      </div>
      <p>Crafted with <span className="heart">♥</span> and a lot of ☕ · © {new Date().getFullYear()} Kriti Singh · All rights reserved</p>
      <p style={{ marginTop: 6, fontSize: '0.72rem' }}>BCA Student · Web Developer · DevOps Enthusiast · ML Learner</p>
    </footer>
  );
}
