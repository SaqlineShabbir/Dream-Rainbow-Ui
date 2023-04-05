import React from 'react';
import Header from '../../Shared/Header/Header';
import './Banner.css';
const Banner = () => {
  return (
    <div>
      <Header />
      <div className="banner">
        <div className="banner-text ">
          <p>Dream Rainbow Painting & Wallpapering</p>
          <h2 className="fw-bolder">We Make Your Walls More Colorful</h2>
          <p>
            {' '}
            We paint dreams. Dream Rainbow always here to help you. We operate
            under the principles of doing business fairly and with the
            understanding that our customers are the lifeblood of the business.
            Much of our success comes from the relationships formed with buyers
            and sellers around the world who have joined us on this incredible
            journey and made Dream Rainbow rapid growth possible.{' '}
          </p>
        </div>
      </div>
      {/* <div className="banner-card">
           <div className>
           <hr />
           <h4>Living Room Decoration</h4>
           <p>Out of every room in your home, the living room deserves the most interior design attention. Just like your kitchen (or even more so), you spend hours on end there, so it needs to be outfitted for a range of activities. evening reading sessions. In other words, every detail counts.</p>
           </div>
       </div> */}
    </div>
  );
};

export default Banner;
