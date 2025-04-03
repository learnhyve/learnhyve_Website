import { XMarkIcon } from "@heroicons/react/16/solid";
import { useState } from "react";
import { Link } from "react-router-dom";


export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md fixed w-full z-50">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Left: Logo */}
        <div className="text-xl font-bold text-gray-900">
          <Link to="/">LearnHyve</Link>
        </div>

        {/* Right: Desktop Menu */}
        <div className="hidden md:flex space-x-6 text-gray-700 font-medium">
          <Link to="/" className="hover:text-blue-600">Home</Link>
          <Link to="/features" className="hover:text-blue-600">Features</Link>
          <Link to="/workshop" className="hover:text-blue-600">Workshops</Link>
          <Link to="/blogs" className="hover:text-blue-600">Blogs</Link>
          <Link to="/about" className="hover:text-blue-600">About</Link>
          <Link to="/supporters" className="hover:text-blue-600">Supporters</Link>
          <Link to="/contact-us" className="hover:text-blue-600">Contact Us</Link>
        </div>

        {/* Mobile Menu Button */}
        {/* <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <XMarkIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
        </button> */}
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg absolute top-16 left-0 w-full">
          <ul className="flex flex-col space-y-4 py-4 px-6 text-gray-700 font-medium">
            <li><Link to="/" onClick={() => setIsOpen(false)}>Home</Link></li>
            <li><Link to="/features" onClick={() => setIsOpen(false)}>Features</Link></li>
            <li><Link to="/workshop" onClick={() => setIsOpen(false)}>Workshops</Link></li>
            <li><Link to="/blogs" onClick={() => setIsOpen(false)}>Blogs</Link></li>
            <li><Link to="/about" onClick={() => setIsOpen(false)}>About</Link></li>
            <li><Link to="/contact-us" onClick={() => setIsOpen(false)}>Contact Us</Link></li>
          </ul>
        </div>
      )}
    </nav>
  );
}
