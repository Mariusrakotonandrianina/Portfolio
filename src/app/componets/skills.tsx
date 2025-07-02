
export default function Skills({ sectionRef }: { sectionRef: (node?: Element | null) => void }) {
    return (
        <section id="skills" className="min-h-screen flex items-center bg-gray-900" ref={sectionRef}
            style={{
                backgroundColor: "hsl(var(--background))",
                color: "hsl(var(--foreground))",
            }}
        >
            <div className="max-w-6xl mx-auto px-6 py-8 text-white">
                <h1 className="text-3xl font-bold mb-4">Compétences</h1>
                <p className="text-lg">
                    Mes compétences incluent [listez vos compétences, par exemple, Next.js, React, Three.js, Tailwind CSS, etc.].
                </p>
            </div>
        </section>
    );
}