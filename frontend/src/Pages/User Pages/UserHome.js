
import React from "react";
import { Link } from "react-router-dom";
export default function UserHome({ userData }) {
  const logOut = () => {
    window.localStorage.clear();
    window.location.href = "./sign-in";
  };
  return (
    <div className="App">
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
         User - Name<h1>{userData.fname}</h1>
          Email<h1>{userData.email}</h1>
          {/* <Link to={"/addNewUser"}>
            <button className="btn btn-primary">Add New User</button>
          </Link>
          <Link to={"/viewAllUser"}>
            <button className="btn btn-primary">View/Delete Users</button>
          </Link>*/}
          <Link to={"/takeTest"}>
            <button className="btn btn-primary">Take Test</button>
          </Link> 
          <Link to={"/userFindPdf"}>
            <button className="btn btn-primary">Find/Download Subject Pdfs</button>
          </Link>
          <button onClick={logOut} className="btn btn-primary">
            Log Out
          </button>
        </div>
      </div>
    </div>
  );
}
