import React from "react";
import {
    Breadcrumb, UserManagementArchive,
} from "./sub-component";

function UserArchive() {

  return (
    <>
      <div className="main-wrapper">
       <div className="card usr-crd">
       <Breadcrumb/>
        <UserManagementArchive />
       </div>
      </div>
    </>
  );
}

export default UserArchive;
