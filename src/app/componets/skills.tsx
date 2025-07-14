export default function Skills({
  sectionRef,
}: {
  sectionRef: (node?: Element | null) => void;
}) {
  return (
    <section
      id="skills"
      className="min-h-screen flex items-center bg-background text-foreground"
      ref={sectionRef}
    >
      <div className="max-w-6xl mx-auto px-6 py-8">
        <h1 className="text-3xl font-bold mb-4">Compétences</h1>
        <p className="text-lg">
          Mes compétences incluent [listez vos compétences, par exemple,
          Next.js, React, Three.js, Tailwind CSS, etc.].
        </p>
      </div>
    </section>
  );
}
