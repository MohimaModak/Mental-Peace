import React from "react";

export default function Footer() {
  return (
    <footer className="bg-[#090931] text-white py-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          <div>
            <h2 className="text-2xl font-bold">YogaLife</h2>
            <p className="text-gray-300 mt-3">
              Bringing peace, flexibility, and mindfulness into your daily life.
            </p>
          </div>

         
          <div>
            <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="/" className="hover:text-[#f59425]">Home</a>
              </li>
              <li>
                <a href="/about" className="hover:text-[#f59425]">About</a>
              </li>
              <li>
                <a href="/pricing" className="hover:text-[#f59425]">Pricing</a>
              </li>
              <li>
                <a href="/contact" className="hover:text-[#f59425]">Contact</a>
              </li>
            </ul>
          </div>

          
          <div>
            <h3 className="text-lg font-semibold mb-3">Stay Updated</h3>
            <p className="text-gray-300 mb-3">
              Subscribe to get the latest yoga tips & offers.
            </p>
            <div className="flex items-center">
              <input
                type="email"
                placeholder="Your email"
                className="bg-gray-800 text-white px-4 py-2 rounded-l-lg focus:outline-none w-full"
              />
              <button className="bg-[#f59425] text-black px-4 py-2 rounded-r-lg font-semibold hover:bg-[#f78f19]">
                Subscribe
              </button>
            </div>
          </div>
        </div>

   
        <div className="border-t border-gray-600 mt-8 pt-6 flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} YogaLife. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="hover:text-[#f59425]">Facebook</a>
            <a href="#" className="hover:text-[#f59425]">Instagram</a>
            <a href="#" className="hover:text-[#f59425]">Twitter</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
