import React from 'react';
import './AddReview.css'
import { useForm } from "react-hook-form";
import useFirebase from '../../../../hooks/useFirebase';
import Swal from 'sweetalert2'
import Header from '../../../Shared/Header/Header';

const AddReview = () => {
    const {user} = useFirebase()
    const { register, handleSubmit,reset } = useForm();
    const onSubmit = data =>{
        fetch('https://polar-springs-14002.herokuapp.com/reviews', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json'},
            body:JSON.stringify(data)
        })
        .then(res =>res.json())
        .then(data => {
            console.log(data)
            if(data.insertedId){
                Swal.fire(
                    'Good job!',
                    'Successfully Added',
                    'success'
                  )
             reset()
         }
        })
        
     } 
       
    

    return (
        <>
       
        <div className="AddReview">
        <h4 className="mt-5 text-center">You Can Add A Review Here</h4>
        <form onSubmit={handleSubmit(onSubmit)}>
  <input defaultValue={user.displayName} {...register("name", { required: true })} placeholder="user Name"/>
  <textarea {...register("description")} placeholder="Review Message" required/>
  <input {...register("number", { min: 0, max: 5 })} required placeholder="Review rating out of 5"/>
  
  <input type="submit" />
</form>
 </div>
 </>
    );
};

export default AddReview;