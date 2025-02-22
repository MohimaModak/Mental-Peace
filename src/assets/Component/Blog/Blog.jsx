import React, { useEffect } from 'react';
import "./Blog.css";
import photo1 from "../../../Gallery/Blog1.avif";
import photo2 from "../../../Gallery/Blog2.avif";
import photo3 from "../../../Gallery/Blog3.avif";
import 'aos/dist/aos.css';
import AOS from 'aos';

const blogs = [
  {
    id: 1,
    title: "The Benefits of Daily Yoga",
    description: "Discover how daily yoga can transform your mind and body, bringing peace and flexibility to your life.According to the National Institutes of Health, scientific evidence shows that yoga supports stress management, mental health, mindfulness, healthy eating, weight loss and quality sleep. Lie down with your limbs gently stretched out, away from the body, with your palms facing up.",
    image: photo1,
  },
  {
    id: 2,
    title: "5 Easy Yoga Poses for Beginners",
    description: "If you’re just starting yoga, here are 5 simple poses to help you build a strong foundation.According to the National Institutes of Health, scientific evidence shows that yoga supports stress management, mental health, mindfulness, healthy eating, weight loss and quality sleep. Lie down with your limbs gently stretched out, away from the body, with your palms facing up.",
    image: photo2,
  },
  {
    id: 3,
    title: "Mindfulness and Meditation Tips",
    description: "Learn how mindfulness and meditation can help you stay stress-free and enhance mental clarity.According to the National Institutes of Health, scientific evidence shows that yoga supports stress management, mental health, mindfulness, healthy eating, weight loss and quality sleep. Lie down with your limbs gently stretched out, away from the body, with your palms facing up.",
    image: photo3,
  }
];

export default function Blog() {

  useEffect(() => {
      AOS.init({
        duration: 1200, // Animation duration (optional)
        easing: 'ease-in-out', // Easing type (optional)
        once: true, // Whether animation should only happen once (optional)
      });
    }, []);

  return (
    <div data-aos="fade-down" className='bg p-20 text-white h-[100%]'>
      <div className='hero-section text-center'>
        <h1 className='text-3xl md:text-4xl font-semibold mb-4'>Yoga & Wellness Blog</h1>
        <p className='text-lg text-white mb-10'>Read expert tips, inspiring stories, and the latest trends in yoga & wellness.</p>
      </div>
      <div className='blog-grid mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
        {blogs.map(blog => (
          <div key={blog.id} className='bg-[rgba(51,66,88,0.5)] p-5 rounded-lg shadow-lg hover:scale-105 transition-transform'>
            <img src={blog.image} alt={blog.title} className='rounded-lg mb-4 object-cover w-full h-64' />
            <h2 className='text-2xl font-semibold text-gray-100'>{blog.title}</h2>
            <p className='text-white mt-2'>{blog.description}</p>
          <div className='flex justify-center items-center'>  <button className='mt-4 bg-[#f78f19] text-white py-2 px-4 rounded-lg hover:bg-orange-600 transition-colors'>
              Read More
            </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
