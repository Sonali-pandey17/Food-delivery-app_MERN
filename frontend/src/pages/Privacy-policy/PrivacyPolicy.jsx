import React, { useEffect } from 'react';
import './PrivacyPolicy.css'; // Import CSS file
import privacyImage from '../../assets/servicesImg.png'; // Example image path

const PrivacyPolicy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="privacy-page">
      {/* Hero Section */}
      <section className="hero-section">
        <img src={privacyImage} alt="Privacy Policy" className="hero-image" />
        <div className="hero-overlay">
          <h1 className="hero-title">Privacy Policy</h1>
        </div>
      </section>

      {/* Content Sections */}
      <div className="privacy-container">
        <section className="privacy-section">
          <h2 className="section-title">Introduction</h2>
          <p className="section-text">
            Welcome to ThelaBites! We are committed to protecting your personal information and your right to privacy. This Privacy Policy explains what information we collect, how we use it, and what rights you have in relation to it.
          </p>
        </section>

        <section className="privacy-section">
          <h2 className="section-title">Information We Collect</h2>
          <div className="card">
            <p className="section-text">
              We collect personal information that you provide to us, such as name, address, contact information, payment details, and preferences. This information helps us improve your experience with our services.
            </p>
          </div>
        </section>

        <section className="privacy-section">
          <h2 className="section-title">How We Use Your Information</h2>
          <div className="card">
            <p className="section-text">
              We use your personal information to fulfill orders, improve our services, process payments, and communicate with you about updates, promotions, or offers.
            </p>
          </div>
        </section>

        <section className="privacy-section">
          <h2 className="section-title">Your Data Protection Rights</h2>
          <div className="card">
            <p className="section-text">
              You have the right to access, update, or delete your personal information at any time. To exercise these rights, please contact our support team at support@thelabites.com.
            </p>
          </div>
        </section>

        <section className="privacy-section">
          <h2 className="section-title">Contact Us</h2>
          <div className="card">
            <p className="section-text">
              If you have any questions or concerns regarding this Privacy Policy or our data practices, feel free to contact us at privacy@ThelaBites.com.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default PrivacyPolicy;