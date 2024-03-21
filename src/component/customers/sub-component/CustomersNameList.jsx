import React from "react";
import { Link } from "react-router-dom";

const CustomersNameList = ({ handlePopup }) => {
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
  return (
    <>
       <div className="card-filtr fltr">
          <div className="fltr-inner">
            <div className="filter-nam">
              <p>Customers</p>
            </div>
          </div>
          <div className="fltr-inner">
            <div className="fltrsrch-input">
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

          {/* <div className="fltr-inner">
            <div className="monthly-fltr select-box">
              <Select
                options={optionsMonthlyType}
                placeholder={<div>Status</div>}
              />
            </div>
          </div> */}
        </div>
        <div className="card">
        <div className="card-body">
          <div className="responsive-table">
            <table className="table table-row-dashed">
              <thead className="dashboard-thead">
                <tr>
                  <th className="w-50px text-center">Customer No.</th>
                  <th className="w-50px text-center">Kd Name</th>
                  <th className="w-100px text-center">Status</th>
                </tr>
              </thead>
              <tbody className="">

                <tr className="clr">
                  <td className="text-center">1</td>
                  <td className="text-center">Norma</td>
                  <td className="text-center">
                    <div className="usrdetls-td ">
                      <a href="">
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
                  <td className="text-center">2</td>
                  <td className="text-center">Test</td>
                  <td className="text-center">
                    <div className="usrdetls-td ">
                      <a href="">
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
                  <td className="text-center">3</td>
                  <td className="text-center">Phone</td>
                  <td className="text-center">
                    <div className="usrdetls-td ">
                      <a href="">
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
                  <td className="text-center">4</td>
                  <td className="text-center">Edeka</td>
                  <td className="text-center">
                    <div className="usrdetls-td ">
                      <a href="">
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
                  <td className="text-center">5</td>
                  <td className="text-center">Test</td>
                  <td className="text-center">
                    <div className="usrdetls-td ">
                      <a href="">
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
                  <td className="text-center">6</td>
                  <td className="text-center">ECE</td>
                  <td className="text-center">
                    <div className="usrdetls-td ">
                      <a href="">
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
                  <td className="text-center">7</td>
                  <td className="text-center">BKH</td>
                  <td className="text-center">
                    <div className="usrdetls-td ">
                      <a href="">
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
                  <td className="text-center">8</td>
                  <td className="text-center">Fibres</td>
                  <td className="text-center">
                    <div className="usrdetls-td ">
                      <a href="">
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
        </div>
      </div>
    </>
  );
};

export default CustomersNameList;
