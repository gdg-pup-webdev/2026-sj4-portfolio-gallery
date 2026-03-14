import Footer from "../components/Footer";
import background from "../assets/background.jpg";

function HomePage() {
  return (
    <>
      <div>This is the homepage</div>
      <Footer />

      <div className="fixed -z-10 w-full h-screen top-0 ">
        <img className="w-full h-full object-cover" src={background}></img>
      </div>
    </>
  );
}

export default HomePage;
