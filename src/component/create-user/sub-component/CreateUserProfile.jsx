import React from "react";
import { CreateUser } from "../../../assets/images";
import { Link } from "react-router-dom";
const CreateUserProfile = () => {
  return (
    <>
      <div className="usr-prfl-main-cntnt">
        <div className="usr-prfl-top-hdng">
          <h4>Foto</h4>
        </div>
        <div className="upld-prfl">
          <div className="usr-prfl-upld-image">
            <span style={{ backgroundImage: `url(${CreateUser})` }}></span>
          </div>
          <div className="upld-image-bck">
            <a>
              <svg
                width="9"
                height="9"
                viewBox="0 0 9 9"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5.06645 4.3849L8.36645 1.0849C8.44061 0.998302 8.47936 0.886909 8.47496 0.772982C8.47056 0.659054 8.42333 0.550983 8.34271 0.470364C8.26209 0.389745 8.15402 0.342516 8.04009 0.338116C7.92616 0.333715 7.81477 0.372467 7.72818 0.446627L4.42818 3.74663L1.12818 0.442101C1.04158 0.367941 0.930187 0.329189 0.816259 0.33359C0.702332 0.33799 0.594261 0.385219 0.513642 0.465837C0.433023 0.546456 0.385794 0.654527 0.381394 0.768455C0.376993 0.882382 0.415745 0.993775 0.489905 1.08037L3.7899 4.3849L0.485378 7.6849C0.437991 7.72548 0.399505 7.77542 0.372334 7.83158C0.345163 7.88774 0.329894 7.94891 0.327486 8.01125C0.325078 8.07359 0.335583 8.13576 0.358341 8.19385C0.381099 8.25194 0.415619 8.3047 0.459734 8.34881C0.503849 8.39293 0.556607 8.42745 0.614697 8.45021C0.672786 8.47296 0.734953 8.48347 0.797295 8.48106C0.859637 8.47865 0.920808 8.46338 0.976969 8.43621C1.03313 8.40904 1.08307 8.37056 1.12365 8.32317L4.42818 5.02317L7.72818 8.32317C7.81477 8.39733 7.92616 8.43608 8.04009 8.43168C8.15402 8.42728 8.26209 8.38005 8.34271 8.29943C8.42333 8.21881 8.47056 8.11074 8.47496 7.99681C8.47936 7.88289 8.44061 7.7715 8.36645 7.6849L5.06645 4.3849Z"
                  fill="#FF2D2D"
                  stroke="#FF2D2D"
                  stroke-width="0.5"
                />
              </svg>
            </a>
          </div>
        </div>
        <div className="upldprfl-btn">
          <label>
            <input type="file" />
            <span>
              Upload
            </span>
          </label>
        </div>
      </div>
      <div className="usr-prfl-main-inputs">
        <div className="usr-prfl-top-hdng">
          <h4>Other information</h4>
        </div>

        <div className="form-flex">
          <div className="inner-flex-50">
            <div class="sngle-input">
              <label for="">Vorname </label>
              <div class="authinput-wthicon">
                <input type="text" placeholder="Dummy" />
              </div>
            </div>
          </div>
          <div className="inner-flex-50">
            <div class="sngle-input">
              <label for=""> Geburstdatum </label>
              <div class="authinput-wthicon">
                <input type="text" placeholder="Dummy" />
              </div>
            </div>
          </div>
          <div className="inner-flex-50">
            <div class="sngle-input">
              <label for="">Geburtsort </label>
              <div class="authinput-wthicon">
                <input type="text" placeholder="Dummy" />
              </div>
            </div>
          </div>
          <div className="inner-flex-50">
            <div class="sngle-input">
              <label for="">Staatsangehörigkeit </label>
              <div class="authinput-wthicon">
                <input type="text" placeholder="Dummy" />
              </div>
            </div>
          </div>
          <div className="inner-flex-50">
            <div class="sngle-input">
              <label for="">Einzug in Unterkunft </label>
              <div class="authinput-wthicon">
                <input type="text" placeholder="Dummy" />
              </div>
            </div>
          </div>
          <div className="inner-flex-50">
            <div class="sngle-input">
              <label for="">Zugewiesen von </label>
              <div class="authinput-wthicon">
                <input type="text" placeholder="Dummy" />
              </div>
            </div>
          </div>
          <div className="inner-flex-50">
            <div class="sngle-input">
              <label for="">geschlecht </label>
              <div class="authinput-wthicon">
                <input type="text" placeholder="Dummy" />
              </div>
            </div>
          </div>
          <div className="inner-flex-50">
            <div class="sngle-input">
              <label for="">konfession </label>
              <div class="authinput-wthicon">
                <input type="text" placeholder="Dummy" />
              </div>
            </div>
          </div>
          <div className="inner-flex-50">
            <div class="sngle-input">
              <label for="">Einzug am... </label>
              <div class="authinput-wthicon">
                <input type="text" placeholder="Dummy" />
              </div>
            </div>
          </div>
          <div className="inner-flex-50">
            <div class="sngle-input">
              <label for="">Auszug am... </label>
              <div class="authinput-wthicon">
                <input type="text" placeholder="Dummy" />
              </div>
            </div>
          </div>
          <div className="inner-flex-50">
            <div class="sngle-input">
              <label for="">zimmer nummer </label>
              <div class="authinput-wthicon">
                <input type="text" placeholder="Dummy" />
              </div>
            </div>
          </div>
          <div className="inner-flex-50">
            <div class="sngle-input">
              <label for="">Interne nummer </label>
              <div class="authinput-wthicon">
                <input type="text" placeholder="Dummy" />
              </div>
            </div>
          </div>
        <div className="inner-flex-50">
            <div class="sngle-input">
              <label for="">Hanynummer </label>
              <div class="authinput-wthicon">
                <input type="text" placeholder="Dummy" />
              </div>
            </div>
          </div>
          <div className="inner-flex-50">
            <div class="sngle-input">
              <label for="">ansprechpartner landratsamt </label>
              <div class="authinput-wthicon">
                <input type="text" placeholder="Dummy" />
              </div>
            </div>
          </div>
          <div className="inner-flex-50">
            <div class="sngle-input">
              <label for="">landratsamt </label>
              <div class="authinput-wthicon">
                <input type="text" placeholder="Dummy" />
              </div>
            </div>
          </div>
          <div className="inner-flex-50">
            <div class="sngle-input">
              <label for=""> kontaktdaten des bewohners </label>
              <div class="authinput-wthicon">
                <input type="text" placeholder="Dummy" />
              </div>
            </div>
          </div>
          <div className="inner-flex-50">
            <div class="sngle-input">
              <label for="">handy, foto von bewohner </label>
              <div class="authinput-wthicon">
                <input type="text" placeholder="Dummy" />
              </div>
            </div>
          </div>
          <div className="inner-flex-50">
            <div class="sngle-input">
              <label for=""> personalaudweisnunmer </label>
              <div class="authinput-wthicon">
                <input type="text" placeholder="Dummy" />
              </div>
            </div>
          </div>
          <div className="inner-flex-50">
            <div class="sngle-input">
              <label for="">status asyl </label>
              <div class="authinput-wthicon">
                <input type="text" placeholder="Dummy" />
              </div>
            </div>
          </div>
          <div className="inner-flex-50">
            <div class="sngle-input">
              <label for="">wenn ausgezogen </label>
              <div class="authinput-wthicon">
                <input type="text" placeholder="Dummy" />
              </div>
            </div>
          </div>
        </div>
        <div className="form-flex">
        <div className="inner-flex-50">
            <div class="sngle-input">
              <label for="">wohin </label>
              <div class="authinput-wthicon">
                <input type="text" placeholder="Dummy" />
              </div>
            </div>
          </div>
          </div>
          <div className="form-flex">
          <div className="inner-flex-50">
            <div class="sngle-input">
              <label for="">kontaktdaten </label>
              <div class="authinput-wthicon">
                <input type="text" placeholder="Dummy" />
              </div>
            </div>
          </div>
          </div>
        </div>
      <div className="form-btn">
        <Link
          to="/create-residents"
          type="button"
          className="btn ahcv-btn btn-flex"
        >
          Abort{" "}
        </Link>
        <Link
          to="/create-residents"
          type="button"
          className="btn primary-btn save-btn"
        >Save</Link>
      </div>
    </>
  );
};

export default CreateUserProfile;
