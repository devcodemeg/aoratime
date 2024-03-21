import React from "react";
import {
  Breadcrumb,
  ObjectArchiveList,
} from "./sub-component";

function CustomerObjectArchiveMain() {

  return (
    <>
      <div className="main-wrapper">
       <div className="card usr-crd">
       <Breadcrumb  />
        <ObjectArchiveList />
       </div>
      </div>
    </>
  );
}

export default CustomerObjectArchiveMain;
