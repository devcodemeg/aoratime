import React, { useState } from "react";
import { Link } from "react-router-dom";
import PopUpUser from "./user-popup/PopupUser";

const UserManagementDataName = () => {


  const [showPopUpUser, setPopUpUser] = useState(false);
  const handlePopUpUser = () => {
    setPopUpUser((p) => !p);
  };

  const hotelData = [
    {
      hotelName: "Hotel A",
      paid: 1,
      status: "new",
    },
    {
      hotelName: "Hotel B",
      paid: 0,
      status: "new",
    },
    {
      hotelName: "Hotel C",
      paid: 1,
      status: "new",
    },
    {
      hotelName: "Hotel D",
      paid: 1,
      status: "new",
    },
    {
      hotelName: "Hotel E",
      paid: 0,
      status: "active",
    },
  ];

  const [seletedTwo, setSelectedTwo] = useState(null);

  const clickOnItemTwo = (index) => {
    if (index === seletedTwo) {
      setSelectedTwo(null);
    } else {
      setSelectedTwo(index);
    }
  };
  return (
    <>
      <div className="card-filtr fltr fltr-contnt-spacebtwn ">
        <div className="fltr-inner">
          <div className="filter-nams">
            <input type="text" placeholder="Objekt" />
          </div>
        </div>
        <div className="fltr-inner">
          <div className="fltrsrch-inputs">
            <label>
              <span className="search-icon">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9 17C13.4183 17 17 13.4183 17 9C17 4.58172 13.4183 1 9 1C4.58172 1 1 4.58172 1 9C1 13.4183 4.58172 17 9 17Z"
                    stroke="#35A0B8"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M19.0004 19L14.6504 14.65"
                    stroke="#35A0B8"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </span>
              <span className="search-close-icon">
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M13 1L1 13"
                    stroke="#ACACAC"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M1 1L13 13"
                    stroke="#ACACAC"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </span>
              <input type="text" placeholder="Search..." />
            </label>
          </div>
        </div>
        <div className="fltrsrch-mobl-icon">
          <span className="moblsrch-icon">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M13.8289 13.0043L9.84772 9.023C10.6189 8.07043 11.0832 6.86 11.0832 5.54168C11.0832 2.48618 8.59705 0 5.54159 0C2.48612 0 0 2.48615 0 5.54165C0 8.59715 2.48615 11.0833 5.54162 11.0833C6.85992 11.0833 8.07034 10.619 9.0229 9.84783L13.0041 13.8291C13.1179 13.9428 13.2672 14 13.4165 14C13.5659 14 13.7152 13.9428 13.8289 13.8291C14.057 13.601 14.057 13.2323 13.8289 13.0043ZM5.54162 9.91665C3.12897 9.91665 1.16666 7.95432 1.16666 5.54165C1.16666 3.12897 3.12897 1.16665 5.54162 1.16665C7.95426 1.16665 9.91657 3.12897 9.91657 5.54165C9.91657 7.95432 7.95424 9.91665 5.54162 9.91665Z" fill="#808184" />
            </svg>
          </span>
        </div>
        {/* <div className="fltr-inner">
            <div className="monthly-fltr select-box">
              <Select
                options={optionsMonthlyType}
                placeholder={<div>Status</div>}
              />
            </div>
          </div> */}
      </div>
      <div className="card hme-crd">
        <div className="card-body">
          <div className="responsive-table big-screen-table">
            <table className="table table-row-dashed">
              <thead className="dashboard-thead">
                <tr>
                  <th className="w-200px text-start">Obj Nr.</th>
                  <th className="w-250px text-start">Obj Name</th>
                  <th className="w-250px text-start">PLZ</th>
                  <th className="w-250px text-start">Ort</th>
                  <th className="w-250px text-start">Straße</th>
                  <th className="w-150px text-start">
                    <div className="main-th-hdng">
                      <div className="main-inner-hdng">
                        <p>Status</p>
                      </div>
                      <div className="main-up-down-arow">
                        <span>
                          <svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7 4L4 1L1 4" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M1 8L4 11L7 8" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                          </svg>
                        </span>
                      </div>
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody className="">
                <tr className="clr">
                  <td className="text-start">1</td>
                  <td className="text-start">Test</td>
                  <td className="text-start">Test</td>
                  <td className="text-start">Test</td>
                  <td className="text-start">Test</td>
                  <td className="text-start">
                    <div className="usrdetls-td ">
                      <a>
                        <div className="prd-descrp prd-descrpt">
                          <span className="d-block titl-view">
                            <svg width="7" height="7" viewBox="0 0 7 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <circle cx="3.5" cy="3.5" r="3.5" fill="#219653" />
                            </svg>
                          </span>
                          <p>Aktiv</p>
                        </div>
                        <div className="drpdwn">
                          <span>
                            <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M1 1L5 5L9 1" stroke="#808080" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                          </span>
                        </div>
                      </a>
                    </div>
                  </td>
                </tr>
                <tr className="clr">
                  <td className="text-start">2</td>
                  <td className="text-start">Test</td>
                  <td className="text-start">Test</td>
                  <td className="text-start">Test</td>
                  <td className="text-start">Test</td>
                  <td className="text-start">
                    <div className="usrdetls-td ">
                      <a >
                        <div className="prd-descrp prd-descrpt">
                          <span className="d-block titl-view">
                            <svg width="7" height="7" viewBox="0 0 7 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <circle cx="3.5" cy="3.5" r="3.5" fill="#219653" />
                            </svg>
                          </span>
                          <p>Aktiv</p>
                        </div>
                        <div className="drpdwn">
                          <span>
                            <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M1 1L5 5L9 1" stroke="#808080" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                          </span>
                        </div>
                      </a>
                    </div>
                  </td>
                </tr>
                <tr className="clr">
                  <td className="text-start">3</td>
                  <td className="text-start">Test</td>
                  <td className="text-start">Test</td>
                  <td className="text-start">Test</td>
                  <td className="text-start">Test</td>
                  <td className="text-start">
                    <div className="usrdetls-td ">
                      <a >
                        <div className="prd-descrp prd-descrpt">
                          <span className="d-block titl-view">
                            <svg width="7" height="7" viewBox="0 0 7 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <circle cx="3.5" cy="3.5" r="3.5" fill="#219653" />
                            </svg>
                          </span>
                          <p>Aktiv</p>
                        </div>
                        <div className="drpdwn">
                          <span>
                            <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M1 1L5 5L9 1" stroke="#808080" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                          </span>
                        </div>
                      </a>
                    </div>
                  </td>
                </tr>
                <tr className="clr">
                  <td className="text-start">4</td>
                  <td className="text-start">Test</td>
                  <td className="text-start">Test</td>
                  <td className="text-start">Test</td>
                  <td className="text-start">Test</td>
                  <td className="text-start">
                    <div className="usrdetls-td ">
                      <a >
                        <div className="prd-descrp prd-descrpt">
                          <span className="d-block titl-view">
                            <svg width="7" height="7" viewBox="0 0 7 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <circle cx="3.5" cy="3.5" r="3.5" fill="#219653" />
                            </svg>
                          </span>
                          <p>Aktiv</p>
                        </div>
                        <div className="drpdwn">
                          <span>
                            <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M1 1L5 5L9 1" stroke="#808080" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                          </span>
                        </div>
                      </a>
                    </div>
                  </td>
                </tr>
                <tr className="clr">
                  <td className="text-start">5</td>
                  <td className="text-start">Test</td>
                  <td className="text-start">Test</td>
                  <td className="text-start">Test</td>
                  <td className="text-start">Test</td>
                  <td className="text-start">
                    <div className="usrdetls-td ">
                      <a >
                        <div className="prd-descrp prd-descrpt">
                          <span className="d-block titl-view">
                            <svg width="7" height="7" viewBox="0 0 7 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <circle cx="3.5" cy="3.5" r="3.5" fill="#219653" />
                            </svg>
                          </span>
                          <p>Aktiv</p>
                        </div>
                        <div className="drpdwn">
                          <span>
                            <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M1 1L5 5L9 1" stroke="#808080" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                          </span>
                        </div>
                      </a>
                    </div>
                  </td>
                </tr>
                <tr className="clr">
                  <td className="text-start">6</td>
                  <td className="text-start">Test</td>
                  <td className="text-start">Test</td>
                  <td className="text-start">Test</td>
                  <td className="text-start">Test</td>
                  <td className="text-start">
                    <div className="usrdetls-td ">
                      <a >
                        <div className="prd-descrp prd-descrpt">
                          <span className="d-block titl-view">
                            <svg width="7" height="7" viewBox="0 0 7 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <circle cx="3.5" cy="3.5" r="3.5" fill="#219653" />
                            </svg>
                          </span>
                          <p>Aktiv</p>
                        </div>
                        <div className="drpdwn">
                          <span>
                            <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M1 1L5 5L9 1" stroke="#808080" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                          </span>
                        </div>
                      </a>
                    </div>
                  </td>
                </tr>
                <tr className="clr">
                  <td className="text-start">7</td>
                  <td className="text-start">Test</td>
                  <td className="text-start">Test</td>
                  <td className="text-start">Test</td>
                  <td className="text-start">Test</td>
                  <td className="text-start">
                    <div className="usrdetls-td ">
                      <a>
                        <div className="prd-descrp prd-descrpt">
                          <span className="d-block titl-view">
                            <svg width="7" height="7" viewBox="0 0 7 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <circle cx="3.5" cy="3.5" r="3.5" fill="#219653" />
                            </svg>
                          </span>
                          <p>Aktiv</p>
                        </div>
                        <div className="drpdwn">
                          <span>
                            <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M1 1L5 5L9 1" stroke="#808080" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                          </span>
                        </div>
                      </a>
                    </div>
                  </td>
                </tr>
                <tr className="clr">
                  <td className="text-start">8</td>
                  <td className="text-start">Test</td>
                  <td className="text-start">Test</td>
                  <td className="text-start">Test</td>
                  <td className="text-start">Test</td>
                  <td className="text-start">
                    <div className="usrdetls-td ">
                      <a >
                        <div className="prd-descrp prd-descrpt">
                          <span className="d-block titl-view">
                            <svg width="7" height="7" viewBox="0 0 7 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <circle cx="3.5" cy="3.5" r="3.5" fill="#219653" />
                            </svg>
                          </span>
                          <p>Aktiv</p>
                        </div>
                        <div className="drpdwn">
                          <span>
                            <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M1 1L5 5L9 1" stroke="#808080" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                          </span>
                        </div>
                      </a>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>


          {/* start mobile table view */}
          <div className="mobiltable-main">
            <div className="mobile-table-head">
              <ul>
                <li>
                  <h5>
                    Obj Nr.
                  </h5>
                </li>
                <li>
                  <h5>
                    Obj Name
                  </h5>
                </li>
              </ul>
            </div>
            <div className="mobile-table-body">
              <ul>
                {Array(6)
                  .fill("")
                  .map((item, idx) => {
                    return (
                      <li key={idx}>
                        <div className="mobile-td">
                          <div
                            className="mobile-data-top"
                            onClick={() => clickOnItemTwo(idx)}
                          >
                            <div className="mobile-datatp-inner">
                              <p>1</p>
                            </div>
                            <div className="mobile-datatp-inner">
                              <p>Test</p>
                            </div>
                          </div>
                          {seletedTwo === idx && (
                            <div className="mobile-data-btm">
                              <div className="mobile-databtm-dtl">
                                <p className="para-bold">
                                  Obj Name:
                                </p>
                                <p>Test</p>
                              </div>
                              <div className="mobile-databtm-dtl">
                                <p className="para-bold">
                                  PLZ:
                                </p>
                                <p>Test</p>
                              </div>
                              <div className="mobile-databtm-dtl">
                                <p className="para-bold">
                                  Straße::
                                </p>
                                <p>Test</p>
                              </div>
                              <div className="mobile-databtm-dtl mobile-databtm-aligncntr">
                                <p className="para-bold">
                                  status:
                                </p>
                                <div class="usrdetls-td "><a href=""><div class="prd-descrp prd-descrpt"><span class="d-block titl-view"><svg width="7" height="7" viewBox="0 0 7 7" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="3.5" cy="3.5" r="3.5" fill="#219653"></circle></svg></span><p>Aktiv</p></div><div class="drpdwn"><span><svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 1L5 5L9 1" stroke="#808080" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg></span></div></a></div>
                              </div>
                            </div>
                          )}
                        </div>
                      </li>
                    );
                  })}
              </ul>
            </div>
          </div>
          {/* end mobile table view */}

        </div>
      </div>
      <div className="btns-evnts btn-evnt">
        <div className="btns-evnts-inner">
          <button
            onClick={handlePopUpUser}
            className="btn ahcv-btn abb-btn"
          >
            Abbrechen
          </button>
        </div>
        <div className="btns-evnts-inner">
          <button className="btn primary-btn btn-2 spe-btn" onClick={handlePopUpUser}>
            Speichern
          </button>
        </div>
      </div>

      {showPopUpUser && <PopUpUser handlePopup={handlePopUpUser} />}
    </>
  );
};

export default UserManagementDataName;
