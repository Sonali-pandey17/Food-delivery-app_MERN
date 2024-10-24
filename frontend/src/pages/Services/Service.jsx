import React from 'react'
import './Service.css'
import { assets } from '../../assets/assets';
import AppDownload from '../../Components/AppDownload/AppDownload';
import delivery from './Images/delivery1.png'
import payment from './Images/payment.png'
import discount from './Images/discount.png'
import restaurant from './Images/restaurant.png';

const Service = () => {
    const services = [
        {
          title: 'Wide Variety of Restaurants',
          description:
            'Choose from a diverse range of local and popular restaurants offering quick bites to gourmet meals.',
          image: restaurant,
        },
        {
          title: 'Fast & Reliable Delivery',
          description:
            'We ensure timely deliveries, with real-time tracking so you can follow your order every step of the way.',
          image: delivery,
        },
        {
          title: 'Exclusive Discounts',
          description:
            'Enjoy exclusive deals, daily discounts, and special offers on a variety of cuisines.',
          image: discount,
        },
        {
          title: 'Multiple Payment Options',
          description:
            'We accept credit/debit cards, mobile wallets, and cash on delivery to make the payment process easier.',
          image: payment,
        },
      ];
  return (
    <>
    <div className="services-container">
        <img src={assets.serviceImg} className='services-header' alt=''/>
    <h1 className="services-title">Our Services</h1>
    <div className="services-grid">
      {services.map((service, index) => (
        <div key={index} className="service-item">
          <img
            src={service.image}
            alt={service.title}
            className="service-image"
          />
          <h2 className="service-title">{service.title}</h2>
          <p className="service-description">{service.description}</p>
        </div>
      ))}
    </div>
  </div>
  <AppDownload/>
  </>
  )
}

export default Service