import React, { useEffect, useState } from 'react';
import useAuth from '../../../hooks/useAuth';
import './MyBooking.css';
import MySingleOrder from './MySingleBooking/MySingleBooking';
const MyBooking = () => {
  const { user, isLoading } = useAuth();
  console.log(user.email);
  const [myAllBooking, setMyAllBooking] = useState([]);
  useEffect(() => {
    fetch(`https://dream-rainbow.onrender.com/myBooking/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setMyAllBooking(data);
      });
  }, [user?.email]);
  console.log(myAllBooking);
  const handleDelete = (id) => {
    const proceed = window.confirm('Are you sure you want to delete?');

    if (proceed) {
      const url = `https://dream-rainbow.onrender.com/order/${id}`;
      fetch(url, {
        method: 'DELETE',
      })
        .then((response) => response.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            alert('Deleted successfully');
            const remaining = myAllBooking.filter((order) => order._id !== id);
            setMyAllBooking(remaining);
          }
        });
    }
  };
  if (isLoading) {
    return (
      <div className="spinner">
        <div>
          <div className="spinner-border " role="status">
            <span class="visually-hidden">Loading...</span>
          </div>
        </div>
      </div>
    );
  }
  return (
    <>
      <div className="my-all-booking ">
        <h4 className="text-center mt-5 fw-bolder">
          {' '}
          Welcome{' '}
          <span className="fst-italic text-primary">{user?.displayName} </span>
        </h4>
        <h4 className="text-center mt-1 fw-bolder"> Your All Orders</h4>
        <div className="my-booking">
          <table class="table">
            <thead class="thead-dark">
              <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">price</th>
                <th scope="col">Status</th>
                <th scope="col">Payment</th>
                <th scope="col">cancel</th>
              </tr>
            </thead>
            <tbody>
              {myAllBooking?.map((mySingleOrder) => (
                <MySingleOrder
                  key={mySingleOrder._id}
                  handleDelete={handleDelete}
                  mySingleOrder={mySingleOrder}
                ></MySingleOrder>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default MyBooking;
