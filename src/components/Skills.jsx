import { ORBIT_SKILLS, SKILLS } from '../data/portfolio';

function SkillsGalaxy() {
  return (
    <div className="ks-galaxy-wrap">
      {/* Orbit path rings */}
      {[100, 155].map((r) => (
        <div key={r} className="ks-orbit-path" style={{ width: r * 2, height: r * 2 }} />
      ))}

      {/* Centre avatar image */}
      <div className="ks-galaxy-center">
        <img className="ks-galaxy-image" src="/Portfolio_img.webp" alt="Kriti Singh" />
      </div>

      {/* Orbiting tech icons */}
      {ORBIT_SKILLS.map((s, i) => (
        <div
          key={i}
          className="ks-orbit-icon"
          title={s.label}
          style={{
            '--r':     `${s.r}px`,
            '--start': `${s.start}deg`,
            animationDuration: `${s.dur}s`,
          }}
        >
          {s.icon}
        </div>
      ))}
    </div>
  );
}

export default function Skills() {
  return (
    <section
      className="ks-section"
      id="skills"
      style={{ background: 'linear-gradient(180deg,var(--navy),var(--navy2),var(--navy))' }}
    >
      <div className="ks-section-label">Expertise</div>
      <h2 className="ks-section-title reveal">Skills <span>Galaxy</span></h2>

      <div className="reveal">
        <SkillsGalaxy />
      </div>

      <div className="ks-skills-grid reveal" style={{ marginTop: 40 }}>
        {SKILLS.map((s, i) => (
          <div key={i} className="ks-skill-pill">
            <span>{s.icon}</span>
            <div style={{ flex: 1 }}>
              <div>{s.name}</div>
              <div className="ks-skill-bar-bg">
                <div className="ks-skill-bar-fill" style={{ width: `${s.pct}%` }} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
