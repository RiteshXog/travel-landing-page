import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { LeafIcon, GridIcon, BookmarkIcon } from "../components/Icons";

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  // Parallax: BALI moves slower than mountains, creating layered depth
  const bgY = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const stripY = useTransform(scrollYProgress, [0, 1], [0, 40]);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[120vh] overflow-hidden"
    >
      {/* Background plane — mountains image sits ABOVE BALI text (z-[3]) */}
      <motion.div style={{ y: bgY }} className="absolute inset-0 z-[2]">
        <img
          src={`${import.meta.env.BASE_URL}hero-mount.png`}
          alt="Misty karst mountains"
          className="w-full h-full object-cover object-center scale-110"
        />
        {/* Gradient mask: fade out bottom of mountains to reveal BALI below */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(0,0,0,0) 45%, rgba(26,35,24,1) 75%)",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at center, transparent 40%, rgba(0,0,0,0.35) 100%)",
          }}
        />
      </motion.div>

      {/* Mid-ground: BALI text — z BELOW mountains (z-[1]) */}
      <div className="absolute inset-0 z-[3] flex flex-col items-center pointer-events-none">
        <motion.h1
          style={{
            y: textY,
            fontSize: "clamp(8rem, 70vw, 32rem)",
            opacity: 0.42,
            letterSpacing: "-0.04em",
            lineHeight: 0.85,
            marginTop: "15vh",
            mixBlendMode: "overlay",
          }}
          className="font-cormorant font-light text-cream select-none will-change-transform"
        >
          BALI
        </motion.h1>
      </div>

      {/* Foreground plane */}
      <div className="absolute inset-0 z-[4] flex flex-col">
        {/* Top bar */}
        <div className="flex items-center justify-between px-6 md:px-10 pt-5 md:pt-6">
          {/* Wordmark */}
          <div className="flex flex-col leading-none">
            <div className="flex items-center gap-2">
              <LeafIcon size={16} className="text-cream" />

              <span className="font-dm font-medium text-cream text-[11px] tracking-wide-custom uppercase">
                BALI
              </span>
            </div>

            <span className="ml-6 mt-1 text-[8px] tracking-[0.28em] uppercase text-cream/35">
              Crafted by Ritesh
            </span>
          </div>

          {/* Top-right icons */}
          <div className="flex items-center gap-4">
            <button
              data-cursor-hover
              className="text-cream/60 hover:text-cream transition-colors duration-300"
            >
              <GridIcon size={20} />
            </button>
            <button
              data-cursor-hover
              className="text-cream/60 hover:text-cream transition-colors duration-300"
            >
              <BookmarkIcon size={20} />
            </button>
          </div>
        </div>

        {/* Horizontal nav strip */}
        <nav className="flex items-center justify-center gap-8 md:gap-12 mt-4">
          {["NEW COLLECTION", "CATEGORY", "TOP SALES"].map((item, i) => (
            <a
              key={item}
              href="#"
              data-cursor-hover
              className={`nav-link font-dm font-medium text-[11px] tracking-wide-custom uppercase text-cream/70 hover:text-cream transition-colors duration-300 ${
                i === 0 ? "active" : ""
              }`}
            >
              {item}
            </a>
          ))}
        </nav>

        {/* Left edge vine */}
        <div className="absolute left-0 top-[20%] h-[60%] opacity-25 pointer-events-none">
          <img
            src={`${import.meta.env.BASE_URL}hero-vine.png`}
            alt=""
            className="h-full w-auto object-contain"
            style={{ transform: "rotate(-10deg) translateX(-20%)" }}
          />
        </div>

        {/* Right edge: MAIN label — fixed anchor, no transform */}
        
        <div
          className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none"
          style={{ writingMode: "vertical-rl" }}
        >
          <span
            className="font-dm font-medium text-[10px] tracking-[0.25em] uppercase text-cream/35"
            style={{ transform: "rotate(180deg)" }}
          >
            MAIN
          </span>
        </div>

        {/* Spacer to push editorial strip to bottom */}
        <div className="min-h-[45vh]" />

        {/* Editorial strip at bottom — slowest parallax drift */}
        <motion.div
          style={{ y: stripY }}
          className="grid grid-cols-1 md:grid-cols-3 min-h-[38vh] border-t border-white/[0.06] will-change-transform"
        >
          {/* Left panel — manifesto */}
          <div className="bg-forest-black/85 backdrop-blur-[8px] p-8 md:p-10">
            <p className="font-dm text-[13px] leading-relaxed text-cream/85 max-w-md">
              Beyond the daily visual inspiration we draw from our paradise, and
              the spiritual world and places in the Balinese world... From silk
              we weaved to the world from this safe and natural place.
            </p>
          </div>

          {/* Middle panel — image card */}
          <div className="relative h-[220px] md:h-auto image-vignette overflow-hidden">
            <img
              src={`${import.meta.env.BASE_URL}new.png`}
              alt="Moss-covered carved stone"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 z-10 p-6 flex flex-col justify-between">
              <span className="font-cormorant text-[28px] font-light text-cream">
                Stile
              </span>
              <div className="mt-3 w-24 h-[1px] bg-gradient-to-r from-amber/80 via-cream/40 to-transparent" />
              <p className="font-dm text-[12px] leading-relaxed text-cream/80 max-w-[280px]">
                A hand-drawn maze of intricate patterns and bright colors, these
                pieces invite you to interpret your own destiny from the
                details.
              </p>
            </div>
          </div>

          {/* Right panel — accent card */}
          <div className="absolute inset-0 bg-gradient-to-tr from-amber/5 via-transparent to-cream/5 pointer-events-none" />
          <div
            className="relative p-8 md:p-10 flex flex-col justify-center transition-all duration-700 hover:scale-[1.02]"
            style={{
              background: "#2C3B28",
              backgroundImage:
                "linear-gradient(to top, rgba(200,146,58,0.08), transparent)",
            }}
          >
            <p className="font-dm uppercase tracking-[0.25em] text-[10px] text-cream/50 mb-4">
              CURATED INTERIORS
            </p>
            <h3
              className="font-cormorant font-light text-cream leading-tight"
              style={{
                fontSize: "clamp(2rem, 4vw, 3.2rem)",
                lineHeight: 1.1,
                letterSpacing: "-0.03em",
              }}
            >
              A piece of paradise in your home
            </h3>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
