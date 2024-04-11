import { DatePicker } from "keep-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Select from "react-select";
const PopUpResidents = ({ handlePopup }) => {
  const optionsIdType = [
    { value: "Adhar Card", label: "Adhar Card" },
    { value: "License", label: "License" },
  ];
  const [Date, setDate] = useState();
  return (
    <>
      <div className="main-popup location-modal">
        <div className="lm-outer">
          <div className="lm-inner">
            <div className="popup-inner popup-inner-sign">
              <div className="popup-header">
                <div class="popup-heading">
                  <h3>Bewohner auschecken</h3>
                </div>
                <div className="close-modal">
                  <span onClick={() => handlePopup("pop_11")}>
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
                        <label for=""> Vorname, Nachname</label>
                        <div className="select-box">
                          <Select
                            options={optionsIdType}
                            placeholder={<div>Vorname, Nachname</div>}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="form-inner-flx">
                      <div class="single-input">
                        <label for="">Abwesenheit bis:</label>
                        <div className="datepicker-input datepicker">
                          <DatePicker singleDate={setDate} placeholder="DD/MM/YY">
                            <DatePicker.SingleDate />
                          </DatePicker>
                        </div>
                        <div className="clear-btn">
                          <span><svg
                            width="8"
                            height="8"
                            viewBox="0 0 5 5"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          ><path
                              d="M2.48723 2.17491L3.98723 0.67491C4.02094 0.635547 4.03856 0.584914 4.03656 0.533129C4.03456 0.481344 4.01309 0.432221 3.97645 0.395576C3.9398 0.358931 3.89068 0.337463 3.83889 0.335463C3.78711 0.333463 3.73647 0.351077 3.69711 0.384786L2.19711 1.88479L0.697111 0.382729C0.657749 0.349019 0.607116 0.331405 0.555331 0.333405C0.503546 0.335406 0.454423 0.356873 0.417778 0.393518C0.381133 0.430163 0.359665 0.479286 0.357665 0.531071C0.355664 0.582857 0.373279 0.63349 0.406988 0.672852L1.90699 2.17491L0.40493 3.67491C0.383391 3.69336 0.365897 3.71605 0.353547 3.74158C0.341196 3.76711 0.334256 3.79491 0.333161 3.82325C0.332067 3.85159 0.336841 3.87985 0.347186 3.90625C0.357531 3.93266 0.373222 3.95664 0.393274 3.97669C0.413326 3.99674 0.437307 4.01243 0.463712 4.02278C0.490116 4.03312 0.518374 4.0379 0.546711 4.0368C0.575048 4.03571 0.602853 4.02877 0.628381 4.01642C0.653909 4.00407 0.676608 3.98657 0.695054 3.96503L2.19711 2.46503L3.69711 3.96503C3.73647 3.99874 3.78711 4.01636 3.83889 4.01436C3.89068 4.01236 3.9398 3.99089 3.97645 3.95424C4.01309 3.9176 4.03456 3.86848 4.03656 3.81669C4.03856 3.7649 4.02094 3.71427 3.98723 3.67491L2.48723 2.17491Z"
                              fill="white"
                              stroke="white"
                              stroke-width="0.5"
                            /></svg></span>Clear</div>
                      </div>
                    </div>
                    <div className="form-inner-flx">
                      <label for="">Uhrzeit bis:</label>
                      <div className="single-input">
                        <input type="time" />
                      </div>
                      <div className="clear-btn">
                        <span>
                          <svg
                            width="8"
                            height="8"
                            viewBox="0 0 5 5"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M2.48723 2.17491L3.98723 0.67491C4.02094 0.635547 4.03856 0.584914 4.03656 0.533129C4.03456 0.481344 4.01309 0.432221 3.97645 0.395576C3.9398 0.358931 3.89068 0.337463 3.83889 0.335463C3.78711 0.333463 3.73647 0.351077 3.69711 0.384786L2.19711 1.88479L0.697111 0.382729C0.657749 0.349019 0.607116 0.331405 0.555331 0.333405C0.503546 0.335406 0.454423 0.356873 0.417778 0.393518C0.381133 0.430163 0.359665 0.479286 0.357665 0.531071C0.355664 0.582857 0.373279 0.63349 0.406988 0.672852L1.90699 2.17491L0.40493 3.67491C0.383391 3.69336 0.365897 3.71605 0.353547 3.74158C0.341196 3.76711 0.334256 3.79491 0.333161 3.82325C0.332067 3.85159 0.336841 3.87985 0.347186 3.90625C0.357531 3.93266 0.373222 3.95664 0.393274 3.97669C0.413326 3.99674 0.437307 4.01243 0.463712 4.02278C0.490116 4.03312 0.518374 4.0379 0.546711 4.0368C0.575048 4.03571 0.602853 4.02877 0.628381 4.01642C0.653909 4.00407 0.676608 3.98657 0.695054 3.96503L2.19711 2.46503L3.69711 3.96503C3.73647 3.99874 3.78711 4.01636 3.83889 4.01436C3.89068 4.01236 3.9398 3.99089 3.97645 3.95424C4.01309 3.9176 4.03456 3.86848 4.03656 3.81669C4.03856 3.7649 4.02094 3.71427 3.98723 3.67491L2.48723 2.17491Z"
                              fill="white"
                              stroke="white"
                              stroke-width="0.5"
                            />
                          </svg>
                        </span>Clear</div>
                    </div>
                    <div className="form-inner-flx-100">
                      <div class="single-input">
                        <label for="">Bewohner hat sich abgemeldet?</label>
                      </div>
                      <div class="radio-btn">
                        <div class="rdobx-main">
                          <label>
                            <input type="radio" name="bewohner" checked/>
                            <span>
                              <em></em>Ja
                            </span>
                          </label>
                        </div>
                        <div class="rdobx-main">
                          <label>
                            <input type="radio" name="bewohner" />
                            <span>
                              <em></em>Nein
                            </span>
                          </label>
                        </div>
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
                      onClick={() => handlePopup("pop_11")}
                    >Eintragen</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="overlay" onClick={() => handlePopup("pop_11")}></div>
        </div>
      </div>
    </>
  );
};

export default PopUpResidents;
