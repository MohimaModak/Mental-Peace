import React, { useEffect } from "react";
import Video from "../../../../Gallery/Yoga.mp4";
import photo1 from "../../../../Gallery/Dhen.png";
import "./Success.css"
import 'aos/dist/aos.css';
import AOS from 'aos';

export default function Success() {

    useEffect(() => {
              AOS.init({
                duration: 1200, // Animation duration (optional)
                easing: 'ease-in-out', // Easing type (optional)
                once: true, // Whether animation should only happen once (optional)
              });
            }, []);

    return (
        <div className="bg p-16 text-white text-center">
            <div className="max-w-5xl mx-auto px-6">

                {/* Client Success Stories */}
                <section data-aos="fade-down" className="">
                    <h2 className="text-3xl md:text-4xl font-semibold mb-6">Client Success Stories</h2>
                    <div className="grid md:grid-cols-3 gap-6">
                        <div className="bg-[rgba(51,66,88,0.5)] p-6 rounded-md">
                            <h3 className="text-xl font-medium mb-2">Emily’s Journey</h3>
                            <p className="">"Yoga changed my life! I feel calmer and more balanced every day."</p>
                        </div>
                        <div className="bg-[rgba(51,66,88,0.5)] p-6 rounded-md">
                            <h3 className="text-xl font-medium mb-2">Mark’s Growth</h3>
                            <p className="">"The guided meditations helped me sleep better and reduce stress."</p>
                        </div>
                        <div className="bg-[rgba(51,66,88,0.5)] p-6 rounded-md">
                            <h3 className="text-xl font-medium mb-2">Sophia’s Transformation</h3>
                            <p className="">"I finally found mental peace through daily yoga sessions."</p>
                        </div>
                    </div>
                </section>

                {/* Mental Peace Tips */}
                <section data-aos="fade-down" className="my-10">
                    <div className="lg:flex justify-center items-center">
                        <div>
                            <h2 className="text-3xl md:text-4xl font-semibold mb-6">Daily Tips for Mental Peace</h2>
                            <ul className="text-lg  space-y-2 mb-6">
                                <li>🌿 Practice deep breathing for 5 minutes each morning.</li>
                                <li>🚶 Take a walk in nature to reset your mind.</li>
                                <li>🧘 Try yoga before bed to promote restful sleep.</li>
                            </ul>
                            <button
                                className="px-6 py-3 text-lg font-medium  rounded-md"
                                style={{ backgroundColor: "#f59425" }}
                            >
                                Get Daily Tips
                            </button>
                        </div>
                        <div className="flex justify-center items-center">
                            <img src={photo1} className="w-96 cloud-animation" />
                        </div>
                    </div>
                </section>

                {/* Live Yoga Sessions */}
                <section data-aos="fade-down" className="text-center my-10">
                    <h2 className="text-3xl font-bold mb-6">Upcoming Live Yoga Sessions</h2>
                    <p className="text-lg">Join our expert-led yoga classes for mindfulness and relaxation.</p>
                    <div className="mt-6 flex justify-center items-center ">
                        <iframe
                            className="rounded-lg w-full h-[400px] md:h-[500px] lg:h-[600px]"
                            src={Video}
                            title="Yoga for Beginners - Free Online Yoga Class"
                            allowFullScreen
                        ></iframe>

                    </div>
                </section>

                {/* Meet the Yoga Team */}
                <section data-aos="fade-down" className="my-10">
                    <h2 className="text-3xl md:text-4xl font-semibold mb-6">Meet Our Certified Yoga Masters</h2>
                    <div className="grid md:grid-cols-3 gap-6">
                        <div className="bg-[rgba(51,66,88,0.5)] p-6 rounded-md">
                            <h3 className="text-xl font-medium mb-2">Master Aditi</h3>
                            <p className="">Expert in mindfulness meditation and stress relief techniques.</p>
                        </div>
                        <div className="bg-[rgba(51,66,88,0.5)] p-6 rounded-md">
                            <h3 className="text-xl font-medium mb-2">Master Raj</h3>
                            <p className="">Specialist in yoga for strength, flexibility, and inner balance.</p>
                        </div>
                        <div className="bg-[rgba(51,66,88,0.5)] p-6 rounded-md">
                            <h3 className="text-xl font-medium mb-2">Master Leila</h3>
                            <p className="">Guided meditation and breathing expert for deep relaxation.</p>
                        </div>
                    </div>
                </section>

                {/* Free Guided Meditation */}
                <section data-aos="fade-down" className="my-10">
                    <h2 className="text-3xl md:text-4xl font-semibold mb-6">Free Guided Meditation</h2>
                    <p className="text-lg  mb-6">Start your journey with a free meditation session guided by our experts.</p>
                    <button
                        className="px-6 py-3 text-lg font-medium text-white rounded-md"
                        style={{ backgroundColor: "#f59425" }}
                    >
                        Get Your Free Meditation Guide
                    </button>
                </section>

                {/* Community Engagement */}
                <section data-aos="fade-down" className="my-10">
                    <h2 className="text-3xl md:text-4xl font-semibold mb-6">Join Our Peaceful Community</h2>
                    <p className="text-lg  mb-6">
                        Follow us on social media for daily mindfulness tips, live yoga sessions, and community challenges.
                    </p>
                    <button
                        className="px-6 py-3 text-lg font-medium text-white rounded-md"
                        style={{ backgroundColor: "#f59425" }}
                    >
                        Follow Us
                    </button>
                </section>

                {/* Newsletter Signup */}
                <section data-aos="fade-down" className="my-10">
                    <h2 className="text-3xl md:text-4xl font-semibold mb-6">Stay Connected</h2>
                    <p className="text-lg  mb-6">
                        Sign up for our newsletter to receive the latest updates, new yoga classes, and special promotions.
                    </p>
                    <div className="flex justify-center">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="px-4 py-3 rounded-md text-white w-64 mr-2"
                        />
                        <button
                            className="px-6 py-3 text-lg font-medium text-white rounded-md"
                            style={{ backgroundColor: "#f59425" }}
                        >
                            Subscribe
                        </button>
                    </div>
                </section>

            </div>
        </div>
    );
}
