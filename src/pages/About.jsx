import React from "react";
import { Code2, Briefcase, Trophy } from "lucide-react";

function About() {
  return (
    <section
      id="about"
      className="min-h-screen w-full py-20 px-6"
    >
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-white">
            About{" "}
            <span className="text-cyan-400">
              Me
            </span>
          </h2>

          <p className="text-white/60 mt-4 max-w-2xl mx-auto">
            Passionate Full Stack Developer focused on
            building scalable web applications and
            creating exceptional user experiences.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side */}
          <div className="flex justify-center">
            <div
              className="
                relative
                w-[300px]
                h-[300px]
                lg:w-[400px]
                lg:h-[400px]
                rounded-3xl
                bg-white/10
                border border-white/20
                backdrop-blur-xl
                overflow-hidden
              "
            >
              <div className="absolute inset-0 bg-cyan-500/10 blur-3xl"></div>

              <img
                src="/HD-wallpaper-hacker-black-intelligent.jpg"
                alt="Mohit Sahu"
                className="w-full h-full object-cover relative z-10"
              />
            </div>
          </div>

          {/* Right Side */}
          <div>
            <h3 className="text-3xl font-bold text-white mb-6">
              Full Stack Web Developer
            </h3>

            <p className="text-white/70 leading-8">
              I'm Mohit Sahu, a passionate Full Stack Web
              Developer who enjoys building modern,
              responsive and scalable web applications.
              I work with React, Node.js, Express,
              MongoDB, PHP and MySQL to create
              high-quality digital experiences.
            </p>

            <p className="text-white/70 leading-8 mt-4">
              My focus is writing clean code,
              solving real-world problems and
              continuously improving my development
              skills through projects and DSA.
            </p>

            {/* Cards */}
            <div className="grid sm:grid-cols-3 gap-4 mt-8">
              <div
                className="
                  p-5
                  rounded-2xl
                  bg-white/10
                  border border-white/20
                  backdrop-blur-xl
                "
                  style={{ backdropFilter: "blur(24px)", WebkitBackdropFilter: "blur(24px)" }}
              >
                <Code2 className="text-cyan-400 mb-3" />
                <h4 className="text-white font-semibold">
                  15+
                </h4>
                <p className="text-white/60 text-sm">
                  Technologies
                </p>
              </div>

              <div
                className="
                  p-5
                  rounded-2xl
                  bg-white/10
                  border border-white/20
                  backdrop-blur-xl
                "
                  style={{ backdropFilter: "blur(24px)", WebkitBackdropFilter: "blur(24px)" }}
              >
                <Briefcase className="text-cyan-400 mb-3" />
                <h4 className="text-white font-semibold">
                  10+
                </h4>
                <p className="text-white/60 text-sm">
                  Projects
                </p>
              </div>

              <div
                className="
                  p-5
                  rounded-2xl
                  bg-white/10
                  border border-white/20
                  backdrop-blur-xl
                "
                  style={{ backdropFilter: "blur(24px)", WebkitBackdropFilter: "blur(24px)" }}
              >
                <Trophy className="text-cyan-400 mb-3" />
                <h4 className="text-white font-semibold">
                  DSA
                </h4>
                <p className="text-white/60 text-sm">
                  Problem Solver
                </p>
              </div>
            </div>

            {/* Button */}
            <button
              className="
                mt-8
                px-6
                py-3
                rounded-xl
                bg-cyan-500
                text-white
                font-semibold
                hover:scale-105
                transition-all duration-300
                cursor-pointer
              "
            >
              Let's Connect
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
export default About;