
import { useState, useEffect, useRef } from "react";
import ParticleCanvas from "../components/ui/ParticleCanvas";
import CanvasTextDemo from "@/components/canvas-text-demo";
export default function Hero({ theme }) {
    const [roleIdx, setRoleIdx] = useState(0);
    const [typed, setTyped] = useState("");
    const [deleting, setDeleting] = useState(false);
    const roles = ["Full-Stack Web Developer", "MERN Stack Developer", "React Developer", "Backend Developer", "Problem Solver"];

    useEffect(() => {
        const role = roles[roleIdx];
        let timeout;
        if (!deleting) {
            if (typed.length < role.length) {
                timeout = setTimeout(() => setTyped(role.slice(0, typed.length + 1)), 80);
            } else {
                timeout = setTimeout(() => setDeleting(true), 2000);
            }
        } else {
            if (typed.length > 0) {
                timeout = setTimeout(() => setTyped(typed.slice(0, -1)), 40);
            } else {
                setDeleting(false);
                setRoleIdx((i) => (i + 1) % roles.length);
            }
        }
        return () => clearTimeout(timeout);
    }, [typed, deleting, roleIdx, roles]);

    const isDark = theme === "dark";
    return (
        <section id="home" className={`min-h-screen relative flex items-center overflow-hidden transition-colors duration-300 ${isDark ? 'bg-[#0A0A0A]' : 'bg-white'}`}>
            {isDark && <ParticleCanvas />}
            <div className="absolute top-[20%] right-[10%] w-[400px] h-[400px] rounded-full bg-radial-gradient from-[#8B5CF6]/15 to-transparent blur-[40px] pointer-events-none" />
            <div className="absolute bottom-[20%] left-[5%] w-[300px] h-[300px] rounded-full bg-radial-gradient from-[#3B82F6]/12 to-transparent blur-[40px] pointer-events-none" />

            <div className="max-w-7xl h-full mx-auto px-12 relative z-[1] flex items-center gap-16 w-full flex-wrap lg:flex-nowrap">
                <div className="flex-1 ml-3 px-2 min-w-[300px]">
                    <div className="inline-flex items-center gap-2 px-[14px] py-[6px] rounded-[20px] bg-[#3B82F6]/10 border border-[#3B82F6]/30 mb-6">
                        <div className="w-2 h-2 rounded-full bg-[#3B82F6] animate-pulse2" />
                        <span className="text-[13px] text-[#3B82F6] font-medium">Open to Opportunities</span>
                    </div>
                     <CanvasTextDemo/>
                    <div className="text-[clamp(20px,3vw,32px)] font-semibold mb-6 h-10 flex items-center gap-[2px]">
                        <span className="text-[#8B5CF6]">{typed}</span>
                        <span className="text-[#3B82F6] animate-blink">|</span>
                    </div>
                    <p className={`text-[17px] leading-[1.7] max-w-[500px] mb-10 ${isDark ? 'text-[#9CA3AF]' : 'text-[#6B7280]'}`}>
                        Full Stack Web Developer passionate about building scalable, beautiful, and performance-first web applications using the MERN stack.
                    </p>
                    <div className="flex gap-4 flex-wrap">
                        {[
                            { label: "View Projects", primary: true, onClick: () => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" }) },
                            { label: "Download Resume", primary: false, onClick: () => { } },
                        ].map(btn => (
                            <button key={btn.label} onClick={btn.onClick}
                                className={`px-7 py-3 rounded-[10px] font-semibold text-[15px] cursor-pointer transition-all duration-[0.25s] hover:-translate-y-[2px]
                  ${btn.primary
                                        ? 'bg-gradient-to-br from-[#3B82F6] to-[#8B5CF6] text-white border-none hover:shadow-[0_8px_25px_rgba(139,92,246,0.4)]'
                                        : `bg-transparent border ${isDark ? 'text-[#F8FAFC] border-white/20' : 'text-[#111827] border-black/20'}`}`}
                            >{btn.label}</button>
                        ))}
                    </div>
                    <div className="flex gap-8 mt-12">
                        {[["5+", "Projects Built"], ["2+", "Years Coding"], ["300+", "DSA Solved"]].map(([n, l]) => (
                            <div key={l} className="text-center">
                                <div className="text-[28px] font-extrabold bg-gradient-to-br from-[#3B82F6] to-[#8B5CF6] bg-clip-text text-transparent">{n}</div>
                                <div className={`text-[12px] font-medium ${isDark ? 'text-[#6B7280]' : 'text-[#9CA3AF]'}`}>{l}</div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="flex justify-center flex-none">
                    <div className="relative">

                        <div
                            className="w-[280px] h-[280px] flex items-center justify-center
                 bg-gradient-to-br from-[#3B82F6] to-[#8B5CF6]
                 shadow-[0_0_60px_rgba(139,92,246,0.4)]
                 animate-morphShape"
                            style={{
                                borderRadius: "30% 70% 70% 30% / 30% 30% 70% 70%",
                            }}
                        >
                            <div
                                className={`w-[260px] h-[260px] flex items-center justify-center text-[96px]
                    animate-morphShape animation-reverse
                    ${isDark ? "bg-[#111827]" : "bg-[#F8FAFC]"}`}
                                style={{
                                    borderRadius: "30% 70% 70% 30% / 30% 30% 70% 70%",
                                }}
                            >
                                👨‍💻
                            </div>
                        </div>

                        {[
                            {
                                pos: "top-[-16px] right-[-16px]",
                                bg: "#3B82F6",
                                icon: "⚛️",
                                label: "React",
                            },
                            {
                                pos: "bottom-[-16px] left-[-16px]",
                                bg: "#8B5CF6",
                                icon: "🟢",
                                label: "Node.js",
                            },
                        ].map((b, i) => (
                            <div
                                key={i}
                                className={`absolute ${b.pos}
                    rounded-xl px-3 py-2 flex items-center gap-[6px]
                    text-[13px] font-semibold backdrop-blur-md
                    ${isDark
                                        ? "bg-[#111827] text-[#F8FAFC]"
                                        : "bg-[#F8FAFC] text-[#111827]"}`}
                                style={{
                                    border: `1px solid ${b.bg}40`,
                                    boxShadow: `0 4px 20px ${b.bg}30`,
                                }}
                            >
                                <span>{b.icon}</span>
                                {b.label}
                            </div>
                        ))}

                    </div>
                </div>
            </div>


        </section>

    );
};
