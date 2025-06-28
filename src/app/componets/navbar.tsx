"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();

    const isActive = (path: string) => {
        return pathname === path ? "text-blue-400 underline" : "text-gray-300";
    };

  return (
    <nav className="w-full px-10 py-10"       
      style={{
        backgroundColor: "hsl(var(--background))",
        color: "hsl(var(--foreground))",
      }}
    >
      <div className="max-w-6xl mx-auto flex flex-wrap items-center justify-between">
        <div className="flex items-center md:order-2">
          <div className="grid-cols-1 flex text-sm bg-gray-900 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-700 transform transition-transform hover:scale-110">
            <Image
                className="w-9 h-9 rounded-full"
                  src="/image/2613.JPG"
                  alt="user photo"
                  width={36}
                  height={36}
                  priority
            />
            <span className="text-white m-1 mx-5 mt-2 mb-2">
              RAKOTONANDRIANINA Dimithry Marius
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
            <ul className="flex flex-col gap-3 lg:flex-row lg:gap-8 text-lg font-medium">
                <li className="">
                    <Link href="/" className="">
                        Accueil
                    </Link>
                </li>
                <li className="">
                    <Link href="/" className="">
                        A propos
                    </Link>
                </li>
                <li className="">
                    <Link href="/" className="">
                        Projets
                    </Link>
                </li>
                <li className="">
                    <Link href="/" className="">
                        Compétences
                    </Link>
                </li>
                <li className="">
                    <Link href="/" className="">
                        Contacts
                    </Link>
                </li>
            </ul>
        </div>
        </div>
    </nav>
  );
}