import React from 'react';
import aboutImg from '../../../Images/about.PNG';
import './About.css';

import Fade from 'react-reveal/Fade';
const About = () => {
  return (
    <>
      <div className="about-main">
        <div className="about-content">
          <Fade left>
            <div className="about-images">
              <img src={aboutImg} alt="" />
            </div>
          </Fade>
          <Fade right>
            <div className="about-texts">
              <h6 className="Little-sub">About Dream Rainbow</h6>
              <h1>We Elevate The Beauty Of Your Home</h1>
              <p>
                <i>
                  “Each color evokes different emotions for each individual.
                  Your emotions still depend on your individual life experience
                  and how you associate each color”.
                </i>
              </p>
              <div className="about-texts-card-wrapper">
                <div className="about-text-card">
                  <h3>36,792</h3>
                  <p>Successful Project</p>
                </div>
                <div className="about-text-list">
                  <ul>
                    <li>Best Quality Standards</li>
                    <li>Smart & Unique Wall Work</li>
                    <li>Innovative Wall Designs</li>
                    <li>Annual Maintenance</li>
                    <li>Light Fixtures</li>
                    <li>Installation & Deconstruction</li>
                  </ul>
                </div>
              </div>
            </div>
          </Fade>
        </div>
      </div>
    </>
  );
};

export default About;
