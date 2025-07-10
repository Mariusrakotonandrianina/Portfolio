"use client";

import { motion, Variants } from "framer-motion";
import Link from "next/link";
import { useEffect, useRef } from "react";
import * as THREE from "three";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.5,
      staggerChildren: 0.3,
    },
  },
};

const tagVariants: Variants = {
  hidden: {
    opacity: 0,
    x: -100,
    scale: 0.8,
  },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: [0.6, 0.01, 0.05, 0.95],
      type: "spring",
      stiffness: 100,
    },
  },
};

const titleVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.8,
      staggerChildren: 0.08,
    },
  },
};

const wordVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 50,
    rotateX: 90,
  },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: {
      duration: 0.6,
      ease: [0.4, 0, 0.2, 1],
    },
  },
};

const descriptionVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
    filter: "blur(10px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.8,
      ease: [0.4, 0, 0.2, 1],
      delay: 0.3,
    },
  },
};

const buttonVariants: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.5,
    y: 20,
  },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.4, 0, 0.2, 1],
      delay: 0.5,
      type: "spring",
      stiffness: 200,
    },
  },
  hover: {
    scale: 1.05,
    y: -2,
    boxShadow: "0 20px 40px rgba(0, 0, 0, 0.3)",
    transition: {
      duration: 0.3,
      ease: "easeOut",
    },
  },
  tap: {
    scale: 0.95,
    y: 0,
  },
};

const imageVariants: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.8,
    rotate: 10,
    x: 100,
  },
  visible: {
    opacity: 1,
    scale: 1,
    rotate: 0,
    x: 0,
    transition: {
      duration: 1.2,
      ease: [0.4, 0, 0.2, 1],
      type: "spring",
      stiffness: 80,
      damping: 15,
    },
  },
};

const ThreeCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!canvasRef.current || !containerRef.current) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      containerRef.current.clientWidth / containerRef.current.clientHeight,
      0.1,
      3000
    );
    camera.position.z = 5;

    const renderer = new THREE.WebGLRenderer({
      canvas: canvasRef.current,
      antialias: true,
      alpha: true,
    });
    renderer.setSize(
      containerRef.current.clientWidth,
      containerRef.current.clientHeight
    );
    renderer.setPixelRatio(window.devicePixelRatio);

    const geometry = new THREE.IcosahedronGeometry(1.5, 1);
    const material = new THREE.MeshStandardMaterial({
      color: new THREE.Color("hsl(var(--primary))"),
      metalness: 0.7,
      roughness: 0.3,
      wireframe: false,
    });
    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.4);
    scene.add(ambientLight);

    const pointLight1 = new THREE.PointLight(0xffffff, 1, 100);
    pointLight1.position.set(5, 5, 5);
    scene.add(pointLight1);

    const pointLight2 = new THREE.PointLight(0x00ff88, 0.5, 100);
    pointLight2.position.set(-5, -5, 5);
    scene.add(pointLight2);

    let animationFrameId: number;
    let time = 0;
    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      time += 0.01;

      mesh.rotation.x = Math.sin(time) * 0.3;
      mesh.rotation.y += 0.005;
      mesh.rotation.z = Math.cos(time * 0.5) * 0.2;

      mesh.scale.setScalar(1 + Math.sin(time * 2) * 0.1);

      renderer.render(scene, camera);
    };
    animate();

    const handleResize = () => {
      if (!containerRef.current) return;
      camera.aspect =
        containerRef.current.clientWidth / containerRef.current.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(
        containerRef.current.clientWidth,
        containerRef.current.clientHeight
      );
    };
    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-full max-w-md h-[400px] bg-gradient-to-br from-[hsl(var(--primary)/.15)] to-[hsl(var(--primary)/.05)] 
        rounded-[20px] flex items-center justify-center overflow-hidden group shadow-2xl"
    >
      <canvas
        ref={canvasRef}
        className="w-full h-full group-hover:scale-110 transition-transform duration-500 ease-out"
      />
      <div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-[hsl(var(--primary)/.1)] 
        group-hover:from-[hsl(var(--primary)/.05)] transition-all duration-700"
      />

      {/* Effet de particules */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-[hsl(var(--primary))] rounded-full animate-pulse"></div>
        <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-[hsl(var(--primary))] rounded-full animate-pulse delay-500"></div>
        <div className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 bg-[hsl(var(--primary))] rounded-full animate-pulse delay-1000"></div>
      </div>
    </div>
  );
};

export default function Accueil({
  sectionRef,
}: {
  sectionRef: (node?: Element | null) => void;
}) {
  const splitText = (text: string) => {
    return text.split(" ").map((word, index) => (
      <motion.span
        key={index}
        variants={wordVariants}
        className="inline-block mr-2"
        style={{ transformOrigin: "50% 100%" }}
      >
        {word}
      </motion.span>
    ));
  };

  return (
    <section
      id="accueil"
      className="min-h-screen flex items-center relative overflow-hidden"
      ref={sectionRef}
      style={{
        backgroundColor: "hsl(var(--background))",
        color: "hsl(var(--foreground))",
      }}
    >
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-[hsl(var(--primary)/.05)] rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-[hsl(var(--primary)/.03)] rounded-full blur-3xl"></div>
      </div>

      <div className="flex flex-col-reverse md:flex-row items-center justify-between px-6 md:px-16 py-12 min-h-[600px] w-full relative z-10">
        <motion.div
          className="space-y-8 text-center md:text-left md:w-1/2"
          initial="hidden"
          whileInView="visible"
          variants={containerVariants}
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div variants={tagVariants} className="relative inline-block">
            <motion.p
              className="font-bold text-2xl md:text-3xl tracking-wide text-[hsl(var(--primary))] relative z-10"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              WEBSITE DEVELOPMENT
            </motion.p>
            <motion.div
              className="absolute inset-0 bg-[hsl(var(--primary)/.1)] rounded-lg -z-10"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1.2, delay: 1 }}
              style={{ transformOrigin: "left" }}
            />
          </motion.div>

          <motion.h1
            className="text-4xl md:text-5xl font-extrabold leading-tight"
            variants={titleVariants}
          >
            {splitText("Delivering IT Solutions That Empower Smarter Work")}
          </motion.h1>

          <motion.p
            className="text-lg max-w-md mx-auto md:mx-0 opacity-80 leading-relaxed"
            variants={descriptionVariants}
          >
            We provide innovative IT solutions that streamline your workflow,
            boost productivity, and drive success. Our expertise ensures
            seamless integration and exceptional results.
          </motion.p>

          <motion.div>
            <motion.div
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
              className="inline-block"
            >
              <Link
                href="#contacts"
                className="relative inline-block px-8 py-4 bg-[hsl(var(--primary))] text-[hsl(var(--background))] font-semibold rounded-lg 
                  overflow-hidden transition-all duration-300 shadow-lg group"
              >
                <span className="relative z-10">Discover More</span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-[hsl(var(--primary))] to-[hsl(var(--primary)/.8)]"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "0%" }}
                  transition={{ duration: 0.3 }}
                />
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>

        <motion.div
          className="w-full md:w-1/2 flex justify-center items-center mb-8 md:mb-0"
          initial="hidden"
          whileInView="visible"
          variants={imageVariants}
          viewport={{ once: true }}
        >
          <ThreeCanvas />
        </motion.div>
      </div>
    </section>
  );
}
