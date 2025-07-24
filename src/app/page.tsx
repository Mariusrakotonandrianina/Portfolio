"use client";
import React from "react";
import { useInView } from "react-intersection-observer";
import Accueil from "./componets/accueil";
import Projects from "./componets/projects";
import Skills from "./componets/skills";
import Contacts from "./componets/contacts";
import Experience from "./componets/experience";

export default function Home() {
  const { ref: accueilRef } = useInView({ threshold: 0.5 });
  const { ref: skillsRef } = useInView({ threshold: 0.5 });
  const { ref: projectsRef } = useInView({ threshold: 0.5 });
  const { ref: contactsRef } = useInView({ threshold: 0.5});
  const { ref: experiencesRef } = useInView({ threshold: 0.5});

  return (
    <div
      className="min-h-screen items-center justify-center"    
    >
            <Accueil sectionRef={accueilRef} />
            <Skills sectionRef={skillsRef}/>
            <Projects sectionRef={projectsRef} />
            <Contacts sectionRef={contactsRef} />
            <Experience sectionRef={experiencesRef} />
    </div>
  );
}

