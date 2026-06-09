
export default function Footer ({ theme }){
  const isDark = theme === "dark";
  const socials = [
    { icon: "🐙", label: "GitHub", href: "#" },
    { icon: "💼", label: "LinkedIn", href: "#" },
    { icon: "🐦", label: "Twitter", href: "#" },
    { icon: "📧", label: "Email", href: "mailto:mohitsahu@email.com" }
  ];
  return (
    <footer className={`px-8 py-10 text-center border-t transition-colors duration-300
      ${isDark ? 'bg-[#080808] border-white/5' : 'bg-[#F3F4F6] border-black/5'}`}>
      <div className="max-w-[1200px] mx-auto">
        <div className="text-[24px] font-extrabold bg-gradient-to-br from-[#3B82F6] to-[#8B5CF6] bg-clip-text text-transparent mb-4">Mohit Sahu</div>
        <p className={`text-[14px] mb-6 ${isDark ? 'text-[#6B7280]' : 'text-[#9CA3AF]'}`}>Full Stack Developer · MERN Stack · Problem Solver</p>
        <div className="flex gap-4 justify-center mb-6">
          {socials.map(s => (
            <a key={s.label} href={s.href} title={s.label} className={`w-11 h-11 rounded-xl flex items-center justify-center text-[20px] no-underline border transition-all duration-200 hover:border-[#8B5CF6]/50 hover:-translate-y-[3px] hover:shadow-[0_8px_20px_rgba(139,92,246,0.2)]
              ${isDark ? 'bg-[#111827] border-white/10' : 'bg-white border-black/10'}`}>
              {s.icon}
            </a>
          ))}
        </div>
        <div className={`text-[13px] ${isDark ? 'text-[#4B5563]' : 'text-[#9CA3AF]'}`}>
          © 2024 Mohit Sahu · Built with React + Tailwind CSS · <span className="text-red-500">❤️</span>
        </div>
      </div>
    </footer>
  );
};
