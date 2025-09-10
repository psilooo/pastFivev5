import React, { useEffect, useState } from 'react';

const Hero: React.FC = () => {
  const [glitchActive, setGlitchActive] = useState(false);
  
  // Replace this with your actual logo path
  const logoUrl = '/logo.png'; // Place your logo in the public folder
  
  // Replace this with your actual video path
  const videoUrl = '/background-video.mp4'; // Place your video in the public folder

  useEffect(() => {
    const interval = setInterval(() => {
      if (Math.random() > 0.9) {
        setGlitchActive(true);
        setTimeout(() => setGlitchActive(false), 300);
      }
    }, 2000);

    return () => clearInterval(interval);
  }, []);

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
          style={{ filter: 'brightness(0.8) contrast(1.2)' }}
        >
          <source src={videoUrl} type="video/mp4" />
          {/* Fallback for browsers that don't support video */}
          <div className="w-full h-full bg-gradient-to-b from-gray-900 to-black" />
        </video>
      </div>

      {/* Dark overlay - Above video, below content */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-black pointer-events-none z-10" />
      
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
          
          {/* Additional glitch layers for more intense effect */}
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
        
        <div className="font-courier text-xs md:text-sm space-y-1 opacity-60 animate-pulse">
          <p>[ CREATIVE DIRECTION ]</p>
          <p>[ GRAPHIC DESIGN ]</p>
          <p>[ MOTION GRAPHICS ]</p>
          <p>[ WEB DESIGN ]</p>
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

      {/* Footer - Also above video */}
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
