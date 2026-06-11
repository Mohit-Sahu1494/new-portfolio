import React from "react";
import { motion } from "framer-motion";
import {
  ExternalLink,
  ArrowUpRight,
  Star,
} from "lucide-react";

import { FaGithub } from "react-icons/fa";


const projects = [
  {
    title: "Social Media Platform",
    description:
      "A full-stack social media application with authentication, posts, comments, likes, followers and profile management.",
    tech: ["React", "Node.js", "MongoDB"],
    github: "#",
    live: "#",
  },
  {
    title: "Online Voting System",
    description:
      "Secure online voting platform with admin dashboard, candidate management and real-time vote counting.",
    tech: ["React", "Express", "MongoDB"],
    github: "#",
    live: "#",
  },
  {
    title: "Online Voting System",
    description:
      "Secure online voting platform with admin dashboard, candidate management and real-time vote counting.",
    tech: ["React", "Express", "MongoDB"],
    github: "#",
    live: "#",
  },
  {
    title: "Online Voting System",
    description:
      "Secure online voting platform with admin dashboard, candidate management and real-time vote counting.",
    tech: ["React", "Express", "MongoDB"],
    github: "#",
    live: "#",
  },
  {
    title: "Event Ticket Booking",
    description:
      "Event management and ticket booking platform with QR verification and payment integration.",
    tech: ["React", "Node.js", "MySQL"],
    github: "#",
    live: "#",
  },
  {
    title: "E-Commerce Website",
    description:
      "Modern e-commerce platform with cart, wishlist, checkout and admin management.",
    tech: ["React", "PHP", "MySQL"],
    github: "#",
    live: "#",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 60,
    scale: 0.9,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
    },
  },
};

function Projects() {
  return (
    <section
      id="projects"
      className="min-h-screen w-full py-24 px-3 sm:px-6 lg:px-8 overflow-hidden"
    >
      <div className="max-w-7xl sm:px-8 mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <p className="text-cyan-400 font-medium mb-4">
            My Work
          </p>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white">
            Featured <span className="text-cyan-400">Projects</span>
          </h2>

          <p className="text-white/60 max-w-2xl mx-auto mt-5">
            Some of my recent projects showcasing
            frontend, backend and full-stack
            development skills.
          </p>
        </motion.div>

        {/* Project Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project) => (
            <motion.div
              key={project.title}
              variants={cardVariants}
              whileHover={{
                y: -10,
                scale: 1.02,
              }}
              className="
                group
                relative
                overflow-hidden
                rounded-3xl
                bg-white/5
                border border-white/10
                backdrop-blur-xl
                p-6
              "
                style={{ backdropFilter: "blur(24px)", WebkitBackdropFilter: "blur(24px)" }}
            >
              {/* Glow */}
              <div
                className="
                  absolute
                  inset-0
                  opacity-0
                  group-hover:opacity-100
                  transition-all
                  duration-500
                  bg-cyan-500/10
                "
              />

              <div className="relative z-10">
                {/* Project Image */}
                <div
                  className="
                    h-56
                    w-full
                    rounded-2xl
                    bg-white/5
                    border border-white/10
                    mb-6
                    flex
                    items-center
                    justify-center
                  "
                >
                  <ArrowUpRight
                    size={50}
                    className="text-cyan-400"
                  />
                </div>

                <h3 className="text-2xl font-bold text-white">
                  {project.title}
                </h3>

                <p className="text-white/60 mt-4 leading-7">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mt-5">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="
                        px-3
                        py-1
                        rounded-full
                        text-sm
                        bg-cyan-500/10
                        text-cyan-400
                        border
                        border-cyan-500/20
                      "
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="flex gap-4 mt-6">
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href={project.github}
                    className="
                      flex
                      items-center
                      gap-2
                      px-4
                      py-2
                      rounded-xl
                      bg-white/10
                      border border-white/10
                      text-white
                    "
                  >
                  <FaGithub size={18} />
                    Code
                  </motion.a>

                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href={project.live}
                    className="
                      flex
                      items-center
                      gap-2
                      px-4
                      py-2
                      rounded-xl
                      bg-cyan-500
                      text-black
                      font-medium
                    "
                  >
                    <ExternalLink size={18} />
                    Live Demo
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Projects;