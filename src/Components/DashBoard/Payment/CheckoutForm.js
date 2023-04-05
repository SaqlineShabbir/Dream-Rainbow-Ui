import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2';

const CheckoutForm = ({ bookingInfo }) => {
  console.log(bookingInfo);
  const price = Number(bookingInfo?.number);

  const [cardError, setCardError] = useState('');
  const [success, setSuccess] = useState('');
  const [transactionId, setTransactionId] = useState('');
  const stripe = useStripe();
  const elements = useElements();
  const [clientSecret, setClientSecret] = useState('');
  console.log(price, clientSecret);
  //   useEffect(() => {
  //     fetch('https://dream-rainbow.onrender.com/create-payment-intent', {
  //       method: 'POST',
  //       headers: { 'Content-Type': 'application/json' },
  //       body: JSON.stringify({ price }),
  //     })
  //       .then((res) => {
  //         res.json();
  //         console.log(res);
  //       })
  //       .then((data) => {
  //         setClientSecret(data.clientSecret);
  //         console.log('daaa', data, 'da');
  //       });
  //   }, [price]);

  useEffect(() => {
    // Create PaymentIntent as soon as the page loads
    fetch('https://dream-rainbow.onrender.com/create-payment-intent', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ price }),
    })
      .then((res) => res.json())
      .then((data) => setClientSecret(data.clientSecret));
    console.log(price, 'pppp');
  }, [price]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!stripe || !elements) {
      return;
    }
    const card = elements.getElement(CardElement);
    if (card == null) {
      return;
    }
    // Use your card Element with other Stripe.js APIs
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card,
    });
    if (error) {
      console.log('[error]', error);
      setCardError(error.message);
    } else {
      console.log('[PaymentMethod]', paymentMethod);
      setCardError('');
    }
    setSuccess('');
    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            name: bookingInfo?.name,
            email: bookingInfo?.email,
          },
        },
      });
    if (confirmError) {
      setCardError(confirmError.message);
      return;
    }
    if (paymentIntent.status === 'succeeded') {
      const payment = {
        price,
        transactionId: paymentIntent.id,
        name: bookingInfo?.name,
        email: bookingInfo?.email,
        bookingId: bookingInfo?._id,
      };
      Swal.fire('Good job!', 'Successfully Paid!', 'success');
      fetch('https://dream-rainbow.onrender.com/payments', {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify(payment),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.insertedId) {
            console.log(data.insertedId);
            setSuccess('congrats! your payment completed ');
            setTransactionId(paymentIntent.id);
          }
        });
    }
    // console.log('payment-intent', paymentIntent);
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="mt-5 mx-5">
        <CardElement
          options={{
            style: {
              base: {
                fontSize: '16px',
                color: '#424770',
                '::placeholder': {
                  color: '#aab7c4',
                },
              },
              invalid: {
                color: '#9e2146',
              },
            },
          }}
        />
        <div className="d-flex justify-center mt-5">
          <button
            className="px-5"
            type="submit"
            disabled={!stripe || !clientSecret}
          >
            Pay
          </button>
        </div>
      </form>
      <p className="text-danger">{cardError}</p>
      {success && (
        <div>
          <p className="text-success">{success}</p>
          <p>
            Your TransactionId: <span>{transactionId}</span>
          </p>
        </div>
      )}
    </>
  );
};

export default CheckoutForm;
