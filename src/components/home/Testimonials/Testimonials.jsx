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
  const [nextIndex, setNextIndex] = useState(null);
  const [direction, setDirection] = useState("next");
  const [isAnimating, setIsAnimating] = useState(false);

  const changeTestimonial = (type) => {
    if (isAnimating) return;

    const newIndex =
      type === "next"
        ? activeIndex === testimonials.length - 1
          ? 0
          : activeIndex + 1
        : activeIndex === 0
        ? testimonials.length - 1
        : activeIndex - 1;

    setDirection(type);
    setNextIndex(newIndex);
    setIsAnimating(true);

    setTimeout(() => {
      setActiveIndex(newIndex);
      setNextIndex(null);
      setIsAnimating(false);
    }, 420);
  };

  const renderCard = (testimonial, className = "") => (
    <div className={`testimonial-card ${className}`}>
      <img src={testimonialBox} alt="" className="testimonial-card-bg" />

      <div className="testimonial-card-content">
        <p>{testimonial.text}</p>

        <div className="testimonial-author">
          <h4>{testimonial.name}</h4>
          <span>{testimonial.role}</span>
        </div>

        <span className="testimonial-quote">”</span>
      </div>
    </div>
  );

  return (
    <section className="testimonials-section">
      <div className="testimonials-container">
        <div className="testimonials-title">
          <h2>Loved By Businesses Worldwide</h2>
        </div>

        <button
          type="button"
          className="testimonial-arrow-btn testimonial-arrow-left"
          onClick={() => changeTestimonial("prev")}
          aria-label="Previous testimonial"
        >
          <span className="testimonial-arrow-circle">
            <span className="testimonial-arrow-icon">&#8249;</span>
          </span>
        </button>

        <button
          type="button"
          className="testimonial-arrow-btn testimonial-arrow-right"
          onClick={() => changeTestimonial("next")}
          aria-label="Next testimonial"
        >
          <span className="testimonial-arrow-circle">
            <span className="testimonial-arrow-icon">&#8250;</span>
          </span>
        </button>

        <div className="testimonial-slider">
          {renderCard(
            testimonials[activeIndex],
            isAnimating
              ? direction === "next"
                ? "testimonial-card-exit-left"
                : "testimonial-card-exit-right"
              : ""
          )}

          {isAnimating &&
            renderCard(
              testimonials[nextIndex],
              direction === "next"
                ? "testimonial-card-enter-right"
                : "testimonial-card-enter-left"
            )}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;