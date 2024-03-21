import React from 'react'
import { Link } from 'react-router-dom'

const UserAddRole = () => {
    return (
        <>
            <div className="card add-role-crd">
                <div className="card-body">

                    <div className="add-main">
                        <div className='page-title'>
                            <h3>Rolle hinzufügen</h3>
                        </div>
                        <div className="add-txt-main">
                            <div className="txt-input">
                                <label >
                                    Title
                                </label>
                                <input type="text" placeholder='Dummy' />
                            </div>
                            <div className="txt-input">
                                <label >
                                    Abkürzung
                                </label>
                                <input type="text" placeholder='Dummy' />
                            </div>
                        </div>
                        <div className="chkbx-main">
                        <label><input type="checkbox" name=""/><span><em></em>Bewohner anlegen</span></label>
                        </div>
                    </div>
                    <div className="brdr">
                        <span></span>
                    </div>
                    <div className="add-main">
                        <div className='page-title'>
                            <h3>Berechtigungen</h3>
                        </div>

                        <div className="main-slctr">
                        <div className="inner-flx-box">
                        <div className="chkbx-main">
                        <label><input type="checkbox" name=""/><span><em></em>Bewohner anlegen</span></label>
                        </div>
                        <div className="chkbx-main">
                        <label><input type="checkbox" name=""/><span><em></em>Bewohner ändern</span></label>
                        </div>
                        <div className="chkbx-main">
                        <label><input type="checkbox" name=""/><span><em></em>Bewohner archivieren </span></label>
                        </div>
                        <div className="chkbx-main">
                        <label><input type="checkbox" name=""/><span><em></em>Bewohner löschen</span></label>
                        </div>
                        <div className="chkbx-main">
                        <label><input type="checkbox" name=""/><span><em></em>Bewohner anlegen</span></label>
                        </div>
                        <div className="chkbx-main">
                        <label><input type="checkbox" name=""/><span><em></em>Bewohner ändern</span></label>
                        </div>
                        <div className="chkbx-main">
                        <label><input type="checkbox" name=""/><span><em></em>Bewohner archivieren </span></label>
                        </div>
                        <div className="chkbx-main">
                        <label><input type="checkbox" name=""/><span><em></em>Bewohner löschen</span></label>
                        </div>
                        <div className="chkbx-main">
                        <label><input type="checkbox" name=""/><span><em></em>Kunde anlegen</span></label>
                        </div>
                        </div>
                        <div className="inner-flx-box">
                        <div className="chkbx-main">
                        <label><input type="checkbox" name=""/><span><em></em>Kunde öndern</span></label>
                        </div>
                        <div className="chkbx-main">
                        <label><input type="checkbox" name=""/><span><em></em>Kunde archivieren</span></label>
                        </div>
                        <div className="chkbx-main">
                        <label><input type="checkbox" name=""/><span><em></em>Kunde löschen</span></label>
                        </div>
                        <div className="chkbx-main">
                        <label><input type="checkbox" name=""/><span><em></em>Objekt anlegen</span></label>
                        </div>
                        <div className="chkbx-main">
                        <label><input type="checkbox" name=""/><span><em></em>Objekt ändern</span></label>
                        </div>
                        <div className="chkbx-main">
                        <label><input type="checkbox" name=""/><span><em></em>Objekt archivieren</span></label>
                        </div>
                        <div className="chkbx-main">
                        <label><input type="checkbox" name=""/><span><em></em>Objekt löschen</span></label>
                        </div>
                        <div className="chkbx-main">
                        <label><input type="checkbox" name=""/><span><em></em>Report erstellen</span></label>
                        </div>
                        </div>
                        </div>
                    </div>
                    <div className="btns-evnts btn-evnt">
          <div className="btns-evnts-inner">
            <Link to="/user"
              onClick={() => handlePopup("pop_11")}
              className="btn secondary-btn  btn-2"
            >
             Abbrechen
            </Link>
          </div>
          <div
            onClick={() => handlePopup("pop_22")}
            className="btns-evnts-inner"
          >
            <a className="btn primary-btn btn-2 ">
            Speichern
            </a>
          </div>
        </div>
                </div>
            </div>
        </>
    )
}

export default UserAddRole
