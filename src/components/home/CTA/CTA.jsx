import "./CTA.css";

const CTA = () => {
  return (
    <section className="cta-section">
      <span className="cta-orbit cta-orbit-left-top">🔥</span>
      <span className="cta-orbit cta-orbit-left-bottom">👨‍💻</span>
      <span className="cta-orbit cta-orbit-top">👩‍🎨</span>
      <span className="cta-orbit cta-orbit-right-top">💡</span>
      <span className="cta-orbit cta-orbit-right-mid">🎨</span>

      <div className="cta-content">
        <p>
          We Don’t Create For The Sake Of Aesthetics Alone. Every Decision We
          Make Is Rooted In Insight, Intention, And Functionality. Because
          Exceptional Experiences Aren’t Defined By Appearance—They’re Defined
          By The Value They Bring And The Problems They Solve.
        </p>

        <button>Let’s Connect</button>
      </div>
    </section>
  );
};

export default CTA;