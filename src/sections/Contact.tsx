import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

export function Contact() {
  const sectionRef = useRef<HTMLElement>(null);
  const leftRef = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);
  const leftInView = useInView(leftRef, { once: true, margin: "-15% 0px" });
  const rightInView = useInView(rightRef, { once: true, margin: "-15% 0px" });
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormData({ name: "", email: "", message: "" });
  };

  const inputClasses =
    "w-full bg-transparent border-0 border-b border-white/15 py-3 px-0 font-dm text-[14px] text-cream placeholder:text-cream/40 focus:outline-none focus:border-lime transition-colors duration-300";

  return (
    <section ref={sectionRef} className="relative bg-forest-black" id="contact">
      <div className="grid grid-cols-1 md:grid-cols-[45%_55%] min-h-[500px] md:min-h-[600px]">
        {/* Left column — frosted glass form */}
        <motion.div
          ref={leftRef}
          initial={{ opacity: 0, y: 30 }}
          animate={leftInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="p-8 md:p-[60px] flex flex-col justify-center"
          style={{
            background: "rgba(26, 35, 24, 0.6)",
            backdropFilter: "blur(12px)",
            borderRight: "1px solid rgba(255,255,255,0.08)",
          }}
        >
          <h2
            className="font-cormorant font-light text-cream mb-8"
            style={{
              fontSize: "clamp(2rem, 4vw, 3rem)",
              letterSpacing: "-0.02em",
            }}
          >
            Contact us
          </h2>

          <p className="font-dm text-[13px] leading-[1.7] text-cream/70 mb-10">
            Ritesh Tours & Travels Ambethan Road, Chakan, Maharashtra – 410501,
            India. .
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <input
              type="text"
              placeholder="Name"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              className={inputClasses}
            />
            <input
              type="email"
              placeholder="Email"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              className={inputClasses}
            />
            <textarea
              placeholder="Message"
              rows={3}
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
              className={`${inputClasses} resize-none`}
            />
            <button
              type="submit"
              data-cursor-hover
              className="w-full font-dm font-medium text-[12px] tracking-[0.1em] uppercase bg-cream text-forest-black py-3.5 rounded-full hover:bg-lime transition-colors duration-300 mt-4"
            >
              Send
            </button>
          </form>
        </motion.div>

        {/* Right column — Ganesh image */}
        <motion.div
          ref={rightRef}
          initial={{ opacity: 0 }}
          animate={rightInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="relative h-[400px] md:h-auto image-vignette overflow-hidden"
        >
          <img
            src={`${import.meta.env.BASE_URL}contact-ganesh.jpg`}
            alt="Carved stone Ganesh with offerings"
            className="w-full h-full object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
}
