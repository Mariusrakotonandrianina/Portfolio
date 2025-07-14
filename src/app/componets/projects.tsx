export default function Projects({
  sectionRef,
}: {
  sectionRef: (node?: Element | null) => void;
}) {
  return (
    <section
      id="projects"
      ref={sectionRef}
      className="min-h-screen flex items-center bg-background text-foreground"
    >
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
