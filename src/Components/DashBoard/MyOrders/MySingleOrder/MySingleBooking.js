import React from 'react';

import './MySingleBooking.css'
const MySingleOrder = (props) => {
    
    const {carImg, carName, _id,number, status} = props.mySingleOrder

    return (
        <div className="my-booking-container">
       
     <div className="my-booking-content">
      <div><img src={carImg} alt="" /> </div>
     <div className="my-booking-text">
       <h2 className="ms-5 mt-5" >{carName} </h2>
       <h3>$ {number}</h3>
      </div>
     
     <p className="status">{status}</p>
     <div><button onClick={()=>props.handleDelete(_id)} className="cancel-btn fw-bold">Cancel </button></div>
     </div>
     
     
    
        </div>
    );
};

export default MySingleOrder;