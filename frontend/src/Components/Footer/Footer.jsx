import React from "react";
import "./Footer.css";
import { assets } from "../../assets/assets";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <div className="logo">
            <h1>ThelaBites</h1>
            <p>Street Flavors to Your Doorstep!</p>
          </div>
          <p>
          At ThelaBites, we bring fresh, delicious meals right to your doorstep. Our mission is to deliver not just food, but an experience full of flavor and convenience. Whether it's a quick snack or a hearty meal, we've got something for every craving. Your satisfaction, delivered.
          </p>
          <div className="footer-social-icon">
            <img src={assets.facebook_icon} alt="" />
            <img src={assets.linkedin_icon} alt="" />
            <img src={assets.twitter_icon} alt="" />
          </div>
        </div>
        <div className="footer-content-center">
            <h2>COMPANY</h2>
            <Link to='/' className="footer-link">Home</Link>
            <Link to='/aboutus' className="footer-link">About Us</Link>
            <Link to='/myorders' className="footer-link">Delivery</Link>
            <Link to='/privacy-policy' className="footer-link">Privacy policy</Link>
        </div>
        <div className="footer-content-right">
            <h2>GET IN TOUCH</h2>
            <ul>
                <li>+91-8999202981</li>
                <li>contact@thelabites.com</li>
            </ul>
        </div>
      </div>
      <hr/>
      <p className="footer-copyright">Copyright 2024 &copy; thelaBites.com - All Right Reserved.  </p>
    </div>
  );
};

export default Footer;
