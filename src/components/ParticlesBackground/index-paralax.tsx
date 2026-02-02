"use client";

import { useEffect, useState, useMemo } from "react";
import type { ISourceOptions } from "@tsparticles/engine";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadAll } from "@tsparticles/all";

interface ParticlesBackgroundProps {
  className?: string;
}

export default function ParticlesBackground({
  className,
}: ParticlesBackgroundProps) {
  const [init, setInit] = useState(false);

  // Initialize the engine once on mount
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadAll(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const options: ISourceOptions = useMemo(
    () => ({
      background: {
        color: {
          value: "transparent",
        },
      },
      fpsLimit: 60,
      interactivity: {
        events: {
          onHover: {
            enable: true,
            mode: "grab",
          },
          onClick: {
            enable: true,
            mode: "push",
          },
          resize: {
            enable: true,
          },
        },
        modes: {
          grab: {
            distance: 150,
            links: {
              opacity: 0.5,
              color: "#A78BFA",
            },
          },
          push: {
            quantity: 4,
          },
        },
      },
      particles: {
        color: {
          value: ["#8B5CF6", "#A78BFA", "#C4B5FD", "#6366F1", "#ffffff"],
        },
        links: {
          color: "#8B5CF6",
          distance: 150,
          enable: true,
          opacity: 0.2,
          width: 1,
        },
        move: {
          direction: "none",
          enable: true,
          outModes: {
            default: "out",
          },
          random: true,
          speed: 1,
          straight: false,
        },
        number: {
          density: {
            enable: true,
            width: 1200,
            height: 800,
          },
          value: 80,
        },
        opacity: {
          value: { min: 0.3, max: 0.8 },
        },
        shape: {
          type: "circle",
        },
        size: {
          value: { min: 1, max: 3 },
        },
      },
      detectRetina: true,
    }),
    []
  );

  // Don't render until engine is initialized
  if (!init) {
    return null;
  }

  return <Particles className={className} options={options} />;
}
