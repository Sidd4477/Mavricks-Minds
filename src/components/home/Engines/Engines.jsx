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

const firstRowIcons = icons.slice(0, 5);
const secondRowIcons = icons.slice(5, 10);

const EngineIcon = ({ icon }) => {
  return (
    <div className={`engine-icon ${icon.className}`}>
      <img
        src={icon.icon}
        alt={icon.name}
        className="engine-logo"
        draggable="false"
      />
    </div>
  );
};

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
          <div className="engine-marquee engine-marquee-top">
            <div className="engine-track engine-track-left">
              <div className="engine-icon-group">
                {firstRowIcons.map((icon) => (
                  <EngineIcon icon={icon} key={`first-original-${icon.name}`} />
                ))}
              </div>

              <div className="engine-icon-group" aria-hidden="true">
                {firstRowIcons.map((icon) => (
                  <EngineIcon icon={icon} key={`first-copy-${icon.name}`} />
                ))}
              </div>
            </div>
          </div>

          <div className="engine-marquee engine-marquee-bottom">
            <div className="engine-track engine-track-right">
              <div className="engine-icon-group">
                {secondRowIcons.map((icon) => (
                  <EngineIcon icon={icon} key={`second-original-${icon.name}`} />
                ))}
              </div>

              <div className="engine-icon-group" aria-hidden="true">
                {secondRowIcons.map((icon) => (
                  <EngineIcon icon={icon} key={`second-copy-${icon.name}`} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Engines;