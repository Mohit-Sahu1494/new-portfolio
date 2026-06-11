import { useState, useEffect, useRef, useCallback } from "react";
import ContactUs from "./pages/ContactUs";
import { Section } from "./components/Section";
import { useInView } from "./hooks/useInView";
import Footer from "./pages/Footer";
import LoadingScreen from "./pages/Loading";
import Projects from "./pages/Projects";
import Navbar from "./pages/Navbar";
import ParticleCanvas from "./components/ui/ParticleCanvas";
import MultiStepLoaderDemo from "./components/multi-step-loader-demo";
import Hero from "./pages/Hero";
import Skills from "./pages/Skills";
import { AnimatePresence, motion } from "motion/react";
import About from "./pages/About";
import Experience from "./pages/Experience";
import GitHubActivity from "./pages/GitHubActivity";
import LeetCode from "./pages/LeetCode";


const useTheme = () => {
  const [theme, setTheme] = useState(() => localStorage.getItem("theme") || "dark");
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);
  return [theme, setTheme];
};

const useCountUp = (target, duration = 2000, start = false) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    let startTime = null;
    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [target, duration, start]);
  return count;
};

const StatCounter = ({ target, label, icon, theme }) => {
  const [ref, inView] = useInView(0.3);
  const count = useCountUp(target, 2000, inView);
  const isDark = theme === "dark";
  return (
    <div ref={ref} className={`p-7 rounded-[20px] border border-[#8B5CF6]/15 text-center transition-all duration-300 hover:border-[#8B5CF6]/40 hover:shadow-[0_8px_30px_rgba(139,92,246,0.15)] hover:-translate-y-1
      ${isDark ? 'bg-[#111827]' : 'bg-[#F8FAFC]'}`}>
      <div className="text-[36px] mb-2">{icon}</div>
      <div className="text-[42px] font-extrabold bg-gradient-to-br from-[#3B82F6] to-[#8B5CF6] bg-clip-text text-transparent">{count}+</div>
      <div className={`text-[14px] font-medium mt-1 ${isDark ? 'text-[#9CA3AF]' : 'text-[#6B7280]'}`}>{label}</div>
    </div>
  );
};




export default function App() {
  const [theme, setTheme] = useTheme();
  const [loaded, setLoaded] = useState(false);

  const isDark = theme === "dark";

  useEffect(() => {
    document.body.className = `transition-colors duration-300 ${isDark ? 'bg-[#0A0A0A]' : 'bg-white'}`;
  }, [isDark]);

  return (
    <div className={`font-['Inter',-apple-system,BlinkMacSystemFont,sans-serif] min-h-screen transition-all duration-300
      ${isDark ? 'bg-[#0A0A0A] text-[#F8FAFC]' : 'bg-white text-[#111827]'}`}>
      <AnimatePresence mode="wait">
        {!loaded ? (
          <MultiStepLoaderDemo key="loader" setLoading={setLoaded} />
        ) : (
         <motion.div
  key="content"
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 1, ease: "easeInOut" }}
  className="w-full relative"
>
  <ParticleCanvas />
  <main className="relative overflow-scroll no-scrollbar h-screen w-screen">
  <Navbar theme={theme} setTheme={setTheme} />
  <Hero/>
   <About theme={theme} />
    <Skills theme={theme} />
       <Projects theme={theme} />
       <Experience theme={theme} />
         <GitHubActivity theme={theme} />
        <LeetCode theme={theme} />
          <ContactUs theme={theme} />
         <Footer theme={theme} /> 
         
</main>

{/*             
           
            <Achievements theme={theme} />
            <GitHubActivity theme={theme} />
            <LeetCode theme={theme} />
          
           */}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}