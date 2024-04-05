import React from 'react'
import {Breadcrumb, MonitoringPage } from './sub-component'
const Monitoring = () => {
  return (
    <>
    <div className="main-wrapper">
       <div className="card ">
       <Breadcrumb />
        <MonitoringPage />
       </div>
      </div>
    </>
  )
}

export default Monitoring
