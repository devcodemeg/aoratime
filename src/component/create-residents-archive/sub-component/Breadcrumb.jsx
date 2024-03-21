import React from "react";
import { Link } from "react-router-dom";

const Breadcrumb = ({ handlePopup }) => {
  return (
    <>
      <div className="home-top">
        <div className='page-title'>
          <h3>Bewohner Archiv</h3>
        </div>
        <div className="btns-evnts">
          <div className="btns-evnts-inner">
            <Link to=""
             
              className="btn secondary-btn btn-2"
            >
              Return
            </Link>
          </div>
          <div
            className="btns-evnts-inner"
          >
            <Link to="" className="btn ahcv-btn ">

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
    </>
  );
};

export default Breadcrumb;
