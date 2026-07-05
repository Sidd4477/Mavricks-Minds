import "./MaverickWay.css";

const processCards = [
  {
    id: "1",
    title: "Discovery\n& Strategy",
    text: "We understand your business, audience, and goals to craft a clear strategy that drives growth, builds trust, and delivers measurable results.",
    active: true,
  },
  {
    id: "2",
    title: "Analysis &\nDesign",
    text: "We study your requirements, plan the right user experience, and design a clear structure before moving into development.",
  },
  {
    id: "3",
    title: "Get Your\nWork Done",
    text: "From design to deployment, we build fast, scalable, and reliable digital products that help your business grow with confidence.",
  },
];

const MaverickWay = () => {
  return (
    <section className="maverick-way-section">
      <div className="maverick-way-bg-left">m</div>
      <div className="maverick-way-bg-right">m</div>

      <div className="maverick-way-content">
        <div className="maverick-way-heading">
          <h2>The Maverick Way</h2>
          <p>
            From foundation to finish, we thoughtfully craft every step.
            <br />
            Here’s a look at our process.
          </p>
        </div>

        <div className="maverick-process-row">
          {processCards.map((card) => (
            <div
              className={`maverick-process-card ${
                card.active ? "active" : ""
              }`}
              key={card.id}
            >
              <div className="maverick-card-data">
                <h3>
                  {card.title.split("\n").map((line) => (
                    <span key={line}>{line}</span>
                  ))}
                </h3>

                <span className="maverick-card-number">{card.id}</span>

                <p>{card.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MaverickWay;