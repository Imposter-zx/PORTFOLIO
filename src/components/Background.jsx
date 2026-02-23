import React, { useCallback } from "react";
import { loadSlim } from "@tsparticles/slim";
import Particles from "@tsparticles/react";

const Background = ({ isDark }) => {
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  const themeColor = isDark ? "#00f2ff" : "#0088ff";

  return (
    <div className="fixed inset-0 -z-10 bg-[var(--bg-dark)]">
      {/* Subtle Grid Overlay */}
      <div 
        className="absolute inset-0"
        style={{
          backgroundImage: `linear-gradient(${isDark ? 'rgba(0, 242, 255, 0.03)' : 'rgba(0, 136, 255, 0.05)'} 1px, transparent 1px), 
                          linear-gradient(90deg, ${isDark ? 'rgba(0, 242, 255, 0.03)' : 'rgba(0, 136, 255, 0.05)'} 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}
      ></div>
      
      {/* Particles */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          background: { color: { value: "transparent" } },
          fpsLimit: 120,
          interactivity: {
            events: {
              onHover: { enable: true, mode: "grab" },
              resize: true,
            },
            modes: {
              grab: { distance: 140, links: { opacity: 0.5 } },
            },
          },
          particles: {
            color: { value: themeColor },
            links: {
              color: themeColor,
              distance: 150,
              enable: true,
              opacity: isDark ? 0.1 : 0.2,
              width: 1,
            },
            move: {
              direction: "none",
              enable: true,
              outModes: { default: "bounce" },
              random: false,
              speed: 1,
              straight: false,
            },
            number: { density: { enable: true, area: 800 }, value: 40 },
            opacity: { value: 0.2 },
            shape: { type: "circle" },
            size: { value: { min: 1, max: 3 } },
          },
          detectRetina: true,
        }}
      />
      
      {/* Soft Glows */}
      <div className={`absolute top-0 -left-1/4 w-1/2 h-1/2 ${isDark ? 'bg-blue-500/10' : 'bg-blue-400/5'} blur-[120px] rounded-full`}></div>
      <div className={`absolute bottom-0 -right-1/4 w-1/2 h-1/2 ${isDark ? 'bg-purple-500/10' : 'bg-purple-400/5'} blur-[120px] rounded-full`}></div>
    </div>
  );
};

export default Background;
