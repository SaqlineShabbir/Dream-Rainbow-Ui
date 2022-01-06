import React, { useEffect, useState } from 'react';
import Rating from 'react-rating';
import Slider from 'react-slick';


var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 5000,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
};
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
        <div className="container ">
            <div className="my-4">
                <div className="reviews-main">
                    <div className="reviews-text-main">
                        <div className="reviews-text">
                            <h2 className="text-center mt-5">Testimonials</h2>
                            <h6 className="text-center">What Our Client says</h6>
                            <p className="text-center w-50 mx-auto my-4">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus veritatis earum molestias maxime illo nemo iure enim rerum aliquam voluptatibus totam assumenda omnis inventore neque, vitae dolor ratione at provident.</p>
                        </div>
                    </div>
                    <div className="reviews-container">
                        <Slider {...settings}>
                            {
                                reviews?.map(review =>
                                    <div className="py-4 px-1 px-lg-4" key={review._id}>
                                        <img src="https://i.postimg.cc/yx3nsc6K/avatar.png" className="img-rounded w-25 border border-5" alt="" style={{ borderRadius: '50%' }} />
                                        <h5 className="text-start">{review?.name}</h5>
                                        <p className="mt-3 text-start">{review?.description}</p>
                                        <div className="text-start">
                                            <Rating initialRating={review?.number} className="text-warning" emptySymbol="far fa-star" fullSymbol="fas fa-star" readonly ></Rating>
                                        </div>
                                    </div>)
                            }
                        </Slider>
                    </div>
                </div>
            </div>
        </div>

    </>
    );
};

export default Review;