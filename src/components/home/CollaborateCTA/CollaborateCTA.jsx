import "./CollaborateCTA.css";

const CollaborateCTA = () => {
  return (
    <section className="collaborate-section">
      {/* Moving Heading */}

      <div className="collaborate-marquee">
        <div className="collaborate-marquee-track">
          <span className="collaborate-star">✦</span>
          <span>Collaborate With Maverick Minds</span>
          <span className="collaborate-star">✦</span>
          <span>Make It Happen</span>
         <span className="collaborate-star">✦</span>
          <span>Collaborate With Maverick Minds</span>
          <span className="collaborate-star">✦</span>
          <span>Make It Happen</span>

          <span>Collaborate With Maverick Minds</span>
          <span className="collaborate-star">✦</span>
          <span>Make It Happen</span>
          <span className="collaborate-star">✦</span>
          <span>Collaborate With Maverick Minds</span>
          <span className="collaborate-star">✦</span>
          <span>Make It Happen</span>

        </div>
      </div>

      {/* CTA Card */}

      <div className="collaborate-card">

        <div className="collaborate-left">
          <span>WORK WITH THE BEST PRODUCT AGENCY</span>

          <h2>
            Ready To Make
            <br />
            An Impact?
          </h2>
        </div>

        <div className="collaborate-right">

          <p>
            We thrive on turning ambitious ideas into impactful digital
            experiences. If collaborating, innovating, and pushing
            boundaries excites you, then you're exactly the kind of mind
            we're looking for.
          </p>

          <button type="button">
            Book A Free 30 Min Call
            <span>↗</span>
          </button>

        </div>

      </div>
    </section>
  );
};

export default CollaborateCTA;