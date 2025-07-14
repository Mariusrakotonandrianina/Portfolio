"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Footer() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.footer
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`py-10 border-t shadow-lg border-[hsl(var(--border))]`}
      style={{
        backgroundColor: "hsl(var(--background))",
        color: "hsl(var(--foreground))",
      }}
    >
      <div className="container mx-auto flex justify-center">
        <ul className="flex flex-col gap-3 lg:flex-row lg:gap-8 text-lg font-medium items-center">
          {[
            { href: "/", label: "Accueil" },
            { href: "#abouts", label: "À propos" },
            { href: "#projects", label: "Projets" },
            { href: "#skills", label: "Compétences" },
            { href: "#contacts", label: "Contacts" },
          ].map((item) => (
            <motion.li key={item.href} whileHover={{ scale: 1.05 }}>
              <Link
                href={item.href}
                className="relative px-3 py-1 transition-all duration-300 hover:text-[hsl(var(--primary))] before:content-[''] before:absolute before:top-0 before:left-0 before:w-full before:h-[2px] before:bg-[hsl(var(--primary))] before:scale-x-0 hover:before:scale-x-100 before:origin-left before:transition-transform before:duration-300"
              >
                {item.label}
              </Link>
            </motion.li>
          ))}
        </ul>
      </div>
    </motion.footer>
  );
}
