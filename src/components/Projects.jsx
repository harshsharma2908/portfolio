import useScrollReveal from "../hooks/useScrollReveal.js";

const projects = [
  {
    title: "Project Management App",
    description:
      "Developed a full-featured task management interface using React with reusable components. Implemented dynamic UI updates and responsive layout using Tailwind CSS. Managed state efficiently and structured components for scalability.",
    tags: ["React", "Tailwind CSS", "State Management"],
    gradient: "linear-gradient(135deg, #6c63ff, #00d4aa)",
    icon: (
      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.6)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 11l3 3L22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/>
      </svg>
    ),
  },
  {
    title: "Todo Context Local Project",
    description:
      "Built a Todo application using React Context API with persistent local storage. Implemented add, delete, and update features with clean component structure and smooth user experience.",
    tags: ["React", "Context API", "Local Storage"],
    gradient: "linear-gradient(135deg, #f093fb, #f5576c)",
    icon: (
      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.6)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <line x1="8" y1="6" x2="21" y2="6"/><line x1="8" y1="12" x2="21" y2="12"/><line x1="8" y1="18" x2="21" y2="18"/><line x1="3" y1="6" x2="3.01" y2="6"/><line x1="3" y1="12" x2="3.01" y2="12"/><line x1="3" y1="18" x2="3.01" y2="18"/>
      </svg>
    ),
  },
  {
    title: "Weather App",
    description:
      "Created a weather dashboard using JavaScript and external weather API. Displays real-time weather data including temperature, humidity, and forecasts with a responsive, animated UI design.",
    tags: ["JavaScript", "API Integration", "CSS3"],
    gradient: "linear-gradient(135deg, #4facfe, #00f2fe)",
    icon: (
      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.6)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"/>
      </svg>
    ),
  },
  {
    title: "Currency Converter",
    description:
      "Developed a real-time currency converter with dynamic exchange rate updates using external API integration. Features a clean, responsive layout for seamless user interaction.",
    tags: ["JavaScript", "REST API", "Responsive Design"],
    gradient: "linear-gradient(135deg, #a8edea, #fed6e3)",
    icon: (
      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.6)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
      </svg>
    ),
  },
  {
    title: "Password Generator",
    description:
      "Built a secure password generator with customizable options for length, special characters, numbers, and uppercase letters. Uses JavaScript logic to generate random strong passwords.",
    tags: ["JavaScript", "Security", "UI/UX"],
    gradient: "linear-gradient(135deg, #f6d365, #fda085)",
    icon: (
      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.6)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>
      </svg>
    ),
  },
  {
    title: "Theme Switcher Project",
    description:
      "Implemented a light/dark theme switcher using CSS variables and JavaScript. Enables dynamic UI updates without page reload, with smooth transitions between themes.",
    tags: ["JavaScript", "CSS Variables", "UX"],
    gradient: "linear-gradient(135deg, #667eea, #764ba2)",
    icon: (
      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.6)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/>
      </svg>
    ),
  },
];

export default function Projects() {
  const ref = useScrollReveal();

  return (
    <section id="projects" style={{ background: "var(--bg-secondary)" }}>
      <div className="section-container scroll-reveal" ref={ref}>
        <div className="accent-line" />
        <h2 className="section-heading">
          Featured <span className="gradient-text">Projects</span>
        </h2>
        <p className="section-subheading">
          A selection of projects that showcase my skills and passion.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))",
            gap: 24,
          }}
          className="projects-grid"
        >
          {projects.map((project) => (
            <div
              key={project.title}
              className="glass-card"
              style={{
                overflow: "hidden",
                cursor: "pointer",
              }}
            >
              {/* Gradient thumbnail */}
              <div
                style={{
                  height: 200,
                  background: project.gradient,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background:
                      "repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(255,255,255,0.03) 10px, rgba(255,255,255,0.03) 20px)",
                  }}
                />
                {project.icon}
              </div>

              {/* Content */}
              <div style={{ padding: "24px" }}>
                <h3
                  style={{
                    fontSize: "1.25rem",
                    fontWeight: 700,
                    marginBottom: 10,
                    color: "var(--text-primary)",
                  }}
                >
                  {project.title}
                </h3>
                <p
                  style={{
                    color: "var(--text-secondary)",
                    fontSize: "0.95rem",
                    lineHeight: 1.6,
                    marginBottom: 20,
                  }}
                >
                  {project.description}
                </p>

                {/* Tags */}
                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: 8,
                    marginBottom: 20,
                  }}
                >
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      style={{
                        padding: "4px 12px",
                        borderRadius: 20,
                        background: "var(--bg-surface)",
                        border: "1px solid var(--border)",
                        color: "var(--accent)",
                        fontSize: "0.8rem",
                        fontWeight: 500,
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div style={{ display: "flex", gap: 12 }}>
                  <a
                    href="https://github.com/harshsharma2908"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 6,
                      color: "var(--text-secondary)",
                      fontSize: "0.9rem",
                      fontWeight: 600,
                      transition: "color 0.3s ease",
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "var(--text-primary)")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-secondary)")}
                  >
                    Source Code
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .projects-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
