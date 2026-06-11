import React,{useEffect} from "react";
import {
     Mail,
    ArrowRight,
    Download
} from "lucide-react";

import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaXTwitter
} from "react-icons/fa6";
import { SiLeetcode } from "react-icons/si";
import { TypeAnimation } from "react-type-animation";


const icons=[FaGithub,FaLinkedin,
Mail,
FaXTwitter,
FaInstagram,
SiLeetcode
]


function Hero() {
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
        <section id="home" className="min-h-screen w-full">
            {/* Dummy Navbar Space */}
            <div className="h-24 w-full"></div>

            {/* Hero Content */}
            <div className="max-w-7xl mx-auto px-6 h-[calc(100vh-96px)]">
                <div className="grid lg:grid-cols-2 h-full items-center justify-center sm:justify-start gap-10">

                    {/* Left Side */}
                    <div className="space-y-6 p-4 sm:p-0">
                        <span
                            className=" inline-flex items-center gap-2 px-4 py-2 rounded-full  bg-white/10 border border-white/20 text-white/80 backdrop-blur-xl"
                              style={{ backdropFilter: "blur(24px)", WebkitBackdropFilter: "blur(24px)" }}
                        >
                            👋 Welcome to my portfolio
                        </span>

                        <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight" >
                            Hi, I'm{" "}
                            <span className="text-cyan-400">
                                Mohit Sahu
                            </span>
                        </h1>

                        <h2 className="text-2xl md:text-3xl font-semibold">
                            <TypeAnimation
                                sequence={[
                                    "Full Stack Developer",
                                    2000,
                                    "Frontend Developer",
                                    2000,
                                    "Backend Developer",
                                    2000,
                                    "MERN Stack Developer",
                                    2000,
                                    "React Developer",
                                    2000,
                                    "PHP Developer",
                                    2000,
                                    "Web Developer",
                                    2000,
                                ]}
                                wrapper="span"
                                speed={50}
                                repeat={Infinity}
                                className="text-cyan-400"
                            />
                        </h2>

                        <p className="text-white/60 max-w-xl text-lg">
                            I build modern, responsive, and scalable web
                            applications using React, Node.js, Express,
                            MongoDB, and modern frontend technologies.
                        </p>

                        {/* Buttons */}
                        <div className="flex flex-wrap gap-4 pt-4">
                            <button className="flex items-center gap-2 px-6 py-3 rounded-xl bg-cyan-500 text-white font-semibold hover:scale-105 transition-all duration-300">
                                View Projects
                                <ArrowRight size={18} />
                            </button>

                            <button className="flex items-center gap-2  px-6 py-3 rounded-xl bg-white/10 border border-white/20  text-white backdrop-blur-xl hover:bg-white/20 transition-all duration-300 "
                              style={{ backdropFilter: "blur(24px)", WebkitBackdropFilter: "blur(24px)" }}
                            >
                                <Download size={18} />
                                Resume
                            </button>
                        </div>

                        {/* Social Icons */}
                        <div className="flex items-center gap-4 pt-4">
                            {icons.slice(0,isMobile?5:6).map((Icon, index)=>(
                                <a
                                    key={index}
                                    href="#"
                                    className="
                      p-3
                      rounded-xl
                  bg-white/10
                  border border-white/20
                  text-white
                  hover:scale-110
                   hover:text-cyan-500
                   
                  transition-all duration-300
                "
                  style={{ backdropFilter: "blur(24px)", WebkitBackdropFilter: "blur(24px)" }}
                            >
                                <Icon size={20} />


                            </a>
                            ))}
                        </div>
                    </div>

                    {/* Right Side */}



                  <div className="hidden lg:flex items-center justify-center">
  <div className="relative">

    {/* Right Glow */}
    <div
      className="
        absolute
        top-1/2
        -right-20
        -translate-y-1/2
        h-[350px]
        w-[350px]
        rounded-full
        bg-cyan-400/40
        blur-[120px]
        animate-pulse
      "
    />

    {/* Secondary Glow */}
    <div
      className="
        absolute
        bottom-0
        right-0
        h-[250px]
        w-[250px]
        rounded-full
        bg-purple-500/30
        blur-[100px]
      "
    />

    {/* Image */}
    <img
      src="/Mohit-Sahu.png"
      alt="Mohit Sahu Full Stack Web Developer"
      className="
        relative
        z-10
        w-[500px]
        h-auto
        object-contain
        drop-shadow-[0_0_30px_rgba(0,255,247,0.4)]
      "
    />
  </div>
</div>
                </div>
            </div>
        </section>
    );
}

export default Hero;