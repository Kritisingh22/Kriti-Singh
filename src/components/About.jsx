import { TIMELINE, PERSONAL } from "../data/portfolio";

export default function About() {
  return (
    <section className="ks-section" id="about">
      <div className="ks-section-label">My Story</div>
      <h2 className="ks-section-title reveal">
        Who is <span>Kriti Singh?</span>
      </h2>

      <div className="ks-about-grid">
        {/* Left — bio */}
        <div className="ks-about-text reveal">
          <p>
            Hey there! I'm <strong>Kriti Singh</strong>, a BCA graduate from Sam
            Higginbottom University of Agriculture, Technology and Sciences with
            an endless curiosity for all things tech. I don't just study
            computer science — I <em>live</em> it, constantly exploring,
            learning, and building with technology.
          </p>
          <p>
            My journey started with a simple HTML page in class 9 that had just
            a few headings, and over time it grew into creating websites,
            learning new technologies, exploring AI, and building projects that
            I'm truly proud of.
          </p>
          <p>
            When I'm not coding, I'm usually working on personal projects,
            helping others learn, exploring new technologies, or sharing with
            people that <br></br>
            <strong>
              Linux can actually be fun once you get comfortable using the
              terminal.
            </strong>
          </p>
          <p>
            I believe great software is a conversation between humans and
            machines — and I'm deeply committed to making that conversation
            beautiful, accessible, and meaningful.
          </p>

          <div
            style={{
              display: "flex",
              gap: 14,
              marginTop: 28,
              flexWrap: "wrap",
            }}
          >
            {[PERSONAL.college, PERSONAL.degree, PERSONAL.location].map((t) => (
              <span key={t} className="ks-badge">
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Right — timeline */}
        <div className="reveal">
          <div
            style={{
              fontFamily: "Space Grotesk,sans-serif",
              fontSize: "0.72rem",
              letterSpacing: "3px",
              color: "var(--gold)",
              marginBottom: 20,
              textTransform: "uppercase",
            }}
          >
            Career Journey
          </div>
          <div className="ks-timeline">
            {TIMELINE.map((t, i) => (
              <div key={i} className="ks-tl-item">
                <div className="ks-tl-dot" />
                <div className="ks-tl-year">{t.year}</div>
                <div className="ks-tl-title">{t.title}</div>
                <div className="ks-tl-desc">{t.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
