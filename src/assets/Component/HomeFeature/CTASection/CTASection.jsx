import React, { useEffect } from 'react';
import "./CTASection.css";
import 'aos/dist/aos.css';
import AOS from 'aos';

export default function CTASection() {

  useEffect(() => {
    AOS.init({
      duration: 1200, // Animation duration (optional)
      easing: 'ease-in-out', // Easing type (optional)
      once: true, // Whether animation should only happen once (optional)
    });
  }, []);

  return (
    <div className="cta-bg">
      <div data-aos="fade-up" className="cta-container p-16">
        <h2 className="text-white text-3xl md:text-4xl font-semibold text-center textShadow px-5">Join Our Yoga Masters for True Serenity</h2>
        <p className="my-8 text-lg">
          Our certified yoga experts are here to guide you toward inner peace and harmony. Start your journey with personalized meditation and yoga practices that will help you find balance, reduce stress, and enhance your well-being.
        </p>

        <div className="">
          <button className="button px-6 py-3 text-lg rounded-sm font-medium">Meet Our Experts</button>
        </div>
      </div>
    </div>
  );
}
