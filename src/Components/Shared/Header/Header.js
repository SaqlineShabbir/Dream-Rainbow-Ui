import React, { useEffect, useState } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from  '../../../Images/painting-removebg-preview.png'
import './Header.css'
import Swal from 'sweetalert2'
import useAuth from '../../../hooks/useAuth';
const Header = () => {

  const {user,logOut,admin,myBookingData}= useAuth()
  const logoutWithAlart = () =>{
    Swal.fire(
      'Successfully Logged Out',
    )
    logOut()
  }
    return (
        <div>
            <Navbar className="navbar" expand="lg">
  <Container >
    <Navbar.Brand className=" fw-bold" href="#home"> <img src={logo} alt="" />Dream Rainbow <span className="my-color "></span></Navbar.Brand>
    <Navbar.Toggle style={{backgroundColor:"white"}} aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className=" ms-auto mt-3">
        <Nav.Link as={Link} className=" text-danger mx-4 " to="/home">Home</Nav.Link>
        <Nav.Link as={Link} className="" to="/aboutRoute">About</Nav.Link>
        <Nav.Link as={Link} className="mx-4" to="/services">Services</Nav.Link>
{/* { !user.email &&   <Nav.Link as={Link} className="text-white fw-bold mx-3 nav-hover" to="/login">Log In</Nav.Link>} */}
       
        <Nav.Link as={Link} className="  dashboard-link" to="/dashboard">Dash Board</Nav.Link>
        
        
  
       
        
        { 
          user.email?
          <Link to="/signup">  <button onClick={logoutWithAlart} className="signup-button ">Log Out</button></Link>
          :
        <Link to="/signup"> <button className="signup-button">Sign Up</button></Link>
       }
       { user.email &&
           <div className="d-flex user my-2">
           <img className="bg-white ms-5" src={user?.photoURL} alt="" />
           <p className="mt-1 ms-2">{user?.displayName}</p>
           
           </div>
       }
       {/* { !admin &&  <h4 className="ms-4"><i className="fas fa-cart-plus"> {myBookingData?.length}</i></h4>} */}
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
        </div>
    );
};

export default Header;