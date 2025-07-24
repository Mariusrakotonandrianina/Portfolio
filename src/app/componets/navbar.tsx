"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { AnimatedThemeToggle } from "./AnimatedThemeToggle";
import { motion, AnimatePresence } from "framer-motion";
import { menuVariants } from "../variants/variants";

const SECTIONS = ["accueil", "experiences", "projects", "skills", "contacts"];

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
        ? "text-[hsl(200,90%,50%)] relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-full after:h-[2px] after:bg-gradient-to-r after:from-[hsl(220,90%,40%)] after:via-[hsl(200,90%,50%)] after:to-[hsl(180,90%,60%)] after:rounded-full font-medium bg-gradient-to-r from-[hsl(220,90%,40%)] via-[hsl(200,90%,50%)] to-[hsl(180,90%,60%)] bg-clip-text light:text-[hsl(200,90%,45%)] dark:text-transparent text-shadow-sm"
        : "text-[hsl(var(--foreground))] dark:text-[hsl(var(--dark-foreground))] hover:text-[hsl(200,90%,50%)] hover:bg-gradient-to-r hover:from-[hsl(220,90%,50%)] hover:to-[hsl(180,90%,60%)] hover:bg-clip-text hover:text-transparent transition-all duration-300 ease-in-out relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-gradient-to-r after:from-[hsl(220,90%,50%)] after:to-[hsl(180,90%,60%)] after:rounded-full after:transition-all after:duration-300 hover:after:w-full";
    }

    return pathname === href
      ? "text-[hsl(200,90%,50%)] relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-full after:h-[2px] after:bg-gradient-to-r after:from-[hsl(220,90%,40%)] after:via-[hsl(200,90%,50%)] after:to-[hsl(180,90%,60%)] after:rounded-full font-medium bg-gradient-to-r from-[hsl(220,90%,40%)] via-[hsl(200,90%,50%)] to-[hsl(180,90%,60%)] bg-clip-text light:text-[hsl(200,90%,45%)] dark:text-transparent text-shadow-sm"
      : "text-[hsl(var(--foreground))] dark:text-[hsl(var(--dark-foreground))] hover:text-[hsl(200,90%,50%)] hover:bg-gradient-to-r hover:from-[hsl(220,90%,50%)] hover:to-[hsl(180,90%,60%)] hover:bg-clip-text hover:text-transparent transition-all duration-300 ease-in-out relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-gradient-to-r after:from-[hsl(220,90%,50%)] after:to-[hsl(180,90%,60%)] after:rounded-full after:transition-all after:duration-300 hover:after:w-full";
  };

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <motion.nav
      className={`w-full px-4 sm:px-6 lg:px-8 py-3 fixed top-0 z-50 transition-all duration-500 ease-in-out ${
        scrolled
          ? "bg-[hsl(var(--card))]/95 dark:bg-[hsl(var(--dark-background))]/95 backdrop-blur-xl shadow-lg border-b border-[hsl(var(--border))]/20"
          : "bg-transparent"
      }`}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex items-center justify-between">
          <motion.div
            className="flex items-center"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
          >
            <Link href="#accueil" className="flex items-center group">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-[hsl(var(--primary))] to-[hsl(var(--primary-foreground))]/60 rounded-full blur-sm opacity-20 group-hover:opacity-40 transition-opacity duration-300"></div>
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
                <p className="text-xs text-[hsl(var(--foreground))]/60 dark:text-[hsl(var(--dark-foreground))]/60 font-semibold tracking-widest lowercase hidden sm:block">
                  portfolio
                </p>
              </div>
            </Link>
          </motion.div>

          <div className="flex items-center space-x-2">
            <div className="hidden lg:flex items-center space-x-8">
              <ul
                className="flex items-center space-x-8"
                style={{
                  fontFamily: "'Poppins', sans-serif, Arial, Helvetica",
                  fontWeight: "300",
                  letterSpacing: "0.02em",
                  lineHeight: "1.8",
                }}
              >
                {[
                  { href: "#accueil", label: "À propos" },
                  { href: "#skills", label: "Compétences" },
                  { href: "#experiences", label: "Expérience" },
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
                      )} px-3 py-2 rounded-lg transition-all duration-300 hover:bg-[hsl(var(--primary))]/10 focus:ring-2 focus:ring-[hsl(var(--primary))]/20 focus:outline-none`}
                      tabIndex={0}
                    >
                      {item.label}
                    </Link>
                  </motion.li>
                ))}
              </ul>
              <div className="ml-8 pl-8 border-l border-[hsl(var(--border))]/30">
                <AnimatedThemeToggle aria-label="Toggle theme" />
              </div>
            </div>

            <button
              className="lg:hidden p-1.5 rounded-lg text-[hsl(var(--foreground))] dark:text-[hsl(var(--dark-foreground))] hover:bg-[hsl(var(--primary))]/10 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[hsl(var(--primary))]/20"
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
                    d={
                      isOpen
                        ? "M6 18L18 6M6 6l12 12"
                        : "M4 6h16M4 12h16M4 18h16"
                    }
                  />
                </svg>
              </motion.div>
            </button>
            <div className="lg:hidden">
              <AnimatedThemeToggle aria-label="Toggle theme" />
            </div>
          </div>
        </div>

        <AnimatePresence>
          {isOpen && (
            <>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.7 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="fixed inset-0 bg-black z-40 lg:hidden"
                onClick={() => setIsOpen(false)}
                aria-hidden="true"
              />
              <motion.div
                variants={menuVariants}
                initial="closed"
                animate="open"
                exit="closed"
                className="fixed top-0 right-0 h-full w-[80%] max-w-sm bg-gradient-to-b from-[hsl(var(--card))] to-[hsl(var(--card))]/80 dark:from-[hsl(var(--dark-background))] dark:to-[hsl(var(--dark-background))]/80 border-l border-[hsl(var(--border))]/20 shadow-2xl z-50 p-6 backdrop-blur-xl lg:hidden"
              >
                <div className="flex justify-end">
                  <button
                    className="p-2 rounded-lg text-[hsl(var(--foreground))] dark:text-[hsl(var(--dark-foreground))] hover:bg-[hsl(var(--primary))]/10 focus:outline-none focus:ring-2 focus:ring-[hsl(var(--primary))]/20"
                    onClick={() => setIsOpen(false)}
                    aria-label="Close menu"
                  >
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>
                <ul
                  className="space-y-6 font-sans text-lg font-medium tracking-wide mt-4"
                  style={{
                    fontFamily: "'Poppins', sans-serif, Arial, Helvetica",
                  }}
                >
                  {[
                    { href: "#accueil", label: "À propos" },
                    { href: "#skills", label: "Compétences" },
                    { href: "#experiences", label: "Exprérience" },
                    { href: "#projects", label: "Projets" },
                    { href: "#contacts", label: "Contacts" },
                  ].map((item, index) => (
                    <motion.li
                      key={item.href}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1, duration: 0.3 }}
                    >
                      <Link
                        href={item.href}
                        className={`${isActive(
                          item.href
                        )} block px-4 py-3 rounded-lg transition-all duration-300 hover:bg-[hsl(var(--primary))]/10 focus:ring-2 focus:ring-[hsl(var(--primary))]/20 focus:outline-none`}
                        onClick={handleLinkClick}
                        tabIndex={0}
                      >
                        {item.label}
                      </Link>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}
