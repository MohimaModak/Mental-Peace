import React, { useEffect } from 'react'
import "./Packages.css"
import 'aos/dist/aos.css';
import AOS from 'aos';

export default function Packages() {

   useEffect(() => {
            AOS.init({
              duration: 1200, // Animation duration (optional)
              easing: 'ease-in-out', // Easing type (optional)
              once: true, // Whether animation should only happen once (optional)
            });
          }, []);

  return (
    <div className='bg text-white text-center'>
      <div data-aos="fade-up" className='p-16'>
      <div>
        <h1 className='text-3xl md:text-4xl font-semibold'>Packages to Inner Peace</h1>
      </div>
      <div className='lg:flex justify-center items-center lg:gap-5 mt-16'>
      <div className='text-base text-left bg-[rgba(51,66,88,0.5)] p-5  rounded-md mt-5 md:mt-0'>
        <div><h1 className='text-2xl text-center font-medium'>Beginner’s Peace</h1></div>
        <h1 className='text-3xl font-medium my-3 text-center'>$49</h1>
        <p><li className='my-5'>Stress-Free Mind & Body</li></p>
        <p><li className='my-5'>Improved Sleep Quality</li></p>
        <p><li className='my-5'>Calm & Relaxed State</li></p>
        <p><li className='my-5'>Foundation for Mindfulness Practice</li></p>
        <p><li className='my-5'>Clear Your Mental Clutter</li></p>
      </div>
      <div className='text-base text-left bg-[rgba(51,66,88,0.5)] p-5 rounded-md mt-5 md:mt-0'>
        <div><h1 className='text-2xl text-center font-medium'>Focus & Clarity</h1></div>
        <h1 className='text-3xl font-medium my-3 text-center'>$69</h1>
        <p><li className='my-5'>Enhanced Mental Clarity</li></p>
        <p><li className='my-5'>Focus & Concentration Boost</li></p>
        <p><li className='my-5'>Energy & Vitality Recharge</li></p>
        <p><li className='my-5'>Mental Sharpness & Focus</li></p>
        <p><li className='my-5'>Boost Cognitive Function</li></p>
      </div>
      <div className='text-base text-left bg-[rgba(51,66,88,0.5)] p-5  rounded-md mt-5 md:mt-0'>
        <div><h1 className='text-2xl text-center font-medium'>Advanced Serenity</h1></div>
        <h1 className='text-3xl font-medium my-3 text-center'>$89</h1>
        <p><li className='my-5'>Deep Spiritual Connection</li></p>
        <p><li className='my-5'>Emotional Balance & Harmony</li></p>
        <p><li className='my-5'>Holistic Healing for Peace</li></p>
        <p><li className='my-5'>Purify Mind, Body, Soul</li></p>
        <p><li className='my-5'>Higher Level of Awareness</li></p>
      </div>
      </div>
    </div>
    </div>
  )
}


