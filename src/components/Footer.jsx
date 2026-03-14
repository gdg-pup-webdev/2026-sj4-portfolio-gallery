import {
  FaFacebook,
  FaInstagram,
  FaGithub,
  FaHeart,
} from "react-icons/fa";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="mt-20 border-t border-white/5 bg-[#0a0a1a]">
      <div className="max-w-6xl mx-auto px-6 py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div className="flex flex-col gap-3">
            <h3 className="text-lg font-bold text-white tracking-tight font-['Space_Grotesk']">
              <span className="bg-gradient-to-r from-[#4285F4] via-[#34A853] to-[#FBBC05] bg-clip-text text-transparent">GDG PUP</span> Links
            </h3>
            <p className="text-sm text-white/35 leading-relaxed max-w-xs">
              A platform for students to showcase their links, portfolios, and
              social profiles in one beautiful page.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-3">
            <h4 className="text-sm font-semibold text-white/60 uppercase tracking-wider">
              Quick Links
            </h4>
            <div className="flex flex-col gap-2">
              {[
                { label: "Home", to: "/" },
                { label: "Gallery", to: "/testing" },
              ].map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="text-sm text-white/35 hover:text-white transition-colors duration-300 no-underline w-fit"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Social */}
          <div className="flex flex-col gap-3">
            <h4 className="text-sm font-semibold text-white/60 uppercase tracking-wider">
              Connect
            </h4>
            <div className="flex gap-3">
              {[
                { Icon: FaFacebook, label: "Facebook" },
                { Icon: FaInstagram, label: "Instagram" },
                { Icon: FaGithub, label: "GitHub" },
              ].map(({ Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="w-9 h-9 rounded-lg backdrop-blur-md bg-white/5 border border-white/10 flex items-center justify-center text-white/35 hover:text-white hover:bg-white/10 transition-all duration-300"
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-white/25">
            © 2026 GDG PUP. All rights reserved.
          </p>
          <p className="text-xs text-white/25 flex items-center gap-1">
            Made with{" "}
            <FaHeart className="text-[#EA4335] text-[10px]" />{" "}
            by GDG PUP Students
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;