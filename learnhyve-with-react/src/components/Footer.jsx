import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* Branding Section */}
        <div>
          <h2 className="text-xl font-bold">Learnhyve</h2>
          <p className="mt-2 text-gray-400">
            Revolutionizing education with practical, gamified workshops. Learn, engage, and grow with us!
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold">Quick Links</h3>
          <ul className="mt-2 space-y-1 text-gray-400">
            <li><Link to="/" className="hover:text-white">Home</Link></li>
            <li><Link to="/features" className="hover:text-white">Features</Link></li>
            <li><Link to="/workshop" className="hover:text-white">Workshops</Link></li>
            <li><Link to="/blogs" className="hover:text-white">Blogs</Link></li>
            <li><Link to="/about" className="hover:text-white">About</Link></li>
            <li><Link to="/contact-us" className="hover:text-white">Contact</Link></li>
            <li><Link to="/supporters" className="hover:text-white">Supportes</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold">Visit Us</h3>
          <p className="mt-2 text-gray-400">Kolkata, India</p>
          <p className="text-gray-400">contact@learnhyve.com</p>
          <p className="text-gray-400">support@learnhyve.com</p>
        </div>

        {/* Newsletter Subscription */}
        <div>
          <h3 className="text-lg font-semibold">Join The Community</h3>
          <p className="mt-2 text-gray-400">Get updates on special events and receive early access!</p>
          <div className="mt-4 flex">
            <input 
              type="email" 
              placeholder="Your email address" 
              className="w-full p-2 rounded-l bg-gray-800 border border-gray-600 text-white focus:outline-none"
            />
            <button className="bg-blue-600 px-4 py-2 rounded-r hover:bg-blue-700">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Divider & Social Media */}
      <div className="border-t border-gray-700 mt-8 pt-6 text-center">
        <div className="flex justify-center space-x-4 text-gray-400">
          <a href="https://facebook.com" className="hover:text-white"><FaFacebookF size={20} /></a>
          <a href="https://twitter.com" className="hover:text-white"><FaTwitter size={20} /></a>
          <a href="https://instagram.com" className="hover:text-white"><FaInstagram size={20} /></a>
        </div>
        <p className="mt-4 text-gray-500 text-sm">&copy; {new Date().getFullYear()} Learnhyve. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
