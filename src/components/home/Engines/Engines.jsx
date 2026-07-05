import "./Engines.css";

import figmaIcon from "../../../assets/images/logos/figma.png";

const icons = [
  {
    name: "Framer",
    icon: "https://cdn.simpleicons.org/framer/ffffff",
    className: "framer",
  },
  {
    name: "Python",
    icon: "https://cdn.simpleicons.org/python",
    className: "python",
  },
  {
    name: "React",
    icon: "https://cdn.simpleicons.org/react",
    className: "react",
  },
  {
    name: "JavaScript",
    icon: "https://cdn.simpleicons.org/javascript",
    className: "js",
  },
  {
    name: "Shopify",
    icon: "https://cdn.simpleicons.org/shopify",
    className: "shopify",
  },
  {
    name: "Figma",
    icon: figmaIcon,
    className: "figma",
  },
  {
    name: "Flutter",
    icon: "https://cdn.simpleicons.org/flutter",
    className: "flutter",
  },
  {
    name: "Adobe",
    icon: "https://cdn.simpleicons.org/adobe/ffffff",
    className: "adobe",
  },
  {
    name: "Java",
    icon: "https://cdn.simpleicons.org/openjdk",
    className: "java",
  },
  {
    name: "MongoDB",
    icon: "https://cdn.simpleicons.org/mongodb/ffffff",
    className: "mongo",
  },
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
            foundation. That’s why we rely on{" "}
            <span>industry-leading tools and technologies</span> that enable us
            to create smarter, faster, and more impactful digital experiences.
            In the hands of our team, these tools become more than just
            software—they become catalysts for innovation, helping us transform
            ideas into solutions that deliver lasting value.
          </p>
        </div>

        <div className="engines-icons">
          {icons.map((icon) => (
            <div className={`engine-icon ${icon.className}`} key={icon.name}>
              <img src={icon.icon} alt={icon.name} className="engine-logo" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Engines;