import React from 'react';
import { useForm } from 'react-hook-form';
import './AddService.css';
const AddCars = () => {
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    fetch('https://dream-rainbow.onrender.com/services', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          alert('Successfully Added');
          reset();
        }
      });
  };
  return (
    <>
      <div className="AddServices">
        <h4 className="mt-5 text-center">You Can Add A New Service Here</h4>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            {...register('name', { required: true })}
            placeholder="Service Name"
          />
          <textarea {...register('description')} placeholder="description" />
          <input {...register('img')} placeholder="Image Url" />
          <input {...register('number')} placeholder="Price" />

          <input type="submit" />
        </form>
      </div>
    </>
  );
};

export default AddCars;

// https://i.ibb.co/KwcpTTv/service1.png
// https://i.ibb.co/Qf58B10/service2.png
// https://i.ibb.co/2sczhCV/service3.png
// https://i.ibb.co/Tkh32hM/service4.png
// https://i.ibb.co/1f7Bvtk/service5.png
// https://i.ibb.co/c8J2dfM/service6.png
