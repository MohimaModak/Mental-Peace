import React, { useEffect } from 'react'
import "./Path.css"
import photo1 from "../../../../Gallery/YogaStyle.png";
import 'aos/dist/aos.css';
import AOS from 'aos';

export default function Path() {

  useEffect(() => {
            AOS.init({
              duration: 1200, // Animation duration (optional)
              easing: 'ease-in-out', // Easing type (optional)
              once: true, // Whether animation should only happen once (optional)
            });
          }, []);

  return (
    <div className='bg text-white'>
      <div data-aos="fade-down" className='p-16'>
        <div className='text-center'>
          <h1 className='text-3xl md:text-4xl font-semibold'>Our Peaceful Practices</h1>
          <p className='my-16 text-lg'>Our expert yoga team combines ancient practices with cosmic energy to help you <br />achieve ultimate tranquility. Whether through mindful breathing, movement, or energy healing, <br />we guide you on a journey of deep relaxation and balance.</p>
        </div>
        <div className='lg:flex justify-evenly items-center'>
          <div className='flex justify-center items-center my-10 lg:mt-0'>
            <img src={photo1} className='w-96 cloud-animation' />
          </div>
          <div>
            <div className='bg-[rgba(51,66,88,0.5)] px-5 py-3 '>
              <h1 className='text-xl font-semibold'>1. Guided Meditation</h1>
              <p>- Journey through the stars with breathwork and mindfulness techniques.</p>
            </div>
            <div className='bg-[rgba(51,66,88,0.5)] px-5 py-3 mt-5 rounded-md'>
              <h1 className='text-xl font-semibold'>2. Yoga for Inner Balance</h1>
              <p>- Align your body and mind through movement and postures designed for harmony.</p>
            </div>
            <div className='bg-[rgba(51,66,88,0.5)] px-5 py-3 mt-5 rounded-md'>
              <h1 className='text-xl font-semibold'>3. Energy Healing</h1>
              <p>- Tap into universal energy and restore your inner peace with spiritual alignment.</p>
            </div>
            <div className='bg-[rgba(51,66,88,0.5)] px-5 py-3 mt-5 rounded-md'>
              <h1 className='text-xl font-semibold'>4. Soothing Sound Therapy</h1>
              <p>- Relax and rejuvenate with calming cosmic soundscapes and vibrations.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
