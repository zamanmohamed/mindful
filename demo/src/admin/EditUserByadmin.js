import React, { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useParams } from "react-router-dom";

const EditUserByadmin = () => {
  const [profile, setprofile] = useState();
  const [firstname, setfirstname] = useState();
  const [lastname, setlastname] = useState();
  const [email, setemail] = useState();
  const [password, setpassword] = useState();

  const id = useParams().id;

  const history = useNavigate();

  useEffect(() => {
    const sendRequest = async () => {
      const { data } = await axios.get(`http://localhost:5000/api/user/${id}`);
      setprofile(data[0]);
      setfirstname(data[0].Firstname);
      setlastname(data[0].lastname);
      setemail(data[0].email);
      setpassword(data[0].password);
      console.log(data);
    };
    sendRequest();
  }, []);

  async function updateProfle() {
    const response = await fetch(`http://localhost:5000/api/user/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        Firstname: firstname,
        lastname: lastname,
        email: email,
        password: password,
      }),
    });

    history("/adminprofile");
    //window.location.reload(false);
  }

  return (
    <React.Fragment>
      <header id="main-header" className="py-2 bg-primary text-white">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <h1>
                <i className="fas fa-user"></i> Single user update
              </h1>
            </div>
          </div>
        </div>
      </header>
      <br></br>
      <section id="profile">
        <div className="container">
          <div className="row">
            <div className="col-md-9">
              <div className="card">
                <div className="card-header">
                  <h4>Profile</h4>
                </div>
                <div className="card-body">
                  <form>
                    <div className="row">
                      <div className="form-group col">
                        <label for="name"> First Name</label>
                        <input
                          type="text"
                          value={firstname}
                          className="form-control"
                          onChange={(e) => {
                            firstname = setfirstname(e.target.value);
                          }}
                        />
                      </div>
                      <div className="form-group col">
                        <label for="name"> last Name</label>
                        <input
                          type="text"
                          value={lastname}
                          className="form-control"
                          onChange={(e) => {
                            lastname = setlastname(e.target.value);
                          }}
                        />
                      </div>
                    </div>
                    <div className="form-group">
                      <label for="email">Email</label>
                      <input
                        value={email}
                        type="email"
                        className="form-control"
                        readOnly
                      />
                      <div className="form-group">
                        <label for="email">Password</label>

                        <input
                          value={password}
                          type="text"
                          className="form-control"
                          onChange={(e) => {
                            password = setpassword(e.target.value);
                          }}
                        />
                      </div>
                    </div>
                  </form>{" "}
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <h3>User: {lastname} </h3>
              <img
                // src={require("url:./img/avatar.png")}
                alt=""
                className="d-block img-fluid mb-3"
              />
              <button
                className="btn btn-primary btn-block"
                onClick={updateProfle}
              >
                update user
              </button>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default EditUserByadmin;
