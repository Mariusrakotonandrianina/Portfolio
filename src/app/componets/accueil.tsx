"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import * as THREE from "three";
import { FontLoader } from "three/examples/jsm/loaders/FontLoader.js";
import { TextGeometry } from "three/examples/jsm/geometries/TextGeometry.js";
import * as TWEEN from "@tweenjs/tween.js";

interface LetterMesh {
  mesh: THREE.Mesh;
  targetX: number;
}

export default function Accueil({ sectionRef }: { sectionRef?: (node?: Element | null) => void }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ canvas: canvasRef.current, alpha: true });


    const canvasParentWidth = Math.min(canvasRef.current.parentElement!.clientWidth, 500);
    renderer.setSize(canvasParentWidth, 300);

    const light = new THREE.DirectionalLight(0xffffff, 0.8);
    light.position.set(1, 1, 1);
    scene.add(light);

    const text = "Bienvenue!";
    const letterMeshes: LetterMesh[] = [];
    let currentLetterIndex = 0;

    const loader = new FontLoader();
    loader.load(
      "/fonts/helvetiker_regular.typeface.json",
      (font) => {
        let xOffset = 0;

        for (let i = 0; i < text.length; i++) {
          const geometry = new TextGeometry(text[i], {
            font,
            size: 0.5,
          });

          geometry.computeBoundingBox();
          const boundingBox = geometry.boundingBox;
          const letterWidth = boundingBox ? boundingBox.max.x - boundingBox.min.x : 0.4;

          const material = new THREE.MeshPhongMaterial({ color: 0x00ff00 });
          const mesh = new THREE.Mesh(geometry, material);
          mesh.position.set(-5 - xOffset, 0, 0);
          mesh.visible = false;

          scene.add(mesh);
          letterMeshes.push({ mesh, targetX: xOffset });

          xOffset += letterWidth + 0.1;
        }

        const totalWidth = xOffset - 0.1;
        letterMeshes.forEach((letter) => {
          letter.targetX -= totalWidth / 2;
          letter.mesh.position.x -= totalWidth / 2;
        });

        camera.position.z = 5;

        let lastTime = 0;
        const letterDelay = 500;

        const animate = (time: number) => {
          requestAnimationFrame(animate);

          if (currentLetterIndex < letterMeshes.length && time - lastTime > letterDelay) {
            const letter = letterMeshes[currentLetterIndex];
            letter.mesh.visible = true;

            new TWEEN.Tween(letter.mesh.position)
              .to({ x: letter.targetX }, 500)
              .easing(TWEEN.Easing.Quadratic.Out)
              .start();

            currentLetterIndex++;
            lastTime = time;
          }

          TWEEN.update(time);
          renderer.render(scene, camera);
        };

        animate(0);
      },
      (xhr) => {
        console.log((xhr.loaded / xhr.total) * 100 + "% loaded");
      },
      (error) => {
        console.error("Erreur lors du chargement de la police:", error);
      }
    );

    const handleResize = () => {
      if (!canvasRef.current || !canvasRef.current.parentElement) return;
      const width = Math.min(canvasRef.current.parentElement.clientWidth, 500);
      renderer.setSize(width, 300);
      camera.aspect = width / 300;
      camera.updateProjectionMatrix();
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      renderer.dispose();
      scene.traverse((object) => {
        if (object instanceof THREE.Mesh) {
          object.geometry?.dispose();
          if (Array.isArray(object.material)) {
            object.material.forEach((m) => m.dispose());
          } else {
            object.material?.dispose();
          }
        }
      });
    };
  }, []);

  return (
    <section
      id="accueil"
      className="w-full min-h-screen flex items-center"
      style={{
        backgroundColor: "hsl(var(--background))",
        color: "hsl(var(--foreground))",
      }}
      ref={sectionRef}
    >
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-8 px-6 py-8">

        <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start">
          <h1 className="text-2xl sm:text-3xl font-bold text-white mb-4 text-center lg:text-left">
            Bienvenue sur mon portfolio
          </h1>
          <canvas ref={canvasRef} className="w-full max-w-[500px] h-[300px]" />
        </div>

        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
          <Image
            className="w-[300px] h-[300px] rounded-lg object-cover transform transition-transform hover:scale-105"
            src="/image/2613.JPG"
            alt="Photo de RAKOTONANDRIANINA Dimithry Marius"
            width={300}
            height={300}
            priority
          />
        </div>
      </div>
    </section>
  );
}
