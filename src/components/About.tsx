import React from "react";

const About: React.FC = () => {
  return (
    <section className="fixed-container flex flex-col justify-center items-center px-4 md:px-8">
      <div className="max-w-4xl mx-auto">
        <h2
          className="font-bebas mb-6 glitch-text"
          style={{ fontSize: 'calc(8 * var(--fixed-vmin))' }}
          data-text="ABOUT"
        >
          ABOUT
        </h2>

        <div className="space-y-6">
          {/* Tagline */}
          <div className="border border-white/20 p-6 hover:border-white/50 transition-all duration-500 group text-center">
            <p className="font-courier leading-relaxed opacity-80 group-hover:opacity-100 transition-opacity" style={{ fontSize: 'calc(1.2 * var(--fixed-vmin))' }}>
              CREATIVE AGENCY / VISUAL ART / MOTION GRAPHICS / WEB DESIGN / BRANDING
            </p>
            <div className="mt-3 h-px bg-white/20 group-hover:bg-white/50 transition-all duration-500" />
          </div>

          {/* Vision + Process */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div className="border border-white/20 p-5 hover:border-white/50 transition-all duration-500">
              <h3 className="font-bebas mb-1 text-stroke" style={{ fontSize: 'calc(2.5 * var(--fixed-vmin))' }}>VISION</h3>
              <p className="font-courier opacity-60" style={{ fontSize: 'calc(0.9 * var(--fixed-vmin))' }}>
                PUSHING BOUNDARIES THROUGH EXPERIMENTAL DESIGN AND RAW AESTHETICS
              </p>
            </div>
            <div className="border border-white/20 p-5 hover:border-white/50 transition-all duration-500">
              <h3 className="font-bebas mb-1 text-stroke" style={{ fontSize: 'calc(2.5 * var(--fixed-vmin))' }}>PROCESS</h3>
              <p className="font-courier opacity-60" style={{ fontSize: 'calc(0.9 * var(--fixed-vmin))' }}>
                CHAOS → DISTORTION → STRUCTURE → REFINEMENT
              </p>
            </div>
          </div>

          {/* Stats */}
          <div className="border border-white/20 p-6 hover:border-white/50 transition-all duration-500 grid place-items-center">
            <div className="font-courier space-y-1 opacity-60 text-center" style={{ fontSize: 'calc(0.9 * var(--fixed-vmin))' }}>
              <p>[ ESTABLISHED: 2024 ]</p>
              <p>[ COLLABORATIONS: WORLDWIDE ]</p>
              <p>[ STYLE: EXPERIMENTAL / MINIMALIST ]</p>
            </div>
          </div>

          {/* Clients */}
          <div className="mt-10">
            <h3 className="font-bebas mb-4" style={{ fontSize: 'calc(3 * var(--fixed-vmin))' }}>RECENT CLIENTS</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 justify-center">
              {["BADLANDS", "CHASING SUMMER", "COLD DRINKS", "+MORE"].map(
                (client, index) => (
                  <div
                    key={index}
                    className="border border-white/10 p-3 text-center hover:border-white/50 hover:bg-white hover:text-black transition-all duration-300"
                  >
                    <span className="font-courier" style={{ fontSize: 'calc(0.9 * var(--fixed-vmin))' }}>{client}</span>
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
