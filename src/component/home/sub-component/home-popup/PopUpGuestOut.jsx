import React from "react";
import { Link } from "react-router-dom";
const PopUpGuestOut = ({ handlePopup }) => {
  const clickOnNext = () => {
    handlePopup("pop_55")
    handlePopup("pop_44")
  }
  return (
    <>

      <div className="main-popup location-modal">
        <div className="lm-outer">
          <div className="lm-inner">
            <div className="popup-inner popup-inner-sign">
              <div className="popup-header">
                <div class="popup-heading">
                  <h3>Gast auschecken</h3>
                </div>
                <div className="close-modal">
                  <span onClick={() => handlePopup("pop_55")}>
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 12 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M6.81641 5.97248L10.8664 1.92248C10.9574 1.8162 11.005 1.67949 10.9996 1.53967C10.9942 1.39985 10.9362 1.26722 10.8373 1.16827C10.7383 1.06933 10.6057 1.01137 10.4659 1.00597C10.3261 1.00057 10.1894 1.04813 10.0831 1.13914L6.03308 5.18914L1.98308 1.13359C1.8768 1.04257 1.74009 0.995014 1.60027 1.00041C1.46045 1.00581 1.32782 1.06378 1.22888 1.16272C1.12994 1.26166 1.07197 1.39429 1.06657 1.53411C1.06117 1.67393 1.10873 1.81064 1.19975 1.91692L5.24975 5.97248L1.19419 10.0225C1.13603 10.0723 1.0888 10.1336 1.05545 10.2025C1.02211 10.2714 1.00337 10.3465 1.00041 10.423C0.997459 10.4995 1.01035 10.5758 1.03828 10.6471C1.06621 10.7184 1.10858 10.7831 1.16272 10.8373C1.21686 10.8914 1.28161 10.9338 1.3529 10.9617C1.42419 10.9896 1.50049 11.0025 1.577 10.9996C1.65351 10.9966 1.72858 10.9779 1.79751 10.9445C1.86643 10.9112 1.92772 10.864 1.97752 10.8058L6.03308 6.75581L10.0831 10.8058C10.1894 10.8968 10.3261 10.9444 10.4659 10.939C10.6057 10.9336 10.7383 10.8756 10.8373 10.7767C10.9362 10.6777 10.9942 10.5451 10.9996 10.4053C11.005 10.2655 10.9574 10.1288 10.8664 10.0225L6.81641 5.97248Z"
                        fill="white"
                        stroke="white"
                        stroke-width="0.5"
                      />
                    </svg>
                  </span>
                </div>
              </div>
              <div className="popup-body">
                <div className="form-main">
                  <div className="form-flex">
                    <div className="form-inner-flx-100">
                      <div class="single-input">
                        <label for="">Vorname, Nachname</label>
                        <input type="number" placeholder="Vorname, Nachname" />
                      </div>
                    </div>
                    <div className="form-inner-flx-100">
                      <div class="single-input">
                        <label for="">Firmenname</label>
                        <input type="number" placeholder="Firmenname" />
                      </div>
                    </div>
                    <div className="form-inner-flx-100">
                      <div class="single-input">
                        <label for="">Informationen</label>
                        <textarea name="" id="" cols="30" rows="4" placeholder="Weitere Informationen"></textarea>
                      </div>
                    </div>
                  </div>
                  <div className="form-btn hme-popup-btn">
                    <Link to=""
                      className="btn primary-btn "
                      onClick={clickOnNext}
                    >Eintragen</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="overlay" onClick={() => handlePopup("pop_55")}></div>
        </div>
      </div>

    </>
  );
};

export default PopUpGuestOut;
