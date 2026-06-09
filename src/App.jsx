import { useState, useEffect, useRef, useCallback } from "react";
import Contact from "./pages/ContactUs";
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

const GITHUB_USERNAME = "mohitsahu";
const LEETCODE_USERNAME = "mohitsahu";

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

const About = ({ theme }) => {
  const isDark = theme === "dark";
  const cards = [
    { icon: "🎯", title: "Career Objective", text: "Aspiring Full Stack Developer seeking opportunities to build impactful web solutions and grow in a dynamic tech environment." },
    { icon: "🎓", title: "Education", text: "B.Tech in Computer Science. Passionate about algorithms, system design, and modern web technologies." },
    { icon: "💡", title: "Passion", text: "I love building products from scratch — elegant UIs, robust backends, and everything in between." },
    { icon: "🧩", title: "DSA Interest", text: "Regularly solving problems on LeetCode and Codeforces. Over 300+ problems solved across all difficulties." }
  ];
  return (
    <Section id="about" title="About Me" subtitle="Who I Am" theme={theme}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
          <p className={`text-[17px] leading-[1.8] mb-6 ${isDark ? 'text-[#9CA3AF]' : 'text-[#6B7280]'}`}>
            I'm <strong className={isDark ? 'text-[#F8FAFC]' : 'text-[#111827]'}>Mohit Sahu</strong>, a passionate Full Stack Developer who loves crafting digital experiences that are both beautiful and functional. I specialize in the MERN stack and have a deep interest in building scalable web applications.
          </p>
          <p className={`text-[17px] leading-[1.8] ${isDark ? 'text-[#9CA3AF]' : 'text-[#6B7280]'}`}>
            When I'm not coding, I'm solving algorithmic problems to sharpen my problem-solving skills. I believe great software is built on clean architecture, thoughtful design, and constant iteration.
          </p>
          <div className="flex gap-4 mt-8 flex-wrap">
            {[["JavaScript","#F7DF1E"],["React","#61DAFB"],["Node.js","#339933"],["MongoDB","#47A248"]].map(([t,c]) => (
              <span key={t} className="px-[14px] py-[6px] rounded-[20px] text-[13px] font-semibold border"
                style={{ backgroundColor: `${c}20`, color: c, borderColor: `${c}40` }}>{t}</span>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {cards.map(c => (
            <div key={c.title} className={`p-5 rounded-2xl border transition-all duration-300 hover:-translate-y-1 hover:border-[#8B5CF6]/40 hover:shadow-[0_8px_30px_rgba(139,92,246,0.15)]
              ${isDark ? 'bg-[#111827] border-white/5' : 'bg-[#F8FAFC] border-black/5'}`}>
              <div className="text-[28px] mb-2">{c.icon}</div>
              <div className={`text-[14px] font-bold mb-[6px] ${isDark ? 'text-[#F8FAFC]' : 'text-[#111827]'}`}>{c.title}</div>
              <div className={`text-[13px] leading-[1.6] ${isDark ? 'text-[#6B7280]' : 'text-[#9CA3AF]'}`}>{c.text}</div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};



const Experience = ({ theme }) => {
  const isDark = theme === "dark";
  const items = [
    { year: "2024", role: "Full Stack Intern", org: "Tech Company", type: "Internship", color: "#3B82F6",
      desc: "Developed and maintained MERN stack applications. Collaborated with senior developers on production features." ,
      skills: ["React","Node.js","MongoDB","REST APIs"] },
    { year: "2023–24", role: "Freelance Developer", org: "Self-Employed", type: "Freelancing", color: "#8B5CF6",
      desc: "Built custom web applications for 5+ clients. Delivered responsive, performant websites on time.",
      skills: ["React","Express","MySQL","Tailwind"] },
    { year: "2022–23", role: "Personal Projects", org: "GitHub", type: "Open Source", color: "#10B981",
      desc: "Built 10+ full-stack projects exploring various technologies, architectures, and design patterns.",
      skills: ["JavaScript","React","Node.js","MongoDB"] }
  ];
  return (
    <Section id="experience" title="Experience" subtitle="My Journey" theme={theme}>
      <div className="relative max-w-[800px] mx-auto">
        <div className="absolute left-[50%] top-0 bottom-0 w-[2px] bg-gradient-to-b from-[#3B82F6] via-[#8B5CF6] to-[#10B981] -translate-x-1/2 hidden sm:block" />
        {items.map((item, i) => (
          <div key={item.role} className={`flex mb-12 relative flex-col sm:flex-row
            ${i % 2 === 0 ? 'sm:justify-start sm:pr-[calc(50%+32px)]' : 'sm:justify-end sm:pl-[calc(50%+32px)]'}`}>
            <div className={`absolute left-[50%] top-6 w-4 h-4 rounded-full border-[3px] -translate-x-1/2 z-[1] shadow-[0_0_15px_rgba(59,130,246,0.5)] hidden sm:block
              ${isDark ? 'border-[#0A0A0A]' : 'border-white'}`}
              style={{ backgroundColor: item.color, boxShadow: `0 0 15px ${item.color}80` }} />
            <div className={`w-full p-6 rounded-2xl border transition-all duration-300 hover:shadow-[0_8px_30px_rgba(59,130,246,0.1)]
              ${isDark ? 'bg-[#111827] border-white/5' : 'bg-[#F8FAFC] border-black/5'}`}
              onMouseEnter={e => e.currentTarget.style.borderColor = `${item.color}50`}
              onMouseLeave={e => e.currentTarget.style.borderColor = isDark ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.06)'}>
              <div className="flex justify-between items-start mb-2 flex-wrap gap-2">
                <div>
                  <span className="text-[11px] font-bold px-[10px] py-[3px] rounded-[20px] mb-[6px] inline-block"
                    style={{ backgroundColor: `${item.color}20`, color: item.color }}>{item.type}</span>
                  <h3 className={`text-[18px] font-bold m-1 ${isDark ? 'text-[#F8FAFC]' : 'text-[#111827]'}`}>{item.role}</h3>
                  <p className="text-[14px] font-semibold m-0" style={{ color: item.color }}>{item.org}</p>
                </div>
                <span className={`text-[14px] font-semibold px-3 py-1 rounded-[20px]
                  ${isDark ? 'bg-[#1F2937] text-[#9CA3AF]' : 'bg-[#E5E7EB] text-[#6B7280]'}`}>{item.year}</span>
              </div>
              <p className={`text-[14px] leading-[1.6] my-3 ${isDark ? 'text-[#9CA3AF]' : 'text-[#6B7280]'}`}>{item.desc}</p>
              <div className="flex flex-wrap gap-[6px]">
                {item.skills.map(s => (
                  <span key={s} className={`text-[11px] px-[10px] py-[3px] rounded-[20px] font-medium
                    ${isDark ? 'bg-[#1F2937] text-[#9CA3AF]' : 'bg-[#E5E7EB] text-[#6B7280]'}`}>{s}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
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

const Achievements = ({ theme }) => {
  const isDark = theme === "dark";
  const certs = [
    { title: "Full Stack Web Development", issuer: "Udemy", year: "2024", icon: "🏆", color: "#F59E0B" },
    { title: "JavaScript Algorithms", issuer: "freeCodeCamp", year: "2023", icon: "🎖️", color: "#3B82F6" },
    { title: "React Developer", issuer: "Meta (Coursera)", year: "2024", icon: "⚛️", color: "#61DAFB" },
    { title: "Node.js Backend Dev", issuer: "LinkedIn Learning", year: "2023", icon: "🟢", color: "#339933" }
  ];
  return (
    <Section id="achievements" title="Achievements" subtitle="Milestones" theme={theme}>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-12">
        {[
          { target: 300, label: "DSA Problems", icon: "🧩" },
          { target: 10, label: "Certifications", icon: "📜" },
          { target: 3, label: "Hackathons", icon: "🏅" },
          { target: 5, label: "Projects Built", icon: "🚀" }
        ].map(s => <StatCounter key={s.label} {...s} theme={theme} />)}
      </div>
      <h3 className={`text-[22px] font-bold mb-6 ${isDark ? 'text-[#F8FAFC]' : 'text-[#111827]'}`}>Certifications & Badges</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {certs.map(c => (
          <div key={c.title} className={`p-5 rounded-2xl border flex gap-4 items-center transition-all duration-300 hover:shadow-[0_4px_20px_rgba(0,0,0,0.1)]
            ${isDark ? 'bg-[#111827]' : 'bg-[#F8FAFC]'}`}
            style={{ borderColor: `${c.color}30` }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = `${c.color}80`; e.currentTarget.style.boxShadow = `0 4px 20px ${c.color}20`; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = `${c.color}30`; e.currentTarget.style.boxShadow = 'none'; }}>
            <div className="w-12 h-12 rounded-xl flex items-center justify-center text-[24px] shrink-0"
              style={{ backgroundColor: `${c.color}20` }}>{c.icon}</div>
            <div>
              <div className={`text-[14px] font-bold ${isDark ? 'text-[#F8FAFC]' : 'text-[#111827]'}`}>{c.title}</div>
              <div className="text-[12px] font-semibold" style={{ color: c.color }}>{c.issuer}</div>
              <div className={`text-[11px] ${isDark ? 'text-[#6B7280]' : 'text-[#9CA3AF]'}`}>{c.year}</div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

const GitHubActivity = ({ theme }) => {
  const isDark = theme === "dark";
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const mockData = {
      repos: 42, followers: 128, following: 87, stars: 234,
      commits: 1240, prs: 67, streak: 14, longestStreak: 45, activeDays: 180,
      contributions: generateContributions()
    };
    setTimeout(() => { setData(mockData); setLoading(false); }, 1000);
  }, []);

  function generateContributions() {
    const weeks = [];
    for (let w = 0; w < 52; w++) {
      const days = [];
      for (let d = 0; d < 7; d++) {
        days.push(Math.random() < 0.6 ? Math.floor(Math.random() * 10) : 0);
      }
      weeks.push(days);
    }
    return weeks;
  }

  const getColor = (count) => {
    if (count === 0) return isDark ? "#161B22" : "#EBEDF0";
    if (count <= 2) return "#0E4429";
    if (count <= 4) return "#006D32";
    if (count <= 7) return "#26A641";
    return "#39D353";
  };

  const stats = data ? [
    { label: "Repositories", value: data.repos, icon: "📁" },
    { label: "Followers", value: data.followers, icon: "👥" },
    { label: "Following", value: data.following, icon: "➕" },
    { label: "Stars Earned", value: data.stars, icon: "⭐" },
    { label: "Total Commits", value: data.commits, icon: "💾" },
    { label: "Pull Requests", value: data.prs, icon: "🔀" }
  ] : [];

  return (
    <Section id="github" title="GitHub Activity" subtitle="Contributions" theme={theme}>
      {loading ? (
        <div className={`text-center py-10 ${isDark ? 'text-[#9CA3AF]' : 'text-[#6B7280]'}`}>
          <div className="text-[48px] mb-4 animate-spin inline-block">⚙️</div>
          <p>Fetching GitHub data...</p>
        </div>
      ) : (
        <>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 mb-10">
            {stats.map(s => (
              <div key={s.label} className={`p-5 rounded-2xl border border-[#3B82F6]/15 text-center transition-all duration-300 hover:border-[#3B82F6]/50 hover:-translate-y-[3px]
                ${isDark ? 'bg-[#111827]' : 'bg-[#F8FAFC]'}`}>
                <div className="text-[24px] mb-1">{s.icon}</div>
                <div className="text-[26px] font-extrabold text-[#3B82F6]">{s.value.toLocaleString()}</div>
                <div className={`text-[11px] font-medium ${isDark ? 'text-[#6B7280]' : 'text-[#9CA3AF]'}`}>{s.label}</div>
              </div>
            ))}
          </div>

          <div className={`p-7 rounded-[20px] border border-[#3B82F6]/15 mb-6 overflow-x-auto
            ${isDark ? 'bg-[#111827]' : 'bg-[#F8FAFC]'}`}>
            <h3 className={`text-[16px] font-bold mb-4 ${isDark ? 'text-[#F8FAFC]' : 'text-[#111827]'}`}>Contribution Graph</h3>
            <div className="flex gap-[3px]">
              {data.contributions.map((week, wi) => (
                <div key={wi} className="flex flex-col gap-[3px]">
                  {week.map((count, di) => (
                    <div key={di} title={`${count} contributions`} className="w-3 h-3 rounded-[2px] transition-transform duration-100 hover:scale-[1.5]"
                      style={{ backgroundColor: getColor(count) }} />
                  ))}
                </div>
              ))}
            </div>
            <div className="flex gap-[6px] items-center mt-3 justify-end">
              <span className={`text-[11px] ${isDark ? 'text-[#6B7280]' : 'text-[#9CA3AF]'}`}>Less</span>
              {[0,2,5,8,10].map(c => (
                <div key={c} className="w-3 h-3 rounded-[2px]" style={{ backgroundColor: getColor(c) }} />
              ))}
              <span className={`text-[11px] ${isDark ? 'text-[#6B7280]' : 'text-[#9CA3AF]'}`}>More</span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { label: "Current Streak", value: `${data.streak} days`, icon: "🔥", color: "#F59E0B" },
              { label: "Longest Streak", value: `${data.longestStreak} days`, icon: "🏆", color: "#8B5CF6" },
              { label: "Active Days", value: `${data.activeDays} days`, icon: "📅", color: "#10B981" }
            ].map(s => (
              <div key={s.label} className={`p-5 rounded-2xl border text-center ${isDark ? 'bg-[#111827]' : 'bg-[#F8FAFC]'}`}
                style={{ borderColor: `${s.color}30` }}>
                <div className="text-[28px] mb-[6px]">{s.icon}</div>
                <div className="text-[22px] font-extrabold" style={{ color: s.color }}>{s.value}</div>
                <div className={`text-[12px] ${isDark ? 'text-[#6B7280]' : 'text-[#9CA3AF]'}`}>{s.label}</div>
              </div>
            ))}
          </div>
        </>
      )}
    </Section>
  );
};

const LeetCodeActivity = ({ theme }) => {
  const isDark = theme === "dark";
  const [data] = useState({
    total: 342, easy: 145, medium: 157, hard: 40,
    streak: 22, longestStreak: 60, activeDays: 210,
    ranking: 45892, contestRating: 1523
  });

  const heatmap = Array.from({ length: 52 }, () =>
    Array.from({ length: 7 }, () => Math.random() < 0.5 ? Math.floor(Math.random() * 8) : 0)
  );

  const getLCColor = (count) => {
    if (count === 0) return isDark ? "#1A1A2E" : "#EBEDF0";
    if (count <= 2) return "#FFA11650";
    if (count <= 5) return "#FFA116";
    return "#FFB84D";
  };

  return (
    <Section id="leetcode" title="LeetCode Activity" subtitle="Problem Solving" theme={theme}>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10">
        <div className={`p-7 rounded-[20px] border border-[#FFA116]/20 ${isDark ? 'bg-[#111827]' : 'bg-[#F8FAFC]'}`}>
          <h3 className={`text-[18px] font-bold mb-5 ${isDark ? 'text-[#F8FAFC]' : 'text-[#111827]'}`}>Problems Solved</h3>
          <div className="text-center mb-6">
            <div className="text-[56px] font-extrabold text-[#FFA116]">{data.total}</div>
            <div className={`text-[14px] ${isDark ? 'text-[#9CA3AF]' : 'text-[#6B7280]'}`}>Total Solved</div>
          </div>
          <div className="flex gap-3">
            {[
              { label: "Easy", value: data.easy, color: "#22C55E" },
              { label: "Medium", value: data.medium, color: "#FFA116" },
              { label: "Hard", value: data.hard, color: "#EF4444" }
            ].map(d => (
              <div key={d.label} className="flex-1 text-center py-3 px-2 rounded-xl border"
                style={{ backgroundColor: `${d.color}15`, borderColor: `${d.color}30` }}>
                <div className="text-[22px] font-extrabold" style={{ color: d.color }}>{d.value}</div>
                <div className={`text-[11px] font-semibold ${isDark ? 'text-[#9CA3AF]' : 'text-[#6B7280]'}`}>{d.label}</div>
              </div>
            ))}
          </div>
        </div>
        <div className={`p-7 rounded-[20px] border border-[#FFA116]/20 ${isDark ? 'bg-[#111827]' : 'bg-[#F8FAFC]'}`}>
          <h3 className={`text-[18px] font-bold mb-5 ${isDark ? 'text-[#F8FAFC]' : 'text-[#111827]'}`}>Contest Stats</h3>
          {[
            { label: "Global Ranking", value: `#${data.ranking.toLocaleString()}`, color: "#FFA116" },
            { label: "Contest Rating", value: data.contestRating, color: "#8B5CF6" },
            { label: "Current Streak", value: `${data.streak} days 🔥`, color: "#F59E0B" },
            { label: "Longest Streak", value: `${data.longestStreak} days`, color: "#10B981" }
          ].map(s => (
            <div key={s.label} className={`flex justify-between items-center py-[10px] border-b last:border-0
              ${isDark ? 'border-white/5' : 'border-black/5'}`}>
              <span className={`text-[14px] ${isDark ? 'text-[#9CA3AF]' : 'text-[#6B7280]'}`}>{s.label}</span>
              <span className="text-[16px] font-bold" style={{ color: s.color }}>{s.value}</span>
            </div>
          ))}
        </div>
      </div>
      <div className={`p-7 rounded-[20px] border border-[#FFA116]/20 overflow-x-auto ${isDark ? 'bg-[#111827]' : 'bg-[#F8FAFC]'}`}>
        <h3 className={`text-[16px] font-bold mb-4 ${isDark ? 'text-[#F8FAFC]' : 'text-[#111827]'}`}>Activity Heatmap</h3>
        <div className="flex gap-[3px]">
          {heatmap.map((week, wi) => (
            <div key={wi} className="flex flex-col gap-[3px]">
              {week.map((count, di) => (
                <div key={di} title={`${count} problems`} className="w-3 h-3 rounded-[2px] transition-transform duration-100 hover:scale-[1.5]"
                  style={{ backgroundColor: getLCColor(count) }} />
              ))}
            </div>
          ))}
        </div>
      </div>
    </Section>
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
            className="w-full border border-white"
          >
            <Navbar theme={theme} setTheme={setTheme} />
            <Hero theme={theme} />
            <About theme={theme} />
            <Skills theme={theme} />
            <Projects theme={theme} />
            <Experience theme={theme} />
            <Achievements theme={theme} />
            <GitHubActivity theme={theme} />
            <LeetCodeActivity theme={theme} />
            <Contact theme={theme} />
            <Footer theme={theme} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}