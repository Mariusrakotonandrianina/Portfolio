"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { AnimatedThemeToggle } from "./AnimatedThemeToggle";
import { motion, AnimatePresence } from "framer-motion";

const SECTIONS = ["accueil", "abouts", "projects", "skills", "contacts"];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("");
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
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
        rootMargin: "-80px 0px -80px 0px",
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
        ? "text-[hsl(var(--primary))] relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-[hsl(var(--primary))] after:rounded-full font-bold bg-gradient-to-r from-[hsl(var(--primary))] to-[hsl(var(--primary))]/80 bg-clip-text text-transparent"
        : "text-[hsl(var(--foreground))]/80 hover:text-[hsl(var(--primary))] transition-all duration-300 ease-in-out relative hover:after:w-full after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[hsl(var(--primary))] after:rounded-full after:transition-all after:duration-300 hover:bg-gradient-to-r hover:from-[hsl(var(--foreground))] hover:to-[hsl(var(--primary))] hover:bg-clip-text hover:text-transparent";
    }

    return pathname === href
      ? "text-[hsl(var(--primary))] relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-[hsl(var(--primary))] after:rounded-full font-bold bg-gradient-to-r from-[hsl(var(--primary))] to-[hsl(var(--primary))]/80 bg-clip-text text-transparent"
      : "text-[hsl(var(--foreground))]/80 hover:text-[hsl(var(--primary))] transition-all duration-300 ease-in-out relative hover:after:w-full after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[hsl(var(--primary))] after:rounded-full after:transition-all after:duration-300 hover:bg-gradient-to-r hover:from-[hsl(var(--foreground))] hover:to-[hsl(var(--primary))] hover:bg-clip-text hover:text-transparent";
  };

  const menuVariants = {
    closed: {
      opacity: 0,
      y: -20,
      scale: 0.95,
    },
    open: {
      opacity: 1,
      y: 0,
      scale: 1,
    },
  };

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <motion.nav
      className={`w-full px-4 sm:px-6 lg:px-8 py-4 fixed top-0 z-50 transition-all duration-500 ease-in-out ${
        scrolled
          ? "bg-[hsl(var(--background))]/95 backdrop-blur-xl shadow-lg border-b border-[hsl(var(--border))]/20"
          : "bg-transparent"
      }`}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex items-center justify-between">
          {/* Logo Section */}
          <motion.div
            className="flex items-center"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
          >
            <Link href="#accueil" className="flex items-center group">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-[hsl(var(--primary))] to-[hsl(var(--primary))]/60 rounded-full blur-sm opacity-20 group-hover:opacity-40 transition-opacity duration-300"></div>
                <Image
                  className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover relative z-10 ring-2 ring-[hsl(var(--primary))]/20 group-hover:ring-[hsl(var(--primary))]/40 transition-all duration-300"
                  src="/image/logoM.jpeg"
                  alt="RAKOTONANDRIANINA Dimithry Marius - Portfolio"
                  width={48}
                  height={48}
                  priority
                />
              </div>
              <div className="ml-3">
                <h1 className="font-sans text-lg sm:text-xl font-bold tracking-tight group-hover:text-[hsl(var(--primary))] transition-colors duration-300 bg-gradient-to-r from-[hsl(var(--foreground))] to-[hsl(var(--primary))] bg-clip-text text-transparent">
                  Dimithry
                </h1>
                <p className="text-xs text-[hsl(var(--foreground))]/60 font-semibold tracking-widest uppercase hidden sm:block">
                  Portfolio
                </p>
              </div>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center">
            <ul className="flex items-center space-x-8">
              {[
                { href: "#accueil", label: "Accueil" },
                { href: "#abouts", label: "À propos" },
                { href: "#skills", label: "Compétences" },
                { href: "#projects", label: "Projets" },
                { href: "#contacts", label: "Contacts" },
              ].map((item, index) => (
                <motion.li
                  key={item.href}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                >
                  <Link
                    href={item.href}
                    className={`${isActive(
                      item.href
                    )} px-4 py-2 rounded-lg text-sm font-semibold tracking-wider uppercase hover:bg-[hsl(var(--accent))]/50 transition-all duration-300 hover:tracking-widest`}
                    onClick={handleLinkClick}
                  >
                    {item.label}
                  </Link>
                </motion.li>
              ))}
            </ul>
            
            <div className="ml-8 pl-8 border-l border-[hsl(var(--border))]/30">
              <AnimatedThemeToggle />
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 rounded-lg text-[hsl(var(--foreground))] hover:bg-[hsl(var(--accent))]/50 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[hsl(var(--primary))]/20"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            <motion.div
              animate={{ rotate: isOpen ? 90 : 0 }}
              transition={{ duration: 0.3 }}
              className="w-6 h-6 flex items-center justify-center"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                />
              </svg>
            </motion.div>
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial="closed"
              animate="open"
              exit="closed"
              variants={menuVariants}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="lg:hidden mt-4"
            >
              <div className="bg-[hsl(var(--card))] rounded-xl border border-[hsl(var(--border))]/20 p-4 shadow-xl backdrop-blur-xl">
                <ul className="space-y-2">
                  {[
                    { href: "#accueil", label: "Accueil" },
                    { href: "#abouts", label: "À propos" },
                    { href: "#skills", label: "Compétences" },
                    { href: "#projects", label: "Projets" },
                    { href: "#contacts", label: "Contacts" },
                  ].map((item, index) => (
                    <motion.li
                      key={item.href}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1, duration: 0.3 }}
                    >
                      <Link
                        href={item.href}
                        className={`${isActive(
                          item.href
                        )} block px-4 py-3 rounded-lg text-base font-semibold tracking-wider uppercase hover:bg-[hsl(var(--accent))]/50 transition-all duration-300 hover:tracking-widest hover:pl-6`}
                        onClick={handleLinkClick}
                      >
                        {item.label}
                      </Link>
                    </motion.li>
                  ))}
                </ul>
                
                <div className="mt-4 pt-4 border-t border-[hsl(var(--border))]/20">
                  <div className="flex justify-center">
                    <AnimatedThemeToggle />
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}