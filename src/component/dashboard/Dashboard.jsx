import React from "react";
import {
  Breadcrumb,
  UserManagement,
} from "./sub-component";

function Dashboard() {

  return (
    <>
      <div className="main-wrapper">
       <div className="card usr-crd">
       <Breadcrumb  />
        <UserManagement />
       </div>
      </div>
    </>
  );
}

export default Dashboard;
