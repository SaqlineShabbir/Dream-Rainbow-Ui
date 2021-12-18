import React from 'react';
import aboutRouteImg from '../../Images/aboutRouteImg.jpg'
import Header from '../Shared/Header/Header';
import './AboutRoute.css'
import img from '../../Images/painting.PNG'
import whyChooseUs from '../../Images/whyChooseUsImg.PNG'
const AboutRoute = () => {
    return (
        <>
        <Header></Header>
        <div  className="about-route-main">
            <div className="about-route-banner">
                <img src={aboutRouteImg} alt=""/>
            </div>
            <div className="services-card-main">
              <div className="services-card">
               <h1>About</h1>
               <p>Home <i className="fas fa-angle-double-right"></i> About</p>
            </div>
              </div>

              <div className="about-route-content-wrapper">
                  <div className="about-route-content-first">
                      <p className="Little-sub">About Dream Rainbow</p>
                      <h1 className="fw-bolder">We Elevate The Beauty Of Your Home</h1>
                      <p><i>“Each color evokes different emotions for each individual. Your emotions still depend on your individual life experience and how you associate each color”.</i></p>
                      <div>

                      <div>
                      <div>
                     
                   </div>
                 <div>
              <h5 className="fw-bolder"> <i class="fas fa-paint-roller"></i> Professional Painting Company</h5>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</p>
                      </div>
                      </div>
                      <div>
                      <div>
                   {/* //icon */}
                   </div>
                 <div>
              <h5 className="fw-bolder"><i class="fas fa-brush"></i> Better Wallpapering Solution</h5>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</p>
                      </div>
                      </div>
                      </div>

                  </div>
                  <div className="about-route-content-second">
                <div className="about-route-content-second-content">
                       <div className="d-flex shadow first-card">
                       <img src={img} alt=""/>
                       <div className="first-card-text">
                           <h5>Exterior Painting</h5>
                           <p>Lorem ipsum dolor sit amet, consect adipiscing elit, sed do eiusmod tempor incididunt.</p>
                           <button className="view-details">Read More <i className="fas fa-angle-double-right"></i></button>
                       </div>
                       </div>
                       <div className="about-route-content-second-cards d-flex">
                         <div className="second-card shadow me-4">
                         <h3>Wall Painting</h3>
                           <p>Lorem ipsum dolor sit amet consectetur adipi scing elit sed doeiusmod tempor ipsum dolor.</p>
                           <button className="view-details">Vew Details <i className="fas fa-angle-double-right"></i></button>
                         </div>
                         <div className="second-card shadow">
                         <h3>Wall Painting</h3>
                           <p>Lorem ipsum dolor sit amet consectetur adipi scing elit sed doeiusmod tempor ipsum dolor.</p>
                           <button className="view-details">Vew Details <i className="fas fa-angle-double-right"></i></button>
                         </div>
                       </div>
                   </div>
                   <div>

                   </div>
                  </div>
              </div>

              <div className="why-choose-us-main">

                  <div className="why-choose-us-left">
                      <img src={whyChooseUs} alt=""/>
                  </div>
                  <div className="why-choose-us-right">
                    <p className="Little-sub">Why Choose Us</p>
                    <h1>We're The Best Paint <br/>Company In Town</h1>
                    <p><i>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a feugiat purus. Duis turpis nunc aliquam id nunc ac convallis dictum nisi. Curabitur vehicula tincidunt sapien velcac. </i></p>
                    <div className="why-choose-us-right-cards">
                         <div className=" shadow me-4 why-choose-us-right-card1">
                         <h3>Modern Painting Technology</h3>
                           <p>Lorem ipsum dolor sit amet consectetur adipi scing elit sed doeiusmod tempor ipsum dolor.</p>
                           <button className="view-details">Vew Details <i className="fas fa-angle-double-right"></i></button>
                         </div>
                         <div className="second-card shadow why-choose-us-right-card1">
                         <h3>Expert Painter & Designer</h3>
                           <p>Lorem ipsum dolor sit amet consectetur adipi scing elit sed doeiusmod tempor ipsum dolor.</p>
                           <button className="view-details">Vew Details <i className="fas fa-angle-double-right"></i></button>
                         </div>
                       </div>
                  </div>
              </div>
        </div>
        </>
    );
};

export default AboutRoute;