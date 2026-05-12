import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { LeafIcon } from '../components/Icons';

export function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const leftRef = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);
  const leftInView = useInView(leftRef, { once: true, margin: '-15% 0px' });
  const rightInView = useInView(rightRef, { once: true, margin: '-15% 0px' });

  return (
    <section ref={sectionRef} className="relative bg-forest-deep" id="about">
      <div className="grid grid-cols-1 md:grid-cols-[55%_45%] min-h-[600px] md:min-h-[700px]">
        {/* Left column — image */}
        <motion.div
          ref={leftRef}
          initial={{ opacity: 0, x: -40 }}
          animate={leftInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -40 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="relative h-[400px] md:h-auto image-vignette overflow-hidden"
        >
          <img
            src="/about-woman.jpg"
            alt="Woman in rice terraces at golden hour"
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Right column — text */}
        <motion.div
          ref={rightRef}
          initial={{ opacity: 0, y: 30 }}
          animate={rightInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col justify-center px-8 md:px-[60px] py-16 md:py-0"
        >
          <h2
            className="font-cormorant font-light text-cream mb-8"
            style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', letterSpacing: '-0.02em' }}
          >
            About
          </h2>

          <p className="font-dm text-[14px] leading-[1.7] text-cream/85 max-w-[420px] mb-6">
            Bali opened in November of 2016 as a concept store to provide the latest fashion
            trends from around the globe under one roof at an affordable price. We are now happy
            to offer our unique clothing online.
          </p>

          <p className="font-cormorant font-light italic text-lg text-cream/70 mb-8">
            <span className="relative">
              Enjoy and Happy Shopping!
              <span
                className="absolute -bottom-2 left-1/2 -translate-x-1/2 h-px bg-lime"
                style={{ width: '50%' }}
              />
            </span>
          </p>

          {/* Horizontal rule */}
          <div className="w-[60px] h-px bg-white/10 mb-6" />

          {/* Label */}
          <div className="flex items-center gap-2">
            <LeafIcon size={16} className="text-cream/50" />
            <span className="font-dm font-medium text-[10px] tracking-wide-custom uppercase text-cream/50">
              EST. 2016 &middot; BALI
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
