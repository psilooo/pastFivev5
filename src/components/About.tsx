import React from "react";
const About: React.FC = () => {
  return (
    <section className="min-h-screen pt-24 pb-16 px-4 md:px-8">
      {" "}
      <div className="max-w-4xl mx-auto">
        {" "}
        <h2
          className="font-bebas text-6xl md:text-8xl mb-12 glitch-text"
          data-text="ABOUT"
        >
          {" "}
          ABOUT{" "}
        </h2>{" "}
        <div className="space-y-8">
          {" "}
          <div className="border border-white/20 p-8 hover:border-white/50 transition-all duration-500 group text-center">
            {" "}
            <p className="font-courier text-sm md:text-base leading-relaxed opacity-80 group-hover:opacity-100 transition-opacity">
              {" "}
              CREATIVE AGENCY / VISUAL ART / MOTION GRAPHICS / WEB DESIGN / BRANDING{" "}
            </p>{" "}
            <div className="mt-4 h-px bg-white/20 group-hover:bg-white/50 transition-all duration-500" />{" "}
          </div>{" "}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {" "}
            <div className="border border-white/20 p-6 hover:border-white/50 transition-all duration-500">
              {" "}
              <h3 className="font-bebas text-2xl mb-2 text-stroke">
                VISION
              </h3>{" "}
              <p className="font-courier text-xs opacity-60">
                {" "}
                PUSHING BOUNDARIES THROUGH EXPERIMENTAL DESIGN AND RAW
                AESTHETICS{" "}
              </p>{" "}
            </div>{" "}
            <div className="border border-white/20 p-6 hover:border-white/50 transition-all duration-500">
              {" "}
              <h3 className="font-bebas text-2xl mb-2 text-stroke">
                PROCESS
              </h3>{" "}
              <p className="font-courier text-xs opacity-60">
                {" "}
                CHAOS → DISTORTION → STRUCTURE → REFINEMENT{" "}
              </p>{" "}
            </div>{" "}
          </div>{" "}
          <div className="border border-white/20 p-8 hover:border-white/50 transition-all duration-500 grid place-items-center">
            <div className="font-courier text-xs space-y-2 opacity-60 text-center">
              <p>[ ESTABLISHED: 2024 ]</p>
              <p>[ COLLABORATIONS: WORLDWIDE ]</p>
              <p>[ STYLE: EXPERIMENTAL / MINIMALIST ]</p>
            </div>
          </div>{" "}
          <div className="mt-16">
            {" "}
            <h3 className="font-bebas text-3xl mb-6">RECENT CLIENTS</h3>{" "}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 justify-center">
              {" "}
              {["BADLANDS", "CHASING SUMMER", "COLD DRINKS", "+MORE"].map(
                (client, index) => (
                  <div
                    key={index}
                    className="border border-white/10 p-4 text-center hover:border-white/50 hover:bg-white hover:text-black transition-all duration-300"
                  >
                    {" "}
                    <span className="font-courier text-xs">{client}</span>{" "}
                  </div>
                )
              )}{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
      {/* Footer (fixed, static) */}
      <footer className="fixed bottom-0 left-0 w-full z-30 bg-black/40 backdrop-blur-md border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col md:flex-row justify-between items-center space-y-2 md:space-y-0">
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
export default About;
