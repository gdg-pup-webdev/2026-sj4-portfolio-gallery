import { FaFacebook, FaInstagram, FaLinkedin, FaGithub, FaYoutube, FaTwitch } from "react-icons/fa";
import LinkButton from "../../components/LinkButton";
import Footer from "../../components/Footer";

// 🛑 TODO: Step 2B - Create Your Own Page!
// Instructions:
// 1. Do NOT edit this StudentTemplate.jsx file directly!
// 2. Instead, copy the contents of this file or duplicate it.
// 3. Create a new file inside the `/src/pages/members/` folder named after yourself (e.g., `YourNamePage.jsx`).
// 4. Paste the copied code into your new file.
// 5. Rename the function `StudentTemplate` below to match your new file name (e.g., `function YourNamePage()`).
// 
// 🎨 PERSONALIZATION:
// This is YOUR page! You don't have to stick to this exact layout or the website's main theme.
// You are highly encouraged to:
// - Completely replace or modify all of the contents.
// - Change colors, fonts, backgrounds, or component structures.
// - Add animations, new sections, or unique designs!
function StudentTemplate() {
  return (
    <>
      <div className="flex flex-col items-center gap-6 py-16 px-4">
        {/* Profile Card */}
        <div className="w-full max-w-md backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl p-8 flex flex-col items-center gap-5 text-center">
          {/* 🛑 TODO: Avatar - You can place your own image inside the assets folder and import it */}
          <div className="relative">
            <div className="w-28 h-28 rounded-full overflow-hidden ring-4 ring-[#4285F4]/30 shadow-lg">
              <img
                src="https://api.dicebear.com/9.x/fun-emoji/svg?seed=student"
                alt="Student Profile"
                className="w-full h-full object-cover bg-black/20"
              />
            </div>
          </div>

          {/* Name */}
          <div>
            <h2 className="text-2xl font-bold text-white tracking-tight font-['Space_Grotesk']">
              Your Name Here
            </h2>
            <p className="mt-1.5 text-sm text-white/45 leading-relaxed max-w-xs">
              Web Developer · Code Enthusiast · Student
              <br />
              Add some of your hobbies here!
            </p>
          </div>

          {/* 🛑 TODO: Social Icons (Modify the link values!) */}
          <div className="flex gap-3">
            {[
              { Icon: FaFacebook, color: "#1877F2", label: "Facebook", link: "https://facebook.com/" },
              { Icon: FaInstagram, color: "#E4405F", label: "Instagram", link: "https://instagram.com" },
              { Icon: FaLinkedin, color: "#0A66C2", label: "LinkedIn", link: "https://linkedin.com/" },
            ].map(({ Icon, color, label, link }) => (
              <a
                key={label}
                href={link}
                target="_blank"
                rel="noreferrer"
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

        {/* 🛑 TODO: Link Buttons (Add your own links!) */}
        <div className="w-full max-w-md flex flex-col gap-3">
          {[
            { Icon: FaGithub, label: "Github Profile", link: "https://github.com" },
            { Icon: FaYoutube, label: "My Youtube Channel", link: "https://youtube.com" },
            { Icon: FaTwitch, label: "Twitch Streams", link: "https://twitch.tv" },
          ].map(({ Icon, label, link }) => (
            <div key={label}>
              {/* Note: Update the link inside linkTo prop to direct users */}
              <a href={link} target="_blank" rel="noreferrer" className="no-underline">
                <LinkButton>
                  <div className="text-2xl text-white/60 group-hover:text-white transition-colors duration-300">
                    <Icon />
                  </div>
                  <div className="text-base text-white/80 group-hover:text-white transition-colors duration-300">
                    {label}
                  </div>
                </LinkButton>
              </a>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default StudentTemplate;
