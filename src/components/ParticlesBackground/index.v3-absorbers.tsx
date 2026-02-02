"use client";

import { useEffect, useState, useMemo } from "react";
import type { ISourceOptions } from "@tsparticles/engine";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadAll } from "@tsparticles/all";

interface ParticlesBackgroundProps {
  className?: string;
}

/**
 * Version 3: Absorbers
 * Particles with gravity attraction + twinkle effect
 */
export default function ParticlesBackground({
  className,
}: ParticlesBackgroundProps) {
  const [init, setInit] = useState(false);

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
            mode: "repulse",
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
          repulse: {
            distance: 100,
            duration: 0.4,
          },
          push: {
            quantity: 4,
          },
        },
      },
      particles: {
        color: {
          value: ["#8B5CF6", "#A78BFA", "#C4B5FD"],
        },
        move: {
          direction: "none",
          enable: true,
          outModes: {
            default: "out",
          },
          random: false,
          speed: 1.5,
          straight: false,
          attract: {
            enable: true,
            rotateX: 600,
            rotateY: 1200,
          },
        },
        number: {
          density: {
            enable: true,
            width: 1200,
            height: 800,
          },
          value: 60,
        },
        opacity: {
          value: { min: 0.3, max: 0.7 },
          animation: {
            enable: true,
            speed: 1,
            sync: false,
          },
        },
        shape: {
          type: "circle",
        },
        size: {
          value: { min: 1, max: 4 },
        },
        twinkle: {
          particles: {
            enable: true,
            frequency: 0.05,
            opacity: 1,
            color: {
              value: "#ffffff",
            },
          },
        },
      },
      detectRetina: true,
    }),
    []
  );

  if (!init) return null;

  return <Particles className={className} options={options} />;
}
