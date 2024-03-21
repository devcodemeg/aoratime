import React from "react";
const ResidentAbsentTable = ({ handlePopup }) => {
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
                  <th className="w-250px text-start">Name</th>
                  <th className="w-250px text-center">Abwesenheit von</th>
                  <th className="w-250px text-center">Abwesenheit bis</th>
                  <th className="w-100px text-center">Bewohner abgemeldet</th>
                  <th className="w-150px text-center">Ausgecheckt</th>
                  <th className="w-150px text-center">Eingecheckt</th>
                  <th className="w-250px text-start">Kommentar</th>
                  <th className="w-100px text-center"></th>
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
                      <td className="text-center">Montag 07.02.2024 12:14</td>
                      <td className="text-center">Montag 07.02.2024 12:14</td>
                      <td className="text-center">Ja/Nein</td>
                      <td className="text-center">
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
                      <td className="text-center">
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
          <div className="total-enter">
            <p>Gesamt 200 Einträge  </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ResidentAbsentTable;
