import React from "react";
import {
  Breadcrumb,
  CreateResidentList,
} from "./sub-component";

function CreateResidents() {

  return (
    <>
      <div className="main-wrapper">
       <div className="card usr-crd">
       <Breadcrumb  />
        <CreateResidentList />
       </div>
      </div>
    </>
  );
}

export default CreateResidents;
