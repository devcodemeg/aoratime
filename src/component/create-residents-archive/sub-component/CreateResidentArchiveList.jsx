import React, { useState } from "react";


const CreateResidentArchiveList  = () => {
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
          <div className="fltrsrch-mobl-icon">
            <span className="moblsrch-icon">
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13.8289 13.0043L9.84772 9.023C10.6189 8.07043 11.0832 6.86 11.0832 5.54168C11.0832 2.48618 8.59705 0 5.54159 0C2.48612 0 0 2.48615 0 5.54165C0 8.59715 2.48615 11.0833 5.54162 11.0833C6.85992 11.0833 8.07034 10.619 9.0229 9.84783L13.0041 13.8291C13.1179 13.9428 13.2672 14 13.4165 14C13.5659 14 13.7152 13.9428 13.8289 13.8291C14.057 13.601 14.057 13.2323 13.8289 13.0043ZM5.54162 9.91665C3.12897 9.91665 1.16666 7.95432 1.16666 5.54165C1.16666 3.12897 3.12897 1.16665 5.54162 1.16665C7.95426 1.16665 9.91657 3.12897 9.91657 5.54165C9.91657 7.95432 7.95424 9.91665 5.54162 9.91665Z"
                  fill="#808184"
                />
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
      </div>
      <div className="card hme-crd">
        <div className="card-body">
          <div className="responsive-table big-screen-table">
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
            {/* start mobile table view */}
            <div className="mobiltable-main">
            <div className="mobile-table-head">
              <ul>
                <li>
                  <h5>
                  Vorname, Name
                    <span>
                      <svg
                        width="8"
                        height="12"
                        viewBox="0 0 8 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M7 4L4 1L1 4"
                          stroke="white"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>
                        <path
                          d="M1 8L4 11L7 8"
                          stroke="white"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>
                      </svg>
                    </span>
                  </h5>
                </li>
                <li>
                  <h5>
                  Staatsangehörigkeit
                    <span>
                      <svg
                        width="8"
                        height="12"
                        viewBox="0 0 8 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M7 4L4 1L1 4"
                          stroke="white"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>
                        <path
                          d="M1 8L4 11L7 8"
                          stroke="white"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>
                      </svg>
                    </span>
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
                              <p>Alexander Goebel</p>
                            </div>
                            <div className="mobile-datatp-inner">
                              <p>Lorem ipsum</p>
                            </div>
                          </div>
                          {seletedTwo === idx && (
                            <div className="mobile-data-btm">
                              <div className="mobile-databtm-dtl">
                                <p className="para-bold">
                                Einzug in Unterkunft:
                                </p>
                                <p>Lorem ipsum</p>
                              </div>
                              <div className="mobile-databtm-dtl">
                                <p className="para-bold">
                                Zimmer Nummer:
                                </p>
                                <p>Lorem ipsum</p>
                              </div>
                              <div className="mobile-databtm-dtl">
                                <p className="para-bold">
                                Ansprechpartner:
                                </p>
                                <p>Lorem ipsum</p>
                              </div>
                              <div className="mobile-databtm-dtl">
                                <p className="para-bold">
                                Geschlecht:
                                </p>
                                <p>Lorem ipsum</p>
                              </div>
                              <div className="mobile-databtm-dtl">
                                <p className="para-bold">
                                Status Asyl:
                                </p>
                                <p></p>
                              </div>
                              <div className="mobile-databtm-dtl mobile-databtm-aligncntr">
                                <p className="para-bold">
                                Status::
                                </p>
                                <div className="action-main">
                      <div className="action-inner">
                        <Link to="">
                          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6 12C9.31371 12 12 9.31371 12 6C12 2.68629 9.31371 0 6 0C2.68629 0 0 2.68629 0 6C0 9.31371 2.68629 12 6 12Z" fill="#219653" />
                          </svg>
                        </Link>
                      </div>
                      <div className="action-inner">
                        <div class="action-btn">
                          <Link to="" className="edit-action">

                            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M12.75 2.24998C12.947 2.053 13.1808 1.89674 13.4382 1.79014C13.6956 1.68353 13.9714 1.62866 14.25 1.62866C14.5286 1.62866 14.8044 1.68353 15.0618 1.79014C15.3192 1.89674 15.553 2.053 15.75 2.24998C15.947 2.44697 16.1032 2.68082 16.2098 2.93819C16.3165 3.19556 16.3713 3.47141 16.3713 3.74998C16.3713 4.02856 16.3165 4.30441 16.2098 4.56178C16.1032 4.81915 15.947 5.053 15.75 5.24998L5.625 15.375L1.5 16.5L2.625 12.375L12.75 2.24998Z" stroke="#0388A6" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>

                          </Link>
                        </div>
                      </div>
                    </div>
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
    </>
  );
};

export default CreateResidentArchiveList;
