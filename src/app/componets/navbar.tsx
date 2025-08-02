"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { AnimatedThemeToggle } from "./AnimatedThemeToggle";
import { motion, AnimatePresence } from "framer-motion";

const SECTIONS = ["accueil", "skills", "experiences", "projects", "contacts"];

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
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  useEffect(() => {
    let ticking = false;

    const updateActiveSection = () => {
      const scrollPosition = window.scrollY + 100;
      const viewportHeight = window.innerHeight;
      const scrollCenter = scrollPosition + viewportHeight / 2;

      let bestMatch = "";
      let bestScore = -1;

      SECTIONS.forEach((id) => {
        const section = document.getElementById(id);
        if (section) {
          const rect = section.getBoundingClientRect();
          const sectionTop = window.scrollY + rect.top;
          const sectionBottom = sectionTop + rect.height;

          const visibleTop = Math.max(sectionTop, scrollPosition);
          const visibleBottom = Math.min(
            sectionBottom,
            scrollPosition + viewportHeight
          );
          const visibleHeight = Math.max(0, visibleBottom - visibleTop);
          const visibilityRatio =
            visibleHeight / Math.min(rect.height, viewportHeight);

          const centerBonus =
            scrollCenter >= sectionTop && scrollCenter <= sectionBottom
              ? 0.5
              : 0;

          const score = visibilityRatio + centerBonus;

          if (score > bestScore && visibilityRatio > 0.1) {
            bestScore = score;
            bestMatch = id;
          }
        }
      });

      if (bestMatch) {
        setActiveSection(bestMatch);
      }
    };

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          updateActiveSection();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    setTimeout(updateActiveSection, 100);

    return () => {
      window.removeEventListener("scroll", handleScroll);
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

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        setIsOpen(false);
      }
    };

    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [isOpen]);

  return (
    <motion.nav
      className={`w-full px-4 sm:px-6 lg:px-8 py-3 fixed top-0 z-50 transition-all duration-500 ease-in-out ${
        scrolled || isOpen
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

            <div className="lg:hidden flex items-center space-x-2">
              <AnimatedThemeToggle aria-label="Toggle theme" />
              <button
                className="p-2 rounded-lg text-[hsl(var(--foreground))] dark:text-[hsl(var(--dark-foreground))] hover:bg-[hsl(var(--primary))]/10 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[hsl(var(--primary))]/20 touch-manipulation"
                onClick={() => setIsOpen(!isOpen)}
                aria-label={isOpen ? "Close menu" : "Open menu"}
                aria-expanded={isOpen}
              >
                <motion.div
                  animate={{ rotate: isOpen ? 180 : 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="w-6 h-6 flex items-center justify-center"
                >
                  {isOpen ? (
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  ) : (
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    </svg>
                  )}
                </motion.div>
              </button>
            </div>
          </div>
        </div>

        <AnimatePresence>
          {isOpen && (
            <>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 lg:hidden"
                onClick={() => setIsOpen(false)}
                aria-hidden="true"
              />

              <motion.div
                initial={{ opacity: 0, y: -20, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -20, scale: 0.95 }}
                transition={{
                  duration: 0.3,
                  ease: "easeOut",
                  type: "spring",
                  stiffness: 300,
                  damping: 30,
                }}
                className="fixed top-20 left-4 right-4 bg-white/95 dark:bg-gray-900/95 rounded-2xl shadow-2xl border border-gray-200/50 dark:border-gray-700/50 backdrop-blur-xl z-50 max-h-[80vh] overflow-y-auto lg:hidden"
                style={{
                  maxWidth: "400px",
                  margin: "0 auto",
                  left: "50%",
                  right: "auto",
                  transform: "translateX(-50%)",
                }}
              >
                <div className="flex items-center justify-between p-4 border-b border-gray-200/20 dark:border-gray-700/20">
                  <div className="items-center space-x-3">
                    <span className="font-semibold text-gray-900 dark:text-gray-100">
                      Navigation
                    </span>
                  </div>
                  <button
                    className="p-2 rounded-lg text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-[hsl(var(--primary))]/20 transition-all duration-200"
                    onClick={() => setIsOpen(false)}
                    aria-label="Close menu"
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
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>

                <nav className="p-2">
                  <ul className="space-y-1">
                    {[
                      { href: "#accueil", label: "À propos" },
                      { href: "#skills", label: "Compétences" },
                      { href: "#experiences", label: "Expérience" },
                      { href: "#projects", label: "Projets" },
                      { href: "#contacts", label: "Contacts" },
                    ].map((item, index) => (
                      <motion.li
                        key={item.href}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{
                          delay: index * 0.05,
                          duration: 0.3,
                          ease: "easeOut",
                        }}
                      >
                        <Link
                          href={item.href}
                          className={`
                            flex items-center justify-between px-4 py-3 rounded-xl transition-all duration-300 group touch-manipulation
                            ${
                              activeSection === item.href.replace("#", "")
                                ? "bg-gradient-to-r from-[hsl(var(--primary))]/15 to-[hsl(var(--primary))]/10 text-[hsl(var(--primary))] border border-[hsl(var(--primary))]/30 shadow-sm"
                                : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-[hsl(var(--primary))]"
                            }
                          `}
                          onClick={handleLinkClick}
                          tabIndex={0}
                        >
                          <span
                            className="font-medium text-base"
                            style={{
                              fontFamily:
                                "'Poppins', sans-serif, Arial, Helvetica",
                            }}
                          >
                            {item.label}
                          </span>
                          {activeSection === item.href.replace("#", "") && (
                            <motion.div
                              layoutId="mobile-active-indicator"
                              className="w-2 h-2 rounded-full bg-[hsl(var(--primary))]"
                              transition={{
                                type: "spring",
                                stiffness: 300,
                                damping: 30,
                              }}
                            />
                          )}
                        </Link>
                      </motion.li>
                    ))}
                  </ul>
                </nav>

                <div className="p-4 border-t border-gray-200/20 dark:border-gray-700/20">
                  <div className="flex items-center justify-center">
                    <span className="text-xs text-gray-500 dark:text-gray-400">
                      Appuyez sur Échap pour fermer
                    </span>
                  </div>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}
