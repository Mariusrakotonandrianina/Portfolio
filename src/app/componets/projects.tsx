
export default function Projects({ sectionRef }: { sectionRef: (node?: Element | null) => void }) {
    return (
        <section id="projects" className="min-h-screen flex items-center bg-gray-900" ref={sectionRef}
            style={{
                backgroundColor: "hsl(var(--background))",
                color: "hsl(var(--foreground))",
            }}
        >
            <div className="max-w-6xl mx-auto px-6 py-8 text-white">
                <h1 className="text-3xl font-bold mb-4">Projets</h1>
                <p className="text-lg">
                    Découvrez mes projets réalisés, incluant [mentionnez quelques projets clés ou catégories, par exemple, applications web, sites de portfolio, etc.].
                </p>
            </div>
        </section>
    );
}