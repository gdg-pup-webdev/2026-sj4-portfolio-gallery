import background from "../assets/background.jpg";
import MainBody from "../components/MainBody";
import Footer from "../components/Footer";

function SamplePage() {
  return (
    <>
      <MainBody />
      <Footer />

      <div className="fixed -z-10 w-full h-screen top-0 ">
        <img className="w-full h-full object-cover" src={background}></img>
      </div>
    </>
  );
}

export default SamplePage;
