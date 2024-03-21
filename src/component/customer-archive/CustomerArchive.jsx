import React from "react";
import { Breadcrumb, CustomersArchiveList,} from "./sub-component";

function CustomerArchive() {

  return (
    <>
      <div className="main-wrapper">
       <div className="card usr-crd">
       <Breadcrumb />
        <CustomersArchiveList />
       </div>
      </div>
    </>
  );
}

export default CustomerArchive ;
