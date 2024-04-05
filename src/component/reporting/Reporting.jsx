import React from 'react'
import { Breadcrumb} from "./sub-component";
import ReportingSite from './sub-component/ReportingSite';

const Reporting = () => {
  return (
    <>
<div className="main-wrapper">
       <div className="card usr-crd">
       <Breadcrumb />
        <ReportingSite />
       </div>
      </div>
    </>
  )
}

export default Reporting
