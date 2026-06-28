import "./MaverickWay.css";

const processCards = [
  {
    id: "1",
    title: "Discovery\n& Strategy",
    text: "From foundation to finish, we thoughtfully craft every step. Here’s a look at our process.",
    active: true,
  },
  {
    id: "2",
    title: "Design\n& Experience",
    text: "From foundation to finish, we thoughtfully craft every step. Here’s a look at our process.",
  },
  {
    id: "3",
    title: "Development\n& Launch",
    text: "From foundation to finish, we thoughtfully craft every step. Here’s a look at our process.",
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