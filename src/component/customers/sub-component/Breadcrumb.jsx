import React, { useState } from "react";
import { Link } from "react-router-dom";
import PopUpAddObject from "./customer-popup/PopUpAddObject";
import PopUpAddCustomer from "./customer-popup/PopUpAddCustomer";

const Breadcrumb = () => {

  const [showPopUpAddCustomer, setPopUpAddCustomer] = useState(false);
  const handlePopUpAddCustomer = () => {
    setPopUpAddCustomer((p) => !p);
  };

  const [showPopUpAddObject, setPopUpAddObject] = useState(false);
  const handlePopUpAddObject = () => {
    setPopUpAddObject((p) => !p);
  };
  return (
    <>
      <div className="home-top">
        <div className='page-title'>
          <h3>Customers</h3>
        </div>
        <div className="btns-evnts">
          <div className="btns-evnts-inner">
            <button
             onClick={handlePopUpAddCustomer}
              className="btn secondary-btn btn-2 btn-flex"
            >
              <span>

                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 5V19" stroke="#0388A6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M5 12H19" stroke="#0388A6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                </svg>

              </span>
              Add customer
            </button>
          </div>
          <div
            className="btns-evnts-inner"
          >
            <button className="btn ahcv-btn btn-flex "  onClick={handlePopUpAddObject}>
              <span>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 5V19" stroke="#E54949" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M5 12H19" stroke="#E54949" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
              </span>
              Add object
            </button>
          </div>
          <div
            className="btns-evnts-inner"
          >
            <Link to="/customer-archive" className="btn ahcv-btn btn-flex">
              Achieve
              <span className="svg-icon">
                <svg width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 1L7 7L13 1" stroke="#E54949" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
              </span>
            </Link>
          </div>
        </div>
      </div>


      {showPopUpAddObject && <PopUpAddObject handlePopup={handlePopUpAddObject}/>}
      {showPopUpAddCustomer && <PopUpAddCustomer handlePopup={handlePopUpAddCustomer}/>}
    </>
  );
};

export default Breadcrumb;
