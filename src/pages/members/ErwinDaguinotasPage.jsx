import { FaFacebook, FaLinkedin, FaGithub, FaCode, FaLaptopCode, FaBriefcase } from "react-icons/fa";
import Footer from "../../components/Footer";

import erwindaguinotasavatar from "../../assets/members/erwindaguinotas/profile.png"

function ErwinDaguinotasPage() {
  return (
    <div className="relative font-sans overflow-hidden min-h-screen">
      {/* Custom Background effect for Erwin's page overriding the global one */}
      <div className="absolute inset-0 z-[-1] bg-[#050510]"></div>
        <div className="absolute inset-0 z-[-1] bg-[radial-gradient(ellipse_100%_100%_at_50%_0%,rgba(120,0,255,0.25),rgba(0,255,255,0.1)_40%,rgba(0,0,0,0)_100%)]"></div>
        <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] z-[-1] bg-fuchsia-600/20 blur-[120px] rounded-full mix-blend-screen pointer-events-none animate-float-tr"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] z-[-1] bg-cyan-600/20 blur-[120px] rounded-full mix-blend-screen pointer-events-none animate-float-bl"></div>

        {/* Floating Geometric Shapes */}
        <div className="absolute top-[20%] left-[15%] w-16 h-16 border border-cyan-500/20 rounded-lg shadow-[0_0_15px_rgba(34,211,238,0.1)] animate-shape-1 mix-blend-screen pointer-events-none z-[-1]"></div>
        <div className="absolute bottom-[25%] right-[15%] w-24 h-24 border border-purple-500/20 rounded-full shadow-[0_0_15px_rgba(168,85,247,0.1)] animate-shape-2 mix-blend-screen pointer-events-none z-[-1]"></div>
        <div className="absolute top-[35%] right-[20%] w-12 h-12 border border-pink-500/20 rotate-45 shadow-[0_0_15px_rgba(236,72,153,0.1)] animate-shape-3 mix-blend-screen pointer-events-none z-[-1]"></div>
        <div className="absolute bottom-[20%] left-[20%] w-14 h-14 border-t-2 border-r-2 border-fuchsia-500/30 rounded-full animate-shape-4 mix-blend-screen pointer-events-none z-[-1]"></div>
        <div className="absolute top-[60%] left-[10%] w-10 h-10 bg-cyan-500/10 rotate-12 animate-shape-5 mix-blend-screen pointer-events-none z-[-1]" style={{clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)"}}></div>
        <div className="absolute top-[10%] right-[30%] w-8 h-8 rounded-full bg-purple-500/10 animate-shape-6 mix-blend-screen pointer-events-none z-[-1]"></div>
        
        <div className="flex flex-col items-center min-h-screen pt-20 pb-16 px-4">
          {/* Profile Container with Shine Effect on Hover */}
          <div className="group/card relative w-full max-w-lg backdrop-blur-3xl bg-black/40 border border-white/10 rounded-3xl p-8 sm:p-10 flex flex-col items-center gap-6 text-center shadow-[0_0_50px_-12px_rgba(120,119,198,0.4)] overflow-hidden transition-all duration-500 hover:border-white/20 hover:shadow-[0_0_80px_-15px_rgba(34,211,238,0.3)]">
          {/* Shine Effect */}
          <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12 group-hover/card:animate-[shine_1.5s_ease-in-out]"></div>

          {/* Style snippet for custom animation if tailwind config isn't customized */}
          <style>{`
            @keyframes shine {
              100% { transform: translateX(200%); }
            }
            @keyframes float-top-right {
              0%, 100% { transform: translate(0, 0) scale(1); }
              33% { transform: translate(-80px, 50px) scale(1.1); }
              66% { transform: translate(40px, -20px) scale(0.9); }
            }
            @keyframes float-bottom-left {
              0%, 100% { transform: translate(0, 0) scale(1); }
              33% { transform: translate(80px, -50px) scale(1.1); }
              66% { transform: translate(-40px, 20px) scale(0.9); }
            }
            .animate-float-tr {
              animation: float-top-right 12s ease-in-out infinite;
            }
            .animate-float-bl {
              animation: float-bottom-left 15s ease-in-out infinite;
            }
            @keyframes float-shape-1 {
              0%, 100% { transform: translate(0, 0) rotate(0deg); }
              50% { transform: translate(60px, -60px) rotate(180deg); }
            }
            @keyframes float-shape-2 {
              0%, 100% { transform: translate(0, 0) rotate(0deg); }
              50% { transform: translate(-60px, 80px) rotate(-180deg); }
            }
            @keyframes float-shape-3 {
              0%, 100% { transform: translate(0, 0) rotate(45deg); }
              50% { transform: translate(70px, 40px) rotate(225deg); }
            }
            .animate-shape-1 {
              animation: float-shape-1 20s ease-in-out infinite;
            }
            .animate-shape-2 {
              animation: float-shape-2 25s ease-in-out infinite;
            }
            .animate-shape-3 {
              animation: float-shape-3 18s ease-in-out infinite;
            }
            .animate-shape-4 {
              animation: float-shape-2 22s ease-in-out infinite alternate;
            }
            .animate-shape-5 {
              animation: float-shape-1 28s ease-in-out infinite alternate-reverse;
            }
            .animate-shape-6 {
              animation: float-shape-3 15s ease-in-out infinite reverse;
            }
          `}</style>

          {/* Avatar Area with Glow Effect */}
          <div className="relative group mt-2 z-10">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 via-pink-600 to-cyan-600 rounded-full blur opacity-60 group-hover:opacity-100 transition duration-500 animate-pulse"></div>
            <div className="relative w-32 h-32 rounded-full overflow-hidden ring-2 ring-black">
              <img
                src={erwindaguinotasavatar}
                alt="Erwin Daguinotas"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
          </div>

          {/* Name & Title */}
          <div className="space-y-3">
            <h2 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 tracking-tight">
              Erwin Daguinotas
            </h2>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-cyan-200 uppercase tracking-widest shadow-inner">
              <FaCode className="text-purple-400" /> Lead & Developer
            </div>
            <p className="text-sm text-gray-400 max-w-xs mx-auto mt-4 leading-relaxed font-light">
              Crafting immersive web experiences. Bridging the gap between engineering and design.
            </p>
          </div>

          {/* Socials */}
          <div className="flex gap-4 mt-2">
            {[
              { Icon: FaFacebook, href: "https://www.facebook.com/DaguinotasErwin", hoverText: "text-blue-500", hoverBorder: "border-blue-500/50", hoverShadow: "shadow-[0_0_15px_rgba(59,130,246,0.5)]" },
              { Icon: FaLinkedin, href: "https://www.linkedin.com/in/erwin-daguinotas/", hoverText: "text-blue-400", hoverBorder: "border-blue-400/50", hoverShadow: "shadow-[0_0_15px_rgba(96,165,250,0.5)]" },
              { Icon: FaGithub, href: "https://github.com/SauceCode01", hoverText: "text-white", hoverBorder: "border-white/50", hoverShadow: "shadow-[0_0_15px_rgba(255,255,255,0.5)]" },
            ].map((social, i) => (
              <a
                key={i}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                className={`w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 transition-all duration-300 hover:-translate-y-1 hover:${social.hoverText} hover:${social.hoverBorder} hover:${social.hoverShadow}`}
              >
                <social.Icon className="text-xl" />
              </a>
            ))}
          </div>

          {/* Custom Link Buttons */}
          <div className="w-full flex mt-6 flex-col gap-3 relative z-10">
            {[
              { Icon: FaLaptopCode, title: "Github Highlights", desc: "Explore open-source contributions", href: "https://github.com/SauceCode01" },
              { Icon: FaBriefcase, title: "LinkedIn Network", desc: "Connect with me professionally", href: "https://www.linkedin.com/in/erwin-daguinotas/" },
            ].map((item, i) => (
              <a 
                key={i} 
                href={item.href} 
                target="_blank" 
                rel="noreferrer"
                className="group relative flex items-center p-4 w-full bg-white/5 rounded-2xl border border-white/10 transition-all duration-300 hover:bg-white/10 hover:border-cyan-500/50 hover:shadow-[0_0_20px_rgba(34,211,238,0.25)] overflow-hidden"
              >
                {/* Hover gradient line */}
                <div className="absolute inset-x-0 w-full h-px top-0 bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 group-hover:text-cyan-400 transition-colors mr-4">
                  <item.Icon className="text-lg" />
                </div>
                
                <div className="flex-1 text-left">
                  <h3 className="text-white font-medium text-base group-hover:text-cyan-300 transition-colors">{item.title}</h3>
                  <p className="text-gray-400 text-xs mt-0.5 group-hover:text-gray-300">{item.desc}</p>
                </div>

                <div className="text-gray-600 group-hover:text-cyan-400 group-hover:translate-x-1 transition-all duration-300">
                  →
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
      
      {/* Retain Footer */}
      <div className="relative z-10">
        <Footer />
      </div>
    </div>
  );
}

export default ErwinDaguinotasPage;
