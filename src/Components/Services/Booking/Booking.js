import React ,{ useEffect , useState}from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import Swal from 'sweetalert2'
import useFirebase from '../../../hooks/useFirebase';
import placeOrderBanner from '../../../Images/placeOrder.png'
import Header from '../../Shared/Header/Header';
import './Booking.css'
const PlaceOrder = () => {
    const {user} =useFirebase()
    const {serviceId} = useParams();
    const [services,setServices]=useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/services')
        .then(res => res.json())
        .then(data =>{ 
             console.log(data)
             setServices(data)
            
        })
    },[])

    const exactItem = services?.filter(pd => pd._id === serviceId)

     const serviceName= exactItem[0]?.name
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        data.status= "pending";
        fetch('http://localhost:5000/booking', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json'},
            body:JSON.stringify(data)
        })
        .then(res =>res.json())
        .then(data => {
            data.name= serviceName
            if(data.insertedId){
                Swal.fire(
                    'Good job!',
                    'Successfully Booked',
                    'success'
                  )
             reset()
         }
        })
        console.log(data);
        
       

};
    return (
        <>
        <Header></Header>
        <div className="Booking-main">
            <div className="place-order-banner">
               <img src={placeOrderBanner} alt=""/>
            </div>
            <div className="services-card-main">
              <div className="services-card">
               <h1>Place Order</h1>
               <p>Services - place order</p>
            </div>
              </div>
              <div className="booking-details">
                   <div>
                   <h1> {exactItem[0]?.name}</h1>
              <img src={exactItem[0]?.img} alt=""/>
                   </div>
                   <div className="booking-form">

<form onSubmit={handleSubmit(onSubmit)}>

{user?.email && <input defaultValue={(user?.displayName)} {...register("name")} />}
{user.email && <input defaultValue={user?.email}  {...register("email")} />}

 {
     exactItem[0]?.name && <input defaultValue={exactItem[0]?.name}  {...register("carName")} />
 }
 {
  exactItem[0]?.img &&  <input defaultValue={exactItem[0]?.img} {...register("carImg")} />
 }
 { 
 exactItem[0]?.description &&  <input defaultValue={exactItem[0]?.description} {...register("description")} />
 
 }
 {
     exactItem[0]?.number &&<input defaultValue={exactItem[0]?.number} {...register("number")} />
    
 }
    <input   {...register("address")} placeholder="Address"/>
    <input   {...register("phone")} placeholder="Phone Number"/>
  <button className="booking-btn"type="submit">Confirm Order</button>
  

</form>
</div>
              </div>
        </div>
        </>
    );
};

export default PlaceOrder;