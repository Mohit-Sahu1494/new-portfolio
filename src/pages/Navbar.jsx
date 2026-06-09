import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, Sun, Moon } from "lucide-react";

export default function Navbar({ theme, setTheme }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const links = ["Home", "About", "Skills", "Projects", "Experience", "Achievements", "GitHub", "LeetCode", "Contact"];

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  // Lock scroll when menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [menuOpen]);

  const scrollTo = (id) => {
    const element = document.getElementById(id.toLowerCase());
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setMenuOpen(false);
  };

  const isDark = theme === "dark";

  const menuVariants = {
    closed: {
      opacity: 0,
      y: "-100%",
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      },
    },
    open: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const containerVariants = {
    open: {
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
    closed: {
      transition: {
        staggerChildren: 0.05,
        staggerDirection: -1,
      },
    },
  };

  const itemVariants = {
    open: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.4,
        ease: [0.22, 1, 0.36, 1],
      },
    },
    closed: {
      y: 20,
      opacity: 0,
      transition: {
        duration: 0.4,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-[1002] transition-all duration-300
      ${scrolled ? (isDark ? "bg-[#0A0A0A]/95 backdrop-blur-xl " : "bg-white/95 backdrop-blur-xl border-b border-black/10") : "bg-transparent"}`}
      >
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between w-full">
          {/* Logo */}
          <div
            className="text-[22px] font-extrabold bg-gradient-to-br from-[#3B82F6] to-[#8B5CF6] bg-clip-text text-transparent cursor-pointer shrink-0 z-50"
            onClick={() => scrollTo("home")}
          >
            Mohit Sahu
          </div>

          {/* Desktop Links */}
          <div className="hidden lg:flex gap-8 items-center flex-1 justify-center">
            {links.map((l) => (
              <button
                key={l}
                onClick={() => scrollTo(l === "GitHub" ? "github" : l === "LeetCode" ? "leetcode" : l.toLowerCase())}
                className={`group relative bg-transparent border-none cursor-pointer text-[14px] font-medium transition-colors duration-200 py-1
                ${isDark ? "text-[#9CA3AF] hover:text-[#3B82F6]" : "text-[#6B7280] hover:text-[#3B82F6]"}`}
              >
                {l}
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#3B82F6] transition-all duration-300 group-hover:w-full" />
              </button>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex gap-4 items-center shrink-0 z-50">
            <button
              onClick={() => setTheme((t) => (t === "dark" ? "light" : "dark"))}
              className={`p-2 rounded-full border border-[#8B5CF6]/40 cursor-pointer transition-all duration-300 hover:scale-110
              ${isDark ? "bg-[#1F2937] text-yellow-400" : "bg-[#F3F4F6] text-[#8B5CF6]"}`}
            >
              {isDark ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button
              onClick={() => setMenuOpen((o) => !o)}
              className={`lg:hidden bg-transparent border-none cursor-pointer transition-transform duration-300 hover:scale-110
              ${isDark ? "text-[#F8FAFC]" : "text-[#111827]"}`}
            >
              {menuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            className={`fixed inset-0 z-[1001] lg:hidden flex flex-col items-center justify-center
            ${isDark ? "bg-[#0A0A0A]/98" : "bg-white/98"}`}
          >
            <motion.div variants={containerVariants} className="flex flex-col items-center gap-6">
              {links.map((l) => (
                <motion.button
                  key={l}
                  variants={itemVariants}
                  whileHover={{ scale: 1.1, x: 10 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => scrollTo(l === "GitHub" ? "github" : l === "LeetCode" ? "leetcode" : l.toLowerCase())}
                  className={`bg-transparent border-none cursor-pointer text-3xl font-bold transition-colors duration-300
                    ${isDark ? "text-[#F8FAFC] hover:text-[#3B82F6]" : "text-[#111827] hover:text-[#3B82F6]"}`}
                >
                  {l}
                </motion.button>
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}