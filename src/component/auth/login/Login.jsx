import React from "react";
import { Logo, LogoLeft } from "../../../assets/images";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <>
      <div class="login-page">
        <div className="login-header">
          <div className="container">
          <div className="login-logo">
            <Link to="">
              <img src={Logo} alt="" />
            </Link>
          </div>
          </div>
        </div>
        <div class="authmain-wraper">
        <div class="container">
          <div className="login-wraper">
            <div class="login-main">
              <div class="login-inner-50">
                <div class="login-descrp">
                  <div className="login-left-img">
                    <img src={LogoLeft} />
                  </div>
                  <p>
                    Grow your website faster by using DreamHost as your
                    foundation
                  </p>
                </div>
              </div>
              <div class="login-inner-50">
                <div class="signup-card">
                  <div class="card crd-login">
                    <div class="login-innerheading">
                      <h3>Sign in to your account.</h3>
                    </div>
                    <div class="single-input">
                      <label for="">Email ID</label>
                      <div class="authinput-wthicon">
                      <input type="number" placeholder="example@gmail.com" />
                      <div className="auth-icon">.
                        <span>
                          <svg
                            width="20"
                            height="15"
                            viewBox="0 0 20 15"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M18.2422 0.264587H1.75781C0.790547 0.264587 0 1.07451 0 2.07344V12.9266C0 13.9259 0.791055 14.7354 1.75781 14.7354H18.2422C19.2095 14.7354 20 13.9255 20 12.9266V2.07344C20 1.07427 19.2091 0.264587 18.2422 0.264587ZM17.9723 1.47049C17.4039 2.05724 10.7283 8.94911 10.4541 9.23225C10.225 9.46869 9.77512 9.46885 9.54594 9.23225L2.02773 1.47049H17.9723ZM1.17188 12.7049V2.29513L6.21348 7.50001L1.17188 12.7049ZM2.02773 13.5295L7.04078 8.35411L8.71598 10.0836C9.40246 10.7923 10.5978 10.792 11.2841 10.0836L12.9593 8.35415L17.9723 13.5295H2.02773ZM18.8281 12.7049L13.7865 7.50001L18.8281 2.29513V12.7049Z"
                              fill="#0388A6"
                            />
                          </svg>
                        </span>
                        </div>
                      </div>
                    </div>
                    <div class="single-input">
                      <label for="">Password</label>
                      <div class="authinput-wthicon">
                      <input type="password" placeholder="*********" />
                      <div className="auth-icon">
                        <span>
                          <svg
                            width="15"
                            height="19"
                            viewBox="0 0 15 19"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M12.3531 6.8941H12.0413V5.07057C12.0413 3.90518 11.5784 2.78752 10.7543 1.96346C9.93026 1.1394 8.8126 0.676453 7.6472 0.676453C6.48181 0.676453 5.36415 1.1394 4.54009 1.96346C3.71604 2.78752 3.25308 3.90518 3.25308 5.07057V6.8941H2.94132C2.31728 6.8941 1.7188 7.142 1.27754 7.58326C0.836277 8.02452 0.588379 8.623 0.588379 9.24704V15.9706C0.588379 16.5946 0.836277 17.1931 1.27754 17.6343C1.7188 18.0756 2.31728 18.3235 2.94132 18.3235H12.3531C12.9771 18.3235 13.5756 18.0756 14.0169 17.6343C14.4581 17.1931 14.706 16.5946 14.706 15.9706V9.24704C14.706 8.623 14.4581 8.02452 14.0169 7.58326C13.5756 7.142 12.9771 6.8941 12.3531 6.8941ZM4.42956 5.07057C4.42956 4.64802 4.51278 4.22961 4.67448 3.83923C4.83619 3.44885 5.0732 3.09414 5.37198 2.79535C5.67077 2.49656 6.02548 2.25955 6.41586 2.09785C6.80625 1.93615 7.22466 1.85292 7.6472 1.85292C8.06975 1.85292 8.48816 1.93615 8.87854 2.09785C9.26893 2.25955 9.62364 2.49656 9.92242 2.79535C10.2212 3.09414 10.4582 3.44885 10.6199 3.83923C10.7816 4.22961 10.8648 4.64802 10.8648 5.07057V6.8941H4.42956V5.07057ZM13.5296 15.9706C13.5296 16.2826 13.4056 16.5818 13.185 16.8025C12.9643 17.0231 12.6651 17.147 12.3531 17.147H2.94132C2.6293 17.147 2.33006 17.0231 2.10943 16.8025C1.8888 16.5818 1.76485 16.2826 1.76485 15.9706V9.24704C1.76485 8.93502 1.8888 8.63578 2.10943 8.41515C2.33006 8.19452 2.6293 8.07057 2.94132 8.07057H12.3531C12.6651 8.07057 12.9643 8.19452 13.185 8.41515C13.4056 8.63578 13.5296 8.93502 13.5296 9.24704V15.9706Z"
                              fill="#0388A6"
                            />
                          </svg>
                        </span>
                      </div>
                      </div>
                    </div>
                    <div class="login-btn">
                      <Link to="/select-user" class="btn primary-btn">
                        Login
                      </Link>
                    </div>
                    <div className="frgot-btn">
                      <Link to="/forgot-password">Forget Your Password? </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
