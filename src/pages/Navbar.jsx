import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { label: "Home", id: "home" },
  { label: "About", id: "about" },
  { label: "Skills", id: "skills" },
  { label: "Projects", id: "projects" },
  { label: "Contact Us", id: "contact" },
];

function Navbar({ theme }) {
  const [isOpen, setIsOpen] = useState(false);
  const isDark = theme === "dark";

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    const container = document.querySelector("main");
    if (element && container) {
      const offset = 80; // Height of the navbar
      const elementPosition = element.offsetTop;
      const offsetPosition = elementPosition - offset;

      container.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
    setIsOpen(false);
  };

  return (
    <>
      <nav 
        style={{ 
          backdropFilter: "blur(20px)", 
          WebkitBackdropFilter: "blur(20px)" 
        }}
        className={`fixed top-0 left-0 w-full z-50 px-4 border-b transition-colors duration-300 shadow-[0_8px_32px_rgba(0,0,0,0.2)]
          ${isDark ? "bg-black/20 border-white/10" : "bg-white/20 border-black/5"}`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
          <h1 
            onClick={() => scrollToSection("home")}
            className={`text-xl font-bold cursor-pointer transition-colors duration-300 ${isDark ? "text-white" : "text-black"}`}>
            Mohit.dev
          </h1>

          {/* Desktop Nav */}
          <ul className={`hidden lg:flex items-center gap-8 transition-colors duration-300 ${isDark ? "text-white/80" : "text-black/70"}`}>
            {navItems.map((item) => (
              <li
                key={item.label}
                onClick={() => scrollToSection(item.id)}
                className="
                  cursor-pointer hover:text-cyan-400 hover:-translate-y-1 transition-all duration-300 ">
                {item.label}
              </li>
            ))}
          </ul>

          {/* Desktop Resume */}
          <button
            className={`hidden lg:block px-5 py-2 rounded-xl border transition-all duration-300 backdrop-blur-md 
              ${isDark 
                ? "bg-white/10 border-white/20 text-white hover:bg-white/20" 
                : "bg-black/5 border-black/10 text-black hover:bg-black/10"
              } hover:scale-105`}
          >
            Resume
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(true)}
            className={`lg:hidden p-2 rounded-xl border transition-all duration-300 backdrop-blur-md hover:scale-110
              ${isDark 
                ? "bg-white/10 border-white/20 text-white" 
                : "bg-black/5 border-black/10 text-black"
              }`}
          >
            <Menu size={24} />
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, backdropFilter: "blur(0px)", WebkitBackdropFilter: "blur(0px)" }}
            animate={{ opacity: 1, backdropFilter: "blur(20px)", WebkitBackdropFilter: "blur(20px)" }}
            exit={{ opacity: 0, backdropFilter: "blur(0px)", WebkitBackdropFilter: "blur(0px)" }}
            transition={{ duration: 0.4 }}
            className="
              fixed
              inset-0
              z-[100]
              bg-black/60
              lg:hidden
            "
          >
            {/* Close Button */}
            <div className="flex justify-end px-10 py-4 ">
              <button
                onClick={() => setIsOpen(false)}
                className="
                  p-2
                  rounded-xl
                  bg-white/10
                  border border-white/20
                  text-white
                  hover:rotate-90
                  transition-all duration-300
                "
              >
                <X size={24} />
              </button>
            </div>

            {/* Links */}
            <div className="flex flex-col items-center justify-center h-[80vh] gap-8">
              {navItems.map((item, index) => (
                <motion.button
                  key={item.label}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 40 }}
                  transition={{
                    delay: index * 0.1,
                    duration: 0.5,
                  }}
                  onClick={() => scrollToSection(item.id)}
                  className="
                    text-white
                    text-4xl
                    font-semibold
                    hover:text-cyan-400
                    hover:scale-110
                    transition-all duration-300
                  "
                >
                  {item.label}
                </motion.button>
              ))}

              <motion.button
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 40 }}
                transition={{
                  delay: navItems.length * 0.1,
                  duration: 0.5,
                }}
                className="
                  mt-8
                  px-6
                  py-3
                  rounded-xl
                  bg-white/10
                  border border-white/20
                  text-white
                  hover:bg-white/20
                  hover:scale-105
                  transition-all duration-300
                "
              >
                Resume
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default Navbar;