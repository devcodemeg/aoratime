import React from "react";


const CreateResidentArchiveList  = () => {
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
      <div className="card hme-crd">
        <div className="card-body">
          <div className="responsive-table">
            <table className="table table-row-dashed">
              <thead className="dashboard-thead">
                <tr>
                  <th className="w-200px text-center">
                    <div className="main-th-hdng">
                      <div className="main-inner-hdng">
                        <p> Vorname, Name</p>
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
                  <th className="w-350px text-center">
                    <div className="main-th-hdng">
                      <div className="main-inner-hdng">
                        <p>Staatsangehörigkeit</p>
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
                        <p>Einzug in Unterkunft</p>
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
                  <th className="w-250px text-center">
                    <div className="main-th-hdng">
                      <div className="main-inner-hdng">
                        <p>Zimmer Nummer</p>
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
                  <th className="w-250px text-center">
                    <div className="main-th-hdng">
                      <div className="main-inner-hdng">
                        <p>Created by</p>
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
                  <th className="w-300px text-center">
                    <div className="main-th-hdng">
                      <div className="main-inner-hdng">
                        <p>Created on</p>
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
                  <th className="w-300px text-center">
                    <div className="main-th-hdng">
                      <div className="main-inner-hdng">
                        <p>Deleted by</p>
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
                  <th className="w-200px text-center">
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
                    <tr  className="clr">
                      <td className="text-start">Alexander Goebel</td>
                      <td className="text-start">
                        <div className="usrdtls-td">
                          <div className="prd-descrp">
                            <span className="d-block titl-view">
                            Lorem ipsum                            </span>
                          </div>
                        </div>
                      </td>
                      <td className="text-start">Lorem ipsum</td>
                      <td className="text-start">Lorem ipsum</td>
                      <td className="text-start">
                        <div className="dumydata-flx">
                          <p>SuperAdmin</p>
                        </div>
                      </td>
                      <td className="text-start">
                        <div className="dumydata-flx">
                          <p>27.07.2024 - 13:32</p>
                        </div>
                      </td>
                      <td className="text-start">
                        <div className="dumydata-flx">
                          <p>app users</p>
                        </div>
                      </td>
                      <td className="text-right">
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
                    <tr  className="clr">
                      <td className="text-start">Alexander Goebel</td>
                      <td className="text-start">
                        <div className="usrdtls-td">
                          <div className="prd-descrp">
                            <span className="d-block titl-view">
                            Lorem ipsum                            </span>
                          </div>
                        </div>
                      </td>
                      <td className="text-start">Lorem ipsum</td>
                      <td className="text-start">Lorem ipsum</td>
                      <td className="text-start">
                        <div className="dumydata-flx">
                          <p>SuperAdmin</p>
                        </div>
                      </td>
                      <td className="text-start">
                        <div className="dumydata-flx">
                          <p>27.07.2024 - 13:32</p>
                        </div>
                      </td>
                      <td className="text-start">
                        <div className="dumydata-flx">
                          <p>app users</p>
                        </div>
                      </td>
                      <td className="text-right">
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
                    <tr  className="clr">
                      <td className="text-start">Alexander Goebel</td>
                      <td className="text-start">
                        <div className="usrdtls-td">
                          <div className="prd-descrp">
                            <span className="d-block titl-view">
                            Lorem ipsum                            </span>
                          </div>
                        </div>
                      </td>
                      <td className="text-start">Lorem ipsum</td>
                      <td className="text-start">Lorem ipsum</td>
                      <td className="text-start">
                        <div className="dumydata-flx">
                          <p>SuperAdmin</p>
                        </div>
                      </td>
                      <td className="text-start">
                        <div className="dumydata-flx">
                          <p>27.07.2024 - 13:32</p>
                        </div>
                      </td>
                      <td className="text-start">
                        <div className="dumydata-flx">
                          <p>app users</p>
                        </div>
                      </td>
                      <td className="text-right">
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
                    <tr  className="clr">
                      <td className="text-start">Alexander Goebel</td>
                      <td className="text-start">
                        <div className="usrdtls-td">
                          <div className="prd-descrp">
                            <span className="d-block titl-view">
                            Lorem ipsum                            </span>
                          </div>
                        </div>
                      </td>
                      <td className="text-start">Lorem ipsum</td>
                      <td className="text-start">Lorem ipsum</td>
                      <td className="text-start">
                        <div className="dumydata-flx">
                          <p>SuperAdmin</p>
                        </div>
                      </td>
                      <td className="text-start">
                        <div className="dumydata-flx">
                          <p>27.07.2024 - 13:32</p>
                        </div>
                      </td>
                      <td className="text-start">
                        <div className="dumydata-flx">
                          <p>app users</p>
                        </div>
                      </td>
                      <td className="text-right">
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
                    <tr  className="clr">
                      <td className="text-start">Alexander Goebel</td>
                      <td className="text-start">
                        <div className="usrdtls-td">
                          <div className="prd-descrp">
                            <span className="d-block titl-view">
                            Lorem ipsum                            </span>
                          </div>
                        </div>
                      </td>
                      <td className="text-start">Lorem ipsum</td>
                      <td className="text-start">Lorem ipsum</td>
                      <td className="text-start">
                        <div className="dumydata-flx">
                          <p>SuperAdmin</p>
                        </div>
                      </td>
                      <td className="text-start">
                        <div className="dumydata-flx">
                          <p>27.07.2024 - 13:32</p>
                        </div>
                      </td>
                      <td className="text-start">
                        <div className="dumydata-flx">
                          <p>app users</p>
                        </div>
                      </td>
                      <td className="text-right">
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
                    <tr  className="clr">
                      <td className="text-start">Alexander Goebel</td>
                      <td className="text-start">
                        <div className="usrdtls-td">
                          <div className="prd-descrp">
                            <span className="d-block titl-view">
                            Lorem ipsum                            </span>
                          </div>
                        </div>
                      </td>
                      <td className="text-start">Lorem ipsum</td>
                      <td className="text-start">Lorem ipsum</td>
                      <td className="text-start">
                        <div className="dumydata-flx">
                          <p>SuperAdmin</p>
                        </div>
                      </td>
                      <td className="text-start">
                        <div className="dumydata-flx">
                          <p>27.07.2024 - 13:32</p>
                        </div>
                      </td>
                      <td className="text-start">
                        <div className="dumydata-flx">
                          <p>app users</p>
                        </div>
                      </td>
                      <td className="text-right">
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
                    <tr  className="clr">
                      <td className="text-start">Alexander Goebel</td>
                      <td className="text-start">
                        <div className="usrdtls-td">
                          <div className="prd-descrp">
                            <span className="d-block titl-view">
                            Lorem ipsum                            </span>
                          </div>
                        </div>
                      </td>
                      <td className="text-start">Lorem ipsum</td>
                      <td className="text-start">Lorem ipsum</td>
                      <td className="text-start">
                        <div className="dumydata-flx">
                          <p>SuperAdmin</p>
                        </div>
                      </td>
                      <td className="text-start">
                        <div className="dumydata-flx">
                          <p>27.07.2024 - 13:32</p>
                        </div>
                      </td>
                      <td className="text-start">
                        <div className="dumydata-flx">
                          <p>app users</p>
                        </div>
                      </td>
                      <td className="text-right">
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
                    <tr  className="clr">
                      <td className="text-start">Alexander Goebel</td>
                      <td className="text-start">
                        <div className="usrdtls-td">
                          <div className="prd-descrp">
                            <span className="d-block titl-view">
                            Lorem ipsum                            </span>
                          </div>
                        </div>
                      </td>
                      <td className="text-start">Lorem ipsum</td>
                      <td className="text-start">Lorem ipsum</td>
                      <td className="text-start">
                        <div className="dumydata-flx">
                          <p>SuperAdmin</p>
                        </div>
                      </td>
                      <td className="text-start">
                        <div className="dumydata-flx">
                          <p>27.07.2024 - 13:32</p>
                        </div>
                      </td>
                      <td className="text-start">
                        <div className="dumydata-flx">
                          <p>app users</p>
                        </div>
                      </td>
                      <td className="text-right">
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

export default CreateResidentArchiveList;
