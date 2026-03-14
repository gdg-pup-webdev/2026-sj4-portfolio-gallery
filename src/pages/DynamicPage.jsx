import Footer from "../components/Footer";
import background from "../assets/background.jpg";
import { useParams } from "react-router-dom";

function DynamicPage() {
  const { id } = useParams();
  return (
    <>
      <div>This is the dynamic page</div>
      <div>id: {id}</div>
      <Footer />

      <div className="fixed -z-10 w-full h-screen top-0 ">
        <img className="w-full h-full object-cover" src={background}></img>
      </div>
    </>
  );
}

export default DynamicPage;
