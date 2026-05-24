import React, { useState } from 'react'
import { motion } from 'motion/react'
import { Hero } from '../Component/Hero'
import { Stats } from '../Component/Stats'
import { MyMusic } from '../Component/Music'
import { About } from '../Component/About'
import { Skills } from '../Component/Skills'
import { MyProject } from '../Component/Project'
import { Experience } from '../Component/Experience'
import { Contact } from '../Component/Contact'
import { Testimonials } from '../Component/Testimonials'
import { Footer } from '../Component/Footer'


export const Home = () => {

  return (
    <div className="min-h-screen p-2 md:p-8 pb-10 md:pt-6 dark:text-white">
      <div className="max-w-8xl mx-auto">
      
        <main>
        
          <div className="flex flex-col gap-6 md:grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 md:gap-4 md:mt-18 mt-27  auto-rows-[200px]">
          
            <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="md:col-span-4 lg:col-span-4 md:row-span-2 hover:scale-102 transition-transform duration-500 "
            >
              <Hero />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className=" md:col-span-2 lg:col-span-2 md:row-span-1 hover:scale-102 transition-transform duration-500"
            >
              <Stats />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="hidden md:block md:col-span-2 lg:col-span-2 md:row-span-1 hover:scale-102 transition-transform duration-500"
            >
              <MyMusic />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="md:col-span-2 lg:col-span-3 md:row-span-2 "
            >
              <About />
            </motion.div>

            

            <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="md:col-span-2 lg:col-span-3 md:row-span-2 "
            >
              <Skills />
            </motion.div>

           

            <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="md:col-span-3 lg:col-span-4  md:row-span-3 "
            >
              <MyProject />
            </motion.div>

            

            <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="md:col-span-1 lg:col-span-2  md:row-span-3 hover:scale-102 transition-transform duration-500"
            >
              <Experience />
            </motion.div>

            <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="md:col-span-2 lg:col-span-3  md:row-span-2 hover:scale-102 transition-transform duration-500"
            >
              <Testimonials />
            </motion.div>

            <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="md:col-span-2 lg:col-span-3  md:row-span-2 hover:scale-102 transition-transform duration-500"
            >
              <Contact />
            </motion.div>
          </div>

          
          <Footer/>
        </main>
         {/* FireFlies */}
          {[...Array(30)].map((_, i) => (
            <span
              key={i}
              className={`
                absolute rounded-full bg-cyan-400 z-0
                shadow-[0_0_10px_#22d3ee,0_0_20px_#22d3ee,0_0_40px_#22d3ee]
                animate-firefly
              `}
              style={{
                width: `${Math.random() * 6 + 4}px`,
                height: `${Math.random() * 6 + 4}px`,
                top: `${Math.random() * 300}%`,
                left: `${Math.random() * 90}%`,
                animationDuration: `${Math.random() * 5 + 5}s`,
                animationDelay: `${Math.random() * 3}s`,
              }}
            />
          ))}
        
      </div>
    </div>
    
  )
}