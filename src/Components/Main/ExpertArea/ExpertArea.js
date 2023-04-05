import React from 'react';
import expertImg from '../../../Images/teal_wall_painting.png';
import './ExpertArea.css';
const ExpertArea = () => {
  return (
    <div>
      <div className="expert-main">
        <div className="expert-text">
          <p>Our Expertise</p>
          <h1>We Are Experts In Painting & Wallpapering</h1>
          <p>
            {' '}
            <i>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a
              feugiat purus. Duis turpis nunc aliquam id nunc ac convallis
              dictum nisi. Curabitur vehicula tincidunt sapien velcac.{' '}
            </i>
          </p>

          <div className="expert-content-cards">
            <div className=" shadow me-4 expert-content-card1">
              <h3>Modern Painting Technology</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipi scing elit sed
                doeiusmod tempor ipsum dolor.
              </p>
              <button className="view-details-about">
                Vew Details <i className="fas fa-angle-double-right"></i>
              </button>
            </div>
            <div className=" shadow expert-content-card1">
              <h3>Expert Painter & Designer</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipi scing elit sed
                doeiusmod tempor ipsum dolor.
              </p>
              <button className="view-details-about">
                Vew Details <i className="fas fa-angle-double-right"></i>
              </button>
            </div>
          </div>
        </div>
        <div className="expert-img">
          <img src={expertImg} alt="" />
        </div>
      </div>
    </div>
  );
};

export default ExpertArea;
