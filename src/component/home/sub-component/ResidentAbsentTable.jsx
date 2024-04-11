import React, { useState } from "react";
const ResidentAbsentTable = ({ handlePopup }) => {

  const [seletedTwo, setSelectedTwo] = useState(null);

  const clickOnItemTwo = (index) => {
    if (index === seletedTwo) {
      setSelectedTwo(null);
    } else {
      setSelectedTwo(index);
    }
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
  return (
    <>
      <div className="card-hdr">
        <div className="card-title">
          <h3>Bewohner Abwesend</h3>
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
        </div>
      </div>
      <div className="card home-table">
        <div className="card-body">
          <div className="responsive-table big-screen-table">
            <table className="table table-row-dashed">
              <thead className="dashboard-thead">
                <tr>
                  <th className="w-250px text-start">
                    <div className="main-th-hdng">
                      <div className="main-inner-hdng">
                        <p>Name</p>
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
                  <th className="w-250px text-start">
                    <div className="main-th-hdng">
                      <div className="main-inner-hdng">
                        <p>Abwesenheit von</p>
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
                  <th className="w-250px text-start">
                    <div className="main-th-hdng">
                      <div className="main-inner-hdng">
                        <p>Abwesenheit bis</p>
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
                  <th className="w-225px text-start">
                    <div className="main-th-hdng">
                      <div className="main-inner-hdng">
                        <p>Bewohner abgemeldet</p>
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
                  <th className="w-150px text-start">
                    <div className="main-th-hdng">
                      <div className="main-inner-hdng">
                        <p>Ausgecheckt</p>
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
                  <th className="w-150px text-start">
                    <div className="main-th-hdng">
                      <div className="main-inner-hdng">
                        <p>Eingecheckt</p>
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
                  <th className="w-250px text-start">
                    <div className="main-th-hdng">
                      <div className="main-inner-hdng">
                        <p>Kommentar</p>
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
                  <th className="w-250px text-start"></th>
                </tr>
              </thead>
              <tbody className="">
                {hotelData.map((item, idx) => {
                  return (
                    <tr key={item.orderId} className="">
                      <td className="text-start">
                        <div className="usrdtls-td">
                          <div className="prd-descrp">
                            <span className="d-block titl-view">
                              Nguyen, Shane
                            </span>
                          </div>
                        </div>
                      </td>
                      <td className="text-start">Montag 07.02.2024 12:14</td>
                      <td className="text-start">Montag 07.02.2024 12:14</td>
                      <td className="text-center">Ja/Nein</td>
                      <td className="text-start">
                        <div className="dumydata-flx">
                          <p>Martin Stein</p>
                          <span className="tblnoti-icon">
                            <svg
                              width="14"
                              height="14"
                              viewBox="0 0 14 14"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M7.4375 6.41669C7.4375 6.17507 7.24162 5.97919 7 5.97919C6.75838 5.97919 6.5625 6.17507 6.5625 6.41669V9.91669C6.5625 10.1583 6.75838 10.3542 7 10.3542C7.24162 10.3542 7.4375 10.1583 7.4375 9.91669V6.41669Z"
                                fill="#0388A6"
                              />
                              <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M7.00008 0.729187C3.5368 0.729187 0.729248 3.53674 0.729248 7.00002C0.729248 10.4633 3.5368 13.2709 7.00008 13.2709C10.4634 13.2709 13.2709 10.4633 13.2709 7.00002C13.2709 3.53674 10.4634 0.729187 7.00008 0.729187ZM1.60425 7.00002C1.60425 4.01999 4.02005 1.60419 7.00008 1.60419C9.9801 1.60419 12.3959 4.01999 12.3959 7.00002C12.3959 9.98004 9.9801 12.3959 7.00008 12.3959C4.02005 12.3959 1.60425 9.98004 1.60425 7.00002Z"
                                fill="#0388A6"
                              />
                              <path
                                d="M7.58341 4.66671C7.58341 4.98887 7.32226 5.25004 7.00008 5.25004C6.67791 5.25004 6.41675 4.98887 6.41675 4.66671C6.41675 4.34454 6.67791 4.08337 7.00008 4.08337C7.32226 4.08337 7.58341 4.34454 7.58341 4.66671Z"
                                fill="#0388A6"
                              />
                            </svg>
                          </span>
                        </div>
                      </td>
                      <td className="text-start">
                        <div className="dumydata-flx">
                          <p>Georg Rubin</p>
                          <span className="tblnoti-icon">
                            <svg
                              width="14"
                              height="14"
                              viewBox="0 0 14 14"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M7.4375 6.41669C7.4375 6.17507 7.24162 5.97919 7 5.97919C6.75838 5.97919 6.5625 6.17507 6.5625 6.41669V9.91669C6.5625 10.1583 6.75838 10.3542 7 10.3542C7.24162 10.3542 7.4375 10.1583 7.4375 9.91669V6.41669Z"
                                fill="#0388A6"
                              />
                              <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M7.00008 0.729187C3.5368 0.729187 0.729248 3.53674 0.729248 7.00002C0.729248 10.4633 3.5368 13.2709 7.00008 13.2709C10.4634 13.2709 13.2709 10.4633 13.2709 7.00002C13.2709 3.53674 10.4634 0.729187 7.00008 0.729187ZM1.60425 7.00002C1.60425 4.01999 4.02005 1.60419 7.00008 1.60419C9.9801 1.60419 12.3959 4.01999 12.3959 7.00002C12.3959 9.98004 9.9801 12.3959 7.00008 12.3959C4.02005 12.3959 1.60425 9.98004 1.60425 7.00002Z"
                                fill="#0388A6"
                              />
                              <path
                                d="M7.58341 4.66671C7.58341 4.98887 7.32226 5.25004 7.00008 5.25004C6.67791 5.25004 6.41675 4.98887 6.41675 4.66671C6.41675 4.34454 6.67791 4.08337 7.00008 4.08337C7.32226 4.08337 7.58341 4.34454 7.58341 4.66671Z"
                                fill="#0388A6"
                              />
                            </svg>
                            <div class="tooltip">
                              <span class="tooltiptext">07.02.2024 - 12:14</span>
                            </div>
                          </span>
                        </div>

                      </td>
                      <td className="text-start">
                        <div className="dumydata-flx">
                          <p>Lorem Ipsum a du my text for the industry</p>
                          <span className="tblnoti-icon">
                            <svg
                              width="14"
                              height="14"
                              viewBox="0 0 14 14"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M7.4375 6.41669C7.4375 6.17507 7.24162 5.97919 7 5.97919C6.75838 5.97919 6.5625 6.17507 6.5625 6.41669V9.91669C6.5625 10.1583 6.75838 10.3542 7 10.3542C7.24162 10.3542 7.4375 10.1583 7.4375 9.91669V6.41669Z"
                                fill="#0388A6"
                              />
                              <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M7.00008 0.729187C3.5368 0.729187 0.729248 3.53674 0.729248 7.00002C0.729248 10.4633 3.5368 13.2709 7.00008 13.2709C10.4634 13.2709 13.2709 10.4633 13.2709 7.00002C13.2709 3.53674 10.4634 0.729187 7.00008 0.729187ZM1.60425 7.00002C1.60425 4.01999 4.02005 1.60419 7.00008 1.60419C9.9801 1.60419 12.3959 4.01999 12.3959 7.00002C12.3959 9.98004 9.9801 12.3959 7.00008 12.3959C4.02005 12.3959 1.60425 9.98004 1.60425 7.00002Z"
                                fill="#0388A6"
                              />
                              <path
                                d="M7.58341 4.66671C7.58341 4.98887 7.32226 5.25004 7.00008 5.25004C6.67791 5.25004 6.41675 4.98887 6.41675 4.66671C6.41675 4.34454 6.67791 4.08337 7.00008 4.08337C7.32226 4.08337 7.58341 4.34454 7.58341 4.66671Z"
                                fill="#0388A6"
                              />
                            </svg>
                          </span>
                        </div>
                      </td>
                      <td className="text-right">
                        <div className="action-prmry-btn">
                          <a className="btn primary-btn " onClick={() => handlePopup("pop_33")}>
                            Einchecken
                          </a>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          {/* start mobile table view */}
          <div className="mobiltable-main mobllrgtbl-main">
            <div className="mobile-table-head">
              <ul>
                <li>
                  <h5>Name
                    <span><svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7 4L4 1L1 4" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M1 8L4 11L7 8" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg></span>
                  </h5>
                </li>
                <li>
                  <h5>Abwesenheit von
                    <span><svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7 4L4 1L1 4" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M1 8L4 11L7 8" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg></span>
                  </h5>
                </li>
                <li>
                  <h5>Abwesenheit bis
                    <span><svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7 4L4 1L1 4" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M1 8L4 11L7 8" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg></span>
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
                              <p>Nguyen, Shane</p>
                            </div>
                            <div className="mobile-datatp-inner">
                              <p>Mo 07.02.2024 16:00</p>
                            </div>
                            <div className="mobile-datatp-inner">
                              <p>Mo 07.02.2024 16:00</p>
                            </div>
                          </div>
                          {seletedTwo === idx && (
                            <div className="mobile-data-btm">
                              <div className="mobile-databtm-dtl">
                                <p className="para-bold">
                                  Abwesenheit bis:
                                </p>
                                <p>Mo 07.02.2024 16:00</p>
                              </div>
                              <div className="mobile-databtm-dtl">
                                <p className="para-bold">
                                  Bewohner abgemeldet:
                                </p>
                                <p>Montag 07.02.2024 16:00</p>
                              </div>
                              <div className="mobile-databtm-dtl">
                                <p className="para-bold">Ausgecheckt:</p>
                                <p>
                                  Martin Stein
                                  <span className="notation-symbl">
                                    <svg
                                      width="14"
                                      height="14"
                                      viewBox="0 0 14 14"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        d="M7.4375 6.4165C7.4375 6.17489 7.24162 5.979 7 5.979C6.75838 5.979 6.5625 6.17489 6.5625 6.4165V9.9165C6.5625 10.1581 6.75838 10.354 7 10.354C7.24162 10.354 7.4375 10.1581 7.4375 9.9165V6.4165Z"
                                        fill="#0388A6"
                                      />
                                      <path
                                        fill-rule="evenodd"
                                        clip-rule="evenodd"
                                        d="M6.99996 0.729004C3.53667 0.729004 0.729126 3.53655 0.729126 6.99984C0.729126 10.4631 3.53667 13.2707 6.99996 13.2707C10.4633 13.2707 13.2708 10.4631 13.2708 6.99984C13.2708 3.53655 10.4633 0.729004 6.99996 0.729004ZM1.60413 6.99984C1.60413 4.0198 4.01993 1.604 6.99996 1.604C9.97998 1.604 12.3958 4.0198 12.3958 6.99984C12.3958 9.97985 9.97998 12.3957 6.99996 12.3957C4.01993 12.3957 1.60413 9.97985 1.60413 6.99984Z"
                                        fill="#0388A6"
                                      />
                                      <path
                                        d="M7.58329 4.66634C7.58329 4.9885 7.32213 5.24967 6.99996 5.24967C6.67778 5.24967 6.41663 4.9885 6.41663 4.66634C6.41663 4.34418 6.67778 4.08301 6.99996 4.08301C7.32213 4.08301 7.58329 4.34418 7.58329 4.66634Z"
                                        fill="#0388A6"
                                      />
                                    </svg>
                                  </span>
                                </p>
                              </div>
                              <div className="mobile-databtm-dtl">
                                <p className="para-bold">Eingecheckt:</p>
                                <p>
                                  Georg Rubin
                                  <span className="notation-symbl">
                                    <svg
                                      width="14"
                                      height="14"
                                      viewBox="0 0 14 14"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        d="M7.4375 6.4165C7.4375 6.17489 7.24162 5.979 7 5.979C6.75838 5.979 6.5625 6.17489 6.5625 6.4165V9.9165C6.5625 10.1581 6.75838 10.354 7 10.354C7.24162 10.354 7.4375 10.1581 7.4375 9.9165V6.4165Z"
                                        fill="#0388A6"
                                      />
                                      <path
                                        fill-rule="evenodd"
                                        clip-rule="evenodd"
                                        d="M6.99996 0.729004C3.53667 0.729004 0.729126 3.53655 0.729126 6.99984C0.729126 10.4631 3.53667 13.2707 6.99996 13.2707C10.4633 13.2707 13.2708 10.4631 13.2708 6.99984C13.2708 3.53655 10.4633 0.729004 6.99996 0.729004ZM1.60413 6.99984C1.60413 4.0198 4.01993 1.604 6.99996 1.604C9.97998 1.604 12.3958 4.0198 12.3958 6.99984C12.3958 9.97985 9.97998 12.3957 6.99996 12.3957C4.01993 12.3957 1.60413 9.97985 1.60413 6.99984Z"
                                        fill="#0388A6"
                                      />
                                      <path
                                        d="M7.58329 4.66634C7.58329 4.9885 7.32213 5.24967 6.99996 5.24967C6.67778 5.24967 6.41663 4.9885 6.41663 4.66634C6.41663 4.34418 6.67778 4.08301 6.99996 4.08301C7.32213 4.08301 7.58329 4.34418 7.58329 4.66634Z"
                                        fill="#0388A6"
                                      />
                                    </svg>
                                  </span>
                                </p>
                              </div>
                              <div className="mobile-databtm-dtl">
                                <p className="para-bold">Kommentar:</p>
                                <p>
                                  Lorem Ipsum a dummy text for the industry
                                  <span className="notation-symbl">
                                    <svg
                                      width="14"
                                      height="14"
                                      viewBox="0 0 14 14"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        d="M7.4375 6.4165C7.4375 6.17489 7.24162 5.979 7 5.979C6.75838 5.979 6.5625 6.17489 6.5625 6.4165V9.9165C6.5625 10.1581 6.75838 10.354 7 10.354C7.24162 10.354 7.4375 10.1581 7.4375 9.9165V6.4165Z"
                                        fill="#0388A6"
                                      />
                                      <path
                                        fill-rule="evenodd"
                                        clip-rule="evenodd"
                                        d="M6.99996 0.729004C3.53667 0.729004 0.729126 3.53655 0.729126 6.99984C0.729126 10.4631 3.53667 13.2707 6.99996 13.2707C10.4633 13.2707 13.2708 10.4631 13.2708 6.99984C13.2708 3.53655 10.4633 0.729004 6.99996 0.729004ZM1.60413 6.99984C1.60413 4.0198 4.01993 1.604 6.99996 1.604C9.97998 1.604 12.3958 4.0198 12.3958 6.99984C12.3958 9.97985 9.97998 12.3957 6.99996 12.3957C4.01993 12.3957 1.60413 9.97985 1.60413 6.99984Z"
                                        fill="#0388A6"
                                      />
                                      <path
                                        d="M7.58329 4.66634C7.58329 4.9885 7.32213 5.24967 6.99996 5.24967C6.67778 5.24967 6.41663 4.9885 6.41663 4.66634C6.41663 4.34418 6.67778 4.08301 6.99996 4.08301C7.32213 4.08301 7.58329 4.34418 7.58329 4.66634Z"
                                        fill="#0388A6"
                                      />
                                    </svg>
                                  </span>
                                </p>
                              </div>
                              <div className="mobile-databtm-btn">
                                <button className="btn primary-btn" onClick={() => handlePopup("pop_33")}>
                                  Einchecken
                                </button>
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


          <div className="total-enter bigscrn-ttlentry">
            <p>Gesamt 200 Einträge  </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ResidentAbsentTable;
