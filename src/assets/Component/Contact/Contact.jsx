import React, { useEffect } from 'react';
import photo1 from "../../../Gallery/Contact.png";
import 'aos/dist/aos.css';
import AOS from 'aos';

export default function Contact() {

  useEffect(() => {
      AOS.init({
        duration: 1200, // Animation duration (optional)
        easing: 'ease-in-out', // Easing type (optional)
        once: true, // Whether animation should only happen once (optional)
      });
    }, []);
  

  return (
    <div data-aos="fade-down" className="bg p-10 md:p-20 min-h-screen flex flex-col justify-center items-center">
      {/* Contact Header Section */}
      <div className="text-center">
        <h1 className="text-3xl md:text-4xl font-semibold text-white">Stay Connected With Us</h1>
        <p className="text-gray-300 mt-3 px-5 md:px-20">
          Subscribe to our newsletter and never miss out on new courses and special offers.
        </p>
      </div>

      {/* Contact Form & Image Section */}
      <div className="flex flex-col lg:flex-row items-center mt-10 bg-[rgba(40,56,80,0.5)] bg-opacity-10 p-10 rounded-lg shadow-lg w-full max-w-5xl">
        {/* Left Side - Image */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <img src={photo1} className="w-72 md:w-96 rounded-lg shadow-lg" alt="Contact" />
        </div>

        {/* Right Side - Contact Form */}
        <div className="w-full lg:w-1/2 mt-8 lg:mt-0 lg:pl-10">

          <div className="mt-4">
            <label className="block text-white font-medium">Your Name</label>
            <input type="text" placeholder="Enter your name" className="w-full px-4 py-2 rounded-lg bg-white text-black mt-2 outline-none" />
          </div>

          <div className="mt-4">
            <label className="block text-white font-medium">Email</label>
            <input type="email" placeholder="Enter your email" className="w-full px-4 py-2 rounded-lg bg-white text-black mt-2 outline-none" />
          </div>

          <button className="w-full mt-5 py-2 bg-[#f59425] text-black font-bold rounded-lg hover:bg-opacity-80 transition">
            Subscribe Now
          </button>

          {/* Contact Details */}
          <div className="mt-6">
            <h1 className="text-lg text-white font-semibold">Contact Information</h1>
            <p className="text-gray-300 mt-2">📧 vadra@13gmail.com</p>
            <p className="text-gray-300 mt-1">📞 +81 4228 56633</p>
            <p className="text-gray-300 mt-1">📍 Paris, Shortfell Office</p>
          </div>
        </div>
      </div>
    </div>
  );
}
