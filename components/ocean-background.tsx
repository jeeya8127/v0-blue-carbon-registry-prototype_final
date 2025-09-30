"use client"

export function OceanBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#E8F4F8] via-white to-[#E8F4F8]" />

      {/* Animated Wave Layers */}
      <svg
        className="absolute bottom-0 left-0 w-[200%] wave-animation"
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
        style={{ height: "40%" }}
      >
        <path
          fill="rgba(0, 201, 167, 0.05)"
          d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,144C960,149,1056,139,1152,128C1248,117,1344,107,1392,101.3L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        />
      </svg>

      <svg
        className="absolute bottom-0 left-0 w-[200%] wave-animation"
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
        style={{ height: "35%", animationDelay: "-5s" }}
      >
        <path
          fill="rgba(0, 180, 216, 0.08)"
          d="M0,192L48,197.3C96,203,192,213,288,229.3C384,245,480,267,576,250.7C672,235,768,181,864,181.3C960,181,1056,235,1152,234.7C1248,235,1344,181,1392,154.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        />
      </svg>

      {/* Floating Bubbles */}
      {[...Array(8)].map((_, i) => (
        <div
          key={i}
          className="bubble absolute rounded-full bg-[#00C9A7]/10"
          style={{
            left: `${Math.random() * 100}%`,
            width: `${20 + Math.random() * 60}px`,
            height: `${20 + Math.random() * 60}px`,
            animationDuration: `${15 + Math.random() * 15}s`,
            animationDelay: `${Math.random() * 10}s`,
            bottom: "-100px",
          }}
        />
      ))}
    </div>
  )
}
