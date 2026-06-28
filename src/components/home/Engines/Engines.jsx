import "./Engines.css";

const icons = [
  { name: "Framer", text: "F", className: "framer" },
  { name: "Python", text: "Py", className: "python" },
  { name: "React", text: "⚛", className: "react" },
  { name: "JS", text: "JS", className: "js" },
  { name: "Shopify", text: "S", className: "shopify" },
  { name: "Figma", text: "F", className: "figma" },
  { name: "Flutter", text: "F", className: "flutter" },
  { name: "Adobe", text: "A", className: "adobe" },
  { name: "Java", text: "☕", className: "java" },
  { name: "Mongo", text: "M", className: "mongo" },
];

const Engines = () => {
  return (
    <section className="engines-section">
      <div className="engines-bg-mark">m</div>

      <div className="engines-container">
        <div className="engines-left">
          <h2>
            The Engines Behind
            <br />
            Great Experiences
          </h2>

          <p>
            At Maverick Minds, we believe great work starts with the right
            foundation. That’s why we rely on industry-leading tools and
            technologies that enable us to create smarter, faster, and more
            impactful digital experiences. In the hands of our team, these tools
            become more than just software—they become catalysts for innovation,
            helping us transform ideas into solutions that deliver lasting
            value.
          </p>
        </div>

        <div className="engines-icons">
          {icons.map((icon) => (
            <div className={`engine-icon ${icon.className}`} key={icon.name}>
              <span>{icon.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Engines;