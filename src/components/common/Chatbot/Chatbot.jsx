import { useEffect, useRef, useState } from "react";
import "./Chatbot.css";

import chatbotAvatar from "../../../assets/images/logos/Customer Service Day.png";

const WHATSAPP_NUMBER = "919855981629";

const services = {
  website: {
    title: "Website Development",
    text: "We build modern portfolio websites, business websites, landing pages, and custom web apps.",
    price: "Starting from ₹25,000",
  },
  app: {
    title: "App Development",
    text: "We create Android/iOS apps with clean UI, smooth performance, and scalable backend.",
    price: "Pricing depends on features.",
  },
  erp: {
    title: "ERP Software",
    text: "We build custom ERP systems for inventory, billing, CRM, staff management, reports and automation.",
    price: "Custom quotation after requirement discussion.",
  },
  uiux: {
    title: "UI/UX Design",
    text: "We design clean, premium and modern UI/UX for websites and mobile apps.",
    price: "Starting from ₹10,000",
  },
};

const leadQuestions = [
  {
    key: "name",
    question: "Great! Before we begin, what's your name?",
  },
  {
    key: "phone",
    question: "Please share your phone number.",
  },
  {
    key: "budget",
    question: "What's your approximate budget?",
  },
  {
    key: "timeline",
    question: "When are you planning to start?",
  },
  {
    key: "description",
    question: "Please describe your project briefly.",
  },
];

const Chatbot = () => {
  const bodyRef = useRef(null);

  const [open, setOpen] = useState(false);

  const [messages, setMessages] = useState([
    {
      sender: "bot",
      text: "Hi 👋 Welcome to Maverick Minds. How can we help you today?",
    },
  ]);

  const [leadMode, setLeadMode] = useState(false);

  const [selectedService, setSelectedService] = useState(null);

  const [step, setStep] = useState(0);

  const [lead, setLead] = useState({
    service: "",
    name: "",
    phone: "",
    budget: "",
    timeline: "",
    description: "",
  });

  useEffect(() => {
    if (bodyRef.current) {
      bodyRef.current.scrollTop = bodyRef.current.scrollHeight;
    }
  }, [messages]);

  const addMessage = (sender, text) => {
    setMessages((prev) => [...prev, { sender, text }]);
  };

  const handleServiceClick = (type) => {
    const service = services[type];

    setSelectedService(type);

    setLead((prev) => ({
      ...prev,
      service: service.title,
    }));

    addMessage("user", service.title);

    addMessage(
      "bot",
      `${service.text}

${service.price}

Let's discuss your project.`
    );

    setLeadMode(true);
    setStep(0);

    setTimeout(() => {
      addMessage("bot", leadQuestions[0].question);
    }, 500);
  };

  const handleLeadInput = (e) => {
    e.preventDefault();

    const value = e.target.message.value.trim();

    if (!value) return;

    const currentKey = leadQuestions[step].key;

    const updatedLead = {
      ...lead,
      [currentKey]: value,
    };

    setLead(updatedLead);

    addMessage("user", value);

    e.target.reset();

    if (step < leadQuestions.length - 1) {
      const next = step + 1;

      setStep(next);

      setTimeout(() => {
        addMessage("bot", leadQuestions[next].question);
      }, 400);
    } else {
      setLeadMode(false);

      addMessage(
        "bot",
        `Perfect! ✅

Here is your summary.

Service : ${updatedLead.service}

Name : ${updatedLead.name}

Phone : ${updatedLead.phone}

Budget : ${updatedLead.budget}

Timeline : ${updatedLead.timeline}

Description : ${updatedLead.description}

Click below to continue on WhatsApp.`
      );
    }
  };

  const openWhatsApp = () => {
    const message = `Hi Maverick Minds,

Service : ${lead.service}

Name : ${lead.name}

Phone : ${lead.phone}

Budget : ${lead.budget}

Timeline : ${lead.timeline}

Project :

${lead.description}`;

    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };
    return (
    <>
      <button className="chatbot-toggle" onClick={() => setOpen(!open)}>
        {open ? (
          "×"
        ) : (
          <img
            src={chatbotAvatar}
            alt="Chat Support"
            className="chatbot-avatar"
          />
        )}
      </button>

      {open && (
        <div className="chatbot-box">
          <div className="chatbot-header">
            <div>
              <h4>Maverick Minds</h4>
              <p>Online Assistant</p>
            </div>

            <button onClick={() => setOpen(false)}>×</button>
          </div>

          <div className="chatbot-body" ref={bodyRef}>
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`chat-message ${
                  msg.sender === "bot" ? "bot-message" : "user-message"
                }`}
              >
                {msg.text}
              </div>
            ))}

            {!leadMode && !selectedService && (
              <div className="chatbot-options">
                <button onClick={() => handleServiceClick("website")}>
                  Website Development
                </button>

                <button onClick={() => handleServiceClick("app")}>
                  App Development
                </button>

                <button onClick={() => handleServiceClick("erp")}>
                  ERP Software
                </button>

                <button onClick={() => handleServiceClick("uiux")}>
                  UI/UX Design
                </button>
              </div>
            )}

            {!leadMode && selectedService && (
              <div className="chatbot-options">
                <button onClick={openWhatsApp}>Continue on WhatsApp</button>
              </div>
            )}
          </div>

          {leadMode && (
            <form className="chatbot-input" onSubmit={handleLeadInput}>
              <input
                name="message"
                placeholder="Type here..."
                autoComplete="off"
              />

              <button type="submit">Send</button>
            </form>
          )}
        </div>
      )}
    </>
  );
};

export default Chatbot;