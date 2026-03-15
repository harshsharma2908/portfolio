import useScrollReveal from "../hooks/useScrollReveal.js";

const experiences = [
  {
    title: "Frontend Developer",
    company: "Singleinterface",
    location: "Gurugram, Haryana",
    period: "Jan 2023 – Present",
    type: "Full-time",
    points: [
      "Developed and maintained responsive web applications using HTML5, CSS3, JavaScript, and React.js.",
      "Built reusable UI components and implemented modern layouts using Tailwind CSS and Bootstrap.",
      "Integrated REST APIs to display dynamic data in frontend applications.",
      "Improved website performance by optimizing images, scripts, and styles, reducing load time significantly.",
      "Ensured cross-browser compatibility and mobile responsiveness across multiple devices and screen sizes.",
      "Used Git for version control and collaborated with designers, backend developers, and QA teams.",
      "Followed clean code practices and component-based architecture for scalable development.",
    ],
  },
  {
    title: "Frontend Developer Intern",
    company: "Singleinterface",
    location: "Gurugram, Haryana",
    period: "Oct 2022 – Jan 2023",
    type: "Internship",
    points: [
      "Assisted in developing responsive web pages using HTML, CSS, and JavaScript.",
      "Worked with senior developers to implement UI designs and fix layout issues.",
      "Learned Git workflow, debugging techniques, and best coding practices.",
      "Participated in code reviews and agile team meetings.",
    ],
  },
];

const education = [
  {
    degree: "Master of Computer Applications (MCA)",
    institution: "Lovely Professional University",
    period: "2023 – Present",
  },
  {
    degree: "Bachelor of Computer Applications (BCA)",
    institution: "Hemvati Nandan Bahuguna Garhwal University",
    period: "2019 – 2022",
  },
];

const certifications = [
  { name: "Basics of Python Programming", org: "OpenWeaver", year: "2022" },
  { name: "National Intellectual Property Awareness Mission", org: "Govt. of India", year: "2022" },
  { name: "Cyber Security Training", org: "IHMS Kotdwara", year: "2020" },
];

