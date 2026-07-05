import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import "./RecentWork.css";

import box from "../../../assets/images/work/Box.png";
import stockify from "../../../assets/images/work/Stockify.png.png";
import virtualTryOn from "../../../assets/images/work/Luxtry.png.png";
import erp from "../../../assets/images/work/Erp Software.png";
import rivio from "../../../assets/images/work/Rivio.png";
import smartRo from "../../../assets/images/work/Smart Ro System.png";
import fintexure from "../../../assets/images/work/Fintexture.png";
import kanect from "../../../assets/images/work/Kanect Global.png";

const works = [
  {
    title: "Stockify Website Design",
    category: "Website Design",
    timeline: "3 Weeks",
    image: stockify,
  },
  {
    title: "Virtual Try On App",
    category: "Mobile App",
    timeline: "4 Weeks",
    image: virtualTryOn,
  },
  {
    title: "ERP Dashboard",
    category: "Dashboard",
    timeline: "8 Weeks",
    image: erp,
  },
  {
    title: "Rivio : Companion App",
    category: "Mobile App",
    timeline: "3.5 Weeks",
    image: rivio,
  },
  {
    title: "Smart RO Solutions",
    category: "Website",
    timeline: "2 Weeks",
    image: smartRo,
  },
  {
    title: "Fintexure",
    category: "Website",
    timeline: "2 Weeks",
    image: fintexure,
  },
  {
    title: "Kanect Global",
    category: "Website",
    timeline: "3 Weeks",
    image: kanect,
  },
];

const getLoopIndex = (index, total) => {
  return ((index % total) + total) % total;
};

const RecentWork = () => {
  const [activeIndex, setActiveIndex] = useState(2);
  const cardsRef = useRef([]);
  const isAnimating = useRef(false);

  const applyPositions = (centerIndex, instant = false) => {
    const total = works.length;

    cardsRef.current.forEach((card, index) => {
      if (!card) return;

      const diff = getLoopIndex(index - centerIndex, total);

      let props = {
        opacity: 0,
        zIndex: 1,
        pointerEvents: "none",
        xPercent: -50,
        x: 0,
        y: 180,
        z: -650,
        scale: 0.42,
        rotationZ: 0,
        rotationY: 0,
      };

      if (diff === 0) {
        props = {
          opacity: 1,
          zIndex: 50,
          pointerEvents: "auto",
          xPercent: -50,
          x: 0,
          y: -52,
          z: 140,
          scale: 0.65,
          rotationZ: 0,
          rotationY: 0,
        };
      }

      if (diff === 1) {
        props = {
          opacity: 1,
          zIndex: 8,
          pointerEvents: "auto",
          xPercent: -50,
          x: 450,
          y: 28,
          z: -130,
          scale: 0.72,
          rotationZ: 18,
          rotationY: -10,
        };
      }

      if (diff === total - 1) {
        props = {
          opacity: 1,
          zIndex: 8,
          pointerEvents: "auto",
          xPercent: -50,
          x: -450,
          y: 28,
          z: -130,
          scale: 0.72,
          rotationZ: -18,
          rotationY: 10,
        };
      }

      if (diff === 2) {
        props = {
          opacity: 0,
          zIndex: 3,
          pointerEvents: "none",
          xPercent: -50,
          x: 880,
          y: 150,
          z: -500,
          scale: 0.78,
          rotationZ: 34,
          rotationY: -24,
        };
      }

      if (diff === total - 2) {
        props = {
          opacity: 0,
          zIndex: 3,
          pointerEvents: "none",
          xPercent: -50,
          x: -880,
          y: 150,
          z: -500,
          scale: 0.5,
          rotationZ: -34,
          rotationY: 24,
        };
      }

      if (instant) {
        gsap.set(card, props);
      } else {
        gsap.to(card, {
          ...props,
          duration: 0.9,
          ease: "power3.inOut",
        });
      }
    });
  };

  useEffect(() => {
    applyPositions(activeIndex, true);
  }, []);

  const moveNext = () => {
    if (isAnimating.current) return;

    isAnimating.current = true;
    const nextIndex = getLoopIndex(activeIndex + 1, works.length);

    setActiveIndex(nextIndex);
    applyPositions(nextIndex);

    setTimeout(() => {
      isAnimating.current = false;
    }, 900);
  };

  const movePrev = () => {
    if (isAnimating.current) return;

    isAnimating.current = true;
    const prevIndex = getLoopIndex(activeIndex - 1, works.length);

    setActiveIndex(prevIndex);
    applyPositions(prevIndex);

    setTimeout(() => {
      isAnimating.current = false;
    }, 900);
  };

  return (
    <section className="recent-work-section">
      <div className="recent-work-top">
        <div>
          <h2>Recent Work</h2>
          <p>
            From Branding To Interactive Design, Every Project Tells A Story And
            Showcases Our Passion <br />
            For Pushing The Boundaries Of Creativity
          </p>
        </div>

        <div className="recent-work-arrows">
          <button
            className="recent-work-arrow-circle recent-work-arrow-prev-circle"
            onClick={movePrev}
            aria-label="Previous Work"
          >
            <span className="recent-work-arrow-symbol recent-work-arrow-prev-symbol">
              ‹
            </span>
          </button>

          <button
            className="recent-work-arrow-circle recent-work-arrow-next-circle"
            onClick={moveNext}
            aria-label="Next Work"
          >
            <span className="recent-work-arrow-symbol recent-work-arrow-next-symbol">
              ›
            </span>
          </button>
        </div>
      </div>

      <div className="recent-work-stage">
        {works.map((item, index) => (
          <div
            className="work-card"
            key={item.title}
            ref={(el) => (cardsRef.current[index] = el)}
          >
            <img src={box} alt="" className="work-box" />

            <div className="work-content">
              <div
                className={`work-image-wrap ${
                  index === activeIndex ? "center-image" : ""
                }`}
              >
                <img src={item.image} alt={item.title} />
              </div>

              <div className="work-info">
                <h3>{item.title}</h3>

                <p className="work-meta-row">
                  <span className="work-meta-label">Category :</span>{" "}
                  <span className="work-meta-value">{item.category}</span>
                </p>

                <p className="work-meta-row">
                  <span className="work-meta-label">Timeline :</span>{" "}
                  <span className="work-meta-value">{item.timeline}</span>
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default RecentWork;