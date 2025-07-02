
export default function Contacts({ sectionRef }: { sectionRef: (node?: Element | null) => void }) {
    return (
        <section id="contacts" className="min-h-screen flex items-center bg-gray-900" ref={sectionRef}
            style={{
                backgroundColor: "hsl(var(--background))",
                color: "hsl(var(--foreground))",
            }}
        >
            <div className="max-w-6xl mx-auto px-6 py-8 text-white">
                <h1 className="text-3xl font-bold mb-4">Contact</h1>
                <p className="text-lg">
                    Contactez-moi via [insérez vos coordonnées, par exemple, email, formulaire de contact, réseaux sociaux].
                </p>
            </div>
        </section>
    );
}