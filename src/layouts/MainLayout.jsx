import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

function Mainlayout() {
  return (
    <>
      <div className="fixed inset-0 z-[-10] bg-gradient-to-br from-[#0a0a2e] via-[#1a0a3e] to-[#0a0a2e]">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_600px_600px_at_20%_20%,_rgba(66,133,244,0.12)_0%,_transparent_70%),_radial-gradient(ellipse_500px_500px_at_80%_80%,_rgba(234,67,53,0.08)_0%,_transparent_70%),_radial-gradient(ellipse_400px_400px_at_60%_30%,_rgba(52,168,83,0.06)_0%,_transparent_70%)]"></div>
      </div>

      <div className="relative w-full min-h-screen text-slate-100 font-sans antialiased">
        <Navbar />
        <Outlet />
      </div>
    </>
  );
}

export default Mainlayout;
