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
            className="absolute -inset-3 sm:-inset-4 md:-inset-5 lg:-inset-6 border-2 border-[hsl(var(--primary))]/35 rounded-full"
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
            className="relative w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-36 lg:h-36 xl:w-44 xl:h-44 rounded-full overflow-hidden shadow-2xl border-4 border-[hsl(var(--primary))]/30"
            whileHover={{ scale: 1.05, rotate: 2 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            <Image
              src="/image/2613.JPG"
              alt="RAKOTONANDRIANINA Dimithry Marius - Développeur Full Stack"
              width={176}
              height={176}
              className="w-full h-full object-cover"
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
