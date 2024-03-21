import React from "react";
import {
  Breadcrumb,
  UserRoll,
} from "./sub-component";

function Roll() {

  return (
    <>
      <div className="main-wrapper">
       <div className="card usr-crd">
       <Breadcrumb  />
        <UserRoll />
       </div>
      </div>
    </>
  );
}

export default Roll;
