import React, { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const UserRegister = () => {
  const Firstname = useRef("");
  const lastname = useRef("");
  const emailRef = useRef("");
  const passwordRef = useRef("");

  const history = useNavigate();

  function submitHandler(event) {
    event.preventDefault();
    addUser();
  }

  async function addUser() {
    axios
      .post("http://localhost:5000/api/user/register", {
        Firstname: Firstname.current.value,
        lastname: lastname.current.value,
        email: emailRef.current.value,
        password: passwordRef.current.value,
      })
      .then((res) => {
        if (res.status === 201) {
          localStorage.setItem("userLoggedIn", true);
          localStorage.setItem("userID", res.data.id);
          localStorage.setItem("userFirstname", res.data.Firstname);
          localStorage.setItem("userlastname", res.data.lastname);
          localStorage.setItem("userEmail", res.data.email);

          history(`/userprofile`);
          //location.reload();
        } else {
          alert("Your Email is already used");
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
                <h4>User Register</h4>
              </div>
              <div className="card-body">
                <form onSubmit={submitHandler}>
                  <div className="row">
                    <div className="form-group col">
                      <label for="name"> First Name</label>
                      <input
                        type="text"
                        ref={Firstname}
                        className="form-control"
                        required
                      />
                    </div>
                    <div className="form-group col">
                      <label for="name"> last Name</label>
                      <input
                        type="text"
                        ref={lastname}
                        className="form-control"
                        required
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <label for="email">Email</label>
                    <input
                      type="email"
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
                      value="Register"
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

export default UserRegister;
