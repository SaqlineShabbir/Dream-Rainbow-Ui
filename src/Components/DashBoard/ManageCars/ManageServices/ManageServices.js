import React, { useEffect, useState } from 'react';
import Header from '../../../Shared/Header/Header';
import ManageSingleBooking from '../ManageSingleCar/ManageSingleBooking';
import './ManageServices.css'
const ManageServices = () => {
    const [manageCars, setManageCars] = useState([])
    useEffect(()=>{
        fetch('https://polar-springs-14002.herokuapp.com/allService')
        .then(res => res.json())
        .then(data =>{ 
            console.log(data)
            setManageCars(data)})
    },[])

    const handleManageCarDelete = (id) => {
        const proceed =window.confirm('Are you sure you want to delete?')
        if(proceed) {
  
          const url = (`https://polar-springs-14002.herokuapp.com/service/${id}`)
          fetch(url, {
              method: 'DELETE'
          })
          .then(response => response.json())
          .then(data =>{
              if(data.deletedCount > 0){
                  alert('Deleted successfully');
                  const remaining = manageCars.filter(order => order._id !== id)
                  setManageCars(remaining)
              }
          })
  
        }

    }
    return (
        <>
        <Header></Header>
        <div className="manage-services-main">
       <h3 className="text-center pt-5">You can Delete Cars</h3>
        <div className="services-container">
    
    {
        manageCars?.map(manageCar => <ManageSingleBooking key={manageCar._id} handleManageCarDelete={handleManageCarDelete} manageCar={ manageCar}></ManageSingleBooking>)
    }
  </div>
   </div>
   </>
    );
};

export default ManageServices;