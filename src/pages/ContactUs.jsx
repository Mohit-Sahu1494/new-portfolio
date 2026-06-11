import React from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, Loader2 } from "lucide-react";
import emailjs from "@emailjs/browser";

const contactInfo = [
  {
    icon: Mail,
    title: "Email",
    value: "sahumohit1494@gmail.com",
  },
  {
    icon: Phone,
    title: "Phone",
    value: "+91 9039149403",
  },
  {
    icon: MapPin,
    title: "Location",
    value: "Sagar, India",
  },
];

function ContactUs() {

    const [name, setName] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [subject, setSubject] = React.useState("");
    const [message, setMessage] = React.useState("");
    const [loading, setLoading] = React.useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Here you can handle form submission, e.g., send data to an API or email service
    if (!name || !email || !subject || !message) {
      alert("Please fill in all fields.");
      return;
    }
    
    setLoading(true);

 try {
  await emailjs.send(
    import.meta.env.VITE_SERVICE_ID,
    import.meta.env.VITE_TEMPLATE_ID,
    {
      name,
      email,
      subject,
      message,
    },
    import.meta.env.VITE_PUBLIC_KEY
  );

  alert("Message Sent Successfully!");
  setName("");
  setEmail("");
  setSubject("");
  setMessage("");
} catch (err) {
  console.error("EmailJS Error:", err);
  alert("Failed to send message");
} finally {
  setLoading(false);
}



  };
  return (
    <section
      id="contact"
      className="relative min-h-screen py-24 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
     

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <p className="text-cyan-400 font-medium mb-4">Get In Touch</p>

          <h2 className="text-5xl md:text-6xl font-bold text-white">
            Contact <span className="text-cyan-400">Me</span>
          </h2>

          <p className="text-white/60 max-w-2xl mx-auto mt-5">
            Have a project idea, internship opportunity, freelance work or just
            want to say hello? Feel free to reach out.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10">
          {/* Left Side */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="space-y-6"
          >
            {contactInfo.map((item) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.title}
                  whileHover={{ y: -6, scale: 1.02 }}
                  style={{ backdropFilter: "blur(24px)", WebkitBackdropFilter: "blur(24px)" }}
                  className="p-6 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl"
                >
                  <div className="flex items-center gap-4">
                    <div className="  h-14 w-14  rounded-2xl  bg-cyan-500/10  flex items-center justify-center  ">
                      <Icon size={26} className="text-cyan-400" />
                    </div>

                    <div>
                      <h3 className="text-white font-semibold">{item.title}</h3>

                      <p className="text-white/60">{item.value}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}

            {/* CTA Card */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              style={{ backdropFilter: "blur(24px)", WebkitBackdropFilter: "blur(24px)" }}
              className="p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl"
            >
              <h3 className="text-2xl font-bold text-white">
                Let's Build Something Amazing 🚀
              </h3>

              <p className="text-white/60 mt-4 leading-7">
                I'm open to internships, freelance projects, collaborations and
                full-stack development opportunities.
              </p>
            </motion.div>
          </motion.div>

          {/* Right Side Form */}
          <motion.form
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            style={{ backdropFilter: "blur(24px)", WebkitBackdropFilter: "blur(24px)" }}
            className="p-4 sm:p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl"
          >
            <div className="space-y-5">
              <input
                type="text"
                placeholder="Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}   
                className=" w-full p-4  rounded-xl bg-white/5 border border-white/10 text-white outline-none focus:border-cyan-400  focus:bg-white/10 focus:shadow-[0_0_20px_rgba(34,211,238,0.25)] placeholder:text-white/40 "
              />

              <input
                type="email"
                placeholder="Your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-4 rounded-xl bg-white/5 border border-white/10  text-white  outline-none focus:border-cyan-400 focus:bg-white/10 focus:shadow-[0_0_20px_rgba(34,211,238,0.25)]  placeholder:text-white/40"
              />

              <input
                type="text"
                placeholder="Subject"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}

                className="w-full p-4 rounded-xl bg-white/5 border border-white/10 text-white outline-none focus:border-cyan-400 focus:bg-white/10 focus:shadow-[0_0_20px_rgba(34,211,238,0.25)] placeholder:text-white/40 "
              />

              <textarea
                rows="6"
                placeholder="Your Message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className=" w-full p-4 rounded-xl bg-white/5 border border-white/10 text-white outline-none resize-none transition-all duration-300 focus:border-cyan-400 focus:bg-white/10 focus:shadow-[0_0_20px_rgba(34,211,238,0.25)] placeholder:text-white/40"
              />

              <motion.button
                whileHover={!loading ? { scale: 1.05 } : {}}
                whileTap={!loading ? { scale: 0.95 } : {}}
                onClick={handleSubmit}
                disabled={loading}
                className={`flex items-center gap-3 px-6 py-4 rounded-xl font-semibold transition-all duration-300 ${
                  loading 
                    ? "bg-cyan-500/50 cursor-not-allowed text-white/50 border-cyan-500/20" 
                    : "bg-cyan-500 text-white cursor-pointer border-cyan-500 hover:bg-cyan-600"
                } border`}
              >
                {loading ? (
                  <>
                    <Loader2 size={18} className="animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send size={18} />
                    Send Message
                  </>
                )}
              </motion.button>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
}

export default ContactUs;
