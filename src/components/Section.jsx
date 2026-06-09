import { useInView } from "../hooks/useInView";

export const Section = ({ id, title, subtitle, children, theme, className = "" }) => {
  const [ref, inView] = useInView(0.1);
  const isDark = theme === "dark";
  
  // Alternating backgrounds based on common section order
  const isEven = ["skills", "experience", "github", "contact"].includes(id);

  return (
    <section id={id} ref={ref} className={`py-[100px] px-8 transition-colors duration-300 ${className}
      ${isDark 
        ? (isEven ? 'bg-[#0A0A0A]' : 'bg-[#080808]') 
        : (isEven ? 'bg-white' : 'bg-[#F8FAFC]')}`}>
      <div className="max-w-[1200px] mx-auto">
        {title && (
          <div className={`text-center mb-16 transition-all duration-700 ease-in-out
            ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-[30px]'}`}>
            {subtitle && <div className="text-[13px] font-semibold text-[#8B5CF6] tracking-[3px] uppercase mb-3">{subtitle}</div>}
            <h2 className={`text-[clamp(28px,4vw,44px)] font-extrabold m-0 ${isDark ? 'text-[#F8FAFC]' : 'text-[#111827]'}`}>
              {title}
            </h2>
            <div className="w-[60px] h-1 rounded-full bg-gradient-to-r from-[#3B82F6] to-[#8B5CF6] mx-auto mt-4" />
          </div>
        )}
        <div className={`transition-all duration-1000 delay-200 ease-out
          ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-[40px]'}`}>
          {children}
        </div>
      </div>
    </section>
  );
};
