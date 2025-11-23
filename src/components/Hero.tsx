import React, { useEffect, useState } from 'react';

const Hero: React.FC = () => {
  const [glitchActive, setGlitchActive] = useState(false);
  const [openId, setOpenId] = useState<string | null>(null);

  const logoUrl = '/logo.png';
  const videoUrl = '/background-video.mp4';

  // Service data (labels + copy)
  const services = [
    {
      id: 'creative',
      label: '[ CREATIVE DIRECTION ]',
      copy:
        "We don’t follow trends... we make them. Full creative vision, from concept to cult status. Moodboards, aesthetics, and narratives that hit different.",
    },
    {
      id: 'graphic',
      label: '[ GRAPHIC DESIGN ]',
      copy:
        "High-impact visuals, raw and unfiltered. Covers, flyers, logos, merch — built to live in your head rent-free.",
    },
    {
      id: 'motion',
      label: '[ MOTION GRAPHICS ]',
      copy:
        "Loops that hypnotize. Effects and chaos made beautiful. Designed to make your audience stop scrolling.",
    },
    {
      id: 'web',
      label: '[ WEB DESIGN ]',
      copy:
        "Websites that bleed aesthetic. Minimal, modern, and sleek. Each one built like a digital archive, not a template. Responsive, fast, and unforgettable.",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      if (Math.random() > 0.9) {
        setGlitchActive(true);
        setTimeout(() => setGlitchActive(false), 300);
      }
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const toggle = (id: string) => setOpenId(prev => (prev === id ? null : id));

  return (
    <section className="fixed-section-height flex flex-col justify-start items-center pt-[112px] relative overflow-hidden">
      {/* Video Background - Lowest layer */}
      <div className="absolute inset-0 z-11">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover opacity-30"
          style={{ filter: 'grayscale(100%) brightness(0.8) contrast(1.2)' }}
        >
          <source src={videoUrl} type="video/mp4" />
          <div className="w-full h-full bg-gradient-to-b from-gray-900 to-black" />
        </video>
      </div>

      {/* Dark overlay - Above video, below content */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black to-black opacity-40 pointer-events-none z-10" />

      {/* Animated background lines - Above overlay */}
      <div className="absolute inset-0 z-20">
        {[...Array(10)].map((_, i) => (
          <div
            key={i}
            className="absolute h-px bg-white/10 w-full animate-pulse"
            style={{
              top: `${i * 10}%`,
              animationDelay: `${i * 0.1}s`,
              transform: `rotate(${Math.random() * 2 - 1}deg)`,
            }}
          />
        ))}
      </div>

      {/* Main content - Highest layer */}
      <div className="relative z-30 text-center px-4">
        {/* Logo with enhanced glitch effect */}
        <div className="relative mb-8 inline-block">
          <img
            src={logoUrl}
            alt="Company Logo"
            className={`fixed-logo invert transition-all duration-300 ${
              glitchActive ? 'logo-glitch' : ''
            }`}
            style={{
              backgroundImage: `url(${logoUrl})`,
              backgroundSize: 'contain',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center',
            }}
          />
          {glitchActive && (
            <>
              <div
                className="absolute inset-0 opacity-30"
                style={{
                  backgroundImage: `url(${logoUrl})`,
                  backgroundSize: 'contain',
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'center',
                  filter: 'invert(1) hue-rotate(180deg) brightness(2)',
                  transform: 'translate(-2px, -1px)',
                  mixBlendMode: 'screen',
                }}
              />
              <div
                className="absolute inset-0 opacity-20"
                style={{
                  backgroundImage: `url(${logoUrl})`,
                  backgroundSize: 'contain',
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'center',
                  filter: 'invert(1) hue-rotate(-180deg) brightness(0.5)',
                  transform: 'translate(2px, 1px)',
                  mixBlendMode: 'multiply',
                }}
              />
            </>
          )}
        </div>

        {/* CLICKABLE / EXPANDABLE SERVICES */}
        <div className="font-courier fixed-text-small space-y-4 text-center w-full fixed-container">
          {services.map((s) => {
            const isOpen = openId === s.id;
            return (
              <div key={s.id} className="fixed-container">
                {/* Title */}
                <button
                  onClick={() => setOpenId(prev => (prev === s.id ? null : s.id))}
                  aria-expanded={isOpen}
                  className={[
                    "inline-flex items-center justify-center",
                    "opacity-70 transition-all duration-200 ease-out",
                    "hover:opacity-100 hover:text-white",
                    "hover:[text-shadow:0_0_10px_rgba(255,255,255,0.55)]",
                    isOpen ? "text-white opacity-100" : "",
                  ].join(" ")}
                  style={{ letterSpacing: "0.02em" }}
                >
                  <span className="cursor-pointer select-none">
                    <span>[ </span>
                    <span>{s.label.replace(/\[|\]/g, "").trim()}</span>
                    <span className="inline-flex items-center">
                      {" "}
                      <span
                        className={[
                          "ml-1 inline-block transform transition-transform duration-200",
                          isOpen ? "rotate-45" : "rotate-0",
                        ].join(" ")}
                        aria-hidden="true"
                      >
                        +
                      </span>
                      <span> ]</span>
                    </span>
                  </span>
                </button>
        
                {/* In-flow content: expands directly under title and only moves what’s below */}
                <div
                  className={[
                    "overflow-hidden transition-[max-height,opacity,filter,transform] duration-250 ease-out",
                    isOpen ? "max-h-56 opacity-100 blur-0 translate-y-0" : "max-h-0 opacity-0 blur-[2px] -translate-y-1",
                  ].join(" ")}
                >
                  <p className="mt-2 fixed-text-small text-white/80 text-center">
                    {s.copy}
                  </p>
                </div>
              </div>
            );
          })}
        </div>


        <div className="mt-12 flex items-center justify-center space-x-8">
          <div className="text-xs font-courier">
            <span className="opacity-60">STATUS:</span>
            <span className="ml-2 text-white animate-pulse">ONLINE</span>
          </div>
          <div className="text-xs font-courier">
            <span className="opacity-60">VERSION:</span>
            <span className="ml-2">2.0.25</span>
          </div>
        </div>
      </div>

      {/* Footer (fixed, static) */}
      <footer className="fixed bottom-0 left-0 w-full z-30 bg-black/40 backdrop-blur-md border-t border-white/10">
        <div className="fixed-container px-4 py-4 flex flex-row justify-between items-center">
          <p className="font-courier text-xs opacity-70">
            © 2025 PASTFIVE. ALL RIGHTS RESERVED.
          </p>
          <p className="font-courier text-xs opacity-70">
            DESIGNED WITH CHAOS BY PSILO
          </p>
        </div>
      </footer>
    </section>
  );
};

export default Hero;
