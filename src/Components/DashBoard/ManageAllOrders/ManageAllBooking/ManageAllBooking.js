import React, { useEffect, useState } from 'react';
import Header from '../../../Shared/Header/Header';
import ShowAllBooking from '../ShowAllOrders/ShowAllBooking';
import './ManageAllBooking.css'
const ManageAllBooking = () => {
    const [allbooking, setAllbooking] =useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/booking')
        .then(res=> res.json())
        .then(data => setAllbooking(data))
    },[])
    return (
        <>
        <Header></Header>
        <div className="manageAllBooking-container">
        {
            allbooking?.map(singleOrder => <ShowAllBooking  key={singleOrder._id._id} singleOrder={singleOrder}></ShowAllBooking>)
        }
    </div>
    </>
    );
};

export default ManageAllBooking;