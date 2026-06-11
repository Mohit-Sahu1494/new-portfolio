import React from "react";
import { motion } from "framer-motion";

import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaPhp,
  FaGitAlt,
  FaGithub,
  FaDocker,
} from "react-icons/fa";

import {
  SiNextdotjs,
  SiMongodb,
  SiMysql,
  SiTailwindcss,
  SiFlutter,
  SiDart,
  SiTypescript,
} from "react-icons/si";

const skillCategories = [
  {
    category: "Frontend",
    skills: [
      { name: "HTML", level: 95 },
      { name: "CSS", level: 92 },
      { name: "JavaScript", level: 90 },
      { name: "React.js", level: 92 },
      { name: "Next.js", level: 75 },
      { name: "Tailwind CSS", level: 90 },
    ],
  },
  {
    category: "Backend",
    skills: [
      { name: "Node.js", level: 85 },
      { name: "Express.js", level: 82 },
      { name: "PHP", level: 88 },
    ],
  },
  {
    category: "Database",
    skills: [
      { name: "MongoDB", level: 82 },
      { name: "MySQL", level: 88 },
    ],
  },
  {
    category: "Currently Learning",
    skills: [
      { name: "Flutter", level: 40 },
      { name: "Dart", level: 45 },
      { name: "Docker", level: 30 },
      { name: "TypeScript", level: 50 },
    ],
  },
];


const techStack = [
  { name: "HTML", icon: FaHtml5 },
  { name: "CSS", icon: FaCss3Alt },
  { name: "JavaScript", icon: FaJs },
  { name: "React", icon: FaReact },
  { name: "Next.js", icon: SiNextdotjs },
  { name: "Node.js", icon: FaNodeJs },
  { name: "Express.js", icon: FaNodeJs }, // Safe replacement
  { name: "MongoDB", icon: SiMongodb },
  { name: "MySQL", icon: SiMysql },
  { name: "PHP", icon: FaPhp },
  { name: "TailwindCSS", icon: SiTailwindcss },
  { name: "Git", icon: FaGitAlt },
  { name: "GitHub", icon: FaGithub },
  { name: "Flutter", icon: SiFlutter },
  { name: "Dart", icon: SiDart },
  { name: "Docker", icon: FaDocker },
  { name: "TypeScript", icon: SiTypescript },
];


function Skills() {
  return (
    <section
      id="skills"
      className="relative min-h-screen py-24 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <p className="text-cyan-400 font-medium mb-4">
            My Expertise
          </p>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white">
            Skills &  <span className="text-cyan-400"> Technologies</span>
          </h2>

          <p className="text-white/60 mt-5 max-w-2xl mx-auto">
            Technologies, frameworks and tools I use to build
            modern web applications.
          </p>
        </motion.div>

        {/* Skill Categories */}
        <div className="grid lg:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              initial={{
                opacity: 0,
                y: 60,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: categoryIndex * 0.15,
              }}
              whileHover={{
                y: -8,
              }}
              className="
                p-8
                rounded-3xl
                bg-white/5
                border border-white/10
                backdrop-blur-xl
                hover:border-cyan-400/40
                transition-all duration-300
              "
                style={{ backdropFilter: "blur(24px)", WebkitBackdropFilter: "blur(24px)" }}
            >
              <h3 className="text-3xl font-bold text-cyan-400 mb-8">
                {category.category}
              </h3>

              <div className="space-y-6">
                {category.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-2">
                      <span className="text-white">
                        {skill.name}
                      </span>

                      <span className="text-cyan-400">
                        {skill.level}%
                      </span>
                    </div>

                    <div className="h-3 bg-white/10 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{
                          width: `${skill.level}%`,
                        }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 1.2,
                        }}
                        className="
                          h-full
                          rounded-full
                          bg-gradient-to-r
                          from-cyan-400
                          via-blue-500
                          to-purple-500
                        "
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tech Stack */}
<motion.div
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  viewport={{ once: true }}
  transition={{ duration: 0.8 }}
  className="mt-24"
>
  <h3 className="text-3xl font-bold text-center text-white mb-12">
    Tech Stack
  </h3>

  <div className="flex flex-wrap justify-center gap-5">
    {techStack.map((tech, index) => {
      const Icon = tech.icon;

      return (
        <motion.div
          key={tech.name}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            delay: index * 0.05,
            duration: 0.4,
          }}
          whileHover={{
            scale: 1.08,
            y: -5,
          }}
          whileTap={{
            scale: 0.95,
          }}
          className="
            group
            flex items-center gap-3
            px-5 py-3
            rounded-2xl
            bg-white/5
            border border-white/10
            backdrop-blur-xl
            hover:border-cyan-400
            hover:bg-cyan-500/5
            hover:shadow-[0_0_30px_rgba(34,211,238,0.25)]
            transition-all duration-300
          "
        >
          <Icon
            size={22}
            className="
              text-white
              group-hover:text-cyan-400
              transition-all duration-300
            "
          />

          <span
            className="
              text-white
              group-hover:text-cyan-400
              transition-all duration-300
            "
          >
            {tech.name}
          </span>
        </motion.div>
      );
    })}
  </div>
</motion.div>
    
      </div>
    </section>
  );
}

export default Skills;