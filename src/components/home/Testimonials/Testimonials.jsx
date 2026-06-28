import { useState } from "react";
import "./Testimonials.css";

import testimonialBox from "../../../assets/images/testimonials/testmonials.png.png";

const testimonials = [
  {
    text: "At Maverick Minds, we believe great work starts with the right foundation. That's why we rely on industry-leading tools and technologies that enable us to create smarter, faster, and more impactful digital experiences.",
    name: "Fawaz Ahmed",
    role: "Founder - Reyload",
  },
  {
    text: "The Maverick Minds team understood our product deeply and turned our idea into a clean, scalable digital experience with thoughtful design and smooth execution.",
    name: "Aarav Mehta",
    role: "CEO - PixelKart",
  },
  {
    text: "Their process was clear from day one. Every screen, interaction, and feature was built with purpose, helping us launch faster without compromising quality.",
    name: "Riya Sharma",
    role: "Marketing Head - GrowthStack",
  },
  {
    text: "We loved how they balanced creativity with business goals. The final product felt premium, easy to use, and exactly aligned with our brand vision.",
    name: "Karan Malhotra",
    role: "Co-Founder - BrandLoop",
  },
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = () => {
    setActiveIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setActiveIndex((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  };

  const activeTestimonial = testimonials[activeIndex];

  return (
    <section className="testimonials-section">
      <div className="testimonials-container">
        <div className="testimonials-title">
          <h2>Loved By Businesses Worldwide</h2>
        </div>

       <button
  type="button"
  className="testimonial-arrow testimonial-arrow-left"
  onClick={handlePrev}
>
  <span className="testimonial-arrow-icon">&#8249;</span>
</button>

<button
  type="button"
  className="testimonial-arrow testimonial-arrow-right"
  onClick={handleNext}
>
  <span className="testimonial-arrow-icon">&#8250;</span>
</button>

        <div className="testimonial-card">
          <img
            src={testimonialBox}
            alt=""
            className="testimonial-card-bg"
          />

          <div className="testimonial-card-content">
            <p>{activeTestimonial.text}</p>

            <div className="testimonial-author">
              <h4>{activeTestimonial.name}</h4>
              <span>{activeTestimonial.role}</span>
            </div>

            <span className="testimonial-quote">”</span>
          </div>
        </div>

        <button
          type="button"
          className="testimonial-arrow testimonial-arrow-right"
          onClick={handleNext}
          aria-label="Next testimonial"
        >
          &#8250;
        </button>
      </div>
    </section>
  );
};

export default Testimonials;