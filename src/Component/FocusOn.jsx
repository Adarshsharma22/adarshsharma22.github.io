import { motion } from "motion/react";
import { Rocket, Code2, Sparkles } from "lucide-react";

export function CurrentFocus() {
  return (
    <motion.div
      id="focus"
      initial={{ opacity: 0, scale: 0.97 }}
      animate={{
        opacity: 1,
        scale: 1,
        y: [0, -4, 0],
      }}
      transition={{
        opacity: { duration: 0.5 },
        scale: { duration: 0.5 },
        y: {
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        },
      }}
      className="relative backdrop-blur-2xl h-full overflow-hidden border bg-white/90 dark:bg-black/90 border-border hover:border rounded-3xl m-2 md:m-0 p-10 md:p-3 group"
    >
      {/* Background Glow */}
      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.1, 0.25, 0.1],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -top-10 -right-10 w-40 h-40 bg-blue-500 rounded-full blur-3xl"
      />

      {/* Floating Particles */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          animate={{
            y: [0, -15, 0],
            opacity: [0.15, 0.4, 0.15],
          }}
          transition={{
            duration: 3 + i,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute rounded-full bg-blue-400/20 blur-md"
          style={{
            width: `${8 + i * 3}px`,
            height: `${8 + i * 3}px`,
            top: `${15 + i * 15}%`,
            left: `${10 + i * 12}%`,
          }}
        />
      ))}

      <div className="flex flex-col justify-between h-full relative z-10">
        {/* Header */}
        <motion.div
          whileHover={{ scale: 1.04 }}
          className="flex items-center gap-2 px-3 py-1.5 w-fit bg-black/10 dark:bg-white/10 backdrop-blur-md rounded-full border border-black/10 dark:border-white/10"
        >
          <motion.div
            animate={{
              rotate: [0, 10, -10, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
            }}
          >
            <Rocket className="w-4 h-4 text-black dark:text-white" />
          </motion.div>

          <span className="text-[10px] font-bold uppercase tracking-widest text-black dark:text-white">
            Current Focus
          </span>
        </motion.div>

        {/* Main Content */}
        <div>
          <motion.h2
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            whileHover={{ scale: 1.02 }}
            className="text-black dark:text-white text-2xl font-black leading-tight"
          >
            Finance Manager
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-black/70 dark:text-white/70 text-sm mt-1"
          >
            Building a full-stack personal finance platform with secure
            authentication, analytics dashboard and expense tracking.
          </motion.p>
        </div>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2">
          {["React", "FastAPI", "Python", "PostgreSQL"].map((tech, index) => (
            <motion.span
              key={tech}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{
                scale: 1.08,
                y: -2,
              }}
              className="px-2 py-1 text-[10px] rounded-full bg-black/10 dark:bg-white/10 border border-black/10 dark:border-white/10 text-black dark:text-white"
            >
              {tech}
            </motion.span>
          ))}
        </div>

        {/* Progress */}
        <div>
          <div className="flex justify-between text-xs text-black/70 dark:text-white/70 mb-2">
            <span>Project Progress</span>

            <motion.span
              animate={{
                opacity: [0.6, 1, 0.6],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
              }}
            >
              75%
            </motion.span>
          </div>

          <div className="h-2 bg-black/20 dark:bg-white/20 rounded-full border border-border overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{
                width: "75%",
              }}
              transition={{
                duration: 1.4,
              }}
              className="relative h-full bg-white rounded-full"
            >
              <motion.div
                animate={{
                  x: ["-100%", "300%"],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-300/60 to-transparent"
              />
            </motion.div>
          </div>
        </div>
      </div>

      {/* Decorative Icons */}
      <motion.div
        animate={{
          rotate: [0, 6, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-0 right-0 opacity-10"
      >
        <Code2 className="w-32 h-32 text-black dark:text-white" />
      </motion.div>

      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 15, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
        }}
        className="absolute top-4 right-4"
      >
        <Sparkles className="w-5 h-5 text-black/50 dark:text-white/50" />
      </motion.div>
    </motion.div>
  );
}