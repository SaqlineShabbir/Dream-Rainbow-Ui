import React from 'react';

import { Link } from 'react-router-dom';
import './MySingleBooking.css';
const MySingleOrder = (props) => {
  const { paid, serviceName, _id, number, status } = props.mySingleOrder;
  console.log(serviceName);
  return (
    //   <div className="my-booking-content mx-5 w-[500px]">
    //     <div className="">
    //       <img src={carImg} alt="" />{' '}
    //     </div>

    //     <p className="d-flex  px-3"> ${number}</p>

    //     <p className="px-3 ">{serviceName} </p>

    //     <p className="px-3">{status}</p>

    //     <button
    //       onClick={() => props.handleDelete(_id)}
    //       className="cancel-btn fw-bold px-3"
    //     >
    //       Cancel
    //     </button>
    //   </div>

    //   <div>

    <tr>
      <th scope="row">1</th>
      <td>{serviceName}</td>
      <td>{number}</td>
      <td>{status}</td>

      <td>
        <Link to={`/dashboard/payment/${_id}`}>
          {!paid && <button class="btn btn-primary">Pay</button>}
        </Link>
        {paid && <span className="text-success">Paid</span>}
      </td>
      <td>
        {!paid && (
          <button
            onClick={() => props.handleDelete(_id)}
            className="cancel-btn fw-bold px-3"
          >
            Cancel
          </button>
        )}
      </td>
    </tr>

    //   </div>
  );
};

export default MySingleOrder;
