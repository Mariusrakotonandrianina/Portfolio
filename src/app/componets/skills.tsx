"use client";
import React from "react";
import FloatingElements from "./floatingElements";
import Image from "next/image";

export default function Skills({
  sectionRef,
}: {
  sectionRef: (node?: Element | null) => void;
}) {
  return (
    <section
      id="skills"
      className="min-h-screen flex items-center relative overflow-hidden text-[hsl(var(--foreground))] py-4 sm:py-6 md:py-8 lg:pt-24"
      ref={sectionRef}
    >
            <div className="absolute inset-0 z-0">
              <Image
                src="/image/background3.jpeg"
                alt="Background Image"
                fill
                className="object-cover object-center"
                priority
                sizes="100vw"
              />
              <div className="absolute inset-0 bg-[hsl(var(--background))]/100 backdrop-blur-sm" />
            </div>
      
            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 md:w-112 md:h-112 bg-[hsl(var(--primary))]/3 rounded-full blur-4xl animate-pulse delay-500"></div>
            </div>

      <div className="max-w-6xl mx-auto px-6 py-8">
        <h1 className="text-3xl font-bold mb-4">Compétences</h1>
        <p className="text-lg">
          Mes compétences incluent [listez vos compétences, par exemple,
          Next.js, React, Three.js, Tailwind CSS, etc.].
        </p>
      </div>
      <FloatingElements />
    </section>
  );
}
