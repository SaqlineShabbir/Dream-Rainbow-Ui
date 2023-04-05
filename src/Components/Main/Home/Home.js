import React from 'react';
import Review from '../../DashBoard/Review/Review';
import Footer from '../../Shared/Footer/Footer';
import About from '../About/About';
import Banner from '../Banner/Banner';
import ExpertArea from '../ExpertArea/ExpertArea';
import LatestNews from '../LatestNews/LatestNews';
import Subscribe from '../Subscribe/Subscribe';

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <About></About>
      <ExpertArea />
      <Review></Review>
      <LatestNews></LatestNews>
      <Subscribe></Subscribe>
      <Footer />
    </div>
  );
};

export default Home;
