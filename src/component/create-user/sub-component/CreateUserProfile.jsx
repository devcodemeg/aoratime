import React from 'react'
import { CreateUser } from "../../../assets/images";
const CreateUserProfile = () => {
    return (
        <>
<div className="usr-prfl-main-cntnt">
    <div className="line">
        <span></span>
    </div>

    <div className="usr-prfl-top-hdng">
                    <h4>Foto</h4>
                </div>
<div className="usr-prfl-upld-image">
    <span  style={{ backgroundImage: `url(${CreateUser})` }}></span>
</div>



    <div className="line-1">
        <span></span>
    </div>
</div>





            <div className="usr-prfl-main-inputs">
                <div className="usr-prfl-top-hdng">
                    <h4>Other information</h4>
                </div>

                <div className="usr-prfl">
                    <div className="usr-prfl-innermain-input">
                        <div class="sngle-input">
                            <label for="">Vorname </label>
                            <div class="authinput-wthicon">
                                <input type="text" placeholder="Dummy" />
                            </div>
                        </div>
                        <div class="sngle-input">
                            <label for="">Geburtsort</label>
                            <div class="authinput-wthicon">
                                <input type="text" placeholder="Dummy" />
                            </div>
                        </div>
                        <div class="sngle-input">
                            <label for="">Einzug in Unterkunft</label>
                            <div class="authinput-wthicon">
                                <input type="text" placeholder="Dummy" />
                            </div>
                        </div>
                        <div class="sngle-input">
                            <label for="">geschlecht</label>
                            <div class="authinput-wthicon">
                                <input type="text" placeholder="Dummy" />
                            </div>
                        </div>
                        <div class="sngle-input">
                            <label for="">Einzug am...</label>
                            <div class="authinput-wthicon">
                                <input type="text" placeholder="Dummy" />
                            </div>
                        </div>
                        <div class="sngle-input">
                            <label for="">zimmer nummer</label>
                            <div class="authinput-wthicon">
                                <input type="text" placeholder="Dummy" />
                            </div>
                        </div>
                        <div class="sngle-input">
                            <label for="">Hanynummer</label>
                            <div class="authinput-wthicon">
                                <input type="text" placeholder="Dummy" />
                            </div>
                        </div>
                        <div class="sngle-input">
                            <label for="">landratsamt</label>
                            <div class="authinput-wthicon">
                                <input type="text" placeholder="Dummy" />

                            </div>
                        </div>
                        <div class="sngle-input">
                            <label for="">handy, foto von bewohner</label>
                            <div class="authinput-wthicon">
                                <input type="text" placeholder="Dummy" />
                            </div>
                        </div>
                        <div class="sngle-input">
                            <label for="">status asyl</label>
                            <div class="authinput-wthicon">
                            <input type="text" placeholder="Dummy" />
                            </div>
                        </div>
                        <div class="sngle-input">
                            <label for="">wohin</label>
                            <div class="authinput-wthicon">
                            <input type="text" placeholder="Dummy" />
                            </div>
                        </div>
                        <div class="sngle-input">
                            <label for="">kontaktdaten</label>
                            <div class="authinput-wthicon">
                            <input type="text" placeholder="Dummy" />
                            </div>
                        </div>
                    </div>
                    <div className="usr-prfl-innermain-input">
                        <div class="sngle-input">
                            <label for="">Geburstdatum</label>
                            <div class="authinput-wthicon">
                            <input type="text" placeholder="Dummy" />
                            </div>
                        </div>
                        <div class="sngle-input">
                            <label for="">Staatsangehörigkeit</label>
                            <div class="authinput-wthicon">
                            <input type="text" placeholder="Dummy" />
                            </div>
                        </div>
                        <div class="sngle-input">
                            <label for="">Zugewiesen von</label>
                            <div class="authinput-wthicon">
                                <input type="text" placeholder="Dummy" />
                            </div>
                        </div>
                        <div class="sngle-input">
                            <label for="">konfession</label>
                            <div class="authinput-wthicon">
                                <input type="text" placeholder="Dummy" />
                            </div>
                        </div>
                        <div class="sngle-input">
                            <label for="">Auszug am...</label>
                            <div class="authinput-wthicon">
                            <input type="text" placeholder="Dummy" />
                            </div>
                        </div>
                        <div class="sngle-input">
                            <label for="">Interne nummer</label>
                            <div class="authinput-wthicon">
                            <input type="text" placeholder="Dummy" />
                            </div>
                        </div>
                        <div class="sngle-input">
                            <label for="">ansprechpartner landratsamt</label>
                            <div class="authinput-wthicon">
                            <input type="text" placeholder="Dummy" />
                            </div>
                        </div>
                        <div class="sngle-input">
                            <label for=""> kontaktdaten des bewohners</label>
                            <div class="authinput-wthicon">
                            <input type="text" placeholder="Dummy" />
                            </div>
                        </div>
                        <div class="sngle-input">
                            <label for=""> personalaudweisnunmer</label>
                            <div class="authinput-wthicon">
                            <input type="text" placeholder="Dummy" />
                            </div>
                        </div>
                        <div class="sngle-input">
                            <label for=""> wenn ausgezogen</label>
                            <div class="authinput-wthicon">
                            <input type="text" placeholder="Dummy" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CreateUserProfile
