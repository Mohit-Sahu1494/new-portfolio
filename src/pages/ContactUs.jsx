import { useState } from "react";
import { Section } from "../components/Section";
import {Globe3D} from '../components/ui/3d-globe' 

export default function Contact ({ theme }) {
  const isDark = theme === "dark";
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState(null);
  const [sending, setSending] = useState(false);

  const handleSubmit = async () => {
    if (!form.name || !form.email || !form.message) { setStatus("error"); return; }
    setSending(true);
    await new Promise(r => setTimeout(r, 1500));
    setSending(false);
    setStatus("success");
    setForm({ name: "", email: "", subject: "", message: "" });
    setTimeout(() => setStatus(null), 4000);
  };

  const inputClass = `w-full px-4 py-3 rounded-lg text-[14px] outline-none border transition-colors duration-200 font-inherit
    ${isDark 
      ? 'bg-[#1F2937] border-white/10 text-[#F8FAFC] focus:border-[#8B5CF6]' 
      : 'bg-[#F3F4F6] border-black/10 text-[#111827] focus:border-[#8B5CF6]'}`;

  return (
    <Section id="contact" title="Get In Touch" subtitle="Contact Me" theme={theme}>
      <div className="grid grid-cols-1 md:grid-cols-[1fr_1.5fr] gap-12 items-start">
        <div>
          <Globe3D/>
          <div></div>
        </div>
        <div className={`p-8 rounded-[20px] border border-[#8B5CF6]/15 ${isDark ? 'bg-[#111827]' : 'bg-[#F8FAFC]'}`}>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
            {["name","email"].map(field => (
              <div key={field}>
                <label className={`block text-[13px] font-bold mb-[6px] capitalize ${isDark ? 'text-[#9CA3AF]' : 'text-[#6B7280]'}`}>{field}</label>
                <input value={form[field]} onChange={e => setForm(f => ({...f, [field]: e.target.value}))}
                  type={field === "email" ? "email" : "text"} placeholder={field === "name" ? "Your name" : "your@email.com"}
                  className={inputClass}
                />
              </div>
            ))}
          </div>
          <div className="mb-4">
            <label className={`block text-[13px] font-bold mb-[6px] ${isDark ? 'text-[#9CA3AF]' : 'text-[#6B7280]'}`}>Subject</label>
            <input value={form.subject} onChange={e => setForm(f => ({...f, subject: e.target.value}))}
              placeholder="What's this about?" className={inputClass}
            />
          </div>
          <div className="mb-5">
            <label className={`block text-[13px] font-bold mb-[6px] ${isDark ? 'text-[#9CA3AF]' : 'text-[#6B7280]'}`}>Message</label>
            <textarea value={form.message} onChange={e => setForm(f => ({...f, message: e.target.value}))}
              rows={5} placeholder="Your message here..." className={`${inputClass} resize-y`}
            />
          </div>
          {status === "success" && (
            <div className="p-4 rounded-lg bg-green-500/10 border border-green-500/30 text-green-500 text-[14px] mb-4">
              ✅ Message sent successfully! I'll get back to you soon.
            </div>
          )}
          {status === "error" && (
            <div className="p-4 rounded-lg bg-red-500/10 border border-red-500/30 text-red-500 text-[14px] mb-4">
              ❌ Please fill in all required fields.
            </div>
          )}
          <button onClick={handleSubmit} disabled={sending} 
            className={`w-full py-[13px] rounded-[10px] font-bold text-[15px] cursor-pointer transition-all duration-200 border-none text-white
              bg-gradient-to-br from-[#3B82F6] to-[#8B5CF6] hover:-translate-y-[2px] hover:shadow-[0_8px_25px_rgba(139,92,246,0.4)]
              ${sending ? 'opacity-70' : 'opacity-100'}`}>
            {sending ? "Sending..." : "Send Message 🚀"}
          </button>
        </div>
      </div>
    </Section>
  );
};