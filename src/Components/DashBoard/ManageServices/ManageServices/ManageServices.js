import React, { useEffect, useState } from 'react';
import ManageSingleBooking from '../ManageSingleCar/ManageSingleBooking';
import './ManageServices.css';
const ManageServices = () => {
  const [manageCars, setManageCars] = useState([]);
  useEffect(() => {
    fetch('https://dream-rainbow.onrender.com/allService')
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setManageCars(data);
      });
  }, []);

  const handleManageCarDelete = (id) => {
    const proceed = window.confirm('Are you sure you want to delete?');
    if (proceed) {
      const url = `https://dream-rainbow.onrender.com/service/${id}`;
      fetch(url, {
        method: 'DELETE',
      })
        .then((response) => response.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            alert('Deleted successfully');
            const remaining = manageCars.filter((order) => order._id !== id);
            setManageCars(remaining);
          }
        });
    }
  };
  return (
    <>
      <div className="manage-services-main">
        <h3 className="text-center pt-5">You can Delete Services</h3>
        <div className="services-container">
          {manageCars?.map((manageCar) => (
            <ManageSingleBooking
              key={manageCar._id}
              handleManageCarDelete={handleManageCarDelete}
              manageCar={manageCar}
            ></ManageSingleBooking>
          ))}
        </div>
      </div>
    </>
  );
};

export default ManageServices;
