import React, { useEffect } from 'react'
import { ReportingNewPdfVersion } from './sub-compponent'


const ReportingPdfVersion = () => {
    useEffect(() => {
        document.body.classList.add("reporting-open");
        return () => {
          document.body.classList.remove("reporting-open");
        };
      }, []);
  return (
    <>
      <div className="main-wrapper">
       <div className="card usr-crd">
        <ReportingNewPdfVersion />
       </div>
      </div>
    </>
  )
}

export default ReportingPdfVersion
