import React from 'react';
import { Container, Nav, Navbar, Offcanvas } from 'react-bootstrap';
import dashboardLogo from '../../Images/painting-removebg-preview.png'

import {
  BrowserRouter as Router, Link, Outlet,
} from "react-router-dom";
import useFirebase from '../../hooks/useFirebase';

import './DashBoard.css'



const Dashboard = () => {
    const {logOut,user,admin} =useFirebase();
   
    return (
        
       <div className="dashboard-container">
       <Navbar className="dashboard-navbar" expand={false}>
  <Container fluid>
    <Navbar.Brand  className=""><img src={dashboardLogo} alt=""/> DASH'BOARD</Navbar.Brand>
    <Link to="/home">  <button className="dashboard-button ">Go Home</button></Link>
    <Navbar.Toggle aria-controls="offcanvasNavbar" />
    <Navbar.Offcanvas
     
      id="offcanvasNavbar"
      aria-labelledby="offcanvasNavbarLabel"
      placement="end"
    >
      <Offcanvas.Header closeButton>
        <Offcanvas.Title  id="offcanvasNavbarLabel" >
        <div className="dashboard-user">
        <img src={user.photoURL} alt="" />
          <h4 className="fw-bold">{user.displayName}</h4>
          
          </div>
        </Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <Nav className="justify-content-end flex-grow-1 pe-3 ">
          {/* <Nav.Link as={Link} to={`dashboard/`} className="dashboard-links"><i className="fas fa-sort-alpha-up"> DashBoardHome</i></Nav.Link> */}
         {!admin && <Nav.Link as={Link} to={`/dashboard/myBooking`} className="dashboard-links"><i className="fas fa-sort-alpha-up"></i> My booking</Nav.Link>}
          {!admin && <Nav.Link as={Link} to={`/dashboard/addreview`} className="dashboard-links"><i className="fas fa-plus-square"></i> Add Review</Nav.Link>}
         {!admin && <Nav.Link as={Link} to={`/dashboard/payment`} className="dashboard-links"><i className="fas fa-money-check-alt"></i> Pay</Nav.Link>}

          {admin && <Nav.Link as={Link} to={`/dashboard/addservice`} className="dashboard-links"><i className="fas fa-plus-square"></i> Add service </Nav.Link>}
         
        {admin&& <Nav.Link as={Link} to={`/dashboard/makeAdmin`} className="dashboard-links"><i className="fas fa-user-lock"></i> Make Admin </Nav.Link>
        }
            
         
        { 
         admin &&   <Nav.Link as={Link} to={`/dashboard/manageAllBooking`} className="dashboard-links"><i className="fas fa-user-lock"></i> Manage all booking </Nav.Link>
            
         }
        { 
         admin &&   <Nav.Link as={Link} to={`/dashboard/manageServices`} className="dashboard-links"><i className="fas fa-tools"></i> Manage services</Nav.Link>
            
         }

        
         
         {
              user.email &&
              <Link to="/register">  <button onClick={logOut} className="dashboard-button ">Log Out</button></Link>
         }
        
         
        </Nav>
      
      </Offcanvas.Body>
    </Navbar.Offcanvas>
  </Container>
</Navbar>




   <div>
     
        
        <Outlet></Outlet>
      
      
   </div>

  
       </div>
    
    );
};

export default Dashboard;