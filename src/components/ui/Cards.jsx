import React from "react";
import { useInView } from "../../hooks/useInView"





const SkillBar = ({ name, level, color, theme }) => {
  const [ref, inView] = useInView(0.3);
  const isDark = theme === "dark";
  return (
    <div ref={ref} className="mb-5">
      <div className="flex justify-between mb-[6px]">
        <span className={`text-[14px] font-semibold ${isDark ? 'text-[#F8FAFC]' : 'text-[#111827]'}`}>{name}</span>
        <span className="text-[13px] font-bold" style={{ color }}>{level}%</span>
      </div>
      <div className={`h-2 rounded-full overflow-hidden ${isDark ? 'bg-[#1F2937]' : 'bg-[#E5E7EB]'}`}>
        <div 
          className="h-full rounded-full transition-all duration-[1.2s] ease-out delay-300"
          style={{ 
            width: inView ? `${level}%` : "0%", 
            background: `linear-gradient(90deg,${color},${color}99)`,
            boxShadow: `0 0 10px ${color}60`
          }} 
        />
      </div>
    </div>
  );
};


 const skillGroups = [
      { name: "HTML5", level: 95, color: "142,249,252" },
      { name: "CSS3", level: 90, color: "142,252,204" },
      { name: "JavaScript", level: 88, color: "142,252,157" },
      { name: "React.js", level: 85, color: "215,252,142" },
      { name: "Tailwind CSS", level: 82, color: "252,252,142" },
      { name: "Node.js", level: 80, color: "252,208,142" },
      { name: "Express.js", level: 78, color: "252,142,142" },
      { name: "MongoDB", level: 75, color: "252,142,239" },
      { name: "MySQL", level: 70, color: "204,142,252" },
      { name: "Git & GitHub", level: 85, color: "142,249,252" },
      { name: "VS Code", level: 92, color: "142,202,252" },
      { name: "Postman", level: 78, color: "215,252,142" }
  ];

export default function Card({theme}) {
  return (
    <div className="relative flex items-center justify-center w-full h-screen overflow-hidden">
      <div
        className="absolute w-[100px] h-[150px] top-1/4 left-1/2 -translate-x-1/2 z-10 preserve-3d animate-rotating"
        style={{
          "--quantity": colors.length,
          "--w": "100px",
          "--h": "150px",
          "--translateZ": "250px",
          "--rotateX": "-15deg",
          "--perspective": "1000px",
        }}
      >
        {skillGroups.map((color, index) => (
          <div
            key={index}
            className="absolute inset-0 overflow-hidden rounded-xl border-2"
            style={{
              "--index": index,
              "--color-card": color.color,
              borderColor: `rgba(${color.color},1)`,
              transform: `rotateY(calc((360deg / ${colors.length}) * ${index})) translateZ(250px)`,
            }}
          >
            <div
              className="w-full h-full"
              style={{
                background: `radial-gradient(
                  circle,
                  rgba(${color.color},0.2) 0%,
                  rgba(${color.color},0.6) 80%,
                  rgba(${color.color},0.9) 100%
                )`,
              }}
            >
          <SkillBar key={color.name} {...color} theme={theme} />
            </div>


          </div>
        ))}
      </div>
    </div>
  );
}