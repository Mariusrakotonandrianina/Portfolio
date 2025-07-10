"use client";
import React from "react";
import { useInView } from "react-intersection-observer";
import Accueil from "./componets/accueil";
import Abouts from "./componets/abouts";
import Projects from "./componets/projects";
import Skills from "./componets/skills";
import Contacts from "./componets/contacts";

export default function Home() {
  const { ref: accueilRef } = useInView({ threshold: 0.5 });
  const { ref: aboutRef } = useInView({ threshold: 0.5 });
  const { ref: skillsRef } = useInView({ threshold: 0.5 });
  const { ref: projectsRef } = useInView({ threshold: 0.5 });
  const { ref: contactsRef } = useInView({ threshold: 0.5});

  return (
    <div
      className="min-h-screen items-center justify-center"
     /* style={{
        backgroundColor: "hsl(var(--background))",
        color: "hsl(var(--foreground))",
      }}*/
    >
            <Accueil sectionRef={accueilRef} />
            <Abouts sectionRef={aboutRef} />
            <Skills sectionRef={skillsRef}/>
            <Projects sectionRef={projectsRef} />
            <Contacts sectionRef={contactsRef} />
    </div>
  );
}