export default function Experience() {
  const ref = useScrollReveal();

  return (
    <section id="experience" style={{ background: "var(--bg-primary)" }}>
      <div className="section-container scroll-reveal" ref={ref}>
        <div className="accent-line" />
        <h2 className="section-heading">
          My <span className="gradient-text">Experience</span>
        </h2>
        <p className="section-subheading">
          My professional journey and educational background.
        </p>

        {/* Work Experience Timeline */}
        <div style={{ marginBottom: 64 }}>
          <h3
            style={{
              fontSize: "1.2rem",
              fontWeight: 700,
              color: "var(--text-primary)",
              marginBottom: 28,
              display: "flex",
              alignItems: "center",
              gap: 10,
            }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>
            </svg>
            Work Experience
          </h3>

          <div style={{ position: "relative", paddingLeft: 32 }}>
            {/* Timeline line */}
            <div
              style={{
                position: "absolute",
                left: 7,
                top: 8,
                bottom: 8,
                width: 2,
                background: "linear-gradient(180deg, var(--accent), var(--accent-secondary))",
                borderRadius: 1,
              }}
            />

            {experiences.map((exp, i) => (
              <div
                key={i}
                className="glass-card"
                style={{
                  padding: "28px 32px",
                  marginBottom: i < experiences.length - 1 ? 24 : 0,
                  position: "relative",
                }}
              >
                {/* Timeline dot */}
                <div
                  style={{
                    position: "absolute",
                    left: -32,
                    top: 32,
                    width: 16,
                    height: 16,
                    borderRadius: "50%",
                    background: i === 0 ? "var(--accent)" : "var(--bg-surface)",
                    border: `3px solid ${i === 0 ? "var(--accent)" : "var(--accent-secondary)"}`,
                    boxShadow: i === 0 ? "0 0 12px var(--accent-glow)" : "none",
                  }}
                />

                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: 8, marginBottom: 8 }}>
                  <div>
                    <h4
                      style={{
                        fontSize: "1.2rem",
                        fontWeight: 700,
                        color: "var(--text-primary)",
                        marginBottom: 4,
                      }}
                    >
                      {exp.title}
                    </h4>
                    <p style={{ color: "var(--accent)", fontWeight: 600, fontSize: "0.95rem" }}>
                      {exp.company}
                      <span style={{ color: "var(--text-tertiary)", fontWeight: 400 }}> · {exp.location}</span>
                    </p>
                  </div>
                  <div style={{ display: "flex", gap: 8, alignItems: "center", flexShrink: 0 }}>
                    <span
                      style={{
                        padding: "4px 14px",
                        borderRadius: 20,
                        background: i === 0 ? "var(--accent)" : "var(--bg-surface)",
                        color: i === 0 ? "#fff" : "var(--accent)",
                        fontSize: "0.8rem",
                        fontWeight: 600,
                        border: i === 0 ? "none" : "1px solid var(--border)",
                      }}
                    >
                      {exp.type}
                    </span>
                    <span style={{ color: "var(--text-tertiary)", fontSize: "0.85rem", fontWeight: 500 }}>
                      {exp.period}
                    </span>
                  </div>
                </div>

                <ul style={{ listStyle: "none", padding: 0, marginTop: 16 }}>
                  {exp.points.map((point, j) => (
                    <li
                      key={j}
                      style={{
                        color: "var(--text-secondary)",
                        fontSize: "0.95rem",
                        lineHeight: 1.7,
                        paddingLeft: 20,
                        position: "relative",
                        marginBottom: 8,
                      }}
                    >
                      <span
                        style={{
                          position: "absolute",
                          left: 0,
                          top: 10,
                          width: 6,
                          height: 6,
                          borderRadius: "50%",
                          background: "var(--accent-secondary)",
                          opacity: 0.6,
                        }}
                      />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Education & Certifications side by side */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 32,
          }}
          className="edu-cert-grid"
        >
          {/* Education */}
          <div>
            <h3
              style={{
                fontSize: "1.2rem",
                fontWeight: 700,
                color: "var(--text-primary)",
                marginBottom: 20,
                display: "flex",
                alignItems: "center",
                gap: 10,
              }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c0 1.66 2.69 3 6 3s6-1.34 6-3v-5"/>
              </svg>
              Education
            </h3>
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              {education.map((edu, i) => (
                <div
                  key={i}
                  className="glass-card"
                  style={{ padding: "22px 24px" }}
                >
                  <h4 style={{ fontSize: "1rem", fontWeight: 700, color: "var(--text-primary)", marginBottom: 4 }}>
                    {edu.degree}
                  </h4>
                  <p style={{ color: "var(--accent)", fontSize: "0.9rem", fontWeight: 500, marginBottom: 2 }}>
                    {edu.institution}
                  </p>
                  <p style={{ color: "var(--text-tertiary)", fontSize: "0.85rem" }}>
                    {edu.period}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h3
              style={{
                fontSize: "1.2rem",
                fontWeight: 700,
                color: "var(--text-primary)",
                marginBottom: 20,
                display: "flex",
                alignItems: "center",
                gap: 10,
              }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="8" r="7"/><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"/>
              </svg>
              Certifications
            </h3>
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              {certifications.map((cert, i) => (
                <div
                  key={i}
                  className="glass-card"
                  style={{ padding: "22px 24px" }}
                >
                  <h4 style={{ fontSize: "1rem", fontWeight: 700, color: "var(--text-primary)", marginBottom: 4 }}>
                    {cert.name}
                  </h4>
                  <p style={{ color: "var(--accent)", fontSize: "0.9rem", fontWeight: 500 }}>
                    {cert.org}
                    <span style={{ color: "var(--text-tertiary)", fontWeight: 400 }}> · {cert.year}</span>
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .edu-cert-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
