import React,{useEffect} from "react";
import { motion } from "framer-motion";
import {
  Mail,
  ArrowUp,
  Heart,
} from "lucide-react";
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaXTwitter
} from "react-icons/fa6";
import { SiLeetcode } from "react-icons/si";


const icons=[
FaGithub,
FaLinkedin,
Mail,
FaXTwitter,
FaInstagram,
SiLeetcode
]


function Footer() {
  const [isMobile, setIsMobile] = React.useState(window.innerWidth < 640);
 useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);


  return (
    <footer 
      style={{ backdropFilter: "blur(24px)", WebkitBackdropFilter: "blur(24px)" }}
      className="relative overflow-hidden rounded-tl-2xl rounded-tr-2xl px-6 py-10 border bg-white/5 border-white/10 backdrop-blur-xl"
    >

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{
            opacity: 0,
            y: 50,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true }}
          transition={{
            duration: 0.8,
          }}
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-10 md:gap-0">
            {/* Brand */}
            <div className="text-center md:text-left">
              <h2 className="text-3xl font-bold text-white">
                Mohit Sahu
              </h2>

              <p className="text-white/60 mt-4 leading-7">
                Full Stack Developer - BCA Student
              </p>
            </div>


            {/* Contact */}
            <div className="w-full md:w-auto">
              <div className="flex justify-center md:justify-end gap-4">
                {icons.slice(0, isMobile ? 5 : 6).map((Icon, index)=>(
                  <a
                    key={index}
                    href="#"
                    target="_blank"
                    rel="noreferrer"
                    className="
                      p-3
                      rounded-xl
                      bg-white/5
                      border border-white/10
                      backdrop-blur-md
                      text-white
                      hover:text-cyan-400
                      hover:-translate-y-1
                      transition-all duration-300
                    "
                  >
                    <Icon size={20} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="h-px w-full bg-white/10 my-8" />

          {/* Bottom */}
          <div className="flex flex-col md:flex-row items-center justify-center">
            <p className={`text-white/50 flex items-center ${isMobile ? 'flex-col' : ''}  gap-2`}>
              © {new Date().getFullYear()} Mohit Sahu.  All Rights Reserved.
             {isMobile ?   <span className=""> Developed by {" "} ⭐ Mohit ⭐ </span>:`    Developed by 
            ${  <Heart
                size={16}
                className="text-red-400 fill-red-400"
              />}
              Mohit` }
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}

export default Footer;