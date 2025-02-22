import React, { useEffect } from 'react';
import photo1 from "../../../../Gallery/Mental.png";
import photo2 from "../../../../Gallery/Travel.png";
import photo3 from "../../../../Gallery/Book.png";
import photo4 from "../../../../Gallery/Coffee.png";
import "./InteractiveMap.css";
import 'aos/dist/aos.css';
import AOS from 'aos';

export default function InteractiveMap() {

   useEffect(() => {
      AOS.init({
        duration: 1200, // Animation duration (optional)
        easing: 'ease-in-out', // Easing type (optional)
        once: true, // Whether animation should only happen once (optional)
      });
    }, []);
  
  const planets = [
    {
      id: 1,
      name: "Mental Wellness",
      description: "Explore cosmic tips for inner peace.",
      image: photo1,
      gradient: "from-pink-500 via-purple-700 to-purple-100", // Purple for calmness
    },
    {
      id: 2,
      name: "Travel",
      description: "Journey through interstellar destinations.",
      image: photo2,
      gradient: "from-blue-300 via-blue-700 to-blue-100", // Blue for adventure
    },
    {
      id: 3,
      name: "Books",
      description: "Dive into galactic stories.",
      image: photo3,
      gradient: "from-green-300 via-green-700 to-green-100", // Green for knowledge
    },
    {
      id: 4,
      name: "Coffee",
      description: "Sip the flavors of the cosmos.",
      image: photo4,
      gradient: "from-orange-300 via-orange-700 to-orange-100", // Orange for warmth
    },
  ];

  return (
    <div className='bg h-full text-white'>
      <div className='p-16'>
        <h1 data-aos="fade-down" className="text-3xl md:text-4xl font-semibold text-center mb-10">Explore the Galactic Universe</h1>

        <div data-aos="fade-down" className='flex justify-center items-center'>
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 md:gap-10 lg:gap-20'>
            {planets.map((planet) => (
              <div key={planet.id}>
                <div className='flex justify-center items-center'>
                  <div className='relative'>
                    <div className={`w-44 h-44 rounded-full bg-gradient-to-tr ${planet.gradient} InteractiveMap-gradientMove`}>
                    </div>

                    <div className='absolute inset-0 flex justify-center items-center transition-transform duration-300 hover:scale-125'>
                      <img src={planet.image} className='w-32 h-32 cloud-animation' alt={`${planet.name} Icon`} />
                    </div>
                  </div>
                </div>
                <div className='flex justify-center items-center'>
                  <div>
                    <h1 className='text-center text-2xl my-3'>{planet.name}</h1>
                    <p className=' text-center'>{planet.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}