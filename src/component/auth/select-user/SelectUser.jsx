import React from "react";
import { Logo, SelectImage } from "../../../assets/images";
import { Link } from "react-router-dom";
import Select from "react-select";

const SelectUser = () => {
  const optionsIdType = [
    { value: "Adhar Card", label: "Adhar Card" },
    { value: "License", label: "License" },
  ];
  const optionsId1Type = [
    { value: "Adhar Card", label: "Adhar Card" },
    { value: "License", label: "License" },
  ];
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
                      <img src={SelectImage} />
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
                        <h3>Select user</h3>
                        <p>No worries, we will send you reset instructions</p>
                      </div>
                      <div className="select-main">
                        <div className="form-inputs100">
                          <label for=""> Customer</label>
                          <div className="select-box">
                            <Select
                              options={optionsIdType}
                              placeholder={<div>Select</div>}
                            />
                          </div>
                        </div>
                        <div className="form-inputs100">
                          <label for="">Object</label>
                          <div className="select-box">
                            <Select
                              options={optionsId1Type}
                              placeholder={<div>Select </div>}
                            />
                          </div>
                        </div>
                      </div>
                      <div class="login-btn">
                        <Link to="/" class="btn primary-btn">
                          Next
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

export default SelectUser;
