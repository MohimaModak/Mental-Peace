import React, { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="bg-[#080835] text-white fixed w-full top-0 z-50 shadow-lg">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <a href="/" className="text-2xl font-bold">
          YogaLife
        </a>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-16">
          <li>
            <a href="/" className="hover:text-[#f59425]">
              Home
            </a>
          </li>
          <li>
            <a href="/about" className="hover:text-[#f59425]">
              About
            </a>
          </li>
          <li>
            <a href="/pricing" className="hover:text-[#f59425]">
              Pricing
            </a>
          </li>
          <li>
            <a href="/contact" className="hover:text-[#f59425]">
              Contact
            </a>
          </li>

          {/* Dropdown */}
          <li className="relative group">
            <button className="hover:text-[#f59425]">More ▼</button>
            <ul className="absolute left-0 mt-2 w-40 bg-white text-black rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity">
            <li>
                <a href="/blog" className="block px-4 py-2 hover:bg-gray-200">
                  Blog
                </a>
              </li>
              <li>
                <a  className="block px-4 py-2 hover:bg-gray-200 pointer-events-auto">
                  Testimonials
                </a>
              </li>            
              <li>
                <a className="block px-4 py-2 hover:bg-gray-200">
                  FAQ
                </a>
              </li>
            </ul>
          </li>
        </ul>

        {/* CTA Button */}
        <a href="/join" className="hidden md:inline-block bg-[#f78f19] text-black px-5 py-3 rounded-lg font-semibold">
        Purchase Now
        </a>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-2xl" onClick={() => setIsOpen(!isOpen)}>
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="md:hidden bg-[#010157] text-white flex flex-col items-center space-y-4 py-4">
          <li>
            <a href="/" className="hover:text-[#f59425]">
              Home
            </a>
          </li>
          <li>
            <a href="/about" className="hover:text-[#f59425]">
              About
            </a>
          </li>
          <li>
            <a href="/classes" className="hover:text-[#f59425]">
              Classes
            </a>
          </li>
          <li>
            <a href="/pricing" className="hover:text-[#f59425]">
              Pricing
            </a>
          </li>
          <li>
            <a href="/contact" className="hover:text-[#f59425]">
              Contact
            </a>
          </li>
          <li>
            <a  className="bg-[#f59425] text-black px-5 py-2 rounded-lg font-semibold">
              Purchase Now
            </a>
          </li>
        </ul>
      )}
    </nav>
  );
}
