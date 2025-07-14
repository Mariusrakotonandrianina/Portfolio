export default function Abouts({ sectionRef }: { sectionRef: (node?: Element | null) => void }) {
    return (
        <section 
            id="abouts"
            ref={sectionRef}
            className="min-h-screen flex items-center bg-background text-foreground"
        >
            <div className="max-w-6xl mx-auto px-6 py-8">
                <h1 className="text-3xl font-bold mb-4">À propos</h1>
                <p className="text-lg">
                    Je suis RAKOTONANDRIANINA Dimithry Marius, un développeur passionné par la création de solutions numériques innovantes. 
                    Mon parcours inclut [insérez ici une brève description de vous, par exemple, vos études, votre expérience, vos passions].
                </p>
            </div>
        </section>
    );
}