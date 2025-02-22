import React, { useEffect } from 'react'
import "./Benefits.css"
import photo1 from "../../../../Gallery/Stress.png";
import photo2 from "../../../../Gallery/Sleep.png";
import photo3 from "../../../../Gallery/Enhanced.png";
import photo4 from "../../../../Gallery/Brain.png";
import 'aos/dist/aos.css';
import AOS from 'aos';

export default function Benefits() {

     useEffect(() => {
              AOS.init({
                duration: 1200, // Animation duration (optional)
                easing: 'ease-in-out', // Easing type (optional)
                once: true, // Whether animation should only happen once (optional)
              });
            }, []);

    return (
        <div className='bg text-white text-center'>
            <div data-aos="fade-down" className='p-16'>
                <h1 className='text-3xl md:text-4xl font-semibold'>Align Your Mind with the Universe</h1>
                <p className='my-16 text-lg'>Our expert yoga team blends ancient wisdom with cosmic energy to guide you toward deep mental peace. <br /> Through mindful breathing, movement, and meditation, we help you release stress, improve focus, and achieve inner balance.</p>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5'>

                    <div>
                        <h1 className='text-xl font-normal'>🌿 Stress Reduction</h1>
                        <div className='flex justify-center items-center'>
                            <img src={photo1} className='w-40 cloud-animation my-10' />
                        </div>
                        <p>🔸 Let go of negativity and restore inner harmony with guided meditation.</p>
                    </div>

                    <div>
                        <h1 className='text-xl font-normal'>💤 Better Sleep</h1>
                        <div className='flex justify-center items-center'>
                            <img src={photo2} className='w-40 cloud-animation my-10' />
                        </div>
                        <p>🔸 Experience deep, uninterrupted sleep through mindful breathing techniques.</p>
                    </div>

                    <div>
                        <h1 className='text-xl font-normal'>🌈 Enhanced Focus</h1>
                        <div className='flex justify-center items-center'>
                            <img src={photo3} className='w-40 cloud-animation my-10' />
                        </div>
                        <p>🔸 Strengthen your mind and improve concentration with cosmic energy practices.</p>
                    </div>

                    <div>
                        <h1 className='text-xl font-normal'>🔮 Spiritual Growth
                        </h1>
                        <div className='flex justify-center items-center'>
                            <img src={photo4} className='w-40 cloud-animation my-10' />
                        </div>
                        <p>🔸 Connect with the universe and awaken higher consciousness through meditation.</p>
                    </div>


                </div>
            </div>
        </div>
    )
}

