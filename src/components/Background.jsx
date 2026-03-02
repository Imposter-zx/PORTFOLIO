import React from "react";
import AmbientParticles from "./AmbientParticles/AmbientParticles";

const Background = () => {
  return (
    <div className="fixed inset-0 -z-10 bg-zinc-50 dark:bg-[#050505] transition-colors duration-300">
      {/* Subtle Grid Overlay */}
      <div
        className="absolute inset-0 opacity-50 dark:opacity-100 transition-opacity duration-300 pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 242, 255, 0.03) 1px, transparent 1px), 
                          linear-gradient(90deg, rgba(0, 242, 255, 0.03) 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}
      ></div>

      {/* Particles */}
      <AmbientParticles density={0.06} className="z-0" />

      {/* Soft Glows */}
      <div className="absolute top-0 -left-1/4 w-1/2 h-1/2 bg-blue-500/10 blur-[120px] rounded-full pointer-events-none transition-colors duration-300 dark:bg-blue-500/20"></div>
      <div className="absolute bottom-0 -right-1/4 w-1/2 h-1/2 bg-purple-500/10 blur-[120px] rounded-full pointer-events-none transition-colors duration-300 dark:bg-purple-500/20"></div>
    </div>
  );
};

export default Background;
