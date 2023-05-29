import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar";
export default function AdminHome({ userData }) {
  const logOut = () => {
    window.localStorage.clear();
    window.location.href = "./sign-in";
  };
  return (
    <div className="App">
      <Navbar
        menuItems={["Home",]}
        loginText={`Welcome Admin ${userData.fname}`}
      ></Navbar>
      <div className="auth-wrapper">
        <div
          className="auth-inner"
          style={{
            width: "auto",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-around",
            alignItems: "center",
          }}
        >
          Name<h1>{userData.fname}</h1>
          Email<h1>{userData.email}</h1>
          <Link to={"/addNewUser"}>
            <button className="btn btn-primary">Add New User</button>
          </Link>
          <Link to={"/viewAllUser"}>
            <button className="btn btn-primary">View/Delete Users</button>
          </Link>
          <Link to={"/addNewPdf"}>
            <button className="btn btn-primary">Add New Pdf</button>
          </Link>
          <Link to={"/viewAllUploadedPdf"}>
            <button className="btn btn-primary">View/Delete Uploaded Pdfs</button>
          </Link>
          <button onClick={logOut} className="btn btn-primary">
            Log Out
          </button>
        </div>
      </div>
    </div>
  );
}
