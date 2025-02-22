import { useEffect } from "react";
import "./Testimonials.css";
import 'aos/dist/aos.css';
import AOS from 'aos';


export default function Testimonials() {

    useEffect(() => {
            AOS.init({
              duration: 1200, // Animation duration (optional)
              easing: 'ease-in-out', // Easing type (optional)
              once: true, // Whether animation should only happen once (optional)
            });
          }, []);

  return (
    <div className="bg">
      <div data-aos="fade-down" className="testimonials-container p-16">
        <h2 className="text-white text-3xl md:text-4xl font-semibold text-center textShadow px-5">What Our Cosmic Peace Practitioners Are Saying</h2>
        <p className="my-8 text-lg">Real stories of transformation and inner peace through yoga and meditation.</p>

        <div className="flex justify-center items-center">
        <div className="lg:flex justify-center items-center gap-5">
          <div className="testimonial-item mt-5 lg:mt-0">
            <div className="testimonial-content">
              <p className="testimonial-text">
                "After joining, I finally found relief from stress and anxiety. The sessions are truly transformative!"
              </p>
              <div className="testimonial-author">- Sarah T.</div>
            </div>
          </div>

          <div className="testimonial-item mt-5 lg:mt-0">
            <div className="testimonial-content">
              <p className="testimonial-text">
                "Cosmic Peace helped me sleep better and focus more clearly at work."
              </p>
              <div className="testimonial-author">- James L.</div>
            </div>
          </div>

          <div className="testimonial-item mt-5 lg:mt-0">
            <div className="testimonial-content">
              <p className="testimonial-text">
                "The yoga team has guided me to discover deep inner peace and spiritual growth. I’m forever grateful!"
              </p>
              <div className="testimonial-author">- Emily K.</div>
            </div>
          </div>
        </div>
        </div>

        <div className="cta-button btn-shadow">
          <button className="join-now-button px-6 py-3 text-lg rounded-sm font-medium">Join the Cosmic Peace Journey</button>
        </div>
      </div>
    </div>
  );
}

