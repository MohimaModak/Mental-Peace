import React, { useEffect } from 'react'
import photo1 from "../../../../Gallery/Instructor.png";
import 'aos/dist/aos.css';
import AOS from 'aos';

export default function Balance() {

     useEffect(() => {
        AOS.init({
          duration: 1200, // Animation duration (optional)
          easing: 'ease-in-out', // Easing type (optional)
          once: true, // Whether animation should only happen once (optional)
        });
      }, []);

    return (
        <div className='bg text-white text-center lg:text-left'>
            <div className='p-16'>
                <div className='lg:flex justify-evenly items-center'>

                    <div className=''>
                        <h1 data-aos="fade-up" className='text-3xl md:text-4xl font-semibold'>Expert-Guided Cosmic Serenity</h1>
                        <p data-aos="fade-up" className='my-8 text-lg'>Our certified yoga masters blend ancient wisdom with modern mindfulness to<br />restore your inner peace. We help you achieve true mental harmony.</p>
                        <div className='md:flex justify-center items-center md:gap-5'>
                            <h1 data-aos="fade-up" className='text-base text-left bg-[rgba(51,66,88,0.5)] p-2.5 text-center rounded-md mt-5 md:mt-0'>Certified Yoga Experts</h1>
                            <h1 data-aos="fade-up" className='text-base text-left bg-[rgba(51,66,88,0.5)] p-2.5 text-center rounded-md mt-5 md:mt-0'>Personalized Stress Relief</h1>
                            <h1 data-aos="fade-up" className='text-base text-left bg-[rgba(51,66,88,0.5)] p-2.5 text-center rounded-md mt-5 md:mt-0'>Mind & Spirit Wellness</h1>
                        </div>
                    </div>


                    <div className='flex justify-center items-center'>
                        <img data-aos="fade-down" src={photo1} className='w-96 cloud-animation' />
                    </div>

                </div>
            </div>

        </div>
    )
}
