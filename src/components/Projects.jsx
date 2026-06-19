import { PROJECTS } from '../data/portfolio';

export default function Projects() {
  return (
    <section className="ks-section" id="projects">
      <div className="ks-section-label">Portfolio</div>
      <h2 className="ks-section-title reveal">Featured <span>Projects</span></h2>

      <div className="ks-projects-grid">
        {PROJECTS.map((p, i) => (
          <div key={i} className="ks-project-card reveal" style={{ animationDelay: `${i * 0.08}s` }}>
            <div className="ks-project-banner" style={{ background: p.color }}>
              <span style={{ fontSize: '4rem' }}>{p.emoji}</span>
            </div>
            <div className="ks-project-body">
              <div className="ks-project-tags">
                {p.tags.map((t) => <span key={t} className="ks-project-tag">{t}</span>)}
              </div>
              <div className="ks-project-title">{p.title}</div>
              <div className="ks-project-desc">{p.desc}</div>
              <div className="ks-project-links">
                <a className="ks-project-link" href={p.github} target="_blank" rel="noreferrer">⚙ GitHub</a>
                <a className="ks-project-link" href={p.demo}   target="_blank" rel="noreferrer">🚀 Live Demo</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
