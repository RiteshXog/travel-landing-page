import { LeafIcon, InstagramIcon } from "../components/Icons";

import { Github, Linkedin } from "lucide-react";

export function Footer() {
  const navLinks = ["Home", "About", "Shop", "Contact"];

  return (
    <footer className="relative bg-forest-black border-t border-white/[0.06]">
      <div className="px-8 md:px-[60px] py-10">
        <div className="relative flex flex-col items-center justify-center min-h-[300px]">
          {/* Left — wordmark */}
          <div className="flex flex-col items-center md:items-start gap-2">
            <span className="font-dm font-bold text-[14px] tracking-[0.2em] text-cream">
              BALI
            </span>
            <LeafIcon size={16} className="text-cream/50" />
          </div>

          {/* Center — nav */}
          <nav className="flex items-center gap-1">
            {navLinks.map((link, i) => (
              <span key={link} className="flex items-center">
                <a
                  href={link === "Home" ? "#" : `#${link.toLowerCase()}`}
                  data-cursor-hover
                  className="font-dm font-medium text-[11px] tracking-[0.15em] uppercase text-cream/50 hover:text-cream transition-colors duration-250"
                >
                  {link}
                </a>
                {i < navLinks.length - 1 && (
                  <span className="text-cream/30 mx-2">&middot;</span>
                )}
              </span>
            ))}
          </nav>

          {/* Right — social + copyright */}
          <div className="flex flex-col items-center md:items-end gap-4">
            <div className="flex items-center gap-5">
              <a
                href="https://www.instagram.com/riteshxog/"
                target="_blank"
                data-cursor-hover
                className="text-cream/40 hover:text-cream transition-colors duration-250"
                aria-label="Instagram"
              >
                <InstagramIcon size={20} />
              </a>
              <a
                href="https://github.com/RiteshXog"
                target="_blank"
                data-cursor-hover
                className="text-cream/40 hover:text-cream transition-colors duration-250"
                aria-label="Github"
              >
                <Github size={20} />
              </a>
              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/ritesh-naik-5b9370409/"
                target="_blank"
                data-cursor-hover
                className="text-cream/40 hover:text-amber hover:scale-110 transition-all duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
            </div>
            <span className="font-dm text-[10px] text-cream/30">
              &copy; 2026 BALI
            </span>
            <div className="flex justify-center w-full my-8">
              <div className="h-px w-56 bg-gradient-to-r from-transparent via-amber/50 to-transparent" />
            </div>
            <p className="font-cormorant text-[32px] md:text-[42px] font-light text-cream leading-tight text-center">
              Crafted & Developed by Ritesh
            </p>
            <span className="mt-8 text-[10px] uppercase tracking-[0.35em] text-cream/20 text-center w-full block">
              EST. 2026
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
