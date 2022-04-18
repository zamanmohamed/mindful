import React, { useEffect, useState } from "react";
import axios from "axios";
import EditItemBody from "./EditItemBody";
import { useNavigate } from "react-router-dom";

const AdminProfile = () => {
  const [users, setsusers] = useState([]);

  const history = useNavigate();

  useEffect(() => {
    const sendRequest = async () => {
      const { data } = await axios.get(
        "http://localhost:5000/api/user/getallusers"
      );
      setsusers(data);
    };
    sendRequest();
  }, []);

  console.log(users);

  function Logout() {
    localStorage.clear();
    history("/");
  }

  return (
    <React.Fragment>
      <header id="main-header" className="py-2 bg-primary text-white">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <h1>
                <i className="fas fa-user"></i> User List
                <button className="btn btn-danger " onClick={Logout}>
                  Log Out
                </button>
              </h1>
            </div>
          </div>
        </div>
      </header>
      <div className="container ">
        <table className="table table-dark">
          <thead>
            <tr>
              <th>#</th>
              <th>Firstname</th>
              <th>lastname</th>
              <th>email</th>
              <th>password</th>
            </tr>
          </thead>
          {users.map((user) => (
            <EditItemBody u={user} />
          ))}
        </table>
      </div>
    </React.Fragment>
  );
};

export default AdminProfile;
