import React, { useEffect, useState } from 'react';
import servicesBanner from '../../../Images/customerservice.jpg';
import Footer from '../../Shared/Footer/Footer';
import Header from '../../Shared/Header/Header';
import Service from '../Service/Service';
import './Services.css';
const Services = () => {
  const [services, setServices] = useState();
  useEffect(() => {
    fetch('https://dream-rainbow.onrender.com/services')
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setServices(data);
      });
  }, []);
  return (
    <>
      <Header></Header>
      <div className="services-main">
        <div className="services-banner">
          <img src={servicesBanner} alt="" />
        </div>
        <div className="services-card-main">
          <div className="services-card">
            <h1>Services</h1>
            <p>Home - Services</p>
          </div>
        </div>

        <div className="services-content-main">
          <div className="services-content-text-main">
            <div className="services-content-text">
              <p>Our Services</p>
              <h1>We Provide The Best Service For You</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do{' '}
                <br /> eiusm tempor incididunt ut labore et dolore magna aliqua
              </p>
            </div>
          </div>
        </div>
        <div className="services-container">
          {services?.map((service) => (
            <Service key={service._id} service={service}></Service>
          ))}
        </div>
      </div>
      <Footer></Footer>
    </>
  );
};

export default Services;
