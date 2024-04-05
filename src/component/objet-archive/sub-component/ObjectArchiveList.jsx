import React from "react";
import { Link } from "react-router-dom";


const ObjectArchiveList = () => {
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
      <div className="card-hdr">
        <div className="card-title">
          <h3></h3>
        </div>
        <div className="card-filtr">
          <div className="fltr-inner">
            <div className="filter-main">
              <span>
                <svg
                  width="15"
                  height="14"
                  viewBox="0 0 15 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6.17192 13.6719C6.03103 13.6719 5.8959 13.6159 5.79627 13.5163C5.69664 13.4166 5.64067 13.2815 5.64067 13.1406V8.03266L0.715986 2.61656C0.522125 2.40293 0.39444 2.13763 0.348426 1.85285C0.302411 1.56806 0.340047 1.27605 0.456764 1.01224C0.573482 0.748429 0.764263 0.524168 1.00595 0.366675C1.24764 0.209182 1.52985 0.125227 1.81833 0.125H13.1818C13.4702 0.125227 13.7525 0.209182 13.9941 0.366675C14.2358 0.524168 14.4266 0.748429 14.5433 1.01224C14.66 1.27605 14.6977 1.56806 14.6517 1.85285C14.6057 2.13763 14.478 2.40293 14.2841 2.61656L9.35942 8.03266V11.0156C9.35937 11.0952 9.34145 11.1738 9.30696 11.2455C9.27248 11.3172 9.22233 11.3803 9.1602 11.43L6.50395 13.555C6.40978 13.6306 6.29267 13.6718 6.17192 13.6719ZM1.81833 1.1875C1.73566 1.18771 1.65483 1.21187 1.58561 1.25706C1.51638 1.30225 1.46175 1.36654 1.4283 1.44214C1.39486 1.51774 1.38404 1.60142 1.39716 1.68304C1.41028 1.76466 1.44678 1.84072 1.50224 1.90203L6.56505 7.48016C6.65179 7.57554 6.70088 7.69922 6.70317 7.82812V12.0356L8.29692 10.75V7.82812C8.29661 7.69555 8.34587 7.56764 8.43505 7.46953L13.4979 1.89141C13.55 1.82982 13.5837 1.75474 13.595 1.67483C13.6062 1.59493 13.5947 1.51346 13.5616 1.43984C13.5286 1.36623 13.4754 1.30347 13.4081 1.25881C13.3409 1.21416 13.2624 1.18944 13.1818 1.1875H1.81833Z"
                    fill="#0388A6"
                  />
                </svg>
              </span>
              <p>Filter</p>
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

                <input type="text" placeholder="Suche..." />
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
      </div>
      <div className="card">
        <div className="card-body">
          <div className="responsive-table">
            <table className="table table-row-dashed">
              <thead className="dashboard-thead">
                <tr>
                  <th className="w-75px text-center">
                    <div className="main-th-hdng">
                      <div className="main-inner-hdng">
                        <p>Cus No.</p>
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
                  <th className="w-225px text-center">
                    <div className="main-th-hdng">
                      <div className="main-inner-hdng">
                        <p>Customer Name</p>
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
                  <th className="w-225px text-center">
                    <div className="main-th-hdng">
                      <div className="main-inner-hdng">
                        <p>Object No.</p>
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
                  <th className="w-225px text-center">
                    <div className="main-th-hdng">
                      <div className="main-inner-hdng">
                        <p>Object Name</p>
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
                  <th className="w-225px text-center">
                    <div className="main-th-hdng">
                      <div className="main-inner-hdng">
                        <p>Postal Code</p>
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
                  <th className="w-225px text-center">
                    <div className="main-th-hdng">
                      <div className="main-inner-hdng">
                        <p>Location</p>
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
                  <th className="w-225px text-center">
                    <div className="main-th-hdng">
                      <div className="main-inner-hdng">
                        <p>Street</p>
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
                  <th className="w-225px text-center">
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
                  <td className="text-center">1</td>
                  <td className="text-start">fibres</td>
                  <td className="text-start">4</td>
                  <td className="text-start">fiber 4</td>
                  <td className="text-start">93309</td>
                  <td className="text-start">Kelheim</td>
                  <td className="text-start">Regesbruger Stras...</td>
                  <td className="text-center">
                    <div className="usrdetls-td ">
                      <a href="">
                        <div className="prd-descrp prd-descrpts">
                          <span className="d-block titl-view">

                            <svg width="7" height="7" viewBox="0 0 7 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <circle cx="3.5" cy="3.5" r="3.5" fill="#808080" />
                            </svg>
                          </span>
                          <p>Inactive</p>
                        </div>
                        <div className="drpdwn">
                          <span>
                            <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M1 1L5 5L9 1" stroke="#808080" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                          </span>
                        </div>
                      </a>
                      <div className="usrdetl-td-drpdwn">
                        <ul>
                          <li>
                            <Link to={""} className='usr-rcrvy'>
                              <span>
                              <svg width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0.833496 2.33325V7.33325H5.8335" stroke="#1E1E1E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M19.1665 15.6667V10.6667H14.1665" stroke="#1E1E1E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M17.0752 6.49998C16.6525 5.30564 15.9342 4.23782 14.9873 3.39616C14.0403 2.55451 12.8956 1.96645 11.6599 1.68686C10.4242 1.40727 9.13787 1.44527 7.92084 1.79729C6.70381 2.14932 5.59579 2.80391 4.70016 3.69998L0.833496 7.33331M19.1668 10.6666L15.3002 14.3C14.4045 15.1961 13.2965 15.8506 12.0795 16.2027C10.8625 16.5547 9.57609 16.5927 8.3404 16.3131C7.10472 16.0335 5.96 15.4455 5.01305 14.6038C4.06611 13.7621 3.3478 12.6943 2.92516 11.5" stroke="#1E1E1E" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
                              </span>
                              Recovery
                            </Link>
                          </li>
                          <li>
                            <Link to={""} className='usr-dlte ' active>
                              <span>
<svg width="18" height="20" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.5 5H3.16667H16.5" stroke="#1E1E1E" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M14.8332 5.00008V16.6667C14.8332 17.1088 14.6576 17.5327 14.345 17.8453C14.0325 18.1578 13.6085 18.3334 13.1665 18.3334H4.83317C4.39114 18.3334 3.96722 18.1578 3.65466 17.8453C3.3421 17.5327 3.1665 17.1088 3.1665 16.6667V5.00008M5.6665 5.00008V3.33341C5.6665 2.89139 5.8421 2.46746 6.15466 2.1549C6.46722 1.84234 6.89114 1.66675 7.33317 1.66675H10.6665C11.1085 1.66675 11.5325 1.84234 11.845 2.1549C12.1576 2.46746 12.3332 2.89139 12.3332 3.33341V5.00008" stroke="#1E1E1E" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M7.3335 9.16675V14.1667" stroke="#1E1E1E" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M10.6665 9.16675V14.1667" stroke="#1E1E1E" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
                              </span>
                              Delete
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr className="clr">
                  <td className="text-center">1</td>
                  <td className="text-start">fibres</td>
                  <td className="text-start">4</td>
                  <td className="text-start">fiber 4</td>
                  <td className="text-start">93309</td>
                  <td className="text-start">Kelheim</td>
                  <td className="text-start">Regesbruger Stras...</td>
                  <td className="text-center">
                    <div className="usrdetls-td ">
                      <a href="">
                        <div className="prd-descrp prd-descrpts">
                          <span className="d-block titl-view">

                            <svg width="7" height="7" viewBox="0 0 7 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <circle cx="3.5" cy="3.5" r="3.5" fill="#808080" />
                            </svg>
                          </span>
                          <p>Inactive</p>
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
                  <td className="text-center">1</td>
                  <td className="text-start">fibres</td>
                  <td className="text-start">4</td>
                  <td className="text-start">fiber 4</td>
                  <td className="text-start">93309</td>
                  <td className="text-start">Kelheim</td>
                  <td className="text-start">Regesbruger Stras...</td>
                  <td className="text-center">
                    <div className="usrdetls-td ">
                      <a href="">
                        <div className="prd-descrp prd-descrpts">
                          <span className="d-block titl-view">

                            <svg width="7" height="7" viewBox="0 0 7 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <circle cx="3.5" cy="3.5" r="3.5" fill="#808080" />
                            </svg>
                          </span>
                          <p>Inactive</p>
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
                  <td className="text-center">1</td>
                  <td className="text-start">fibres</td>
                  <td className="text-start">4</td>
                  <td className="text-start">fiber 4</td>
                  <td className="text-start">93309</td>
                  <td className="text-start">Kelheim</td>
                  <td className="text-start">Regesbruger Stras...</td>
                  <td className="text-center">
                    <div className="usrdetls-td ">
                      <a href="">
                        <div className="prd-descrp prd-descrpts">
                          <span className="d-block titl-view">

                            <svg width="7" height="7" viewBox="0 0 7 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <circle cx="3.5" cy="3.5" r="3.5" fill="#808080" />
                            </svg>
                          </span>
                          <p>Inactive</p>
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
                  <td className="text-center">1</td>
                  <td className="text-start">fibres</td>
                  <td className="text-start">4</td>
                  <td className="text-start">fiber 4</td>
                  <td className="text-start">93309</td>
                  <td className="text-start">Kelheim</td>
                  <td className="text-start">Regesbruger Stras...</td>
                  <td className="text-center">
                    <div className="usrdetls-td ">
                      <a href="">
                        <div className="prd-descrp prd-descrpts">
                          <span className="d-block titl-view">

                            <svg width="7" height="7" viewBox="0 0 7 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <circle cx="3.5" cy="3.5" r="3.5" fill="#808080" />
                            </svg>
                          </span>
                          <p>Inactive</p>
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
                  <td className="text-center">1</td>
                  <td className="text-start">fibres</td>
                  <td className="text-start">4</td>
                  <td className="text-start">fiber 4</td>
                  <td className="text-start">93309</td>
                  <td className="text-start">Kelheim</td>
                  <td className="text-start">Regesbruger Stras...</td>
                  <td className="text-center">
                    <div className="usrdetls-td ">
                      <a href="">
                        <div className="prd-descrp prd-descrpts">
                          <span className="d-block titl-view">

                            <svg width="7" height="7" viewBox="0 0 7 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <circle cx="3.5" cy="3.5" r="3.5" fill="#808080" />
                            </svg>
                          </span>
                          <p>Inactive</p>
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
                  <td className="text-center">1</td>
                  <td className="text-start">fibres</td>
                  <td className="text-start">4</td>
                  <td className="text-start">fiber 4</td>
                  <td className="text-start">93309</td>
                  <td className="text-start">Kelheim</td>
                  <td className="text-start">Regesbruger Stras...</td>
                  <td className="text-center">
                    <div className="usrdetls-td ">
                      <a href="">
                        <div className="prd-descrp prd-descrpts">
                          <span className="d-block titl-view">

                            <svg width="7" height="7" viewBox="0 0 7 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <circle cx="3.5" cy="3.5" r="3.5" fill="#808080" />
                            </svg>
                          </span>
                          <p>Inactive</p>
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
                  <td className="text-center">1</td>
                  <td className="text-start">fibres</td>
                  <td className="text-start">4</td>
                  <td className="text-start">fiber 4</td>
                  <td className="text-start">93309</td>
                  <td className="text-start">Kelheim</td>
                  <td className="text-start">Regesbruger Stras...</td>
                  <td className="text-center">
                    <div className="usrdetls-td ">
                      <a href="">
                        <div className="prd-descrp prd-descrpts">
                          <span className="d-block titl-view">

                            <svg width="7" height="7" viewBox="0 0 7 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <circle cx="3.5" cy="3.5" r="3.5" fill="#808080" />
                            </svg>
                          </span>
                          <p>Inactive</p>
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
                  <td className="text-center">1</td>
                  <td className="text-start">fibres</td>
                  <td className="text-start">4</td>
                  <td className="text-start">fiber 4</td>
                  <td className="text-start">93309</td>
                  <td className="text-start">Kelheim</td>
                  <td className="text-start">Regesbruger Stras...</td>
                  <td className="text-center">
                    <div className="usrdetls-td ">
                      <a href="">
                        <div className="prd-descrp prd-descrpts">
                          <span className="d-block titl-view">

                            <svg width="7" height="7" viewBox="0 0 7 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <circle cx="3.5" cy="3.5" r="3.5" fill="#808080" />
                            </svg>
                          </span>
                          <p>Inactive</p>
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

export default ObjectArchiveList;
