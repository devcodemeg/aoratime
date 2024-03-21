import React, { useEffect, useState } from "react";
import {
  Breadcrumb, CustomersDataList, CustomersNameList,
} from "./sub-component";
import PopUpAddCustomer from "./sub-component/customer-popup/PopUpAddCustomer";
import PopUpAddObject from "./sub-component/customer-popup/PopUpAddObject";

function Customers() {
  useEffect(() => {
    document.body.classList.add("customers-open");
    return () => {
      document.body.classList.remove("customers-open");
    };
  }, []);

  const [popups, setPopups] = useState({
    pop_66: false,
    pop_77: false,

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
              <CustomersNameList />
            </div>
            <div className="inner-flex-x60">
              <CustomersDataList />
            </div>
          </div>
        {popups.pop_66 && <PopUpAddCustomer handlePopup={handlePopup} />}
        {popups.pop_77 && <PopUpAddObject handlePopup={handlePopup} />}
        </div>
      </div>
    </>
  );
}

export default Customers;
