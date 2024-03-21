import React, { useEffect, useState } from "react";
import {
  Breadcrumb,
  GuestsPresentTable,
  ResidentAbsentTable,
} from "./sub-component";
import PopUpResidentsOut from "./sub-component/home-popup/PopUpResidentsOut";
import PopUpResidents from "./sub-component/home-popup/PopUpResidents";
import PopUpSignature from "./sub-component/home-popup/PopUpSignature";
import PopUpGuestIn from "./sub-component/home-popup/PopUpGuestIn";
import PopUpGuestOut from "./sub-component/home-popup/PopUpGuestOut";

const Home = () => {
  useEffect(() => {
    document.body.classList.add("home-open");
    return () => {
      document.body.classList.remove("home-open");
    };
  }, []);

  const [popups, setPopups] = useState({
    pop_11: false,
    pop_22: false,
    pop_33: false,
    pop_44: false,
    pop_55: false,
  });

  const handlePopup = (button) => {
    console.log("button", button);
    setPopups((p) => ({ ...p, [button]: !p[button] }));
    console.log("popups" , popups)
  };
  return (
    <>
      <div className="main-wrapper">
        <Breadcrumb handlePopup={handlePopup} />
        <ResidentAbsentTable handlePopup={handlePopup} />
        <GuestsPresentTable handlePopup={handlePopup} />
        {popups.pop_11 && <PopUpResidents handlePopup={handlePopup} />}
        {popups.pop_22 && <PopUpGuestIn handlePopup={handlePopup} />}
        {popups.pop_33 && <PopUpResidentsOut handlePopup={handlePopup} />}
        {popups.pop_44 && <PopUpSignature handlePopup={handlePopup} />}
        {popups.pop_55 && <PopUpGuestOut handlePopup={handlePopup} />}
      </div>
    </>
  );
};

export default Home;
