import React from 'react';
import './DashBoardHome.css'
import img from '../../../Images/handshake.jpg'
const DashBoardHome = () => {
    return (
        <div className="dash-board-home">
            <div className="dash-board-img">
            <p className="ms-5">Welcome To Dashboard Open The menubar and chose options</p>
          <img src={img} alt="" />
            </div>

            
        </div>
    );
};

export default DashBoardHome;