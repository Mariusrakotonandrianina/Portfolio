import React from 'react';
import NameStyled from './namestyled';

export default function Abouts({ sectionRef }: { sectionRef: (node?: Element | null) => void }) {
    return (
        <section 
            id="abouts"
            ref={sectionRef}
            className="min-h-screen flex items-center bg-background text-foreground"
        >
            <NameStyled />
        </section>
    );
}