import React, { useEffect, useState } from "react";

import UserManagementData from "./sub-component/UserManagementData";
import UserManagementDataName from "./sub-component/UserManagementDataName";
import {
  Breadcrumb,
} from "./sub-component";
import PopUpUser from "./sub-component/user-popup/PopupUser";

function User() {
  useEffect(() => {
    document.body.classList.add("user-open");
    return () => {
      document.body.classList.remove("user-open");
    };
  }, []);

  const [popups, setPopups] = useState({
    pop_88: false,

  });

  const handlePopup = (button) => {
    console.log("button", button);
    setPopups((p) => ({ ...p, [button]: !p[button] }));
    console.log("popups" , popups)
  };
  return (
    <>
      <div className="main-wrapper">
        <div className="card usr-crd">
          <Breadcrumb />
          <div className="main-card">
            <div className="inner-flex-x40">
              <UserManagementData />
            </div>
            <div className="inner-flex-x60">
              <UserManagementDataName />
            </div>
          </div>
          {popups.pop_88 && <PopUpUser handlePopup={handlePopup} />}
        </div>
      </div>
    </>
  );
}

export default User;
