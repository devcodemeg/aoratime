import React, { useState } from 'react'
import { Logo2 } from '../../../assets/images';

const Breadcrumb = () => {
    const [Date, setDate] = useState();
    return (
        <>
            <div className="home-top">
                <div className='page-title'>
                    <h3>Reporting</h3>
                </div>
                <div className="rprt-logo">
                    <span>
                        <img src={Logo2} alt="" />
                    </span>
                </div>
            </div>
        </>
    )
}

export default Breadcrumb
