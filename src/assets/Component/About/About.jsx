import React, { useEffect } from 'react';
import photo1 from "../../../Gallery/YogaStyle.png";
import "./About.css"
import 'aos/dist/aos.css';
import AOS from 'aos';

export default function About() {

  useEffect(() => {
    AOS.init({
      duration: 1200, // Animation duration (optional)
      easing: 'ease-in-out', // Easing type (optional)
      once: true, // Whether animation should only happen once (optional)
    });
  }, []);

  return (
    <div className="text-white p-20 bg">
      {/* Who We Are */}
      <section data-aos="fade-down" className=" mb-10 lg:flex justify-center items-center">
        <section className="">
          <h1 className="text-3xl md:text-4xl font-semibold text-center textShadow px-5">Who We Are</h1>
          <p className="mt-4 max-w-2xl mx-auto">
            At YogaLife, we believe in holistic well-being through yoga, meditation, and mindfulness. Our certified experts guide you toward inner peace and balance. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur, optio vel laboriosam incidunt numquam laborum deserunt ex quod voluptates totam, porro inventore nisi? Provident ducimus animi saepe sapiente perferendis ipsa.
          </p>
        </section>
        <div className='flex justify-center items-center'>
          <img src={photo1} className='w-96 cloud-animation' />
        </div>
      </section>



      {/* Meet Our Team */}
      <section data-aos="fade-down" className="text-center mb-10">
        <h2 className="text-3xl font-semibold">Meet Our Certified Yoga Masters</h2>
        <div className="flex flex-wrap justify-center gap-6 mt-6">
          <div className="p-4 rounded-lg w-64 bg-[rgba(51,66,88,0.5)] p-2.5">
            <h3 className="text-xl font-bold">Sophia Patel</h3>
            <p>20+ Years of Experience</p>
          </div>
          <div className="p-4 rounded-lg w-64 bg-[rgba(51,66,88,0.5)] p-2.5">
            <h3 className="text-xl font-bold">Arjun Sharma</h3>
            <p>Certified Meditation Expert</p>
          </div>
        </div>
      </section>

      {/* Why Choose Us? */}
      <section data-aos="fade-down" className="p-6 rounded-lg  mb-10">
        <h2 className="text-3xl font-semibold text-center">Why Choose YogaLife?</h2>
        <ul className="mt-4 max-w-2xl mx-auto list-disc list-inside">
          <div className='flex justify-center items-center'>
            <div className=''>
              <li>Certified & Experienced Instructors</li>
              <li>Personalized Yoga Programs</li>
              <li>Online & Offline Sessions</li>
              <li>Holistic Wellness Approach</li>
            </div>
          </div>
        </ul>
      </section>

      {/* Location & Contact */}
      <section data-aos="fade-down" className="text-center mb-10">
        <h2 className="text-3xl font-semibold">Visit Us</h2>
        <p className="mt-2">123 Yoga Street, Serenity City</p>
        <p>Email: contact@yogalife.com | Phone: +123 456 789</p>
        {/* OpenStreetMap Embed */}
        <iframe
          className="mt-4 w-full h-64 rounded-lg"
          src="https://www.openstreetmap.org/export/embed.html?bbox=-0.1276,51.5072,-0.1076,51.5272&layer=mapnik"
          title="Our Location"
          frameBorder="0"
          allowFullScreen
        ></iframe>
      </section>

      {/* Call-to-Action */}
      <section data-aos="fade-down" className="text-center mt-10">
        <h2 className="text-3xl font-semibold">Join Our Peaceful Journey</h2>
        <button className="mt-4 px-6 py-3 text-white font-bold rounded-lg" style={{ backgroundColor: '#f59425' }}>
          Get Started
        </button>
      </section>
    </div>
  );
}
