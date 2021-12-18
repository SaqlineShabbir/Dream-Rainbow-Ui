import React from 'react';
import './About.css'
import aboutImg from '../../../Images/about.PNG'
import expertImg from '../../../Images/teal_wall_painting.png'
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
                  <p><i>“Each color evokes different emotions for each individual. Your emotions still depend on your individual life experience and how you associate each color”.</i></p>
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
            
          <div className="expert-main">
              <div className="expert-text">
                  <p>Our Expertise</p>
                  <h1>We Are Experts In Painting & Wallpapering</h1>
                  <p> <i>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a feugiat purus. Duis turpis nunc aliquam id nunc ac convallis dictum nisi. Curabitur vehicula tincidunt sapien velcac. </i></p>

                  <div className="expert-content-cards">
                         <div className=" shadow me-4 expert-content-card1">
                         <h3>Modern Painting Technology</h3>
                           <p>Lorem ipsum dolor sit amet consectetur adipi scing elit sed doeiusmod tempor ipsum dolor.</p>
                           <button className="view-details-about">Vew Details <i className="fas fa-angle-double-right"></i></button>
                         </div>
                         <div className=" shadow expert-content-card1">
                         <h3>Expert Painter & Designer</h3>
                           <p>Lorem ipsum dolor sit amet consectetur adipi scing elit sed doeiusmod tempor ipsum dolor.</p>
                           <button className="view-details-about">Vew Details <i className="fas fa-angle-double-right"></i></button>
                         </div>
                       </div>
              </div>
              <div className="expert-img">
         <img src={expertImg} alt="" />
              </div>
          </div>

        </div>
        </>
    );
};

export default About;