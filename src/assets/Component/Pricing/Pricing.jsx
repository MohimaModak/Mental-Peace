import React, { useEffect } from "react";
import 'aos/dist/aos.css';
import AOS from 'aos';

export default function Pricing() {

  useEffect(() => {
    AOS.init({
      duration: 1200, // Animation duration (optional)
      easing: 'ease-in-out', // Easing type (optional)
      once: true, // Whether animation should only happen once (optional)
    });
  }, []);

  const pricingPlans = [
    {
      title: "Beginner’s Peace",
      price: "$49",
      benefits: [
        "Stress relief techniques",
        "Relaxation-focused yoga",
        "Guided meditation",
        "Access to beginner classes",
        "Stress relief techniques",
        "Relaxation-focused yoga",
        "Guided meditation",
        "Access to beginner classes",
      ],
    },
    {
      title: "Intermediate Balance",
      price: "$79",
      benefits: [
        "Advanced breathing techniques",
        "Body flexibility training",
        "Mindfulness sessions",
        "Exclusive live workshops",
        "Advanced breathing techniques",
        "Body flexibility training",
        "Mindfulness sessions",
        "Exclusive live workshops",
      ],
    },
    {
      title: "Mastery Serenity",
      price: "$129",
      benefits: [
        "Personalized yoga coaching",
        "Deep meditation guidance",
        "One-on-one mentoring",
        "Full library access",
        "Personalized yoga coaching",
        "Deep meditation guidance",
        "One-on-one mentoring",
        "Full library access",
      ],
    },
  ];

  return (
    <div data-aos="fade-down" className="bg p-20 text-white min-h-screen">
      <div className="">
        <h1 className="text-3xl md:text-4xl font-semibold text-center textShadow px-5 mb-10">Our Pricing Plans</h1>

        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <div
              key={index}
              className="bg-[rgba(51,66,88,0.5)] p-2.5 p-6 rounded-lg shadow-lg hover:scale-105 transition-transform"
            >
              <h2 className="text-2xl font-semibold mb-3 text-center">{plan.title}</h2>
              <p className="text-xl font-bold text-center mb-4">{plan.price}</p>
              <ul className="mb-4">
                {plan.benefits.map((benefit, i) => (
                  <li key={i} className="text-sm flex items-center gap-2 my-5">
                    ✅ {benefit}
                  </li>
                ))}
              </ul>
              <button className="w-full mt-4 py-2 bg-[#f59425] text-black font-bold rounded-lg hover:bg-opacity-80 transition">
                Choose Plan
              </button>
            </div>
          ))}
        </div>
        <div className="flex justify-center items-center text-center mt-10">
          <section className="p-6 rounded-lg  mb-10">
            <h2 className="text-3xl font-semibold ">Our Mission & Vision</h2>
            <p className="mt-4 max-w-2xl mx-auto">
              Empower individuals to achieve physical, mental, and spiritual wellness through personalized yoga programs.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
