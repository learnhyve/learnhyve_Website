import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Features from "../pages/Features";
import Workshop from "../pages/Workshop";
import About from "../pages/About";
import Blogs from "../pages/Blogs";
import ContactUs from "../pages/ContactUs";
import Supporters from "../pages/Supporters";

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/features" element={<Features />} />
        <Route path="/workshop" element={<Workshop />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/about" element={<About />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/supporters" element={<Supporters />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
