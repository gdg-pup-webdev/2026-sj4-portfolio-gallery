import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

function Mainlayout( ) {
  return (
    <>
      <div className="w-full bg-black/20 min-h-screen">
        <Navbar />
 
        <Outlet/>
      </div>
    </>
  );
}

export default Mainlayout;
