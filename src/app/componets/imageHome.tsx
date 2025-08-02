import { motion } from "framer-motion";
import Image from "next/image";
import { imageVariants } from "../variants/variants";

export default function ImageHome() {
  return (
    <div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={imageVariants}
        viewport={{ once: true }}
      >
        <div className="relative">
          <motion.div
            className="absolute inset-0 bg-gradient-to-br from-[hsl(var(--primary))]/30 to-[hsl(var(--primary))]/15 rounded-full blur-2xl md:blur-3xl"
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.4, 0.7, 0.4],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute -inset-2 sm:-inset-3 md:-inset-4 lg:-inset-5 xl:-inset-6 2xl:-inset-8 border-2 border-[hsl(var(--primary))]/35 rounded-full"
            animate={{
              rotate: [0, 360],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
          />
          <motion.div
            className="relative w-36 h-36 sm:w-44 sm:h-44 md:w-56 md:h-56 lg:w-72 lg:h-72 xl:w-80 xl:h-80 2xl:w-96 2xl:h-96 rounded-full overflow-hidden shadow-2xl border-4 border-[hsl(var(--primary))]/30"
            whileHover={{ scale: 1.05, rotate: 2 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            <Image
              src="/image/2613.JPG"
              alt="RAKOTONANDRIANINA Dimithry Marius - Développeur Full Stack"
              width={384}
              height={384}
              className="w-full h-auto object-contain"
              priority
            />
            <motion.div
              className="absolute inset-0 bg-gradient-to-t from-[hsl(var(--primary))]/30 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"
              whileHover={{ opacity: 1 }}
            />
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
