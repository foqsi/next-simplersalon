'use client';

import { useCallback } from 'react';
import Particles from 'react-tsparticles';
import { loadSlim } from 'tsparticles-slim';
import type { Engine } from 'tsparticles-engine';

export default function ParticlesBackground() {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine); // Load slim preset
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      className="absolute inset-0 z-0 pointer-events-none"
      options={{
        fullScreen: false,
        background: { color: 'transparent' },
        particles: {
          number: { value: 40 },
          color: { value: '#ffffff' },
          opacity: { value: 0.2 },
          size: { value: { min: 1, max: 3 } },
          move: { enable: true, speed: 0.6 },
          links: {
            enable: true,
            color: '#ffffff',
            opacity: 0.05,
            distance: 150,
          },
        },
      }}
    />
  );
}
