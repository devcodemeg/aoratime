import React, { useState } from "react";
import { Link } from "react-router-dom";
import PopUpAddObject from "./customer-popup/PopUpAddObject";
import PopUpAddCustomer from "./customer-popup/PopUpAddCustomer";

const Breadcrumb = () => {
  const [showDropdown , setShowDropdown] = useState(false)

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
      <div className="home-top usrmngemnt-top usrmngmnt-flemn">
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
            <Link onClick={()=> setShowDropdown(p => !p)} className="btn ahcv-btn btn-flex">
              Achieve
              <span className="svg-icon">
                <svg width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 1L7 7L13 1" stroke="#E54949" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
              </span>
            </Link>

            { showDropdown &&<div className="ahcv-btn-drpdwn">
              <ul>
                <li>
                  <Link to="/customer-archive" className='cstmr'>
                    <span>
                      <svg width="16" height="18" viewBox="0 0 16 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M14.6654 16.5V14.8333C14.6654 13.9493 14.3142 13.1014 13.6891 12.4763C13.0639 11.8512 12.2161 11.5 11.332 11.5H4.66536C3.78131 11.5 2.93346 11.8512 2.30834 12.4763C1.68322 13.1014 1.33203 13.9493 1.33203 14.8333V16.5" stroke="#FBFBFB" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M7.99935 8.16667C9.8403 8.16667 11.3327 6.67428 11.3327 4.83333C11.3327 2.99238 9.8403 1.5 7.99935 1.5C6.1584 1.5 4.66602 2.99238 4.66602 4.83333C4.66602 6.67428 6.1584 8.16667 7.99935 8.16667Z" stroke="#FBFBFB" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                      </svg>
                    </span>
                    Customers
                  </Link>
                </li>
                <li>
                  <Link to={"/customer-object-archive-main"} className='usr-obj ' active>
                    <span>
                      <svg width="16" height="20" viewBox="0 0 16 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1.33203 12.5001C1.33203 12.5001 2.16536 11.6667 4.66536 11.6667C7.16536 11.6667 8.83203 13.3334 11.332 13.3334C13.832 13.3334 14.6654 12.5001 14.6654 12.5001V2.50008C14.6654 2.50008 13.832 3.33341 11.332 3.33341C8.83203 3.33341 7.16536 1.66675 4.66536 1.66675C2.16536 1.66675 1.33203 2.50008 1.33203 2.50008V12.5001Z" stroke="#1E1E1E" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M1.33203 18.3333V12.5" stroke="#1E1E1E" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                      </svg>
                    </span>
                    Object
                  </Link>
                </li>
              </ul>
            </div> }

          </div>
        </div>
      </div>


      {showPopUpAddObject && <PopUpAddObject handlePopup={handlePopUpAddObject}/>}
      {showPopUpAddCustomer && <PopUpAddCustomer handlePopup={handlePopUpAddCustomer}/>}
    </>
  );
};

export default Breadcrumb;
