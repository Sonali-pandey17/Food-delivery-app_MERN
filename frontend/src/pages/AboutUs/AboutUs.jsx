import React, { useEffect } from "react";
import "./AboutUs.css";
import privacyImage from '../../assets/servicesImg.png';

const AboutUs = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
    <section className="hero-section">
        <img src={privacyImage} alt="Privacy Policy" className="hero-image" />
        <div className="hero-overlay">
          <h1 className="hero-title">About Us</h1>
        </div>
    </section>
    <div className="about-container">
      
      <h2>About ThelaBites</h2>
      <p className="about-description">
        Welcome to <strong>ThelaBites</strong>, where passion meets flavor! We
        are a dedicated food delivery service that brings delicious,
        high-quality meals directly to your door. Whether you're craving gourmet
        cuisine, comfort food, or a quick snack, we've got something to satisfy
        every palate.
      </p>

      <h3>Our Mission</h3>
      <p className="about-mission">
        Our mission is simple – to make dining easy and enjoyable, with a focus
        on freshness, variety, and a delightful customer experience. At
        TheLaBites, we believe that good food has the power to bring people
        together, and we strive to do just that with every order.
      </p>

      <h3>Our Values</h3>
      <ul className="about-values">
        <li>
          🌱 <strong>Fresh Ingredients:</strong> We source our ingredients
          locally to ensure every bite is packed with quality and flavor.
        </li>
        <li>
          🤝 <strong>Customer Focus:</strong> We value every customer, aiming to
          exceed expectations with each meal.
        </li>
        <li>
          🚀 <strong>Fast & Reliable Service:</strong> We understand that time
          is precious, and our efficient delivery ensures your meal arrives hot
          and on time.
        </li>
      </ul>

      <p className="about-note">
        Thank you for choosing TheLaBites – where every meal is crafted with
        care. We’re excited to serve you and be part of your dining journey!
      </p>
    </div>
    </>
    
  );
};

export default AboutUs;
