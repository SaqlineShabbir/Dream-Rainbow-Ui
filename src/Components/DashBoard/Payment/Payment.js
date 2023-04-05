import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import CheckoutForm from './CheckoutForm';
import './Payment.css';
const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PK);
console.log(stripePromise);
const Payment = () => {
  const [bookingInfo, setBookingInfo] = useState({});
  let { id } = useParams();

  useEffect(() => {
    fetch(`https://dream-rainbow.onrender.com/booking/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setBookingInfo(data);
      });
  }, []);

  return (
    <>
      <div className="payment-main">
        <h4 style={{ marginTop: '50px' }} className=" mt-5 mx-5">
          Pay ${bookingInfo.number} for {bookingInfo.serviceName}
        </h4>

        <div className="w-96 my-12">
          <Elements stripe={stripePromise}>
            <CheckoutForm bookingInfo={bookingInfo} />
          </Elements>
        </div>
      </div>
    </>
  );
};

export default Payment;
