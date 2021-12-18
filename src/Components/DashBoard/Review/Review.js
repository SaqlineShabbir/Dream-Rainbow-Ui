import React, { useEffect, useState } from 'react';

import './Review.css'
import SingleReview from './SingleReview/SingleReview';

const Review = () => {
    const [reviews, setReviews] =useState()
    useEffect(()=>{
        fetch('http://localhost:5000/reviews')
        .then(res => res.json())
        .then(data =>{ 
            
            setReviews(data)})
    },[])
    return (
        <>
       
        <div className="reviews-main">
           <div>
           <h3 className="text-center mt-5 ">What Our Clients Says <span className="my-color">(Reviews)</span></h3>
           <div className="hello"><h3>------</h3></div>
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