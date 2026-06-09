import { useState } from "react";
import { Section } from "@/components/Section";
export default function Projects ({ theme }){
  const isDark = theme === "dark";
  const [filter, setFilter] = useState("All");
  const filters = ["All","React","MERN","JavaScript"];
  const projects = [
    {
      title: "E-Commerce Platform", tags: ["MERN","React"], emoji: "🛒",
      desc: "Full-stack e-commerce with authentication, cart, payment integration, and admin dashboard.",
      tech: ["React","Node.js","MongoDB","Express","Stripe"],
      features: ["JWT Auth","Payment Gateway","Admin Panel","Responsive"],
      color: "#3B82F6"
    },
    {
      title: "Task Management App", tags: ["React","JavaScript"], emoji: "✅",
      desc: "Drag-and-drop task manager with real-time updates, team collaboration, and analytics.",
      tech: ["React","Socket.io","Node.js","MongoDB"],
      features: ["Drag & Drop","Real-time","Team Collab","Charts"],
      color: "#8B5CF6"
    },
    {
      title: "Chat Application", tags: ["MERN","React"], emoji: "💬",
      desc: "Real-time chat application with rooms, direct messaging, file sharing and emoji support.",
      tech: ["React","Socket.io","Node.js","MongoDB"],
      features: ["Real-time Chat","File Sharing","Rooms","Emojis"],
      color: "#10B981"
    },
    {
      title: "Portfolio Builder", tags: ["React","JavaScript"], emoji: "🎨",
      desc: "Drag-and-drop portfolio builder with live preview, multiple templates and export options.",
      tech: ["React","Tailwind","Framer Motion"],
      features: ["Drag & Drop","Live Preview","Templates","Export PDF"],
      color: "#F59E0B"
    },
    {
      title: "Blog Platform", tags: ["MERN"], emoji: "📝",
      desc: "Full-stack blog platform with markdown editor, SEO optimization, and comment system.",
      tech: ["React","Node.js","MongoDB","Express"],
      features: ["Markdown","SEO","Comments","Auth"],
      color: "#EF4444"
    },
    {
      title: "Weather Dashboard", tags: ["JavaScript","React"], emoji: "🌤️",
      desc: "Weather dashboard with 7-day forecast, location search, and beautiful data visualizations.",
      tech: ["React","OpenWeather API","Chart.js"],
      features: ["7-Day Forecast","Location Search","Charts","Dark Mode"],
      color: "#06B6D4"
    }
  ];
  const filtered = filter === "All" ? projects : projects.filter(p => p.tags.includes(filter));
  return (
    <Section id="projects" title="Featured Projects" subtitle="My Work" theme={theme}>
      <div className="flex gap-3 mb-10 flex-wrap justify-center">
        {filters.map(f => (
          <button key={f} onClick={() => setFilter(f)} 
            className={`px-5 py-2 rounded-[20px] font-semibold text-[14px] cursor-pointer transition-all duration-200
              ${filter === f 
                ? 'bg-gradient-to-br from-[#3B82F6] to-[#8B5CF6] text-white border-none' 
                : `bg-transparent border ${isDark ? 'text-[#9CA3AF] border-white/10' : 'text-[#6B7280] border-black/10'}`}`}
          >{f}</button>
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map(p => (
          <div key={p.title} className={`rounded-[20px] overflow-hidden border transition-all duration-300 cursor-pointer group hover:-translate-y-[6px]
            ${isDark ? 'bg-[#111827] border-white/5' : 'bg-[#F8FAFC] border-black/5'}`}
            style={{ 
              '--hover-shadow': `0 20px 50px ${p.color}30`,
              '--hover-border': `${p.color}60`
            }}
            onMouseEnter={e => {
              e.currentTarget.style.boxShadow = `0 20px 50px ${p.color}30`;
              e.currentTarget.style.borderColor = `${p.color}60`;
            }}
            onMouseLeave={e => {
              e.currentTarget.style.boxShadow = 'none';
              e.currentTarget.style.borderColor = isDark ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.06)';
            }}
          >
            <div className="h-40 flex items-center justify-center text-[64px] border-b"
              style={{ background: `linear-gradient(135deg,${p.color}30,${p.color}10)`, borderBottomColor: `${p.color}20` }}>
              {p.emoji}
            </div>
            <div className="p-6">
              <h3 className={`text-[18px] font-bold m-0 mb-2 ${isDark ? 'text-[#F8FAFC]' : 'text-[#111827]'}`}>{p.title}</h3>
              <p className={`text-[14px] leading-[1.6] mb-4 ${isDark ? 'text-[#9CA3AF]' : 'text-[#6B7280]'}`}>{p.desc}</p>
              <div className="flex flex-wrap gap-[6px] mb-4">
                {p.tech.map(t => (
                  <span key={t} className="text-[11px] px-[10px] py-[3px] rounded-[20px] font-semibold"
                    style={{ backgroundColor: `${p.color}20`, color: p.color }}>{t}</span>
                ))}
              </div>
              <div className="flex flex-wrap gap-[6px] mb-5">
                {p.features.map(f => (
                  <span key={f} className={`text-[11px] px-[10px] py-[3px] rounded-[20px] font-medium ${isDark ? 'bg-[#1F2937] text-[#9CA3AF]' : 'bg-[#E5E7EB] text-[#6B7280]'}`}>✓ {f}</span>
                ))}
              </div>
              <div className="flex gap-3">
                {[["🔗 Live Demo",true],["⭐ GitHub",false]].map(([label,primary]) => (
                  <button key={label} className={`flex-1 py-[9px] rounded-lg text-[13px] font-bold cursor-pointer transition-all duration-200 border
                    ${primary 
                      ? 'text-white border-none' 
                      : 'bg-transparent'}`}
                    style={{ 
                      backgroundColor: primary ? p.color : 'transparent',
                      color: primary ? '#fff' : p.color,
                      borderColor: primary ? 'transparent' : `${p.color}50`
                    }}
                  >{label}</button>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};