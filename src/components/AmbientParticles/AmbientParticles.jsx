import React, { useEffect, useRef, useState } from 'react';
import { useTheme } from '../../context/ThemeContext';

/**
 * AmbientParticles
 * 
 * A serene, performance-optimized particle animation system designed for
 * neutral portfolio sections. Particles move with natural, organic motion—
 * floating, drifting, and fading like dust in quiet air.
 */

const AmbientParticles = ({ density = 0.08, enableParallax = true, className = '' }) => {
  const { theme } = useTheme();
  const canvasRef = useRef(null);
  const mouseRef = useRef({ x: 0, y: 0 });
  const particlesRef = useRef([]);
  const scrollRef = useRef(0);
  const animationIdRef = useRef(null);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  /**
   * Initialize or update particle system based on canvas size
   */
  const initializeParticles = (canvas) => {
    const targetCount = Math.floor(canvas.width * canvas.height * density / 1000);
    const currentCount = particlesRef.current.length;

    if (currentCount < targetCount) {
      // Add new particles
      for (let i = currentCount; i < targetCount; i++) {
        particlesRef.current.push(createParticle(canvas));
      }
    } else if (currentCount > targetCount) {
      // Remove excess particles
      particlesRef.current = particlesRef.current.slice(0, targetCount);
    }
  };

  /**
   * Create a single particle with organic motion characteristics
   */
  const createParticle = (canvas) => {
    const isAccent = Math.random() < 0.08; // 8% of particles are accent colors
    const type = Math.random() < 0.6 ? 'dot' : Math.random() < 0.7 ? 'stroke' : 'organic';

    return {
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.3, // Very slow horizontal drift
      vy: (Math.random() - 0.5) * 0.15 - 0.05, // Slight upward bias
      radius: isAccent ? Math.random() * 1.5 + 0.8 : Math.random() * 1 + 0.4,
      opacity: Math.random() * 0.06 + 0.03,
      targetOpacity: Math.random() * 0.08 + 0.04,
      life: Math.random() * 200,
      maxLife: Math.random() * 300 + 200,
      isAccent,
      type,
    };
  };

  /**
   * Update particle position and life
   */
  const updateParticle = (particle, canvas) => {
    // Gentle organic motion with perlin-like behavior
    particle.x += particle.vx;
    particle.y += particle.vy;

    // Subtle acceleration based on position (creates organic "wind" feel)
    const timeFactor = particle.life * 0.01;
    particle.vx += Math.sin(timeFactor) * 0.01;
    particle.vy -= 0.04; // Very slow upward drift

    // Soft bound wrapping (particles exit and re-enter gracefully)
    const padding = 50;
    if (particle.x < -padding) particle.x = canvas.width + padding;
    if (particle.x > canvas.width + padding) particle.x = -padding;
    if (particle.y < -padding) particle.y = canvas.height + padding;
    if (particle.y > canvas.height + padding) particle.y = -padding;

    // Smooth opacity transitions (breathing effect)
    particle.life += 1;
    const lifeProgress = particle.life / particle.maxLife;

    // Ease in/out opacity curve
    const easeOpacity = Math.sin(lifeProgress * Math.PI) * 0.5 + 0.5;
    particle.targetOpacity = particle.isAccent ?
      (Math.random() * 0.12 + 0.06) :
      (Math.random() * 0.08 + 0.04);
    particle.opacity += (particle.targetOpacity - particle.opacity) * 0.05;

    // Reset particle at end of life
    if (particle.life >= particle.maxLife) {
      particle.life = 0;
      particle.x = Math.random() * canvas.width;
      particle.y = Math.random() * canvas.height;
    }
  };

  /**
   * Render particle with appropriate style
   */
  const drawParticle = (ctx, particle) => {
    ctx.globalAlpha = particle.opacity;

    if (particle.isAccent) {
      // Rare accent particles (cyan or warm red/purple depending on theme)
      ctx.fillStyle = Math.random() > 0.5 ? '#00f2ff' : (theme === 'dark' ? '#7000ff' : '#0055ff');
    } else {
      ctx.fillStyle = theme === 'dark' ? '#ffffff' : '#000000';
    }

    switch (particle.type) {
      case 'dot':
        // Simple, soft circle
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        ctx.fill();
        break;

      case 'stroke':
        // Thin line segment (dust-like)
        ctx.strokeStyle = particle.isAccent ? ctx.fillStyle : (theme === 'dark' ? '#ffffff' : '#000000');
        ctx.lineWidth = 0.5;
        ctx.lineCap = 'round';
        ctx.beginPath();
        ctx.moveTo(particle.x - 2, particle.y);
        ctx.lineTo(particle.x + 2, particle.y);
        ctx.stroke();
        break;

      case 'organic':
        // Subtle organic shape (small bird-like form)
        ctx.save();
        ctx.translate(particle.x, particle.y);
        ctx.rotate(particle.vx * 0.1);
        ctx.beginPath();
        ctx.ellipse(0, 0, particle.radius * 1.5, particle.radius * 0.8, 0, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
        break;
    }

    ctx.globalAlpha = 1;
  };

  /**
   * Main animation loop
   */
  const animate = () => {
    const canvas = canvasRef.current;
    if (!canvas) {
      animationIdRef.current = requestAnimationFrame(animate);
      return;
    }

    const ctx = canvas.getContext('2d');
    if (!ctx) {
      animationIdRef.current = requestAnimationFrame(animate);
      return;
    }

    // Clear canvas for transparency
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Update and draw particles
    particlesRef.current.forEach((particle) => {
      updateParticle(particle, canvas);
      drawParticle(ctx, particle);
    });

    animationIdRef.current = requestAnimationFrame(animate);
  };

  /**
   * Setup and teardown
   */
  useEffect(() => {
    // Check for reduced motion preference
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);

    const handleMediaChange = (e) => {
      setPrefersReducedMotion(e.matches);
    };

    mediaQuery.addEventListener('change', handleMediaChange);

    const canvas = canvasRef.current;
    if (!canvas) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth * window.devicePixelRatio;
      canvas.height = canvas.offsetHeight * window.devicePixelRatio;

      const ctx = canvas.getContext('2d');
      if (ctx) {
        ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
      }

      initializeParticles(canvas);
    };

    resizeCanvas();

    // Handle mouse movement for parallax
    const handleMouseMove = (e) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };

    // Handle scroll for subtle effects
    const handleScroll = () => {
      scrollRef.current = window.scrollY;
    };

    // Start animation if motion is not reduced
    if (!prefersReducedMotion) {
      animate();
    }

    window.addEventListener('resize', resizeCanvas);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);

    return () => {
      mediaQuery.removeEventListener('change', handleMediaChange);
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
      if (animationIdRef.current) {
        cancelAnimationFrame(animationIdRef.current);
      }
    };
  }, [prefersReducedMotion, enableParallax, theme]);

  /**
   * Handle prefers-reduced-motion
   */
  useEffect(() => {
    if (prefersReducedMotion) {
      if (animationIdRef.current) {
        cancelAnimationFrame(animationIdRef.current);
      }

      // Static render for reduced motion
      const canvas = canvasRef.current;
      if (canvas) {
        const ctx = canvas.getContext('2d');
        if (ctx) {
          ctx.clearRect(0, 0, canvas.width, canvas.height);
        }
      }
    } else {
      animate();
    }
  }, [prefersReducedMotion]);

  return (
    <canvas
      ref={canvasRef}
      className={`w-full h-full absolute inset-0 -z-10 pointer-events-none ${className}`}
      style={{
        display: 'block',
      }}
    />
  );
};

export default AmbientParticles;
