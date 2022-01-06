import React from 'react';
import   './LatestNews.css'
import img from '../../../Images/banner2.jpg'
import Fade from 'react-reveal/Fade';
import paint from '../../../Images/painting.PNG'
import celling from '../../../Images/Celling.PNG'

import recent1 from '../../../Images/recent1.PNG'
import recent2 from '../../../Images/recent2.PNG'
import recent3 from '../../../Images/recent3.PNG'
import recent4 from '../../../Images/recent4.PNG'
const LatestNews = () => {
    return (
        <div className="latest-news-main">
           <div className="latest-news-text-wrapper">
           <div  className="latest-news-text">
               <p>Our News</p>
               <h1>Latest News</h1>
               <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusm tempor incididunt ut labore et dolore magna aliqua</p>
            </div>
           </div>
            <div className="latest-news-card-wrapper">
              <div className="latest-news-card">
      <Fade left>          
    <div className="card">
  <img src={celling} className="card-img-top" alt="..."/>
  
  <div className="card-body">
    <h5>Creative Ways To Paint A Ceiling</h5>
    <small className="small">3 june 2021</small>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <button className="read-more-btn">Read More  <i class="fas fa-angle-double-right"></i></button>
  </div>
  
</div>
</Fade>
              </div>
              <div className="latest-news-card">
              <div className="card">
  <img src={paint} className="card-img-top" alt="..."/>
  <div className="card-body">
  <h5>Creative Ways To Paint A Ceiling</h5>
  <small className="small">3 june 2021</small>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <button className="read-more-btn">Read More  <i class="fas fa-angle-double-right"></i></button>
  </div>
</div>
              </div>
              <Fade right>  
              <div className="recent-news-main">
                
                 <h5 className="mb-4">Rcent News</h5>
                 <div className="recent-news-content">

                    <div className="recent-news d-flex">
                    <div><img src={recent1} alt=""/></div>
                    <div className="recent-news-text">
                    <p>How to protect your damage wall</p>
                    <small className="small">3 june 2021</small>
                     </div>
                     </div>

                    <div className="recent-news d-flex">
                    <div><img src={recent2} alt=""/></div>
                    <div className="recent-news-text"> <p>How to protect your damage wall</p>
                    <small className="small">3 june 2021</small>
                   </div>
                    </div>

                    <div className="recent-news d-flex">
                    <div><img src={recent3} alt=""/></div>
                    <div className="recent-news-text"> 
                      <p>How to protect your damage wall</p>
                      <small className="small">3 june 2021</small>
                   </div>
                    </div>

                    <div className="recent-news d-flex">
                    <div><img src={recent4} alt=""/></div>
                    <div className="recent-news-text">
                    <p>How to protect your damage wall</p>
                    <small className="small">3 june 2021</small>
                    </div>
                    </div>

                 </div>
              </div>
              </Fade>
            </div>
        </div>
    );
};

export default LatestNews;