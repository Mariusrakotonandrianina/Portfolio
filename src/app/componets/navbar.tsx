"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

const SECTIONS = ["accueil", "abouts", "projects", "skills", "contacts"];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [activeSection, setActiveSection] = useState<string>("");
    const pathname = usePathname();

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
                threshold: 0.6, // 60% de la section doit être visible
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
                ? "text-blue-600"
                : "text-white hover:text-blue-600 transition-all duration-300 ease-in-out";
        }

        return pathname === href
            ? "text-blue-600"
            : "text-white hover:text-blue-600 transition-all duration-300 ease-in-out";
    };

    return (
        <nav
            className="w-full sm:px-10 sm:py-8 fixed top-0 left-0 z-50"
            style={{
                backgroundColor: "hsl(var(--background))",
                color: "hsl(var(--foreground))",
            }}
        >
            <div className="max-w-6xl mx-auto flex flex-wrap items-center justify-between">
                {/* Logo et nom */}
                <div className="flex items-center order-1">
                    <div className="flex items-center rounded-full px-3 transform transition-transform">
                        <Image
                            className="w-14 h-14 rounded-full object-cover"
                            src="/image/logoM.jpeg"
                            alt="RAKOTONANDRIANINA Dimithry Marius"
                            width={36}
                            height={36}
                            priority
                        />
                        <span className="font-sans md:font-serif text-white text-sm sm:text-base font-semibold ml-3 mr-4">
                            RAKOTONANDRIANINA Dimithry Marius
                        </span>
                    </div>
                </div>

                <button
                    className="lg:hidden text-white text-2xl focus:outline-none"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    ☰
                </button>

                <div
                    className={`lg:w-auto ${isOpen ? "block" : "hidden"} lg:flex lg:items-center order-2 mt-4 lg:mt-0`}
                >
                    <ul className="flex flex-col gap-4 lg:flex-row lg:gap-8 text-base sm:text-lg font-medium font-sans tracking-wide">
                        {[
                            { href: "#accueil", label: "Accueil" },
                            { href: "#abouts", label: "À propos" },
                            { href: "#skills", label: "Compétences" },
                            { href: "#projects", label: "Projets" },
                            { href: "#contacts", label: "Contacts" },
                        ].map((item) => (
                            <li key={item.href}>
                                <Link
                                    href={item.href}
                                    className={isActive(item.href)}
                                >
                                    {item.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </nav>
    );
}
