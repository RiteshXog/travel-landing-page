import { useEffect, useState } from 'react';
import { motion, useMotionValue } from 'framer-motion';

export function CustomCursor() {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const [isHovering, setIsHovering] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    if (isMobile) return;

    let mouseX = -100;
    let mouseY = -100;
    let currentX = -100;
    let currentY = -100;
    let rafId: number;

    const moveCursor = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const animate = () => {
      currentX += (mouseX - currentX) * 0.15;
      currentY += (mouseY - currentY) * 0.15;
      cursorX.set(currentX);
      cursorY.set(currentY);
      rafId = requestAnimationFrame(animate);
    };

    const handleMouseEnter = () => setIsHovering(true);
    const handleMouseLeave = () => setIsHovering(false);

    window.addEventListener('mousemove', moveCursor);

    const interactiveElements = document.querySelectorAll(
      'a, button, [data-cursor-hover], input, textarea'
    );
    interactiveElements.forEach((el) => {
      el.addEventListener('mouseenter', handleMouseEnter);
      el.addEventListener('mouseleave', handleMouseLeave);
    });

    rafId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      cancelAnimationFrame(rafId);
      interactiveElements.forEach((el) => {
        el.removeEventListener('mouseenter', handleMouseEnter);
        el.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, [cursorX, cursorY, isMobile]);

  if (isMobile) return null;

  return (
    <motion.div
      className="pointer-events-none fixed z-[10000] hidden md:block"
      style={{
        x: cursorX,
        y: cursorY,
        translateX: '-50%',
        translateY: '-50%',
      }}
    >
      {/* Default: 6px solid dot */}
      <div
        className="absolute rounded-full"
        style={{
          width: 6,
          height: 6,
          backgroundColor: '#F5EDD8',
          opacity: isHovering ? 0 : 1,
          transition: 'opacity 0.25s ease',
          mixBlendMode: 'difference',
        }}
      />
      {/* Hover: 28px outlined circle */}
      <div
        className="absolute rounded-full"
        style={{
          width: 28,
          height: 28,
          border: '1px solid #F5EDD8',
          backgroundColor: 'transparent',
          opacity: isHovering ? 1 : 0,
          transition: 'opacity 0.25s ease',
          mixBlendMode: 'difference',
          transform: 'translate(-50%, -50%)',
        }}
      />
    </motion.div>
  );
}
