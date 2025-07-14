"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { AnimatedThemeToggle } from "./AnimatedThemeToggle";
import { motion } from "framer-motion";

const SECTIONS = ["accueil", "abouts", "projects", "skills", "contacts"];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("");
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        threshold: 0.6,
      }
    );

    SECTIONS.forEach((id) => {
      const section = document.getElementById(id);
      if (section) {
        observer.observe(section);
      }
    });

    return () => {
      SECTIONS.forEach((id) => {
        const section = document.getElementById(id);
        if (section) observer.unobserve(section);
      });
    };
  }, []);

  const isActive = (href: string): string => {
    if (href.startsWith("#")) {
      const target = href.replace("#", "");
      return activeSection === target
        ? "text-[hsl(var(--primary))] border-b-2 border-[hsl(var(--primary))] font-semibold"
        : "text-[hsl(var(--foreground))] hover:text-[hsl(var(--primary))] transition-all duration-300 ease-in-out";
    }

    return pathname === href
      ? "text-[hsl(var(--primary))] border-b-2 border-[hsl(var(--primary))] font-semibold"
      : "text-[hsl(var(--foreground))] hover:text-[hsl(var(--primary))] transition-all duration-300 ease-in-out";
  };

  return (
    <motion.nav
      className={`w-full sm:px-10 sm:py-4 fixed top-0 left-0 z-50 transition-all duration-300 navbar-blur ${
        scrolled
          ? "bg-[hsl(var(--background)/.98)] shadow-lg border-b border-[hsl(var(--border))]"
          : "bg-[hsl(var(--background)/.92)]"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-6xl mx-auto flex flex-wrap items-center justify-between">
        <motion.div
          className="flex items-center order-1 mr-10"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        >
          <div className="flex items-center rounded-full px-4 py-2 bg-[hsl(var(--background))] shadow-md hover:shadow-lg transition-shadow">
            <Image
              className="w-12 h-12 rounded-full object-cover"
              src="/image/logoM.jpeg"
              alt="RAKOTONANDRIANINA Dimithry Marius - Portfolio"
              width={48}
              height={48}
              priority
            />
            <h1 className="font-sans text-[hsl(var(--foreground))] text-base sm:text-lg font-bold ml-4 tracking-tight">
              Dimithry's Portfolio
            </h1>
          </div>
        </motion.div>
        
        <button
          className="lg:hidden text-[hsl(var(--foreground))] text-2xl focus:outline-none p-2 rounded-md hover:bg-[hsl(var(--accent))] transition-colors border border-[hsl(var(--border))]"
          onClick={() => setIsOpen(!isOpen)}
        >
          <motion.div
            animate={{ rotate: isOpen ? 90 : 0 }}
            transition={{ duration: 0.2 }}
          >
            ☰
          </motion.div>
        </button>

        <motion.div
          className={`w-full lg:w-auto ${
            isOpen ? "block" : "hidden"
          } lg:flex lg:items-center order-2 mt-4 lg:mt-0`}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div
            className={`lg:hidden ${
              isOpen ? "block" : "hidden"
            } bg-[hsl(var(--card))] rounded-lg border border-[hsl(var(--border))] p-4 mt-4`}
          >
            <ul className="flex flex-col gap-3 text-base font-medium font-sans tracking-wide">
              {[
                { href: "#accueil", label: "Accueil" },
                { href: "#abouts", label: "À propos" },
                { href: "#skills", label: "Compétences" },
                { href: "#projects", label: "Projets" },
                { href: "#contacts", label: "Contacts" },
              ].map((item) => (
                <motion.li
                  key={item.href}
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <Link
                    href={item.href}
                    className={`${isActive(
                      item.href
                    )} px-3 py-2 rounded-md block hover:bg-[hsl(var(--accent))] transition-all duration-200`}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </Link>
                </motion.li>
              ))}
              <li className="pt-2 border-t border-[hsl(var(--border))]">
                <AnimatedThemeToggle />
              </li>
            </ul>
          </div>

          <ul className="hidden lg:flex lg:gap-8 text-base sm:text-lg font-medium font-sans tracking-wide">
            {[
              { href: "#accueil", label: "Accueil" },
              { href: "#abouts", label: "À propos" },
              { href: "#skills", label: "Compétences" },
              { href: "#projects", label: "Projets" },
              { href: "#contacts", label: "Contacts" },
            ].map((item) => (
              <motion.li
                key={item.href}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <Link
                  href={item.href}
                  className={`${isActive(
                    item.href
                  )} px-3 py-2 rounded-md hover:bg-[hsl(var(--accent))] transition-all duration-200`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              </motion.li>
            ))}
            <li className="px-10">
              <AnimatedThemeToggle />
            </li>
          </ul>
        </motion.div>
      </div>
    </motion.nav>
  );
}
