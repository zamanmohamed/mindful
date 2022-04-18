import React, { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "./AdminLogin.css";

const AdminLogin = () => {
  const emailRef = useRef("");
  const passwordRef = useRef("");
  //const [login, setlogin] = useState();

  const history = useNavigate();

  function submitHandler(event) {
    event.preventDefault();
    Login();
  }

  function Login() {
    axios
      .post("http://localhost:5000/api/admin/login/", {
        email: emailRef.current.value,
        password: passwordRef.current.value,
      })
      .then((res) => {
        if (res.status === 200) {
          //setlogin user details in to localStorage
          localStorage.setItem("AdminLoggedIn", true);
          localStorage.setItem("AdminID", res.data.id);
          localStorage.setItem("AdminName", res.data.name);
          localStorage.setItem("AdminEmail", res.data.email);

          history(`/adminprofile`);
        } else {
          alert("Login failed please try again");
        }
      });
  }

  return (
    <section>
      <div className="login-box-padding container">
        <div className="row ">
          <div className="col-md-6 mx-auto">
            <div className="card ">
              <div className="card-header ">
                <h4>Admin Login</h4>
              </div>
              <div className="card-body">
                <form onSubmit={submitHandler}>
                  <div className="form-group">
                    <label for="email">Email</label>
                    <input
                      type="text"
                      ref={emailRef}
                      className="form-control"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label for="password">Password</label>
                    <input
                      type="password"
                      ref={passwordRef}
                      className="form-control"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="submit"
                      value="Login"
                      className="btn btn-primary btn-block"
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdminLogin;
