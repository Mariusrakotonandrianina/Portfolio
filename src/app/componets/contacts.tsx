export default function Contacts({ sectionRef }: { sectionRef: (node?: Element | null) => void }) {
    return (
        <section 
            id="contacts" 
            className="min-h-screen flex items-center bg-background text-foreground" 
            ref={sectionRef}
        >
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