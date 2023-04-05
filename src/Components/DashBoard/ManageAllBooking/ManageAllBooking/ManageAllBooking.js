import React, { useEffect, useState } from 'react';
import ShowAllBooking from '../ShowAllBooking/ShowAllBooking';
import './ManageAllBooking.css';
const ManageAllBooking = () => {
  const [allbooking, setAllbooking] = useState([]);
  useEffect(() => {
    fetch('https://dream-rainbow.onrender.com/booking')
      .then((res) => res.json())
      .then((data) => setAllbooking(data));
  }, []);
  return (
    <>
      <div className="manageAllBooking-container">
        {allbooking?.map((singleOrder) => (
          <ShowAllBooking
            key={singleOrder._id._id}
            singleOrder={singleOrder}
          ></ShowAllBooking>
        ))}
      </div>
    </>
  );
};

export default ManageAllBooking;
