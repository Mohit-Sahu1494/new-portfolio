// Experience.jsx
//  ui for experience section with timeline and scroll progress indicator
// full responsive and animated with framer motion
// uses lucide icons for timeline dots
// all responsive and mobile friendly



import React, { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import {
  Briefcase,
  Code2,
  GraduationCap,
  Trophy,
} from "lucide-react";

const experiences = [
  {
    title: "Started Programming",
    company: "Self Learning",
    year: "2022",
    icon: Code2,
    description:
      "Started learning C++, HTML, CSS and JavaScript fundamentals.",
  },
  {
    title: "Frontend Development",
    company: "React Ecosystem",
    year: "2023",
    icon: Briefcase,
    description:
      "Built responsive websites and modern user interfaces using React and Tailwind CSS.",
  },
  {
    title: "Full Stack Development",
    company: "MERN Stack",
    year: "2024",
    icon: GraduationCap,
    description:
      "Developed full-stack applications using React, Node.js, Express and MongoDB.",
  },
  {
    title: "Advanced Projects & DSA",
    company: "Current Journey",
    year: "2025",
    icon: Trophy,
    description:
      "Building production-level applications while improving problem-solving and DSA skills.",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.25,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 80,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
    },
  },
};

function Experience({ theme }) {
  const isDark = theme === "dark";
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <section
      id="experience"
      ref={containerRef}
      className={`relative min-h-screen py-24 px-6 overflow-hidden transition-colors duration-300`}
      style={{ WebkitBackdropFilter: "blur(12px)" }}
    >
      {/* Background Glow */}
     

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-24"
        >
          <p className="text-cyan-500 font-semibold mb-4 uppercase tracking-wider">
            My Journey
          </p>

          <h2
            className={`text-4xl sm:text-5xl md:text-6xl font-bold ${
              isDark ? "text-white" : "text-[#111827]"
            }`}
          >
            Experience <span className="text-cyan-500">Timeline</span>
          </h2>

          <p
            className={`max-w-2xl mx-auto mt-5 ${
              isDark ? "text-white/60" : "text-[#6B7280]"
            }`}
          >
            My learning and development journey as a Full Stack Developer.
          </p>
        </motion.div>

        {/* Timeline */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative"
        >
          {/* Static Background Line */}
          <div
            className={`
              absolute
              left-3 md:left-1/2
              top-0
              -translate-x-1/2
              h-full
              w-[2px]
              ${
                isDark
                  ? "bg-white/10"
                  : "bg-black/5"
              }
            `}
          />

          {/* Scroll Progress Line */}
          <motion.div
            style={{ scaleY }}
            className="
              absolute
              left-3 md:left-1/2
              top-0
              -translate-x-1/2
              h-full
              w-[2px]
              bg-cyan-500
              origin-top
              z-10
              shadow-[0_0_15px_rgba(34,211,238,0.5)]
            "
          />

          {experiences.map((exp, index) => {
            const Icon = exp.icon;

            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className={`
                  relative flex items-center mb-20
                  ${
                    index % 2 === 0
                      ? "md:justify-start"
                      : "md:justify-end"
                  }
                `}
              >
                {/* Timeline Dot */}
                <div
                  className={`
                    flex
                    absolute left-3 md:left-1/2
                    -translate-x-1/2
                    h-10 w-10 md:h-14 md:w-14
                    rounded-full
                    ${isDark ? "bg-[#111827]/80" : "bg-white/80"}
                    backdrop-blur-xl
                    border ${isDark ? "border-white/10" : "border-black/5"}
                    items-center
                    justify-center
                    z-20
                    shadow-lg
                    bg-cyan-500
                   
                  `}
                   style={{ backdropFilter: "blur(24px)", WebkitBackdropFilter: "blur(24px)" }}
                >
                  <Icon className="text-white w-5 h-5 md:w-6 md:h-6" />
                </div>

                {/* Card */}
                <motion.div
                  whileHover={{
                    y: -8,
                    scale: 1.02,
                  }}
                  className={`
                    w-[calc(100%-2.5rem)] ml-10
                    md:ml-0 md:w-[45%]
                    p-6
                    rounded-3xl
                    ${isDark ? "bg-white/5 border-white/10" : "bg-black/5 border-black/5"}
                    border
                    backdrop-blur-xl
                    hover:border-cyan-500/40
                    transition-all duration-300
                  `}
                    style={{ backdropFilter: "blur(24px)", WebkitBackdropFilter: "blur(24px)" }}
                >
                  <span
                    className="
                      inline-block
                      px-4 py-2
                      rounded-full
                      bg-cyan-500/10
                      text-cyan-500
                      font-bold
                      text-sm
                      mb-4
                    "
                  >
                    {exp.year}
                  </span>

                  <h3
                    className={`text-2xl font-bold ${
                      isDark ? "text-white" : "text-[#111827]"
                    }`}
                  >
                    {exp.title}
                  </h3>

                  <h4 className="text-cyan-500 font-medium mt-2">
                    {exp.company}
                  </h4>

                  <p
                    className={`mt-4 leading-7 ${
                      isDark ? "text-white/60" : "text-[#6B7280]"
                    }`}
                  >
                    {exp.description}
                  </p>
                </motion.div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

export default Experience;