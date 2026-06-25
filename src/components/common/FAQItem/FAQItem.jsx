import { useState } from "react";
import "./FAQItem.css";

const FAQItem = ({
  question,
  answer,
}) => {

  const [open, setOpen] =
    useState(false);

  return (
    <div className="faq-item">

      <button
        className="faq-header"
        onClick={() => setOpen(!open)}
      >

        <span>{question}</span>

        <strong>
          {open ? "−" : "+"}
        </strong>

      </button>

      {open && (
        <div className="faq-body">
          <p>{answer}</p>
        </div>
      )}

    </div>
  );
};

export default FAQItem;