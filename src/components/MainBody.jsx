import sparky from "../assets/sparky.png";
import { FaFacebook, FaInstagram, FaLinkedin, FaGithub, FaYoutube, FaTwitch } from "react-icons/fa";
import LinkButton from "./LinkButton";

function MainBody() {
  return (
    <div className="flex flex-col items-center gap-6 py-16 px-4">
      {/* Profile Card */}
      <div className="w-full max-w-md backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl p-8 flex flex-col items-center gap-5 text-center">
        {/* Avatar */}
        <div className="relative">
          <div className="w-28 h-28 rounded-full overflow-hidden ring-4 ring-[#4285F4]/30 shadow-lg">
            <img
              src={sparky}
              alt="Sparky Batumbakal"
              className="w-full h-full object-cover bg-black/20"
            />
          </div>
        </div>

        {/* Name */}
        <div>
          <h2 className="text-2xl font-bold text-white tracking-tight font-['Space_Grotesk']">
            Sparky Batumbakal
          </h2>
          <p className="mt-1.5 text-sm text-white/45 leading-relaxed max-w-xs">
            Web Developer · Student · UI/UX Designer
            <br />
            Frontend & Backend Developer
          </p>
        </div>

        {/* Social Icons */}
        <div className="flex gap-3">
          {[
            { Icon: FaFacebook, color: "#1877F2", label: "Facebook" },
            { Icon: FaInstagram, color: "#E4405F", label: "Instagram" },
            { Icon: FaLinkedin, color: "#0A66C2", label: "LinkedIn" },
          ].map(({ Icon, color, label }) => (
            <a
              key={label}
              href="#"
              aria-label={label}
              className="w-10 h-10 rounded-full backdrop-blur-md bg-white/5 border border-white/10 flex items-center justify-center text-white/50 text-lg transition-all duration-300 hover:text-white hover:scale-110"
              onMouseEnter={(e) =>
                (e.currentTarget.style.backgroundColor = color + "22")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.backgroundColor = "")
              }
            >
              <Icon />
            </a>
          ))}
        </div>
      </div>

      {/* Link Buttons */}
      <div className="w-full max-w-md flex flex-col gap-3">
        {[
          { Icon: FaGithub, label: "Github" },
          { Icon: FaYoutube, label: "Youtube" },
          { Icon: FaTwitch, label: "Twitch" },
        ].map(({ Icon, label }) => (
          <div key={label}>
            <LinkButton>
              <div className="text-2xl text-white/60 group-hover:text-white transition-colors duration-300">
                <Icon />
              </div>
              <div className="text-base text-white/80 group-hover:text-white transition-colors duration-300">
                {label}
              </div>
            </LinkButton>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MainBody;
