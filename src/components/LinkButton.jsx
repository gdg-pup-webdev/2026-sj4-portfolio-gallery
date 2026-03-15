function LinkButton({ children }) {
  return (
    <div className="w-full backdrop-blur-md bg-white/5 border border-white/10 rounded-xl p-4 text-lg font-semibold flex items-center gap-4 cursor-pointer transition-all duration-300 hover:bg-white/10 hover:border-white/25 hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(66,133,244,0.12)] group relative overflow-hidden">
      {/* Gradient accent bar */}
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-[#4285F4] to-[#34A853] rounded-l-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      {children}
    </div>
  );
}

export default LinkButton;
