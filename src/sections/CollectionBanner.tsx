import { useRef } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';

export function CollectionBanner() {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(contentRef, { once: true, margin: '-15% 0px' });
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], [0, -160]);

  return (
    <section
      ref={sectionRef}
      className="relative h-[350px] md:h-[400px] overflow-hidden"
    >
      {/* Parallax background */}
      <motion.div
        style={{ y: bgY }}
        className="absolute inset-0 z-[1] will-change-transform"
      >
        <img
          src="/collection-waterfall.jpg"
          alt="Cascading jungle waterfall"
          className="w-full h-[130%] object-cover"
        />
      </motion.div>

      {/* Gradient overlay */}
      <div
        className="absolute inset-0 z-[2]"
        style={{
          background:
            'linear-gradient(to right, rgba(10,15,9,0.85) 0%, rgba(10,15,9,0.4) 50%, transparent 100%)',
        }}
      />

      {/* Content */}
      <div ref={contentRef} className="relative z-[3] h-full flex flex-col justify-center px-8 md:px-[60px]">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="font-cormorant font-light text-cream mb-1"
          style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', letterSpacing: '-0.02em' }}
        >
          New collection
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="font-cormorant font-light text-cream/80 mb-8"
          style={{ fontSize: 'clamp(1.5rem, 3vw, 2.5rem)', letterSpacing: '-0.02em' }}
        >
          is already in the store
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.9, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
        >
          <a
            href="#shop"
            data-cursor-hover
            className="cta-button inline-block font-dm font-medium text-[12px] tracking-[0.1em] uppercase px-8 py-3 rounded-full"
          >
            Explore
          </a>
        </motion.div>
      </div>
    </section>
  );
}
