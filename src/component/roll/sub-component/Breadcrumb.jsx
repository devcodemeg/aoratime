import React from "react";
import { Link } from "react-router-dom";

const Breadcrumb  = () => {
  return (
    <>
      <div className="home-top">
        <div className='page-title'>
            <h3>Rollen</h3>
        </div>
        <div className="btns-evnts">
          <div className="btns-evnts-inner">
            <Link to="/add-role"

              className="btn secondary-btn btn-2 btn-flex"
            >
              <span>

<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12 5V19" stroke="#0388A6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M5 12H19" stroke="#0388A6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

              </span>
              Add role
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Breadcrumb;
