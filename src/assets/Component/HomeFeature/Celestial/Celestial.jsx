import React, { useEffect } from 'react'
import photo1 from "../../../../Gallery/Meditation.png";
import "./Celestial.css"
import 'aos/dist/aos.css';
import AOS from 'aos';

export default function Celestial() {

    useEffect(() => {
          AOS.init({
            duration: 1200, // Animation duration (optional)
            easing: 'ease-in-out', // Easing type (optional)
            once: true, // Whether animation should only happen once (optional)
          });
        }, []);

    return (
        <div className='relative bg h-full text-white'>
            <div className='p-16 text-center'>
                <div className='flex justify-center items-center'>
                    <div data-aos="fade-down">
                        <h1 className='text-3xl md:text-4xl font-semibold'>Celestial Calmness</h1>
                        <div className='flex justify-center items-center'>
                            <div className='lg:w-1/2 my-16 text-lg'>
                                <p>In the vastness of the universe, there is an infinite sense of calmness. Just like stars exist in perfect harmony, our minds too can achieve balance and peace. Mental peace is not about escaping reality but embracing it with a calm and focused mind. By aligning ourselves with the cosmic rhythm, we can reduce stress, enhance clarity, and feel truly connected with the universe.</p></div>
                        </div>
                        <div className='flex justify-center items-center'>
                            <div className=''>
                                <div className='flex justify-center items-center'>
                                    <img data-aos="fade-up" src={photo1} className='w-96' />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
