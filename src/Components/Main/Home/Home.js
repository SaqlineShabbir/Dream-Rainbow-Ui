import React from 'react';
import Review from '../../DashBoard/Review/Review';
import Header from '../../Shared/Header/Header';
import About from '../About/About';
import Banner from '../Banner/Banner';
import LatestNews from '../LatestNews/LatestNews';
import Subscribe from '../Subscribe/Subscribe';

const Home = () => {
    return (
        <div>
        
            <Header></Header>
            <Banner></Banner>
            <About></About>
            <Review></Review>
            <LatestNews></LatestNews>
            <Subscribe></Subscribe>
        </div>
    );
};

export default Home;