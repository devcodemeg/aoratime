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
                        <label for="">Email </label>
                        <div class="authinput-wthicon authinput-email">
                          <input type="text" placeholder="example@gmail.com" />
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
                      <div class="single-input">
                        <label for="">Password</label>
                        <div class="authinput-wthicon authinput-email">
                          <input type="password" placeholder="*********" />
                          <div className="auth-icon pswrd-icon-1">
                            <span>
                              <svg width="15" height="19" viewBox="0 0 15 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M11.7647 6.89416H11.4529V5.07063C11.4529 3.90524 10.99 2.78758 10.1659 1.96352C9.34188 1.13946 8.22422 0.676514 7.05882 0.676514C5.89343 0.676514 4.77577 1.13946 3.95171 1.96352C3.12766 2.78758 2.66471 3.90524 2.66471 5.07063V6.89416H2.35294C1.7289 6.89416 1.13042 7.14206 0.68916 7.58332C0.247898 8.02458 0 8.62306 0 9.2471V15.9706C0 16.5947 0.247898 17.1931 0.68916 17.6344C1.13042 18.0757 1.7289 18.3236 2.35294 18.3236H11.7647C12.3887 18.3236 12.9872 18.0757 13.4285 17.6344C13.8697 17.1931 14.1176 16.5947 14.1176 15.9706V9.2471C14.1176 8.62306 13.8697 8.02458 13.4285 7.58332C12.9872 7.14206 12.3887 6.89416 11.7647 6.89416ZM3.84118 5.07063C3.84118 4.64808 3.9244 4.22967 4.08611 3.83929C4.24781 3.44891 4.48482 3.0942 4.7836 2.79541C5.08239 2.49662 5.4371 2.25961 5.82748 2.09791C6.21787 1.93621 6.63628 1.85298 7.05882 1.85298C7.48137 1.85298 7.89978 1.93621 8.29016 2.09791C8.68055 2.25961 9.03526 2.49662 9.33404 2.79541C9.63283 3.0942 9.86984 3.44891 10.0315 3.83929C10.1932 4.22967 10.2765 4.64808 10.2765 5.07063V6.89416H3.84118V5.07063ZM12.9412 15.9706C12.9412 16.2826 12.8172 16.5819 12.5966 16.8025C12.376 17.0232 12.0767 17.1471 11.7647 17.1471H2.35294C2.04092 17.1471 1.74168 17.0232 1.52105 16.8025C1.30042 16.5819 1.17647 16.2826 1.17647 15.9706V9.2471C1.17647 8.93508 1.30042 8.63584 1.52105 8.41521C1.74168 8.19458 2.04092 8.07063 2.35294 8.07063H11.7647C12.0767 8.07063 12.376 8.19458 12.5966 8.41521C12.8172 8.63584 12.9412 8.93508 12.9412 9.2471V15.9706Z" fill="#0388A6" />
                                <path d="M7.05964 10.6331C6.83142 10.6331 6.60842 10.7013 6.41921 10.8289C6.23 10.9565 6.08321 11.1378 5.99765 11.3493C5.91208 11.5609 5.89164 11.7932 5.93895 12.0165C5.98626 12.2397 6.09915 12.4438 6.26317 12.6025V13.9972C6.26317 14.1532 6.32515 14.3028 6.43546 14.4131C6.54578 14.5234 6.6954 14.5854 6.85141 14.5854H7.26788C7.42389 14.5854 7.57351 14.5234 7.68382 14.4131C7.79414 14.3028 7.85611 14.1532 7.85611 13.9972V12.6025C8.02013 12.4438 8.13303 12.2397 8.18034 12.0165C8.22764 11.7932 8.20721 11.5609 8.12164 11.3493C8.03608 11.1378 7.88928 10.9565 7.70008 10.8289C7.51087 10.7013 7.28786 10.6331 7.05964 10.6331Z" fill="#0388A6" />
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
                        <Link to="/forgot-password">Forget Your Password?  </Link>
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
