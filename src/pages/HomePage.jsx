import { Link } from "react-router-dom";
import { FaArrowRight, FaUsers, FaLink, FaShareAlt } from "react-icons/fa";
import sparky from "../assets/sparky.png";
import StudentCard from "../components/StudentCard";
import Footer from "../components/Footer";

import erwindaguinotasavatar from "../assets/members/erwindaguinotas/profile.png"

const featuredStudents = [
  { id: "erwin-daguinotas", name: "Erwin Daguinotas", role: "GDG PUP Lead", avatar: erwindaguinotasavatar },
  { id: "sample", name: "Sample Page", role: "Demo Profile", avatar: "https://api.dicebear.com/9.x/fun-emoji/svg?seed=sample" },
  { id: "sparky", name: "Sparky Batumbakal", role: "GDG PUP Mascot", avatar: sparky },
  { id: "template", name: "Student Template", role: "Starter Page", avatar: "https://api.dicebear.com/9.x/fun-emoji/svg?seed=student" },

  // 🛑 TODO: Step 2D - Add Yourself to the Gallery!
  // Instructions:
  // 1. Uncomment the line below or copy it to create a new entry in this array.
  // 2. Change the `id` to exactly match the route path you created in `App.jsx` (e.g., "your-name").
  // 3. Change the `name` to your actual name.
  // 4. Change the `role` to a short tagline or title (e.g., "Frontend Developer").
  // 5. For the `avatar`, you can use the default `sparky`, or pass an imported image from your assets!
  //
  // { id: "your-name", name: "Your Name", role: "Your Role / Hobbies", avatar: sparky },
];

const steps = [
  {
    icon: <FaUsers />,
    title: "Create Your Profile",
    desc: "Sign up and set up your personal page with your info.",
  },
  {
    icon: <FaLink />,
    title: "Add Your Links",
    desc: "Add links to your projects, socials, and portfolio.",
  },
  {
    icon: <FaShareAlt />,
    title: "Share With Everyone",
    desc: "Share your custom page link with anyone, anywhere.",
  },
];

function HomePage() {
  return (
    <>
      {/* ====== HERO SECTION ====== */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Decorative blobs */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#4285F4]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#EA4335]/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-5xl mx-auto px-6 flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-20 py-16">
          {/* Left — Text */}
          <div className="flex-1 text-center lg:text-left">
            <div className="inline-block mb-4 px-4 py-1.5 rounded-full backdrop-blur-md bg-white/5 border border-white/10 text-xs font-medium text-white/60">
              🚀 GDG PUP · Student Link Gallery
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight font-['Space_Grotesk']">
              Share Your Links.{" "}
              <span className="bg-gradient-to-r from-[#4285F4] via-[#34A853] to-[#FBBC05] bg-clip-text text-transparent">Show Your Work.</span>
            </h1>

            <p className="mt-5 text-lg text-white/50 max-w-lg mx-auto lg:mx-0 leading-relaxed">
              One beautiful page for all your projects, socials, and portfolio
              links. Built by students, for students.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
              <Link
                to="/testing"
                className="no-underline group inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-gradient-to-r from-[#4285F4] to-[#34A853] text-white font-semibold text-sm shadow-lg hover:shadow-[0_8px_30px_rgba(66,133,244,0.4)] transition-all duration-300 hover:-translate-y-0.5"
              >
                Explore Gallery
                <FaArrowRight className="text-xs transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
              <a
                href="#how-it-works"
                className="no-underline inline-flex items-center gap-2 px-7 py-3.5 rounded-xl backdrop-blur-md bg-white/5 border border-white/10 text-white/70 font-medium text-sm hover:text-white hover:bg-white/10 transition-all duration-300"
              >
                How It Works
              </a>
            </div>
          </div>

          {/* Right — Mascot */}
          <div className="flex-shrink-0 relative group">
            {/* Glow ring */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#4285F4]/20 to-[#34A853]/20 blur-2xl scale-110 group-hover:scale-125 transition-transform duration-700" />
            <img
              src={sparky}
              alt="Sparky — GDG PUP Mascot"
              className="relative w-52 h-52 sm:w-64 sm:h-64 lg:w-92 lg:h-92 object-contain drop-shadow-2xl transition-transform duration-700 hover:-translate-y-4"
            />
          </div>
        </div>
      </section>

      {/* ====== FEATURED STUDENTS ====== */}
      <section id="gallery" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-14">
            <span className="inline-block mb-3 px-3 py-1 rounded-full backdrop-blur-md bg-white/5 border border-white/10 text-xs font-medium text-white/50">
              Featured
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight font-['Space_Grotesk']">
              Student Galleries
            </h2>
            <p className="mt-3 text-white/40 max-w-md mx-auto">
              Discover student pages and see how they showcase their work.
            </p>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {featuredStudents.map((student) => (
              <StudentCard
                key={student.id}
                id={student.id}
                name={student.name}
                role={student.role}
                avatar={student.avatar}
              />
            ))}
          </div>
        </div>
      </section>


      <Footer />
    </>
  );
}

export default HomePage;
