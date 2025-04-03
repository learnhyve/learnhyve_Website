import React from 'react'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';


const Workshop = () => {
  return (
    <>
      <Navbar />
      <div className="flex items-center justify-center h-screen bg-gray-100">
        <h1 className="text-3xl font-bold text-gray-800">Workshops Page</h1>
      </div>
      <Footer />
    </>
  );
}

export default Workshop