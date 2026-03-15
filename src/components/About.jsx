import useScrollReveal from "../hooks/useScrollReveal.js";

export default function About() {
  const ref = useScrollReveal();

  const stats = [
    { value: "3+", label: "Years Experience" },
    { value: "6+", label: "Projects Completed" },
    { value: "2+", label: "Companies Worked" },
  ];

  return (
    <section id="about" style={{ background: "var(--bg-secondary)" }}>
      <div className="section-container scroll-reveal" ref={ref}>
        <div className="accent-line" />
        <h2 className="section-heading">
          About <span className="gradient-text">Me</span>
        </h2>
        <p className="section-subheading">
          Get to know me and what drives my passion for development.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 48,
            alignItems: "center",
          }}
          className="about-grid"
        >
          {/* Text side */}
          <div>
            <p
              style={{
                color: "var(--text-secondary)",
                fontSize: "1.05rem",
                lineHeight: 1.8,
                marginBottom: 24,
              }}
            >
              I&apos;m a passionate Frontend Developer with 3+ years of experience building responsive, 
              high-performance web applications using HTML5, CSS3, JavaScript (ES6+), and React.js. 
              I specialize in developing reusable UI components, integrating REST APIs, and optimizing 
              performance for modern web applications.
            </p>
            <p
              style={{
                color: "var(--text-secondary)",
                fontSize: "1.05rem",
                lineHeight: 1.8,
                marginBottom: 16,
              }}
            >
              Currently pursuing my Master of Computer Applications (MCA) at Lovely Professional University 
              while working as a Frontend Developer at Singleinterface, Gurugram. I believe in continuous 
              learning and pushing the boundaries of what&apos;s possible on the web.
            </p>
            <p
              style={{
                color: "var(--text-secondary)",
                fontSize: "1.05rem",
                lineHeight: 1.8,
                marginBottom: 32,
              }}
            >
              When I&apos;m not coding, you can find me playing Chess, reading, or 
              exploring new technologies to stay up-to-date with the latest in frontend development.
            </p>

            <a href="#contact" className="btn-primary" onClick={(e) => { e.preventDefault(); document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" }); }}>
              Let&apos;s Connect
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </a>
          </div>

          {/* Stats side */}
          <div
            style={{
              display: "grid",
              gap: 16,
            }}
          >
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="glass-card"
                style={{
                  padding: "28px 32px",
                  display: "flex",
                  alignItems: "center",
                  gap: 20,
                }}
              >
                <span
                  className="gradient-text"
                  style={{
                    fontSize: "2.5rem",
                    fontWeight: 900,
                    lineHeight: 1,
                  }}
                >
                  {stat.value}
                </span>
                <span
                  style={{
                    color: "var(--text-secondary)",
                    fontSize: "1rem",
                    fontWeight: 500,
                  }}
                >
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .about-grid {
            grid-template-columns: 1fr !important;
            gap: 32px !important;
          }
        }
      `}</style>
    </section>
  );
}
