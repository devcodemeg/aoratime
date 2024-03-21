import React from "react";

const Breadcrumb = ({ handlePopup }) => {
  return (
    <>
      <div className="home-top">
        <div className='page-title'>
          <h3>Benutzer erstellen</h3>
        </div>
        <div className="action-main">
          <div className="action-inner">
            <div class="svcrd-togl">
              <div class="tgl-sld">
                Benutzer Status
                <label>

                  <input type="checkbox" />
                  <span>
                    <i></i>
                  </span>
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="home-top-crd-box">
        <div class="home-top-crd">
            <span>Personalnummer</span>
            <div class="home-top-crd-innr">
                <p>All</p>

            </div>

        </div>
        <div class="home-top-crd">
            <span>Benutzer</span>
            <div class="home-top-crd-innr">
                <p>All</p>

            </div>

        </div>
        <div class="home-top-crd">
            <span>Zugriffsrechte</span>
            <div class="home-top-crd-innr">
                <p>All</p>
                <svg width="12" height="6" viewBox="0 0 12 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11.25 0.747172C11.2506 0.845919 11.2302 0.943808 11.1901 1.03522C11.1499 1.12664 11.0908 1.20979 11.016 1.2799L6.17394 5.78181C6.02274 5.92156 5.8182 6 5.605 6C5.3918 6 5.18727 5.92156 5.03607 5.78181L0.194049 1.2799C0.061841 1.13636 -0.00724337 0.951726 0.000601619 0.762889C0.00844661 0.574052 0.0926428 0.394922 0.236366 0.261294C0.380088 0.127666 0.572752 0.0493831 0.775855 0.0420894C0.978958 0.0347952 1.17754 0.0990276 1.33192 0.22195L5.60097 4.19114L9.87001 0.221949C9.98241 0.116588 10.1259 0.0445795 10.2823 0.015028C10.4387 -0.0145235 10.601 -0.00029038 10.7487 0.0559278C10.8964 0.112146 11.0229 0.207824 11.1121 0.330864C11.2013 0.453904 11.2493 0.59878 11.25 0.747172Z" fill="#1E1E1E"/>
                </svg>
            </div>

        </div>
        <div class="home-top-crd">
            <span>E-Mail</span>
            <div class="home-top-crd-innr">
                <p>All</p>
            </div>

        </div>
        <div class="home-top-crd">
            <span>Password</span>
            <div class="home-top-crd-innr">
                <p>All</p>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M12 16V12" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M12 8H12.01" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </div>

        </div>
        <div class="home-top-crd">
            <span>Password bestätigen</span>
            <div class="home-top-crd-innr">
                <p>All</p>
            </div>

        </div>
    </div>
    </>
  );
};

export default Breadcrumb;
