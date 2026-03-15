import Footer from "../components/Footer";
import { useParams } from "react-router-dom";

function DynamicPage() {
  const { id } = useParams();
  
  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex-1 flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight font-['Space_Grotesk'] mb-4">
          Dynamic Page
        </h1>
        <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl p-8 max-w-sm w-full">
          <p className="text-lg text-white/70">
            Student ID: <span className="font-bold text-[#4285F4]">{id}</span>
          </p>
          <p className="text-sm text-white/40 mt-4 leading-relaxed">
            This page dynamically loads content based on the user ID above.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default DynamicPage;
