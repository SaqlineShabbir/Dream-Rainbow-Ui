import React from 'react';


const ManageSingleBooking = (props) => {
    const {img,name,description,number,_id} = props.manageCar
    return (
        <div className="car-container ">
        <img src={img} alt="" />
        <div className="car-text">
        <h3 className="">{name}</h3>
        <h5 className="price">$ {number}</h5>
        <p>{description}</p>
        <button onClick={()=>props.handleManageCarDelete(_id)} className="service-button">Delete <i className="fas fa-angle-double-right"></i></button>
        </div>
    </div>
    );
};

export default ManageSingleBooking;