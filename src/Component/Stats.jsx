import React from 'react'
import { motion } from 'motion/react';
import { Award, Code, Coffee, Users } from 'lucide-react';

export const Stats = () => {
  const stats = [
    { icon: Code, value: '3+', label: 'Projects' },
    { icon: Award, value: 'MERN', label: 'Stack' },
    { icon: Coffee, value: '100+', label: 'Commits' },
    { icon: Users, value: 'Agile', label: 'Mindset' },
  ];

  return (
    <motion.div
      id="stats"
      initial={{ opacity: 0, scale: 0.97 }}
      animate={{
        opacity: 1,
        scale: 1,
        y: [0, -3, 0],
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
      className="relative h-full m-2 md:m-0 overflow-hidden rounded-3xl bg-linear-to-b from-blue-500 to-white dark:to-black/20 border border-border backdrop-blur-2xl p-6"
    >
      {/* Glow Effect */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.15, 0.3, 0.15],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -top-10 -right-10 w-32 h-32 bg-white rounded-full blur-3xl"
      />

      {/* Floating Particles */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          animate={{
            y: [0, -15, 0],
            opacity: [0.1, 0.4, 0.1],
          }}
          transition={{
            duration: 3 + i,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute rounded-full bg-white/30 blur-md"
          style={{
            width: `${6 + i * 2}px`,
            height: `${6 + i * 2}px`,
            top: `${15 + i * 10}%`,
            left: `${10 + i * 14}%`,
          }}
        />
      ))}

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 h-full relative z-10">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1 * index }}
            whileHover={{
              y: -6,
              scale: 1.05,
            }}
            className="flex flex-col items-center justify-center text-center text-slate-800 dark:text-white"
          >
            <motion.div
              animate={{
                scale: [1, 1.1, 1],
                rotate: [0, 2, -2, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: index * 0.3,
              }}
            >
              <stat.icon className="w-6 h-6 mb-2 opacity-80" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{
                opacity: 1,
                y: [0, -2, 0],
              }}
              transition={{
                opacity: { delay: 0.5 + 0.1 * index },
                y: {
                  duration: 2,
                  repeat: Infinity,
                  delay: index * 0.2,
                },
              }}
              className="text-2xl font-bold"
            >
              {stat.value}
            </motion.div>

            <motion.div
              animate={{
                opacity: [0.7, 1, 0.7],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: index * 0.2,
              }}
              className="text-sm opacity-80"
            >
              {stat.label}
            </motion.div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};