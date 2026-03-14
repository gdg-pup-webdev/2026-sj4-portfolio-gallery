import { Link, useLocation } from "react-router-dom";
import { FaCode } from "react-icons/fa";

function Navbar() {
  const location = useLocation();

  const links = [
    { to: "/", label: "Home" },
    { to: "/testing", label: "Gallery" },
  ];

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-xl bg-white/10 border-b border-white/20">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Brand */}
        <Link to="/" className="flex items-center gap-2.5 no-underline group">
          <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-[#4285F4] to-[#34A853] flex items-center justify-center text-white text-sm shadow-lg group-hover:shadow-[0_0_20px_rgba(66,133,244,0.4)] transition-shadow duration-300">
            <FaCode />
          </div>
          <span className="text-lg font-bold tracking-tight font-['Space_Grotesk']">
            <span className="text-white">GDG</span>{" "}
            <span className="text-white/50">Links</span>
          </span>
        </Link>

        {/* Navigation Links */}
        <div className="flex items-center gap-1">
          {links.map((link) => {
            const isActive = location.pathname === link.to;
            return (
              <Link
                key={link.to}
                to={link.to}
                className={`
                  relative px-4 py-2 rounded-lg text-sm font-medium no-underline
                  transition-all duration-300
                  ${
                    isActive
                      ? "text-white bg-white/10"
                      : "text-white/60 hover:text-white hover:bg-white/5"
                  }
                `}
              >
                {link.label}
                {isActive && (
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-5 h-0.5 rounded-full bg-gradient-to-r from-[#4285F4] to-[#34A853]" />
                )}
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
