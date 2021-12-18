import React, { useEffect, useState } from 'react';

import './Review.css'
import SingleReview from './SingleReview/SingleReview';

const Review = () => {
    const [reviews, setReviews] =useState()
    useEffect(()=>{
        fetch('https://polar-springs-14002.herokuapp.com/reviews')
        .then(res => res.json())
        .then(data =>{ 
            
            setReviews(data)})
    },[])
    return (
        <>
       
        <div className="reviews-main">
           <div className="review-main-text">
              <div>
              <p className="">Reviews</p>
           <h3 className="">What Our Clients Says</h3>
           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. In sit tempore iste aut deserunt minus ea vel, repellat ipsa consectetur quasi cupiditate voluptates! Quasi pariatur delectus eligendi accusamus labore dicta.</p>
              </div>
           
           </div>
        <div className="reviews-container">
    
        {
        reviews?.map(review => <SingleReview key={review._id} review={review}></SingleReview>)
        }
  </div>
  
   </div>
   </>
    );
};

export default Review;