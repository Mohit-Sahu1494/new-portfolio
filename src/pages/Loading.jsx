import { useState,useEffect,useRef } from "react";
export default function LoadingScreen({ onDone }){
  const [progress, setProgress] = useState(0);
  const [msgIdx, setMsgIdx] = useState(0);
  const [typed, setTyped] = useState("");
  const [fadeOut, setFadeOut] = useState(false);
  const msgs = ["Initializing Portfolio...", "Loading Projects...", "Fetching GitHub Data...", "Preparing Experience...", "Welcome"];

  useEffect(() => {
    const totalDuration = 5500;
    const start = Date.now();
    const progInt = setInterval(() => {
      const elapsed = Date.now() - start;
      const p = Math.min((elapsed / totalDuration) * 100, 100);
      setProgress(Math.round(p));
      const idx = Math.floor((p / 100) * (msgs.length - 1));
      setMsgIdx(Math.min(idx, msgs.length - 1));
      if (p >= 100) {
        clearInterval(progInt);
        setTimeout(() => { setFadeOut(true); setTimeout(onDone, 700); }, 400);
      }
    }, 50);
    return () => clearInterval(progInt);
  }, [onDone]);

  useEffect(() => {
    const msg = msgs[msgIdx];
    let i = 0;
    setTyped("");
    const t = setInterval(() => {
      setTyped(msg.slice(0, ++i));
      if (i >= msg.length) clearInterval(t);
    }, 40);
    return () => clearInterval(t);
  }, [msgIdx]);

  return (
    <div className={`fixed inset-0 bg-[#0A0A0A] flex flex-col items-center justify-center z-[9999] transition-opacity duration-700 ease-in-out ${fadeOut ? 'opacity-0' : 'opacity-100'}`}>
      <div className="mb-8 text-center">
        <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#3B82F6] to-[#8B5CF6] flex items-center justify-center mx-auto mb-4 text-[28px] font-bold text-white shadow-[0_0_40px_rgba(139,92,246,0.5)] animate-pulse">MS</div>
        <div className="text-[22px] font-bold text-[#F8FAFC] tracking-[2px]">MOHIT SAHU</div>
        <div className="text-[13px] text-[#8B5CF6] mt-1 tracking-[4px]">PORTFOLIO</div>
      </div>
      <div className="w-80 mb-5">
        <div className="bg-[#111827] rounded-lg h-[6px] overflow-hidden border border-[#8B5CF6]/30">
          <div 
            className="h-full rounded-lg transition-all duration-100 linear bg-gradient-to-r from-[#3B82F6] to-[#8B5CF6] shadow-[0_0_10px_rgba(139,92,246,0.7)]" 
            style={{ width: `${progress}%` }} 
          />
        </div>
        <div className="flex justify-between mt-2">
          <span className="text-[12px] color-[#6B7280] font-mono">{typed}<span className="animate-blink">|</span></span>
          <span className="text-[12px] text-[#3B82F6] font-mono">{progress}%</span>
        </div>
      </div>
    </div>
  );
};