import React from "react";
import { ArrowRight, Sparkles } from "lucide-react";
import { motion } from "motion/react";

export const Hero = () => {
  return (
    <motion.div
      id="hero"
      initial={{ opacity: 0, scale: 0.97 }}
      animate={{
        opacity: 1,
        scale: 1,
        y: [0, -5, 0],
      }}
      transition={{
        opacity: { duration: 0.6 },
        scale: { duration: 0.6 },
        y: {
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        },
      }}
      className="relative backdrop-blur-2xl h-full overflow-hidden border bg-white/90 dark:bg-black/90 border-border hover:border rounded-3xl m-2 md:m-0 p-10 md:p-3 group"
    >
      {/* Floating Particles */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          animate={{
            y: [0, -25, 0],
            opacity: [0.1, 0.4, 0.1],
          }}
          transition={{
            duration: 4 + i,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute rounded-full bg-blue-400/20 blur-xl pointer-events-none"
          style={{
            width: `${10 + i * 3}px`,
            height: `${10 + i * 3}px`,
            top: `${10 + i * 10}%`,
            left: `${5 + i * 11}%`,
          }}
        />
      ))}

      {/* Glow */}
      <motion.div
        animate={{
          opacity: [0.2, 0.5, 0.2],
          scale: [1, 1.15, 1],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -top-20 -left-10 w-72 h-72 bg-blue-500/10 blur-3xl rounded-full pointer-events-none"
      />

      <div className="relative flex flex-col justify-between">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-blue-500 z-10 mb-2"
          >
            <div className="mb-3 flex items-center justify-between">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="flex items-center gap-2 rounded-full bg-blue-500/10 px-4 py-1 border border-blue-500/20"
              >
                <motion.div
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                  }}
                >
                  <Sparkles className="h-4 w-4 text-blue-400" />
                </motion.div>

                <span className="text-[10px] font-bold uppercase tracking-widest text-blue-400">
                  Open to Opportunities
                </span>
              </motion.div>
            </div>
          </motion.div>

          {/* Left - Text Content */}
          <div className="flex-1 mb-3">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              whileHover={{ scale: 1.01 }}
              className="text-6xl md:text-4xl lg:text-7xl font-bold text-black dark:text-white mb-4 md:mb-2"
            >
              Adarsh{" "}
              <motion.span
                animate={{
                  opacity: [1, 0.75, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                }}
                className="bg-blue-500 bg-clip-text text-transparent"
              >
                Sharma.
              </motion.span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="flex items-center mb-4 text-xl md:text-2xl font-medium text-blue-600 dark:text-blue-200"
            >
              <motion.div
                animate={{
                  width: [16, 32, 16],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="h-0.5 bg-blue-600 mr-2"
              />
              Full Stack Developer & AI Integrator
            </motion.div>

            <div className="flex gap-4">
              <motion.div
                animate={{
                  opacity: [0.7, 1, 0.7],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                }}
                className="md:h-23 w-2 md:w-1 m-2 rounded-4xl bg-blue-400"
              />

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="text-lg md:text-xl text-black/80 dark:text-white/80 max-w-lg"
              >
                I build scalable, real-world applications by combining robust
                full-stack architecture with hands-on AI implementation to
                create intelligent, user-focused solutions.
              </motion.div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-4 justify-center md:justify-start">
            <motion.a
              href="#projects"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 25px rgba(59,130,246,0.35)",
              }}
              whileTap={{ scale: 0.95 }}
              className="group/btn flex cursor-pointer w-40 items-center md:w-44 gap-4 md:gap-1 px-3 md:px-6 py-3 md:py-3 border border-blue-600/20 hover:border-blue-600 bg-blue-600/10 backdrop-blur-xl text-blue-700 rounded-full font-medium hover:shadow-2xl transition-shadow"
            >
              View my work
              <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
            </motion.a>

            <motion.a
              href="/Adarsh_Sharma_CV.pdf"
              download="Adarsh_Sharma_CV.pdf"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 25px rgba(59,130,246,0.35)",
              }}
              whileTap={{ scale: 0.95 }}
              className="group/btn flex cursor-pointer w-40 items-center md:w-44 gap-4 md:gap-1 px-3 md:px-6 py-3 md:py-3 border border-blue-600 bg-white/90 hover:bg-blue-700 backdrop-blur-xl text-blue-700 hover:text-white rounded-full font-medium hover:shadow-2xl transition-shadow"
            >
              Download CV
              <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
            </motion.a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};