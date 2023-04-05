import React from 'react';
import Fade from 'react-reveal/Fade';
import './Subscribe.css';
const Subscribe = () => {
  return (
    <div>
      <Fade bottom>
        <div className="Subscribe-container col-lg-10 mx-auto ">
          <div className="Subscribe d-flex p-5">
            <div className="Subscribe-text">
              <h2 className="fw-bolder">Join To Get Our Newsletter</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore.
              </p>
            </div>
            <div class="input-group mb-3 subscribe-input">
              <input
                type="text"
                class="form-control"
                placeholder="Put your email"
                aria-label="Recipient's username"
                aria-describedby="button-addon2"
              />
              <button
                className="btn btn-outline-secondary subscribe-btn text-white "
                type="button"
                id="button-addon2"
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </Fade>
    </div>
  );
};

export default Subscribe;
