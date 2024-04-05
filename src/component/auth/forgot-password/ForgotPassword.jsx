import React from "react";
import { Link } from "react-router-dom";
import { ForgotImage, Logo, LogoLeft } from "../../../assets/images";

const ForgotPassword = () => {
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
                    <img src={ForgotImage} />
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
                      <h3>Forgot password</h3>
                      <p>No worries, we will send you reset instructions</p>
                    </div>
                    <div class="single-input">
                      <label for="">Email </label>
                      <div class="authinput-wthicon authinput-email">
                      <input type="number" placeholder="example@gmail.com" />
                      <div className="auth-icon">
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
                    <div class="login-btn">
                      <Link to="/" class="btn primary-btn">
                      Reset password
                      </Link>
                    </div>
                    <div class="back-btn">
                      <Link to="/">
                        <span className="back-icon">
                          <svg
                            width="12"
                            height="12"
                            viewBox="0 0 12 12"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M5.6962 12L0 6L5.6962 0L6.71084 1.05L2.7235 5.25H11.3924V6.75H2.7235L6.71084 10.95L5.6962 12Z"
                              fill="#0388A6"
                            />
                          </svg>
                        </span>
                        <span>Back to login</span>
                      </Link>
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

export default ForgotPassword;
