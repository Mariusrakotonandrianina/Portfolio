"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();

    const isActive = (path: string) => {
        return pathname === path ? "text-blue-400 underline" : "text-gray-300";
    };

  return (
    <nav className="w-full px-10 py-5 bg-gray-900 text-white shadow-md">
      <div className="max-w-6xl mx-auto flex flex-wrap items-center justify-between">
        <div>
          <span className="text-2xl font-bold text-white cursor-pointer">
            Portfolio
          </span>
        </div>
      </div>
      <button
          className="lg:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>

        <div className="">
            <ul className="">
                <li className="">
                    <Link href="/" className="">
                        Compétences
                    </Link>
                </li>
                <li className="">
                    <Link href="/" className="">
                        Contact
                    </Link>
                </li>
                <li className="">
                    <Link href="/" className="">
                        Projets
                    </Link>
                </li>
            </ul>
        </div>
    </nav>
  );
}