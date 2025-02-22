import React, { useEffect } from 'react';
import "./Home.css";
import InteractiveMap from '../HomeFeature/InteractiveMap/InteractiveMap';
import Celestial from '../HomeFeature/Celestial/Celestial';
import Benefits from '../HomeFeature/Benefits/Benefits';
import Path from '../HomeFeature/Path/Path';
import Balance from '../HomeFeature/Balance/Balance';
import Packages from '../HomeFeature/Packages/Packages';
import Testimonials from '../HomeFeature/Testimonials/Testimonials';
import CTASection from '../HomeFeature/CTASection/CTASection';
import Success from '../HomeFeature/Success/Success';
import 'aos/dist/aos.css';
import AOS from 'aos';

export default function Home() {

  useEffect(() => {
    AOS.init({
      duration: 1200, // Animation duration (optional)
      easing: 'ease-in-out', // Easing type (optional)
      once: true, // Whether animation should only happen once (optional)
    });
  }, []);

  return (
    <div className="">
      <div className="">
        <div className="relative wrapper">
          <div className="box">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>

            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
        <div className='absolute inset-0 flex justify-center items-center'>
          <div className='py-5'>
            <div data-aos="fade-up">
              <h1 className='text-white text-3xl md:text-4xl font-semibold text-center textShadow px-5'>Discover the Universe Within <br />Where Galaxies Meet Your Mental Peace
              </h1>
              <div className='flex justify-center items-center my-10'>
                <button className='cta-btn px-6 py-3 text-lg rounded-md font-medium text-white'>Begin Your Journey</button>
              </div>
            </div>
           
          </div>
        </div>
      </div>
      <InteractiveMap></InteractiveMap>
      <Celestial></Celestial>
      <Benefits></Benefits>
      <Path></Path>
      <Balance></Balance>
      <Packages></Packages>
      <Testimonials></Testimonials>
      <CTASection></CTASection>
      <Success></Success>
    </div>
  );
}