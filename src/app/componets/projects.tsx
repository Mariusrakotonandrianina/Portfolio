"use client";
import Image from "next/image";
import FloatingElements from "./floatingElements";

export default function Projects({
  sectionRef,
}: {
  sectionRef: (node?: Element | null) => void;
}) {
  return (
    <section
      id="projects"
      ref={sectionRef}
      className="min-h-screen flex items-center relative overflow-hidden text-[hsl(var(--foreground))] py-2 sm:py-3 md:py-4 lg:pt-12"
    >

            {/* Background */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/image/background3.jpeg"
          alt="Background Image"
          fill
          className="object-cover object-center opacity-30"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-[hsl(var(--background))]/100 backdrop-blur-sm" />
      </div>

      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 md:w-112 md:h-112 bg-[hsl(var(--primary))]/3 rounded-full blur-4xl animate-pulse delay-500"></div>
        <div className="absolute bottom-0 left-0 w-32 h-32 md:w-64 md:h-64 bg-[hsl(var(--primary))]/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <FloatingElements />

      <div className="max-w-6xl mx-auto px-6 py-8">
        <h1 className="text-3xl font-bold mb-4">Projets</h1>
        <p className="text-lg">
          Découvrez mes projets réalisés, incluant [mentionnez quelques projets
          clés ou catégories, par exemple, applications web, sites de portfolio,
          etc.].
        </p>
      </div>
    </section>
  );
}
