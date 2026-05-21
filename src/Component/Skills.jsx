import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight, BrainCircuit,Settings } from 'lucide-react';
import { SkillsCard } from '../ComponentCard/SkillsCard';   
import { FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaGithub, FaAws, } from "react-icons/fa";
import { SiJavascript, SiTypescript, SiTailwindcss, SiExpress, SiMongodb, SiMysql, SiPostman, SiOpenai, SiClaude, } from "react-icons/si";
import { VscVscode } from "react-icons/vsc";

export const Skills = () => {
  const [showSkillsCard, setShowSkillsCard] = useState(false);

  const skillsData = [
    {
      title: "Frontend",
      skills: [
        { name: "HTML5",icon: FaHtml5, color: "text-orange-500", border:"border border-slate-300 dark:border-slate-600" },
        { name: "CSS3",icon: FaCss3Alt, color: "text-blue-500", border:"border border-slate-300 dark:border-slate-600" },
        { name: "Tailwind",icon: SiTailwindcss, color: "text-sky-400", border:"border border-slate-300 dark:border-slate-600" },
        { name: "React",icon: FaReact, color: "text-cyan-400", border:"border border-slate-300 dark:border-slate-600" },
        { name: "JavaScript",icon: SiJavascript, color: "text-yellow-400", border:"border border-slate-300 dark:border-slate-600" },
        { name: "TypeScript",icon: SiTypescript, color: "text-blue-400", border:"border border-slate-300 dark:border-slate-600" },
      ]
    },
    {
      title: "Backend",
      skills: [
        { name: "Node.js",icon: FaNodeJs, color: "text-green-500", border:"border border-slate-300 dark:border-slate-600" },
        { name: "Express",icon: SiExpress, color: "text-slate-600 dark:text-slate-300", border:"border border-slate-300 dark:border-slate-600" },
        { name: "REST APIs",icon: Settings, color: "text-blue-700", border:"border border-slate-300 dark:border-slate-600" },
      ]
    },
    {
      title: "Database",
      skills: [
        { name: "MongoDB",icon: SiMongodb, color: "text-green-400", border:"border border-slate-300 dark:border-slate-600" },
        { name: "MySQL",icon: SiMysql, color: "text-blue-500", border:"border border-slate-300 dark:border-slate-600" },
      ]
    },
    {
      title: "Tools",
      skills: [
        { name: "GitHub",icon: FaGithub, color: "text-black dark:text-white", border:"border border-slate-300 dark:border-slate-600" },
        { name: "AWS",icon: FaAws, color: "text-yellow-500", border:"border border-slate-300 dark:border-slate-600" },
        { name: "Postman",icon: SiPostman, color: "text-orange-400", border:"border border-slate-300 dark:border-slate-600" },
        { name: "VS Code",icon: VscVscode, color: "text-blue-400", border:"border border-slate-300 dark:border-slate-600" },
      ]
    },
    {
      title: "AI Tools",
      skills: [
        { name: "Claude",icon: SiClaude, color: "text-orange-400", border:"border border-slate-300 dark:border-slate-600" },
        { name: "OpenAI",icon: SiOpenai, color: "text-emerald-400", border:"border border-slate-300 dark:border-slate-600" },
      ]
    },
  ];

  return (
    <>
      
      <div 
        id="skills" 
        onClick={() => setShowSkillsCard(true)}
        className="group relative h-full m-2 md:m-0 overflow-hidden rounded-3xl border border-border bg-white/90 dark:bg-black p-10 md:p-3 backdrop-blur-xl transition-all duration-500  hover:shadow-[0_0_40px_8px_rgba(59,130,246,0.1)] cursor-pointer"
      >
        
        <div className="relative z-10 flex h-full flex-col">
          <div className="mb-3 flex items-center justify-between">
            <div className="flex items-center gap-2 rounded-full bg-blue-500/10 px-4 py-1 border border-blue-500/20">
              <BrainCircuit className="h-4 w-4 text-blue-500" />
              <span className="text-[10px] font-bold uppercase tracking-widest text-blue-400">Skills</span>
            </div>
            <motion.div whileHover={{ rotate: 45 }} className="cursor-pointer">
              <ArrowUpRight className="h-5 w-5 text-white/30 group-hover:text-blue-400 transition-colors" />
            </motion.div>
          </div>

          <div className="space-y-3">
            {skillsData.map((section) => (
              <div key={section.title}>
                <p className="text-xs uppercase tracking-widest text-slate-800 dark:text-white/80 mb-2 font-medium">
                  {section.title}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {section.skills.map((skill, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0.85 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.02 * i }}
                      whileHover={{ scale: 1.1, y: -1 }}
                      className={`px-3 py-1.5 text-xs font-medium rounded-2xl ${skill.color} backdrop-blur-xl  ${skill.border}
                         shadow-sm cursor-default`}
                    >
                      <skill.icon className="inline-block w-3.5 h-3.5 mr-1" />
                      {skill.name}
                    </motion.div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Modal - SkillsCard */}
      {showSkillsCard && (
        <div 
          className="fixed inset-0 z-60 flex items-center justify-center bg-black/20 backdrop-blur-sm p-4"
          onClick={() => setShowSkillsCard(false)}   // Click outside to close
        >
          <div className="w-full max-w-2xl" onClick={(e) => e.stopPropagation()}>
            <SkillsCard onClose={() => setShowSkillsCard(false)} />
          </div>
        </div>
      )}
    </>
  );
};