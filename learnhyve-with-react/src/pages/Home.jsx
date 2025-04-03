import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const Home = () => {
  return(
    <>
    <Navbar />
          <div className="flex items-center justify-center h-screen bg-gray-100">
            <h1 className="text-3xl font-bold text-gray-800">Home Page</h1>
          </div>
          <Footer />
    </>
  ) ;
};

export default Home;
