import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink, ChevronRight, Layout } from 'lucide-react';
import { FaGithub } from "react-icons/fa";

const projects = [
  {
    id: 1,
    title: 'ExploIndia',
    description: 'A full-stack travel social networking platform that enables travelers to share journeys, explore destinations, and interact with a community of explorers. Features include trip posts, photo uploads, likes, comments, and notifications.',
    longDesc: 'Built using the MERN Stack (MongoDB, Express.js, React.js, Node.js). Focused on real-world travel interactions with responsive design and scalable architecture.',
    image: './exploindia.png',
    tags: ['React', 'Tailwind CSS', 'Node.js', 'Express', 'MongoDB', 'Cloudinary'],
    github: 'https://github.com/Adarshsharma22/ExploIndia',
    live: '#',
    featured: true,
  },
  {
    id: 2,
    title: 'Brain Training App',
    description: 'A modern React-based Brain Training web app featuring the popular Sequence Memory game. Built to help users enhance their cognitive abilities through engaging pattern recall challenges.',
    longDesc: 'Built with React and Tailwind CSS for a responsive and engaging user experience.',
    image: './brain-training-app.png',
    tags: ['React', 'Tailwind CSS', 'JavaScript', 'Vite'],
    github: 'https://github.com/Adarshsharma22/Brain-Training-App',
    live: 'https://adarshsharma22.github.io/Brain-Training-App/',
  },
  {
    id: 3,
    title: 'TodoList',
    description: 'A clean and modern task management application built with React and AI assistance to help users organize, track, and complete daily activities efficiently.',
    longDesc: 'Integrated with Claude AI for smart suggestions. Features include task categorization, due dates, and progress tracking.',
    image: './todolist.png',
    tags: ['React', 'Tailwind CSS', 'JavaScript', 'Vite', 'Claude AI'],
    github: 'https://github.com/Adarshsharma22/TodoList-react-js',
    live: 'https://adarshsharma22.github.io/TodoList-react-js/',
  },
  {
    id: 4,
    title: 'My-Portfolio',
    description: 'This modern responsive portfolio website built with React and Tailwind CSS to showcase my projects, skills, and experience.',
    longDesc: 'Designed with attention to performance, smooth animations, and interactive UI components. Built using Vite for lightning-fast development.',
    image: './my-portfolio.png',
    tags: ['React', 'Tailwind CSS', 'Vite', 'Framer Motion'],
    github: 'https://github.com/Adarshsharma22/my-portfolio',
    live: '#',
  },
];

export const ProjectCard = ({ onClose }) => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      className="relative w-full max-w-6xl h-[85vh] overflow-hidden rounded-[2.5rem] border border-border bg-white/60 dark:bg-black/90 backdrop-blur-2xl  duration-500 hover:shadow-[0_0_50px_-12px_rgba(59,130,246,0.3)] flex flex-col"
      onClick={(e) => e.stopPropagation()}
    >
      
      {/* Header */}
      <div className="flex justify-between items-center p-8 pb-4 z-20">
        <div>
          <h2 className="text-4xl font-black text-black dark:text-white tracking-tight">Projects</h2>
          <p className=" text-neutral-600 dark:text-neutral-500 font-medium">Selected works & experiments</p>
        </div>
        <button
          onClick={onClose}
          className="absolute top-6 right-6 z-50 text-slate-400 dark:text-white/60 hover:text-white bg-black/40 dark:bg-white/10 hover:bg-black/60 p-2 rounded-full transition-all"
        >
          <X size={24} />
        </button>
      </div>

      {/* Main Grid Section */}
      <div className="flex-1 overflow-y-auto p-2 pt-4 custom-scrollbar z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              layoutId={`card-${project.id}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="group relative flex flex-col bg-white/30 dark:bg-black/20 border border-white/10 rounded-3xl overflow-hidden hover:border-slate-400 transition-colors cursor-pointer"
            >
              {/* Card Image/Visual */}
              <div className={`h-48 bg-gradient-to-br relative overflow-hidden`}>
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors" />
                <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
              </div>

              {/* Content */}
              <div className="p-3 flex flex-col flex-1 bg-white/50 dark:bg-black/30">
                <h3 className="text-xl font-bold text-black dark:text-white mb-2  transition-colors">
                  {project.title}
                </h3>
                <p className="text-neutral-600 dark:text-neutral-400 text-sm line-clamp-2 mb-6">
                  {project.description}
                </p>
                
                
                <div className="mt-auto flex items-center justify-between">
                  <span 
                  className="text-6px font-bold text-black/40 group-hover:text-blue-400 dark:text-white/40 flex items-center gap-1 transition-colors"
                  onClick={() => setSelectedProject(project)}>
                    VIEW DETAILS <ChevronRight size={25} />
                  </span>
                  <div className="flex gap-3">
                    <a href={project.github} target="_blank" rel="noreferrer">
                      <FaGithub size={30} className="text-neutral-600 hover:text-white" />
                    </a>
                    <a href={project.live} target="_blank" rel="noreferrer">
                      <ExternalLink size={30} className="text-neutral-600 hover:text-white" />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Expanded Detail Overlay */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 z-50 bg-black/60 backdrop-blur-xl p-4 md:p-12 overflow-y-auto no-scrollbar"
          >
            <motion.div 
              layoutId={`card-${selectedProject.id}`}
              className="max-w-4xl mx-auto bg-white/90 dark:bg-black/80 border border-white/10 rounded-[2rem] overflow-hidden shadow-2xl"
            >
              <div className='h-64 md:h-80 bg-gradient-to-br  relative'>
                <img src={selectedProject.image} alt={selectedProject.title} className="w-full h-full object-cover" />
                <button 
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-6 right-6 p-2 cursor-pointer bg-black/50 hover:bg-black/80 rounded-full text-white backdrop-blur-md transition-all"
                >
                  <X size={24} />
                </button>
              </div>

              <div className="p-2 md:p-12">
                <div className="flex flex-wrap gap-2 mb-3">
                  {selectedProject.tags.map(tag => (
                    <span key={tag} className="px-4 py-1.5 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400 text-xs font-bold">
                      {tag}
                    </span>
                  ))}
                </div>
                <h2 className="text-3xl md:text-5xl font-black text-black dark:text-white mb-3">{selectedProject.title}</h2>
                <p className=" text-neutral-500 dark:text-neutral-300 leading-relaxed mb-6">{selectedProject.longDesc}</p>
                
                <div className="flex flex-wrap gap-4 mb-4">
                  <a href={selectedProject.live} className="flex-1 flex items-center justify-center gap-2 bg-white text-black font-bold py-4 rounded-2xl hover:bg-neutral-200 transition-colors">
                    Live Demo <ExternalLink size={20} />
                  </a>
                  <a href={selectedProject.github} className="flex-1 flex items-center justify-center gap-2 bg-neutral-800 text-white font-bold py-4 rounded-2xl hover:bg-neutral-700 transition-colors">
                    Source Code <FaGithub size={20} />
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};