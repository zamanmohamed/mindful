import React from "react";
import "./MainUI.css";
import { Link } from "react-router-dom";

const MainUI = () => {
  return (
    <div className=" container">
      <center>
        <h1>
          <b>SELECT USER TYPE</b>
        </h1>
      </center>
      <div className="row">
        <div className="col">
          <header className="boxes box-row bg-primary text-white">
            <div className="container">
              <div className=" row">
                <div className="col">
                  <h1 className="box-padding">
                    <center>
                      <div>
                        <i className="fas fa-user"></i>
                      </div>
                      Admin
                      <div>
                        <Link to="/adminlogin">
                          <button type="button" className="btn btn-danger">
                            Login
                          </button>
                        </Link>
                      </div>
                    </center>
                  </h1>
                </div>
              </div>
            </div>
          </header>
        </div>
        <div className="col">
          <header className="boxes box-row bg-primary text-white">
            <div className="container">
              <div className="row">
                <div className="col">
                  <h1 className="box-padding">
                    <center>
                      <div>
                        <i className="fas fa-user"></i>
                      </div>{" "}
                      User
                      <div>
                        <Link to="/userlogin">
                          <button type="button" className="btn btn-danger">
                            Login
                          </button>
                        </Link>
                        <Link to="/userregister">
                          <button type="button" className="btn btn-danger">
                            Register
                          </button>
                        </Link>
                      </div>
                    </center>
                  </h1>
                </div>
              </div>
            </div>
          </header>
        </div>
      </div>
    </div>
  );
};

export default MainUI;
