import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import MainUI from "./main_UI/MainUI";
import User from "./user/User";
import Admin from "./admin/Admin";
import UserLogin from "./user/UserLogin";
import AdminLogin from "./admin/AdminLogin";
import UserRegister from "./user/UserRegister";
import UserProfile from "./user/UserProfile";
import AdminProfile from "./admin/AdminProfile";
import UserProfileUpdate from "./user/UserProfileUpdate";
import EditUserByadmin from "./admin/EditUserByadmin";
//import 'bootstrap/dist/css/bootstrap.min.css';
//import { Container } from 'react-bootstrap';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<MainUI />} />

      {/* Admin routes */}
      <Route path="/admin" element={<Admin />} />
      <Route path="/adminlogin" element={<AdminLogin />} />
      <Route path="/adminprofile" element={<AdminProfile />} />
      <Route path="/edituser/:id" element={<EditUserByadmin />} />

      {/* user routes */}
      <Route path="/user" element={<User />} />
      <Route path="/userlogin" element={<UserLogin />} />
      <Route path="/userregister" element={<UserRegister />} />
      <Route path="/userprofile" element={<UserProfile />} />
      <Route path="/userprofileupdate" element={<UserProfileUpdate />} />
    </Routes>
  );
};

export default App;
