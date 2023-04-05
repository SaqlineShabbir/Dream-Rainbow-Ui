import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import Swal from 'sweetalert2';
import placeOrderBanner from '../../../Images/placeOrder.png';
import useFirebase from '../../../hooks/useFirebase';
import Header from '../../Shared/Header/Header';
import './Booking.css';
const PlaceOrder = () => {
  const { user } = useFirebase();
  const { serviceId } = useParams();
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch('https://dream-rainbow.onrender.com/services')
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setServices(data);
      });
  }, []);

  const exactItem = services?.filter((pd) => pd._id === serviceId);

  const serviceName = exactItem[0]?.name;
  const number = exactItem[0]?.number;
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    data.serviceName = serviceName;
    data.status = 'pending';
    data.paid = false;
    data.number = number;
    fetch('https://dream-rainbow.onrender.com/booking', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        data.name = serviceName;

        if (data.insertedId) {
          Swal.fire('Good job!', 'Successfully Booked', 'success');
          reset();
        }
      });
    console.log(data);
  };
  return (
    <>
      <Header></Header>
      <div className="Booking-main">
        <div className="place-order-banner">
          <img src={placeOrderBanner} alt="" />
        </div>
        <div className="services-card-main">
          <div className="services-card">
            <h1>Booking</h1>
            <p>Services - Booking</p>
          </div>
        </div>
        <div className="booking-details">
          <div>
            <h1> {exactItem[0]?.name}</h1>
            <img src={exactItem[0]?.img} alt="" />
          </div>
          <div className="booking-form">
            <form onSubmit={handleSubmit(onSubmit)}>
              {user?.email && (
                <input defaultValue={user?.displayName} {...register('name')} />
              )}
              {user.email && (
                <input defaultValue={user?.email} {...register('email')} />
              )}

              {/* {exactItem[0]?.name && (
                <input
                  defaultValue={exactItem[0]?.name}
                  {...register('serviceName')}
                />
              )}
              {exactItem[0]?.img && (
                <input
                  defaultValue={exactItem[0]?.img}
                  {...register('serviceImg')}
                />
              )} */}
              {/* {exactItem[0]?.description && (
                <input
                  defaultValue={exactItem[0]?.description}
                  {...register('description')}
                />
              )} */}
              {/* {exactItem[0]?.number && (
                <input
                  disabled
                  defaultValue={exactItem[0]?.number}
                  {...register('number')}
                />
              )} */}
              <input {...register('address')} placeholder="Address" />
              <input {...register('phone')} placeholder="Phone Number" />
              <button className="booking-btn" type="submit">
                Confirm Order
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default PlaceOrder;
