"use client"
import React from "react";
import Image from "next/image";
import FloatingElements from "./floatingElements";

export default function Contacts({ sectionRef }: { sectionRef: (node?: Element | null) => void }) {
    return (
        <section 
            id="contacts" 
            className="min-h-screen flex items-center relative overflow-hidden text-[hsl(var(--foreground))] py-2 sm:py-3 md:py-4 lg:pt-12" 
            ref={sectionRef}
        >
            <div className="absolute inset-0 z-0">
            <Image
                src="/image/background3.jpeg"
                alt="Background Image"
                fill
                className="object-cover object-center opacity-30"
                priority
            sizes="100vw"
            />
            <div
                className="absolute inset-0 bg-[hsl(var(--background))]/100 backdrop-blur-sm" />
            </div>
            <FloatingElements/>

      {/* Animated background elements */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 md:w-112 md:h-112 bg-[hsl(var(--primary))]/3 rounded-full blur-4xl animate-pulse delay-500"></div>
                <div className="absolute bottom-0 left-0 w-32 h-32 md:w-64 md:h-64 bg-[hsl(var(--primary))]/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
            </div>
            <div className="max-w-6xl mx-auto px-6 py-8">
                <h1 className="text-3xl font-bold mb-4">Contact</h1>
                <p className="text-lg">
                    Contactez-moi via [insérez vos coordonnées, par exemple, email, formulaire de contact, réseaux sociaux].
                </p>
            </div>
            <div className="absolute -bottom-24 -left-24 md:-bottom-48 md:-left-48 w-48 h-48 md:w-96 md:h-96 bg-[hsl(var(--primary))]/5 rounded-full blur-4xl animate-pulse delay-1000"></div>
        </section>
    );
}