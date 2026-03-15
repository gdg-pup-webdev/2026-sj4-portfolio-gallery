import { Link } from "react-router-dom";

function StudentCard({ id, name, role, avatar }) {
  return (
    <Link
      to={`/members/${id}`}
      className="no-underline block"
    >
      <div className="backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl p-6 flex flex-col items-center gap-4 text-center cursor-pointer transition-all duration-500 hover:bg-white/10 hover:border-white/25 hover:-translate-y-2 hover:shadow-[0_20px_60px_rgba(66,133,244,0.15)] group">
        {/* Avatar */}
        <div className="relative">
          <div className="w-20 h-20 rounded-full overflow-hidden ring-2 ring-white/10 group-hover:ring-[#669DF6]/40 transition-all duration-500">
            <img
              src={avatar}
              alt={name}
              className="w-full h-full object-cover bg-black/20"
            />
          </div>
          {/* Online indicator */}
          <div className="absolute bottom-1 right-1 w-3.5 h-3.5 rounded-full bg-[#34A853] border-2 border-[#0a0a2e]" />
        </div>

        {/* Info */}
        <div className="flex flex-col gap-1">
          <h3 className="text-white font-semibold text-base group-hover:text-[#669DF6] transition-colors duration-300 font-['Space_Grotesk']">
            {name}
          </h3>
          <p className="text-white/45 text-sm leading-snug">{role}</p>
        </div>

        {/* CTA */}
        <span className="text-xs font-medium text-white/30 group-hover:text-[#4285F4] transition-colors duration-300 flex items-center gap-1">
          View Links
          <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
        </span>
      </div>
    </Link>
  );
}

export default StudentCard;
