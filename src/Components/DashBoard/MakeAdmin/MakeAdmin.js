import React from 'react';
import { useForm } from 'react-hook-form';
import './MakeAdmin.css'
import Swal from 'sweetalert2'
import Header from '../../Shared/Header/Header';
const MakeAdmin = () => {

    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        fetch('https://polar-springs-14002.herokuapp.com/users/admin', { 
            method: 'PUT',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(data => {
            if(data.modifiedCount){
                Swal.fire(
                    'Good job!',
                    'Successfully Made',
                    'success'
                  )
            }
            console.log(data)
        })
        
    }
    return (
        <>
        <Header></Header>
        <div className="makeAdmin-container">
            <h3 className="pt-5 text-center">You Can Make SomeOne Admin</h3>
            <form className="makeAdmin-from" onSubmit={handleSubmit(onSubmit)}>



  <div class="input-group mb-3">
  <input  {...register("email")} type="text" class="form-control" placeholder="User Email" aria-label="Recipient's username" aria-describedby="button-addon2"/>
  <button class="btn btn-outline-secondary" type="submit" id="button-addon2">Make Admin</button>
</div>
</form>
        </div>
        </>

    )
}
export default MakeAdmin;