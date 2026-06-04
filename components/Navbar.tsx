"use client";

import { useEffect, useState } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-black/80 backdrop-blur-lg border-b border-white/10"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
        <a
          href="#"
          className="text-xl font-bold tracking-wider text-white"
        >
          HW
        </a>

        <nav className="hidden gap-8 md:flex">
          <a href="#projects" className="text-white/70 hover:text-cyan-400">
            Projects
          </a>

          <a href="#timeline" className="text-white/70 hover:text-cyan-400">
            Experience
          </a>

          <a href="#domains" className="text-white/70 hover:text-cyan-400">
            Skills
          </a>

          <a href="#contact" className="text-white/70 hover:text-cyan-400">
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
}