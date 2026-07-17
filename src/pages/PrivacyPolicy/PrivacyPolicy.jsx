import { useNavigate } from "react-router-dom";

import Header from "../../components/layout/Header/Header";
import Footer from "../../components/layout/Footer/Footer";

import "./PrivacyPolicy.css";

const PrivacyPolicy = () => {
  const navigate = useNavigate();

  const handleBackToHome = () => {
    navigate("/");
  };

  return (
    <>
      <Header />

      <main className="privacy-page">
        <div className="privacy-decoration privacy-decoration-left"></div>
        <div className="privacy-decoration privacy-decoration-right"></div>

        <div className="privacy-container">
          <button
            type="button"
            className="privacy-back-button"
            onClick={handleBackToHome}
          >
            <span className="privacy-back-arrow">←</span>
            <span>Back To Home</span>
          </button>

          <header className="privacy-heading">
            <span className="privacy-label">Legal Information</span>

            <h1>Privacy Policy</h1>

            <p className="privacy-updated">Last Updated: July 2026</p>
          </header>

          <div className="privacy-content">
            <p className="privacy-introduction">
              Maverick Minds values your privacy and is committed to protecting
              any personal information you provide when visiting our website or
              interacting with our services. This policy explains what
              information we collect, how it is used, and the steps we take to
              protect it.
            </p>

            <section className="privacy-section">
              <h2>
                <span>01.</span>
                Information We Collect
              </h2>

              <p>
                We may collect personal information that you voluntarily provide
                when contacting us, submitting a form, booking a consultation,
                or communicating with our team. This information may include
                your name, email address, phone number, company name, or any
                details you choose to share with us.
              </p>

              <p>
                In addition, certain technical data may be automatically
                collected when you visit our website. This may include your IP
                address, browser type, device information, pages visited, and
                interaction behavior. This data helps us analyze website
                performance and improve user experience.
              </p>
            </section>

            <section className="privacy-section">
              <h2>
                <span>02.</span>
                How We Use Your Information
              </h2>

              <p>
                Information collected from visitors may be used to respond to
                inquiries, provide services, improve website functionality,
                analyze traffic trends, and communicate important updates. We
                may also use the data to better understand user needs and
                optimize the products and services offered by Maverick Minds.
              </p>
            </section>

            <section className="privacy-section">
              <h2>
                <span>03.</span>
                Cookies And Tracking Technologies
              </h2>

              <p>
                Our website may use cookies and analytics tools to understand
                how visitors interact with our platform. Cookies help remember
                preferences, measure traffic patterns, and enhance the browsing
                experience. You may disable cookies through your browser
                settings, although doing so may affect certain website features.
              </p>
            </section>

            <section className="privacy-section">
              <h2>
                <span>04.</span>
                Sharing Of Information
              </h2>

              <p>
                Maverick Minds does not sell or rent personal information to
                third parties. In some cases, information may be shared with
                trusted partners or service providers who assist us in operating
                our website, analyzing data, or delivering services.
              </p>

              <p>
                These parties are required to maintain confidentiality and use
                the data solely for service-related purposes.
              </p>
            </section>

            <section className="privacy-section">
              <h2>
                <span>05.</span>
                Data Security
              </h2>

              <p>
                We take appropriate technical and organizational measures to
                protect personal information from unauthorized access, misuse,
                or disclosure. While we strive to protect all data transmitted
                through our website, no digital system can guarantee complete
                security.
              </p>
            </section>

            <section className="privacy-section">
              <h2>
                <span>06.</span>
                Third-Party Links
              </h2>

              <p>
                Our website may contain links to external websites operated by
                third parties. These websites have their own privacy policies,
                and Maverick Minds is not responsible for their practices or
                content.
              </p>

              <p>
                Users are encouraged to review the privacy policies of external
                websites before sharing personal information.
              </p>
            </section>

            <section className="privacy-section">
              <h2>
                <span>07.</span>
                Children&apos;s Privacy
              </h2>

              <p>
                Our services are not directed toward individuals under the age
                of 13. We do not knowingly collect personal information from
                children.
              </p>

              <p>
                If we become aware that such data has been collected without
                parental consent, appropriate steps will be taken to remove it.
              </p>
            </section>

            <section className="privacy-section">
              <h2>
                <span>08.</span>
                Changes To This Privacy Policy
              </h2>

              <p>
                Maverick Minds may update this Privacy Policy periodically to
                reflect changes in our services, legal requirements, or
                operational practices. Updates will be posted on this page along
                with the revised date.
              </p>

              <p>
                Maverick Minds owns a gaming vertical named Maverick Minds
                Studios and the QuickCash application.
              </p>
            </section>

            <section className="privacy-section privacy-contact-section">
              <h2>
                <span>09.</span>
                Contact Us
              </h2>

              <p>
                If you have questions regarding this Privacy Policy or how your
                information is handled, please contact us using the details
                below:
              </p>

              <div className="privacy-contact-box">
                <div className="privacy-contact-item">
                  <span className="privacy-contact-label">Business</span>

                  <a href="mailto:business@maverickminds.co.in">
                    business@maverickminds.co.in
                  </a>
                </div>

                <div className="privacy-contact-item">
                  <span className="privacy-contact-label">
                    Gaming Vertical
                  </span>

                  <a href="mailto:maverickmindsstudios@gmail.com">
                    maverickmindsstudios@gmail.com
                  </a>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default PrivacyPolicy;