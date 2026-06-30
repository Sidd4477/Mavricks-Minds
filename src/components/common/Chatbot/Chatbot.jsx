import { useState } from "react";
import "./Chatbot.css";

const WHATSAPP_NUMBER = "7050955306"; // yaha apna WhatsApp number daalna

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
    text: "We build custom ERP systems for inventory, billing, CRM, staff management, reports, and automation.",
    price: "Custom quotation after requirement discussion.",
  },
  uiux: {
    title: "UI/UX Design",
    text: "We design clean, premium, and user-friendly interfaces for websites, apps, and dashboards.",
    price: "Starting from ₹10,000",
  },
};

const Chatbot = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      sender: "bot",
      text: "Hi 👋 Welcome to Maverick Minds. How can we help you today?",
    },
  ]);

  const [leadMode, setLeadMode] = useState(false);
  const [step, setStep] = useState(0);

  const [lead, setLead] = useState({
    name: "",
    phone: "",
    project: "",
    budget: "",
    time: "",
  });

  const leadQuestions = [
    { key: "name", question: "Great! What is your name?" },
    { key: "phone", question: "Please share your phone number." },
    { key: "project", question: "What type of project do you need?" },
    { key: "budget", question: "What is your approximate budget?" },
    { key: "time", question: "What is your preferred meeting time?" },
  ];

  const addMessage = (sender, text) => {
    setMessages((prev) => [...prev, { sender, text }]);
  };

  const handleServiceClick = (type) => {
    const service = services[type];

    addMessage("user", service.title);
    addMessage(
      "bot",
      `${service.text}\n\n${service.price}\n\nWould you like to discuss your project?`
    );
  };

  const startLeadFlow = () => {
    setLeadMode(true);
    setStep(0);
    addMessage("user", "Book Free Consultation");
    addMessage("bot", leadQuestions[0].question);
  };

  const handleLeadInput = (e) => {
    e.preventDefault();

    const form = e.target;
    const value = form.message.value.trim();

    if (!value) return;

    const currentKey = leadQuestions[step].key;

    setLead((prev) => ({
      ...prev,
      [currentKey]: value,
    }));

    addMessage("user", value);

    form.reset();

    if (step < leadQuestions.length - 1) {
      const nextStep = step + 1;
      setStep(nextStep);
      addMessage("bot", leadQuestions[nextStep].question);
    } else {
      setLeadMode(false);

      const finalLead = {
        ...lead,
        [currentKey]: value,
      };

      addMessage(
        "bot",
        "Thank you! Your details are ready. Click below to continue on WhatsApp."
      );

      setTimeout(() => {
        openWhatsApp(finalLead);
      }, 500);
    }
  };

  const openWhatsApp = (leadData = lead) => {
    const message = `Hi Maverick Minds,
My name is ${leadData.name || ""}.
Phone: ${leadData.phone || ""}
Project Type: ${leadData.project || ""}
Budget: ${leadData.budget || ""}
Preferred Meeting Time: ${leadData.time || ""}

I want to discuss my project.`;

    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
      message
    )}`;

    window.open(url, "_blank");
  };

  return (
    <>
      <button className="chatbot-toggle" onClick={() => setOpen(!open)}>
        {open ? "×" : "💬"}
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

          <div className="chatbot-body">
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

            {!leadMode && (
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
                <button onClick={startLeadFlow}>Book Free Consultation</button>
                <button onClick={() => openWhatsApp()}>Talk on WhatsApp</button>
              </div>
            )}
          </div>

          {leadMode && (
            <form className="chatbot-input" onSubmit={handleLeadInput}>
              <input name="message" placeholder="Type here..." />
              <button type="submit">Send</button>
            </form>
          )}
        </div>
      )}
    </>
  );
};

export default Chatbot;