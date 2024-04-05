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
  return (
    <>
      <div className="card hme-mnrtrng-crd">
        <div className="card-body">
          <div className="responsive-table">
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
        </div>
      </div>
    </>
  );
};

export default MonitoringPage;
