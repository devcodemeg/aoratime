import React from "react";

const Breadcrumb = () => {
  return (
    <>
      <div className="home-top toglhead-top">
        <div className='page-title'>
          <h3>Benutzer erstellen</h3>
        </div>
        <div className="action-main">
          <div className="action-inner">
            <div class="svcrd-togl on-off-toggle">
            Benutzer Status
            <div className='playpause-toggle'>
                <label>
                    <input type="checkbox" />
                    <span>
                        <i></i>
                    </span>
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="home-top-crd-box">
        <div class="home-top-crd">
            <h4>Personalnummer</h4>
              <input type="text " placeholder="All" />
        </div>
        <div class="home-top-crd">
            <h4>Benutzer</h4>
          <input type="text " placeholder="All" />
        </div>
        <div class="home-top-crd">
            <h4>Zugriffsrechte</h4>
          <input type="text " placeholder="All" />
        </div>
        <div class="home-top-crd">
            <h4>E-Mail</h4>
          <input type="email" placeholder="All" />
        </div>
        <div class="home-top-crd">
            <h4>Passwort</h4>
            <div className="pwrd-input">
          <input type="text " placeholder="All" />
            <span>
              <svg width="15.33" height="15.33" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#797979" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M12 16V12" stroke="#797979" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M12 8H12.01" stroke="#797979" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
            </span>
            </div>
        </div>
        <div class="home-top-crd">
            <h4>Password bestätigen</h4>
          <input type="text " placeholder="All" />
        </div>
      </div>
    </>
  );
};

export default Breadcrumb;
