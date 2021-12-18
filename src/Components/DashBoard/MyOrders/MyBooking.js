import React, { useEffect, useState } from 'react';
import useAuth from '../../../hooks/useAuth';
import Header from '../../Shared/Header/Header';

import './MyBooking.css'
import MySingleOrder from './MySingleOrder/MySingleBooking';
const MyBooking = () => {
    const {user, isLoading} = useAuth();
    const [myAllBooking, setMyAllBooking] =useState([])
      useEffect(()=>{
          fetch(`https://polar-springs-14002.herokuapp.com/myBooking/${user?.email}`)
          .then(res => res.json())
          .then(data =>{
              console.log(data)
              setMyAllBooking(data)})
      },[])
      console.log(myAllBooking)
      const handleDelete=(id) => {
        const proceed =window.confirm('Are you sure you want to delete?')
        if(proceed) {
  
          const url = (`https://polar-springs-14002.herokuapp.com/order/${id}`)
          fetch(url, {
              method: 'DELETE'
          })
          .then(response => response.json())
          .then(data =>{
              if(data.deletedCount > 0){
                  alert('Deleted successfully');
                  const remaining = myAllBooking.filter(order => order._id !== id)
                  setMyAllBooking(remaining)
              }
          })
  
        }
      }
      if(isLoading) {
        return <div className="spinner">
           <div >
          <div className="spinner-border " role="status">
   <span class="visually-hidden">Loading...</span>
 </div>
        </div>
        </div>
     }
    return (
      <>
      <Header></Header>
        <div className="my-all-booking ">
        
        <h4 className="text-center mt-5 fw-bolder"> Welcome  <span className="fst-italic text-primary">{user?.displayName} </span></h4>
        <h4 className="text-center mt-1 fw-bolder"> Your All  Orders</h4>
        <div className="my-booking">

            
          {
              myAllBooking?.map(mySingleOrder =><MySingleOrder key={mySingleOrder._id} handleDelete={handleDelete}  mySingleOrder={mySingleOrder}></MySingleOrder>)
          }
        </div>
        </div>
        </>
    );

    
};

export default MyBooking;