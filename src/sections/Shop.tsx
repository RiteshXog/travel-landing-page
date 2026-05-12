import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

function BentoCell({
  children,
  className = '',
  delay = 0,
  hoverScale = true,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  hoverScale?: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-15% 0px', amount: 0.2 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{
        duration: 0.9,
        delay,
        ease: [0.16, 1, 0.3, 1],
      }}
      data-cursor-hover
      className={`group relative overflow-hidden ${
        hoverScale
          ? 'transition-all duration-500 ease-organic hover:-translate-y-1'
          : ''
      } ${className}`}
      style={{
        borderColor: hoverScale ? 'rgba(255,255,255,0.08)' : undefined,
        transitionProperty: 'all',
      }}
    >
      {children}
    </motion.div>
  );
}

function ImageCell({
  src,
  alt,
  overlay,
  delay = 0,
}: {
  src: string;
  alt: string;
  overlay?: React.ReactNode;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-15% 0px', amount: 0.2 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{
        duration: 0.9,
        delay,
        ease: [0.16, 1, 0.3, 1],
      }}
      data-cursor-hover
      className="group relative overflow-hidden image-vignette"
      style={{
        border: '1px solid rgba(255,255,255,0.08)',
        transition: 'border-color 0.45s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.45s cubic-bezier(0.16, 1, 0.3, 1)',
      }}
    >
      <img
        src={src}
        alt={alt}
        className="w-full h-full object-cover transition-transform duration-500 ease-organic group-hover:scale-[1.04]"
        style={{
          willChange: 'transform',
        }}
      />
      {/* Hover border glow */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 pointer-events-none hover-shadow-amber"
        style={{
          border: '1px solid rgba(200,146,58,0.6)',
          transition: 'opacity 0.45s cubic-bezier(0.16, 1, 0.3, 1)',
        }}
      />
      {overlay && (
        <div className="absolute inset-0 z-10">{overlay}</div>
      )}
    </motion.div>
  );
}

export function Shop() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerInView = useInView(sectionRef, { once: true, margin: '-10% 0px' });

  return (
    <section ref={sectionRef} className="relative bg-moss" id="shop">
      {/* Section header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={headerInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        className="px-6 md:px-[60px] pt-10 md:pt-16 pb-6"
      >
        <h2
          className="font-cormorant font-light text-cream"
          style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', letterSpacing: '-0.02em' }}
        >
          Shop &rarr;
        </h2>
      </motion.div>

      {/* Bento grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 auto-rows-[400px] md:auto-rows-[480px]">
        {/* Large left cell — clothing */}
        <ImageCell
          src="/bento-clothing.jpg"
          alt="Hand-woven garments on display"
          delay={0}
          overlay={
            <div className="absolute bottom-4 right-4">
              <span className="font-dm font-medium text-[11px] text-cream/70 bg-forest-black/60 px-4 py-1.5 rounded-full">
                From $48
              </span>
            </div>
          }
        />

        {/* Middle cell — waterfall */}
        <ImageCell
          src="/bento-waterfall.jpg"
          alt="Cascading jungle waterfall"
          delay={0.15}
        />

        {/* Right column — stacked */}
        <div className="grid grid-rows-2">
          {/* Top — textile */}
          <ImageCell
            src="/bento-textile.jpg"
            alt="Hand-painted batik textile"
            delay={0.3}
            overlay={
              <div className="absolute top-4 left-4">
                <span className="font-dm font-medium text-[10px] tracking-[0.15em] uppercase text-cream/60">
                  Handcrafted
                </span>
              </div>
            }
          />

          {/* Bottom — CTA cell */}
          <BentoCell
            delay={0.45}
            className="bg-jungle flex items-center justify-center"
            hoverScale={false}
          >
            <a
              href="#"
              data-cursor-hover
              className="font-cormorant font-light italic text-cream text-xl hover:text-amber transition-colors duration-300"
            >
              View All Collection &rarr;
            </a>
          </BentoCell>
        </div>
      </div>
    </section>
  );
}
