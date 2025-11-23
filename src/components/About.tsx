import React from "react";

const About: React.FC = () => {
  return (
    <section className="fixed-section-height pt-[96px] pb-[48px] px-4">
      <div className="fixed-container">
        <h2
          className="font-bebas fixed-heading-large mb-6 glitch-text"
          data-text="ABOUT"
        >
          ABOUT
        </h2>

        <div className="space-y-6">
          {/* Tagline */}
          <div className="border border-white/20 p-6 hover:border-white/50 transition-all duration-500 group text-center">
            <p className="font-courier fixed-text-body leading-relaxed opacity-80 group-hover:opacity-100 transition-opacity">
              CREATIVE AGENCY / VISUAL ART / MOTION GRAPHICS / WEB DESIGN / BRANDING
            </p>
            <div className="mt-3 h-px bg-white/20 group-hover:bg-white/50 transition-all duration-500" />
          </div>

          {/* Vision + Process */}
          <div className="fixed-grid-2">
            <div className="border border-white/20 p-5 hover:border-white/50 transition-all duration-500">
              <h3 className="font-bebas fixed-heading-small mb-1 text-stroke">VISION</h3>
              <p className="font-courier text-xs opacity-60">
                PUSHING BOUNDARIES THROUGH EXPERIMENTAL DESIGN AND RAW AESTHETICS
              </p>
            </div>
            <div className="border border-white/20 p-5 hover:border-white/50 transition-all duration-500">
              <h3 className="font-bebas fixed-heading-small mb-1 text-stroke">PROCESS</h3>
              <p className="font-courier text-xs opacity-60">
                CHAOS → DISTORTION → STRUCTURE → REFINEMENT
              </p>
            </div>
          </div>

          {/* Stats */}
          <div className="border border-white/20 p-6 hover:border-white/50 transition-all duration-500 grid place-items-center">
            <div className="font-courier text-xs space-y-1 opacity-60 text-center">
              <p>[ ESTABLISHED: 2024 ]</p>
              <p>[ COLLABORATIONS: WORLDWIDE ]</p>
              <p>[ STYLE: EXPERIMENTAL / MINIMALIST ]</p>
            </div>
          </div>

          {/* Clients */}
          <div className="mt-10">
            <h3 className="font-bebas fixed-heading-medium mb-4">RECENT CLIENTS</h3>
            <div className="fixed-grid-4 justify-center">
              {["BADLANDS", "CHASING SUMMER", "COLD DRINKS", "+MORE"].map(
                (client, index) => (
                  <div
                    key={index}
                    className="border border-white/10 p-3 text-center hover:border-white/50 hover:bg-white hover:text-black transition-all duration-300"
                  >
                    <span className="font-courier text-xs">{client}</span>
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
