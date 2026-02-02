"use client";

import { useEffect, useState, useMemo } from "react";
import type { ISourceOptions } from "@tsparticles/engine";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadAll } from "@tsparticles/all";

interface ParticlesBackgroundProps {
  className?: string;
}

/**
 * Version 5: Shooting Stars
 * Occasional shooting stars/meteors streaking across
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
      particles: {
        color: {
          value: ["#8B5CF6", "#A78BFA", "#C4B5FD", "#ffffff"],
        },
        move: {
          direction: "bottom-left",
          enable: true,
          outModes: {
            default: "out",
          },
          random: false,
          speed: { min: 10, max: 20 },
          straight: true,
        },
        number: {
          value: 0,
        },
        opacity: {
          value: { min: 0.4, max: 1 },
        },
        shape: {
          type: "circle",
        },
        size: {
          value: { min: 1, max: 3 },
        },
        trail: {
          enable: true,
          length: 20,
          fill: {
            color: "#0A0A0B",
          },
        },
      },
      emitters: [
        {
          direction: "bottom-left",
          rate: {
            delay: 1.5,
            quantity: 1,
          },
          position: {
            x: 100,
            y: 0,
          },
          size: {
            width: 100,
            height: 0,
          },
        },
      ],
      detectRetina: true,
    }),
    []
  );

  if (!init) return null;

  return <Particles className={className} options={options} />;
}
