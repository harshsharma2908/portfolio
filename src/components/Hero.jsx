import resumePDF from "../assets/HarshSharmaResume.pdf";

export default function Hero() {
  return (
    <section
      id="hero"
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        overflow: "hidden",
        background: "var(--gradient-hero)",
      }}
    >
      {/* Animated background blobs */}
      <div
        style={{
          position: "absolute",
          top: "10%",
          left: "10%",
          width: 400,
          height: 400,
          background: "linear-gradient(135deg, rgba(108,99,255,0.15), rgba(0,212,170,0.08))",
          borderRadius: "60% 40% 30% 70% / 60% 30% 70% 40%",
          animation: "blob-morph 8s ease-in-out infinite, float 6s ease-in-out infinite",
          filter: "blur(40px)",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "15%",
          right: "10%",
          width: 300,
          height: 300,
          background: "linear-gradient(135deg, rgba(0,212,170,0.12), rgba(108,99,255,0.1))",
          borderRadius: "40% 60% 70% 30% / 40% 70% 30% 60%",
          animation: "blob-morph 10s ease-in-out infinite reverse, float 7s ease-in-out infinite 1s",
          filter: "blur(40px)",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          top: "50%",
          right: "30%",
          width: 200,
          height: 200,
          background: "radial-gradient(circle, rgba(108,99,255,0.08), transparent 70%)",
          borderRadius: "50%",
          animation: "float 9s ease-in-out infinite 0.5s",
          pointerEvents: "none",
        }}
      />

      {/* Grid pattern overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `radial-gradient(circle, var(--border) 1px, transparent 1px)`,
          backgroundSize: "40px 40px",
          opacity: 0.4,
          pointerEvents: "none",
        }}
      />

      {/* Content */}
      <div
        style={{
          position: "relative",
          zIndex: 1,
          textAlign: "center",
          padding: "0 24px",
          maxWidth: 800,
          animation: "fade-in 1s ease-out",
        }}
      >
        <div
          style={{
            display: "inline-block",
            padding: "8px 20px",
            borderRadius: 50,
            border: "1px solid var(--border)",
            background: "var(--bg-surface)",
            color: "var(--text-secondary)",
            fontSize: "0.9rem",
            fontWeight: 500,
            marginBottom: 32,
            backdropFilter: "blur(10px)",
          }}
        >
          🚀 3+ Years of Frontend Development
        </div>

        <h1
          style={{
            fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
            fontWeight: 900,
            lineHeight: 1.1,
            letterSpacing: "-0.03em",
            marginBottom: 24,
            color: "var(--text-primary)",
          }}
        >
          Hi, I&apos;m{" "}
          <span className="gradient-text">Harsh Sharma</span>
        </h1>

        <p
          style={{
            fontSize: "clamp(1.1rem, 2.5vw, 1.4rem)",
            color: "var(--text-secondary)",
            marginBottom: 12,
            fontWeight: 400,
          }}
        >
          Frontend Developer
          <span
            style={{
              display: "inline-block",
              width: 3,
              height: "1.2em",
              background: "var(--accent)",
              marginLeft: 4,
              verticalAlign: "text-bottom",
              animation: "blink 1s step-end infinite",
            }}
          />
        </p>

        <p
          style={{
            fontSize: "1.1rem",
            color: "var(--text-tertiary)",
            maxWidth: 600,
            margin: "0 auto 48px",
            lineHeight: 1.7,
          }}
        >
          Building responsive, high-performance web applications with
          React.js, JavaScript (ES6+), and modern CSS. Passionate about
          clean code, accessibility, and pixel-perfect user experiences.
        </p>

        <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
          <a href="#projects" className="btn-primary" onClick={(e) => { e.preventDefault(); document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" }); }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" /><line x1="8" y1="21" x2="16" y2="21" /><line x1="12" y1="17" x2="12" y2="21" /></svg>
            View My Work
          </a>
          <a href={resumePDF} download="HarshSharma_Resume.pdf" className="btn-outline">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
            Download Resume
          </a>
          <a href="#contact" className="btn-outline" onClick={(e) => { e.preventDefault(); document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" }); }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
            Contact Me
          </a>
        </div>

        {/* Scroll indicator */}
        <div
          style={{
            position: "absolute",
            bottom: -80,
            left: "50%",
            transform: "translateX(-50%)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 8,
            color: "var(--text-tertiary)",
            fontSize: "0.8rem",
            animation: "float 3s ease-in-out infinite",
          }}
        >
          <span>Scroll down</span>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M7 13l5 5 5-5M7 6l5 5 5-5"/></svg>
        </div>
      </div>
    </section>
  );
}
