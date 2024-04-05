import React, { useEffect, useState } from 'react'
import { DatePicker } from "keep-react";
import { Link } from 'react-router-dom';
const Breadcrumb = () => {
    const [Date, setDate] = useState();
    const [showDropDown, setShowDropDown] = useState(false);

    useEffect(() => {
        console.log(showDropDown)
    }, [showDropDown])
    return (
        <>
            <div className="home-top">
                <div className='page-title'>
                    <h3>Reporting</h3>
                </div>

            </div>
            <div className="auth-main rprt-main">
                <div className="rprt-form-inputs">
                    <label for=""></label>
                    <div classNameName="datepicker-input datepicker">
                        <DatePicker singleDate={setDate} placeholder="Date from">
                            <DatePicker.SingleDate />
                        </DatePicker>
                    </div>
                </div>
                <div className="rprt-form-inputs">
                    <label for=""></label>
                    <div classNameName="datepicker-input datepicker">
                        <DatePicker singleDate={setDate} placeholder="Date to">
                            <DatePicker.SingleDate />
                        </DatePicker>
                    </div>
                </div>
                <div className="rprt-form-inputs " >
                    <div onClick={() => setShowDropDown((p) => !p)}>

                        <div className="rprt-input">
                            <input type="text" placeholder='Resident' />
                        </div>
                        <div className="rprt-slctr">
                            <span>
                                <svg width="12" height="7" viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1 1L6 6L11 1" stroke="#5A5A5A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                            </span>
                        </div>

                    </div>
                    {showDropDown && (
                        <div className="rsdnt-drpdwn">
                            <div className="card rsdnt-crd">
                                <div className="card-body">
                                    <div className="rsdnt-main">
                                        <div className="rsdnt-hdng">
                                            <h3>Resident</h3>
                                        </div>
                                        <div className=" rsdnt-inputs">
                                            <div className="rsdnt-input">
                                                <input type="text" placeholder='3 Resident' />
                                            </div>
                                            <div className="rsdnt-icon">
                                                <span>

                                                    <svg width="12" height="7" viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M1 6L6 1L11 6" stroke="#0388A6" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                                    </svg>

                                                </span>
                                            </div>
                                        </div>
                                        <div className="card serch-crd">
                                            <div className="fltr-rsdnt-inner">
                                                <div className="fltrsrch-rsdnt-input">
                                                    <label>
                                                        <input type="text" placeholder="Search" />
                                                        <span className="rsdnt-search-icon">
                                                            <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M7.74999 13C11.0637 13 13.75 10.3137 13.75 6.99999C13.75 3.68629 11.0637 1 7.74999 1C4.43629 1 1.75 3.68629 1.75 6.99999C1.75 10.3137 4.43629 13 7.74999 13Z" stroke="#5A5A5A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                                                <path d="M15.2508 14.5L11.9883 11.2375" stroke="#5A5A5A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                                            </svg>
                                                        </span>
                                                    </label>
                                                </div>
                                            </div>
                                            <div className="chckboc-lrm">
                                                <ul>
                                                    <li>
                                                        <div className="chkbx-main " active>
                                                            <label><input type="checkbox" name="" /><span><em></em>Lorem ipsum</span></label>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="chkbx-main" active>
                                                            <label><input type="checkbox" name="" /><span><em></em>Lorem ipsum</span></label>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="chkbx-main" active>
                                                            <label><input type="checkbox" name="" /><span><em></em>Lorem ipsum</span></label>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="chkbx-main">
                                                            <label><input type="checkbox" name="" /><span><em></em>Lorem ipsum</span></label>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="chkbx-main">
                                                            <label><input type="checkbox" name="" /><span><em></em>Lorem ipsum</span></label>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="chkbx-main">
                                                            <label><input type="checkbox" name="" /><span><em></em>Lorem ipsum</span></label>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="chkbx-main">
                                                            <label><input type="checkbox" name="" /><span><em></em>Lorem ipsum</span></label>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="chkbx-main">
                                                            <label><input type="checkbox" name="" /><span><em></em>Lorem ipsum</span></label>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="chkbx-main">
                                                            <label><input type="checkbox" name="" /><span><em></em>Lorem ipsum</span></label>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>

                <div className="rprt-form-inputs">
                    <div className="rprt-input">
                        <input type="text" placeholder='Guest' />
                    </div>
                    <div className="rprt-slctr">
                        <span>
                            <svg width="12" height="7" viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 1L6 6L11 1" stroke="#5A5A5A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </span>
                    </div>
                </div>
                <div className="rprt-form-inputs">
                    <div className="rprt-input">
                        <input type="text" placeholder='User' />
                    </div>
                    <div className="rprt-slctr">
                        <span>
                            <svg width="12" height="7" viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 1L6 6L11 1" stroke="#5A5A5A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </span>
                    </div>
                </div>
                <div className="aply-btn">
                    <Link to="/reporting-pdf-version" href="" className='btn primary-btn rprt-btn'>
                        <span>
                            <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M11.518 5.05117L3.15764 0.224138C2.04219 -0.419676 0.648438 0.385152 0.648438 1.67302V11.3271C0.648438 12.6142 2.04268 13.4198 3.15812 12.776L11.518 7.94894C12.6334 7.30512 12.6334 5.69498 11.518 5.05117Z" fill="white" />
                            </svg>
                        </span>
                        Apply
                    </Link>
                </div>
            </div>
        </>
    )
}

export default Breadcrumb
