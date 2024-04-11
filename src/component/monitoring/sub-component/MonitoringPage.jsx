import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const MonitoringPage = () => {
  const [openAccoridian, setaOpenAccoridian] = useState(null)

  const clickOnArrow = (index) => {
    if (index != openAccoridian) {
      setaOpenAccoridian(index)
    } else {
      setaOpenAccoridian(null)
    }
  }

  const [seletedOne, setSelectedOne] = useState(null);
  const clickOnItemOne = (index) => {
    if (index === seletedOne) {
      setSelectedOne(null);
    } else {
      setSelectedOne(index);
    }
  };

  return (
    <>
      <div className="card hme-mnrtrng-crd">
        <div className="card-body">
          <div className="responsive-table big-screen-table">
            <table className="table table-row-dashed">
              <thead className="dashboard-thead">
                <tr>
                  <th className="w-125px text-center"></th>
                  <th className="w-350px text-center">
                    <div className="main-th-hdng">
                      <div className="main-inner-hdng">
                        <p>Operation Name</p>
                      </div>
                      <div className="main-up-down-arow">
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
                            />
                            <path
                              d="M1 8L4 11L7 8"
                              stroke="white"
                              stroke-width="1.5"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                          </svg>
                        </span>
                      </div>
                    </div>
                  </th>
                  <th className="w-250px text-center">
                    <div className="main-th-hdng">
                      <div className="main-inner-hdng">
                        <p>Status</p>
                      </div>
                      <div className="main-up-down-arow">
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
                            />
                            <path
                              d="M1 8L4 11L7 8"
                              stroke="white"
                              stroke-width="1.5"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                          </svg>
                        </span>
                      </div>
                    </div>
                  </th>
                  <th className="w-250px text-start">
                    <div className="main-th-hdng">
                      <div className="main-inner-hdng">
                        <p>Datum</p>
                      </div>
                      <div className="main-up-down-arow">
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
                            />
                            <path
                              d="M1 8L4 11L7 8"
                              stroke="white"
                              stroke-width="1.5"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                          </svg>
                        </span>
                      </div>
                    </div>
                  </th>
                  <th className="w-250px text-center">
                    <div className="main-th-hdng">
                      <div className="main-inner-hdng">
                        <p>Uhrzeit</p>
                      </div>
                      <div className="main-up-down-arow">
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
                            />
                            <path
                              d="M1 8L4 11L7 8"
                              stroke="white"
                              stroke-width="1.5"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                          </svg>
                        </span>
                      </div>
                    </div>
                  </th>
                  <th className="w-300px text-center">
                    <div className="main-th-hdng">
                      <div className="main-inner-hdng">
                        <p>Modul</p>
                      </div>
                      <div className="main-up-down-arow">
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
                            />
                            <path
                              d="M1 8L4 11L7 8"
                              stroke="white"
                              stroke-width="1.5"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                          </svg>
                        </span>
                      </div>
                    </div>
                  </th>
                  <th className="w-300px text-center">
                    <div className="main-th-hdng">
                      <div className="main-inner-hdng">
                        <p>Benutzer</p>
                      </div>
                      <div className="main-up-down-arow">
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
                            />
                            <path
                              d="M1 8L4 11L7 8"
                              stroke="white"
                              stroke-width="1.5"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                          </svg>
                        </span>
                      </div>
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody className="">
                {

                  Array(10).fill("").map((item, index) => {
                    return (
                      <>
                        <tr className="clr" >
                          <td className="text-start">
                            <div className="cntnt-show-icon " onClick={() => clickOnArrow(index)} >
                              <span >
                                {openAccoridian === index ?


                                  <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1 13L7 7L0.999999 1" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                  </svg>

                                  :

                                  <svg
                                    width="14"
                                    height="8"
                                    viewBox="0 0 14 8"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      d="M1 1L7 7L13 1"
                                      stroke="black"
                                      stroke-width="2"
                                      stroke-linecap="round"
                                      stroke-linejoin="round"
                                    />
                                  </svg>


                                }

                              </span>
                            </div>
                          </td>
                          <td className="text-start" >
                            <div className="usr-dlte-info">
                              <p>User Deleted</p>
                              <span>
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
                                  ></path>
                                  <path
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M7.00008 0.729187C3.5368 0.729187 0.729248 3.53674 0.729248 7.00002C0.729248 10.4633 3.5368 13.2709 7.00008 13.2709C10.4634 13.2709 13.2709 10.4633 13.2709 7.00002C13.2709 3.53674 10.4634 0.729187 7.00008 0.729187ZM1.60425 7.00002C1.60425 4.01999 4.02005 1.60419 7.00008 1.60419C9.9801 1.60419 12.3959 4.01999 12.3959 7.00002C12.3959 9.98004 9.9801 12.3959 7.00008 12.3959C4.02005 12.3959 1.60425 9.98004 1.60425 7.00002Z"
                                    fill="#0388A6"
                                  ></path>
                                  <path
                                    d="M7.58341 4.66671C7.58341 4.98887 7.32226 5.25004 7.00008 5.25004C6.67791 5.25004 6.41675 4.98887 6.41675 4.66671C6.41675 4.34454 6.67791 4.08337 7.00008 4.08337C7.32226 4.08337 7.58341 4.34454 7.58341 4.66671Z"
                                    fill="#0388A6"
                                  ></path>
                                </svg>
                              </span>
                            </div>

                          </td>
                          <td className="text-start" >Succeeded</td>
                          <td className="text-start" >17.08.2024</td>
                          <td className="text-start" >16:01:24</td>
                          <td className="text-start" >
                            <div className="dumydata-lnk">
                              <p>User Management</p>
                            </div>
                          </td>
                          <td className="text-start" >
                            <div className="dumydata-nme">
                              <p>Alexander Göbel</p>
                            </div>
                          </td>
                        </tr>
                        {openAccoridian === index && <tr className="usr-recvry">
                          <td>
                          </td>
                          <td colSpan='6'>
                            <div className="usr-dlte-iqry-main">
                              <div className="usr-actn-dlte-iqry">
                                <span>Action:</span>
                                <p>
                                  Lorem Ipsum is simply dummy text of
                                  the printing and typesetting industry. Lorem Ipsum has
                                  been the industry's standard dummy text ever since the
                                  1500s, when an unknown printer took a galley of type
                                  and scrambled it to make a type specimen book.
                                </p>
                              </div>
                              <div className="usr-sql-dlte-iqry">
                                <span>SQL:</span>
                                <p>
                                  Lorem Ipsum is simply dummy text of the
                                  printing and typesetting industry. Lorem Ipsum has
                                  been the industry's standard dummy text ever since the
                                  1500s, when an unknown printer took a galley of type
                                  and scrambled it to make a type specimen book.
                                </p>
                              </div>
                              <div className="rcvry-btn">
                                <Link className="btn primary-btn recvry-btn">Recovery</Link>
                              </div>
                            </div>
                          </td>
                        </tr>}
                      </>
                    )
                  })

                }
              </tbody>
            </table>
          </div>
          <div className="pagination-main">
            <div className="pagination-inner">
              <div className="pagination-overalpage">
                <p>Page:</p>
                <p className="overalpage-count">
                  <span>1</span><em>of</em><span>2</span>
                </p>
              </div>
            </div>
            <div className="pagination-inner">
              <div className="pagination-numbering">
                <ul>
                  <li class="button previous-pagination">
                    <a href="">
                      <svg
                        width="8"
                        height="12"
                        viewBox="0 0 8 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M1.14152 5.53176L6.48167 0.191706C6.60518 0.068097 6.77006 0 6.94586 0C7.12167 0 7.28654 0.068097 7.41005 0.191706L7.80332 0.584873C8.05922 0.841066 8.05922 1.25745 7.80332 1.51326L3.31906 5.99751L7.80829 10.4867C7.93181 10.6104 8 10.7751 8 10.9508C8 11.1267 7.93181 11.2915 7.80829 11.4152L7.41503 11.8083C7.29142 11.9319 7.12664 12 6.95084 12C6.77503 12 6.61016 11.9319 6.48665 11.8083L1.14152 6.46336C1.01771 6.33936 0.949716 6.1738 0.950106 5.99781C0.949716 5.82112 1.01771 5.65566 1.14152 5.53176Z"
                          fill="black"
                        />
                      </svg>
                    </a>
                  </li>
                  <li class="active">
                    <a href="">1</a>
                  </li>
                  <li class="button next-pagination">
                    <a href="">
                      <svg
                        width="8"
                        height="12"
                        viewBox="0 0 8 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M6.85848 5.53176L1.51833 0.191706C1.39482 0.068097 1.22994 0 1.05414 0C0.878334 0 0.713458 0.068097 0.589947 0.191706L0.196681 0.584873C-0.0592189 0.841066 -0.0592189 1.25745 0.196681 1.51326L4.68094 5.99751L0.191706 10.4867C0.0681946 10.6104 0 10.7751 0 10.9508C0 11.1267 0.0681946 11.2915 0.191706 11.4152L0.584971 11.8083C0.70858 11.9319 0.873359 12 1.04916 12C1.22497 12 1.38984 11.9319 1.51335 11.8083L6.85848 6.46336C6.98229 6.33936 7.05028 6.1738 7.04989 5.99781C7.05028 5.82112 6.98229 5.65566 6.85848 5.53176Z"
                          fill="black"
                        />
                      </svg>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
             {/* start mobile table view */}
 <div className="mobiltable-main">
            <div className="mobile-table-head">
              <ul>
                <li>
                  <h5>
                  Operation name
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
                  Status
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
                            onClick={() => clickOnItemOne(idx)}
                          >
                            <div className="mobile-datatp-inner">
                              <p>User deleted
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
                            <div className="mobile-datatp-inner">
                              <p>Succeeded</p>
                            </div>
                          </div>
                          {seletedOne === idx && (
                            <div className="mobile-data-btm">
                               <div className="mobile-databtm-dtl">
                                <p className="para-bold">
                                Datum:
                                </p>
                                <p>17.08.2024
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
                                <p className="para-bold">
                                Uhrzeit:
                                </p>
                                <p>16:01:24
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
                                <p className="para-bold">
                                Modul:
                                </p>
                                <p>User Management</p>
                                </div>
                                <div className="mobile-databtm-dtl">
                                <p className="para-bold">
                                Benutzer:
                                </p>
                                <p>Alexander Göbel</p>
                                </div>
                                <div className="mobile-databtm-dtl">
                                <p className="para-bold">
                                Action:
                                </p>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
                                </div>
                             <div className="mobile-databtm-dtl">
                                <p className="para-bold">
                                SQL:
                                </p>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
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

export default MonitoringPage;
