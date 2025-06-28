import React from "react";
import Link from "next/link";

export default function Footer() {
    return (
        <footer className="py-10"
            style={{
                backgroundColor: "hsl(var(--background))",
                color: "hsl(var(--foreground))",
            }}>
            <div className="container mx-auto flex justify-center">
                <ul className="flex flex-col gap-3 lg:flex-row lg:gap-8 text-lg font-medium items-center">
                    <li>
                        <Link href="/">Accueil</Link>
                    </li>
                    <li>
                        <Link href="/">À propos</Link>
                    </li>
                    <li>
                        <Link href="/">Projets</Link>
                    </li>
                    <li>
                        <Link href="/">Compétences</Link>
                    </li>
                    <li>
                        <Link href="/">Contacts</Link>
                    </li>
                </ul>
            </div>
        </footer>
    );
}
