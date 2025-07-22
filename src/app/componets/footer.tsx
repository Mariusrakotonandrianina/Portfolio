"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="py-6 lg:py-8 border-t border-[hsl(var(--border))]/20 bg-gradient-to-t from-[hsl(var(--card))] to-[hsl(var(--card))]/80 dark:from-[hsl(var(--dark-background))] dark:to-[hsl(var(--dark-background))]/80 backdrop-blur-sm"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-6 lg:gap-8">
          {/* Menu Container */}
          <ul
            className="flex flex-col gap-6 lg:flex-row lg:gap-10 text-base lg:text-lg font-medium justify-center"
            style={{ fontFamily: "'Poppins', sans-serif, Arial, Helvetica" }}
          >
            {[
              { href: "#accueil", label: "Accueil" },
              { href: "#abouts", label: "À propos" },
              { href: "#projects", label: "Projets" },
              { href: "#skills", label: "Compétences" },
              { href: "#contacts", label: "Contacts" },
            ].map((item) => (
              <motion.li
                key={item.href}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <Link
                  href={item.href}
                  className="relative px-3 py-1 text-[hsl(var(--foreground))] dark:text-[hsl(var(--dark-foreground))] transition-all duration-300 hover:text-[hsl(var(--primary))] after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-gradient-to-r after:from-[hsl(var(--primary))] after:to-[hsl(var(--primary-foreground))] after:rounded-full after:transition-all after:duration-300 hover:after:w-full focus:ring-2 focus:ring-[hsl(var(--primary))]/20 focus:outline-none"
                  tabIndex={0}
                >
                  {item.label}
                </Link>
              </motion.li>
            ))}
          </ul>
            <p className="text-sm text-[hsl(var(--foreground))]/60 dark:text-[hsl(var(--dark-foreground))]/60 font-medium">
              © {new Date().getFullYear()} Dimithry Marius. Tous droits réservés.
            </p>
          </div>
        </div>
    </motion.footer>
  );
}