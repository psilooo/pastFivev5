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
        "We don’t follow trends — we make them. Full creative vision, from concept to cult status. Moodboards, aesthetics, and narratives that hit different.",
    },
    {
      id: 'graphic',
      label: '[ GRAPHIC DESIGN ]',
      copy:
        "High-impact visuals, raw and unfiltered. Covers, flyers, merch — built to live in your head rent-free.",
    },
    {
      id: 'motion',
      label: '[ MOTION GRAPHICS ]',
      copy:
        "Loops that hypnotize. Glitch, grunge, and chaos made beautiful. Designed to make your audience stop scrolling.",
    },
    {
      id: 'web',
      label: '[ WEB DESIGN ]',
      copy:
        "Websites that bleed aesthetic. Minimal, dark, and heavy — built like a digital archive, not a template. Every pixel screams underground luxury. Responsive, fast, unforgettable — web design on vamp mode.",
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
    <section className="min-h-screen flex flex-col justify-center items-center relative overflow-hidden">
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
            className={`w-auto h-24 md:h-36 lg:h-48 xl:h-60 invert transition-all duration-300 ${
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

        {/* CLICKABLE / EXPANDABLE SERVICES (fixed-height, no layout shift) */}
        <div className="relative w-full max-w-xl mx-auto font-courier text-xs md:text-sm text-center">
          {/* Title list */}
          <div className="space-y-4">
            {services.map((s) => {
              const isOpen = openId === s.id;
              return (
                <div key={s.id}>
                  <button
                    onClick={() => setOpenId(prev => (prev === s.id ? null : s.id))}
                    aria-expanded={isOpen}
                    className={[
                      "w-full flex items-center justify-center",
                      "opacity-70 transition-all duration-150 ease-out",
                      "hover:opacity-100 hover:text-white",
                      "hover:[text-shadow:0_0_10px_rgba(255,255,255,0.55)]",
                      isOpen ? "text-white opacity-100" : "",
                    ].join(" ")}
                    style={{ letterSpacing: '0.02em' }}
                  >
                    <span className="cursor-pointer select-none">
                      <span>[ </span>
                      <span>{s.label.replace(/\[|\]/g, '').trim()}</span>
                      <span className="inline-flex items-center">
                        {" "}
                        <span
                          className={[
                            "ml-1 inline-block transform transition-transform duration-150",
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
                </div>
              );
            })}
          </div>
        
          {/* Reserved space so hero height NEVER changes */}
          <div className="h-32 md:h-36" />
        
          {/* Shared reveal panel (absolutely positioned, expands ONLY down) */}
          <div
            className={[
              "absolute left-1/2 -translate-x-1/2",
              "top-[calc(100%-8rem)] md:top-[calc(100%-9rem)]", // aligns with the reserved space above
              "w-full max-w-xl px-4 text-center z-30",
              "transition-all duration-150 ease-out",
              openId ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-2 pointer-events-none",
            ].join(" ")}
            style={{ willChange: 'opacity, transform' }}
          >
            <div className="transform transition duration-150 ease-out">
              <p className="text-[0.8rem] md:text-[0.9rem] leading-relaxed text-white/80">
                {services.find(s => s.id === openId)?.copy}
              </p>
            </div>
          </div>
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

      {/* Footer */}
      <div className="mt-16 pt-8 border-t border-white/10 relative z-30">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="font-courier text-xs opacity-60">
            © 2025 PASTFIVE. ALL RIGHTS RESERVED.
          </p>
          <p className="font-courier text-xs opacity-60">
            DESIGNED WITH CHAOS BY PSILO
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
