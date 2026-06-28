import { useState } from "react";
import "./FAQ.css";

const faqs = [
  {
    question: "How do I request work?",
    answer:
      "You can request work by booking a call with our team. We’ll understand your idea, goals, timeline, and suggest the best next steps.",
  },
  {
    question: "What services do you offer?",
    answer:
      "We offer UI/UX design, brand identity, frontend development, backend development, mobile apps, and complete digital product solutions.",
  },
  {
    question: "How long does a project take?",
    answer:
      "Project timelines depend on scope. A small landing page may take a few days, while a full product or platform can take several weeks.",
  },
  {
    question: "Can you redesign my existing website?",
    answer:
      "Yes, we can redesign your current website with better visuals, user experience, responsiveness, and performance.",
  },
  {
    question: "Do you build responsive websites?",
    answer:
      "Yes, every website we build is fully responsive and tested across desktop, tablet, and mobile devices.",
  },
  {
    question: "How do we start collaboration?",
    answer:
      "We start with a discovery call, then define scope, timeline, pricing, and begin with wireframes or design direction.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const leftFaqs = faqs.filter((_, index) => index % 2 === 0);
  const rightFaqs = faqs.filter((_, index) => index % 2 !== 0);

  const renderFaqItem = (item, index) => (
    <div
      className={`faq-item ${openIndex === index ? "active" : ""}`}
      key={index}
    >
      <button
        type="button"
        className="faq-question"
        onClick={() => handleToggle(index)}
      >
        <span>{item.question}</span>
        <span className="faq-icon">{openIndex === index ? "−" : "+"}</span>
      </button>

      <div className="faq-answer">
        <p>{item.answer}</p>
      </div>
    </div>
  );

  return (
    <section className="faq-section">
      <div className="faq-container">
        <div className="faq-title">
          <h2>Your Questions, Answered</h2>
          <p>Helping you understand our process and offerings at Maverick Minds</p>
        </div>

        <div className="faq-columns">
          <div className="faq-column">
            {leftFaqs.map((item, index) => renderFaqItem(item, index * 2))}
          </div>

          <div className="faq-column">
            {rightFaqs.map((item, index) => renderFaqItem(item, index * 2 + 1))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;