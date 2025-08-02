"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Linkedin, Github, ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";

export default function Footer() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const particlePositions = [
    { left: "15%", top: "20%" },
    { left: "85%", top: "30%" },
    { left: "25%", top: "70%" },
    { left: "75%", top: "80%" },
    { left: "45%", top: "15%" },
    { left: "65%", top: "60%" },
  ];

  return (
    <motion.footer
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="relative border-t border-border/30 bg-gradient-to-br from-background/95 via-card/90 to-background/95 backdrop-blur-2xl overflow-hidden"
    >
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute -top-20 -left-20 w-64 h-64 bg-gradient-to-r from-blue-500/8 to-blue-600/6 rounded-full blur-3xl"
          animate={{
            x: [-20, 20, -20],
            y: [-20, 10, -20],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-l from-blue-500/6 via-blue-400/4 to-transparent rounded-full blur-4xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-br from-blue-400/4 via-blue-500/5 to-blue-600/3 rounded-full blur-4xl"
          animate={{
            rotate: [0, 360],
            scale: [0.8, 1.1, 0.8],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear",
          }}
        />

        {mounted &&
          particlePositions.map((position, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-blue-500/20 rounded-full"
              style={{
                left: position.left,
                top: position.top,
              }}
              animate={{
                y: [-20, -40, -20],
                opacity: [0.2, 0.8, 0.2],
                scale: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 4 + i * 0.5,
                repeat: Infinity,
                delay: i * 0.3,
                ease: "easeInOut",
              }}
            />
          ))}

        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-blue-500/2 to-transparent opacity-30" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,hsl(var(--background))/20_100%)]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
        <div className="block md:hidden">
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="text-center"
            >
              <Link
                href="#accueil"
                className="flex items-center justify-center group mb-4"
              >
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-600/60 rounded-full blur-sm opacity-20 group-hover:opacity-40 transition-opacity duration-300"></div>
                  <Image
                    className="w-12 h-12 rounded-full object-cover relative z-10 ring-2 ring-blue-500/20 group-hover:ring-blue-500/40 transition-all duration-300"
                    src="/image/logoM.jpeg"
                    alt="RAKOTONANDRIANINA Dimithry Marius"
                    width={48}
                    height={48}
                  />
                </div>
                <div className="ml-3">
                  <h3 className="font-sans text-xl font-bold tracking-tight group-hover:text-blue-500 transition-colors duration-300 bg-gradient-to-r from-foreground to-blue-500 bg-clip-text text-transparent">
                    Dimithry
                  </h3>
                  <p className="text-xs text-foreground/60 font-semibold tracking-widest lowercase">
                    portfolio
                  </p>
                </div>
              </Link>
              <p className="text-sm text-foreground/80 leading-relaxed font-light tracking-wide max-w-sm mx-auto">
                Développeur{" "}
                <span className="font-medium text-blue-500">Full Stack</span>{" "}
                passionné par la création d&apos;expériences numériques{" "}
                <span className="bg-gradient-to-r from-blue-500 to-blue-600 bg-clip-text text-transparent font-medium">
                  innovantes
                </span>{" "}
                et performantes.
              </p>
            </motion.div>

            <div className="grid grid-cols-2 gap-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="text-center"
              >
                <h3 className="text-base font-bold text-foreground mb-3 relative">
                  <span className="bg-gradient-to-r from-blue-500 to-blue-600 bg-clip-text text-transparent">
                    Navigation
                  </span>
                  <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-6 h-0.5 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full"></div>
                </h3>
                <ul className="space-y-2">
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
                      transition={{ delay: 0.3 + index * 0.1, duration: 0.3 }}
                    >
                      <Link
                        href={item.href}
                        className="text-xs text-foreground/75 hover:text-blue-500 transition-all duration-300 block font-light tracking-wide"
                      >
                        {item.label}
                      </Link>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="text-center"
              >
                <h3 className="text-base font-bold text-foreground mb-3 relative">
                  <span className="bg-gradient-to-r from-blue-500 to-blue-600 bg-clip-text text-transparent">
                    Contact
                  </span>
                  <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-6 h-0.5 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full"></div>
                </h3>
                <div className="space-y-2 flex flex-col items-center">
                  <motion.div
                    className="flex items-center gap-2 text-xs text-foreground/75 group"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="p-1 rounded-lg bg-blue-500/10 group-hover:bg-blue-500/20 transition-colors duration-300">
                      <MapPin className="w-3 h-3 text-blue-500" />
                    </div>
                    <span className="font-light tracking-wide">
                      Antananarivo
                    </span>
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Link
                      href="mailto:mariusrakotonandrianina@gmail.com"
                      className="flex items-center gap-2 text-xs text-foreground/75 hover:text-blue-500 transition-all duration-300 group"
                    >
                      <div className="p-1 rounded-lg bg-blue-500/10 group-hover:bg-blue-500/20 transition-colors duration-300">
                        <Mail className="w-3 h-3 text-blue-500" />
                      </div>
                      <span className="font-light tracking-wide">Email</span>
                    </Link>
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Link
                      href="tel:+261341444377"
                      className="flex items-center gap-2 text-xs text-foreground/75 hover:text-blue-500 transition-all duration-300 group"
                    >
                      <div className="p-1 rounded-lg bg-blue-500/10 group-hover:bg-blue-500/20 transition-colors duration-300">
                        <Phone className="w-3 h-3 text-blue-500" />
                      </div>
                      <span className="font-light tracking-wide">
                        Téléphone
                      </span>
                    </Link>
                  </motion.div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="col-span-2 text-center"
              >
                <h3 className="text-base font-bold text-foreground mb-3 relative">
                  <span className="bg-gradient-to-r from-blue-500 to-blue-600 bg-clip-text text-transparent">
                    Réseaux Sociaux
                  </span>
                  <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-6 h-0.5 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full"></div>
                </h3>
                <div className="flex justify-center gap-6">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Link
                      href="https://www.linkedin.com/in/dimithry-marius-rakotonandrianina-b801bb293/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex flex-col items-center gap-1 text-xs text-foreground/75 hover:text-blue-500 transition-all duration-300 group"
                    >
                      <div className="p-2 rounded-lg bg-blue-500/10 group-hover:bg-blue-500/20 transition-colors duration-300">
                        <Linkedin className="w-4 h-4 text-blue-500" />
                      </div>
                      <span className="font-light tracking-wide">LinkedIn</span>
                    </Link>
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Link
                      href="https://github.com/Mariusrakotonandrianina"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex flex-col items-center gap-1 text-xs text-foreground/75 hover:text-blue-500 transition-all duration-300 group"
                    >
                      <div className="p-2 rounded-lg bg-blue-500/10 group-hover:bg-blue-500/20 transition-colors duration-300">
                        <Github className="w-4 h-4 text-blue-500" />
                      </div>
                      <span className="font-light tracking-wide">GitHub</span>
                    </Link>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="col-span-1"
          >
            <Link href="#accueil" className="flex items-center group mb-4">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-600/60 rounded-full blur-sm opacity-20 group-hover:opacity-40 transition-opacity duration-300"></div>
                <Image
                  className="w-10 h-10 rounded-full object-cover relative z-10 ring-2 ring-blue-500/20 group-hover:ring-blue-500/40 transition-all duration-300"
                  src="/image/logoM.jpeg"
                  alt="RAKOTONANDRIANINA Dimithry Marius"
                  width={40}
                  height={40}
                />
              </div>
              <div className="ml-3">
                <h3 className="font-sans text-lg font-bold tracking-tight group-hover:text-blue-500 transition-colors duration-300 bg-gradient-to-r from-foreground to-blue-500 bg-clip-text text-transparent">
                  Dimithry
                </h3>
                <p className="text-xs text-foreground/60 font-semibold tracking-widest lowercase">
                  portfolio
                </p>
              </div>
            </Link>
            <p className="text-sm text-foreground/80 leading-relaxed font-light tracking-wide max-w-xs">
              Développeur{" "}
              <span className="font-medium text-blue-500">Full Stack</span>{" "}
              passionné par la création d&apos;expériences numériques{" "}
              <span className="bg-gradient-to-r from-blue-500 to-blue-600 bg-clip-text text-transparent font-medium">
                innovantes
              </span>{" "}
              et performantes.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="col-span-1"
          >
            <h3 className="text-lg font-bold text-foreground mb-4 relative">
              <span className="bg-gradient-to-r from-blue-500 to-blue-600 bg-clip-text text-transparent">
                Navigation
              </span>
              <div className="absolute -bottom-1 left-0 w-8 h-0.5 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full"></div>
            </h3>
            <ul className="space-y-3">
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
                  transition={{ delay: 0.3 + index * 0.1, duration: 0.3 }}
                >
                  <Link
                    href={item.href}
                    className="relative text-sm text-foreground/75 hover:text-blue-500 transition-all duration-300 group flex items-center font-light tracking-wide hover:tracking-wider"
                  >
                    <motion.span
                      className="w-0 h-[2px] bg-gradient-to-r from-blue-500 to-blue-600 group-hover:w-4 transition-all duration-300 mr-0 group-hover:mr-3 rounded-full"
                      whileHover={{ width: 16 }}
                    />
                    <span className="relative">
                      {item.label}
                      <motion.span
                        className="absolute -bottom-0.5 left-0 w-0 h-[1px] bg-gradient-to-r from-blue-500 to-blue-600 group-hover:w-full transition-all duration-300"
                        whileHover={{ width: "100%" }}
                      />
                    </span>
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="col-span-1"
          >
            <h3 className="text-lg font-bold text-foreground mb-4 relative">
              <span className="bg-gradient-to-r from-blue-500 to-blue-600 bg-clip-text text-transparent">
                Contact
              </span>
              <div className="absolute -bottom-1 left-0 w-8 h-0.5 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full"></div>
            </h3>
            <div className="space-y-3">
              <motion.div
                className="flex items-center gap-3 text-sm text-foreground/75 group"
                whileHover={{ x: 2 }}
                transition={{ duration: 0.2 }}
              >
                <div className="p-1.5 rounded-lg bg-blue-500/10 group-hover:bg-blue-500/20 transition-colors duration-300">
                  <MapPin className="w-4 h-4 text-blue-500" />
                </div>
                <span className="font-light tracking-wide">
                  Antananarivo, Madagascar
                </span>
              </motion.div>
              <motion.div whileHover={{ x: 2 }} transition={{ duration: 0.2 }}>
                <Link
                  href="mailto:mariusrakotonandrianina@gmail.com"
                  className="flex items-center gap-3 text-sm text-foreground/75 hover:text-blue-500 transition-all duration-300 group"
                >
                  <div className="p-1.5 rounded-lg bg-blue-500/10 group-hover:bg-blue-500/20 transition-colors duration-300">
                    <Mail className="w-4 h-4 text-blue-500 group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <span className="font-light tracking-wide">
                    mariusrakotonandrianina@gmail.com
                  </span>
                </Link>
              </motion.div>
              <motion.div whileHover={{ x: 2 }} transition={{ duration: 0.2 }}>
                <Link
                  href="tel:+261341444377"
                  className="flex items-center gap-3 text-sm text-foreground/75 hover:text-blue-500 transition-all duration-300 group"
                >
                  <div className="p-1.5 rounded-lg bg-blue-500/10 group-hover:bg-blue-500/20 transition-colors duration-300">
                    <Phone className="w-4 h-4 text-blue-500 group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <span className="font-light tracking-wide">
                    +261 34 14 443 77
                  </span>
                </Link>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="col-span-1"
          >
            <h3 className="text-lg font-bold text-foreground mb-4 relative">
              <span className="bg-gradient-to-r from-blue-500 to-blue-600 bg-clip-text text-transparent">
                Réseaux
              </span>
              <div className="absolute -bottom-1 left-0 w-8 h-0.5 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full"></div>
            </h3>
            <div className="flex flex-col gap-3">
              <motion.div whileHover={{ x: 2 }} transition={{ duration: 0.2 }}>
                <Link
                  href="https://www.linkedin.com/in/dimithry-marius-rakotonandrianina-b801bb293/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-sm text-foreground/75 hover:text-blue-500 transition-all duration-300 group"
                >
                  <div className="p-1.5 rounded-lg bg-blue-500/10 group-hover:bg-blue-500/20 transition-colors duration-300">
                    <Linkedin className="w-4 h-4 text-blue-500 group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <span className="font-light tracking-wide">LinkedIn</span>
                </Link>
              </motion.div>
              <motion.div whileHover={{ x: 2 }} transition={{ duration: 0.2 }}>
                <Link
                  href="https://github.com/Mariusrakotonandrianina"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-sm text-foreground/75 hover:text-blue-500 transition-all duration-300 group"
                >
                  <div className="p-1.5 rounded-lg bg-blue-500/10 group-hover:bg-blue-500/20 transition-colors duration-300">
                    <Github className="w-4 h-4 text-blue-500 group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <span className="font-light tracking-wide">GitHub</span>
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="relative my-8"
        >
          <div className="h-px bg-gradient-to-r from-transparent via-border/40 to-transparent" />
          <motion.div
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-px bg-gradient-to-r from-blue-500 to-blue-600"
            initial={{ width: 0 }}
            animate={{ width: 64 }}
            transition={{ delay: 1, duration: 0.8 }}
          />
          <div className="absolute top-1/2 left-1/4 transform -translate-x-1/2 -translate-y-1/2 w-1 h-1 bg-blue-500/60 rounded-full" />
          <div className="absolute top-1/2 right-1/4 transform translate-x-1/2 -translate-y-1/2 w-1 h-1 bg-blue-500/60 rounded-full" />
        </motion.div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-between gap-4"
        >
          <div className="flex items-center gap-2 text-sm text-foreground/65 font-light tracking-wide">
            <span>© {new Date().getFullYear()}</span>
            <span className="font-medium bg-gradient-to-r from-blue-500 to-blue-600 bg-clip-text text-transparent">
              Dimithry Marius
            </span>
          </div>
          <motion.button
            onClick={scrollToTop}
            className="relative flex items-center gap-2 px-4 py-2.5 text-sm bg-gradient-to-r from-blue-500/10 via-blue-500/15 to-blue-500/10 hover:from-blue-500/20 hover:via-blue-500/25 hover:to-blue-500/20 text-blue-500 rounded-xl border border-blue-500/20 hover:border-blue-500/40 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500/30 group backdrop-blur-sm overflow-hidden"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            aria-label="Remonter en haut de la page"
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-500/10 to-transparent"
              initial={{ x: "-100%" }}
              whileHover={{ x: "100%" }}
              transition={{ duration: 0.6 }}
            />

            <span className="hidden sm:inline font-light tracking-wide relative z-10">
              Retour en haut
            </span>
            <ArrowUp className="w-4 h-4 group-hover:translate-y-[-2px] transition-transform duration-300 relative z-10" />
          </motion.button>
        </motion.div>
      </div>
    </motion.footer>
  );
}
