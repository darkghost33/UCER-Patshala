
import React from "react";
import { Link } from "react-router-dom";

export default function UserHome({ userData }) {
  const logOut = () => {
    window.localStorage.clear();
    window.location.href = "./sign-in";
  };
  return (
    <div className="auth-wrapper">
      <div className="auth-inner">
        <div
          className=""
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
          <Link to={"/takeTest"}>
            <button className="btn btn-primary">Take Test</button>
          </Link> 
          <Link to={"/notes"}>
            <button className="btn btn-primary">Notes</button>
          </Link>
          <Link to={"/userFindAllPdf"}>
            <button className="btn btn-primary">View & Search All Pdf</button>
          </Link>
          <Link to={"/webCode"}>
            <button className="btn btn-primary">WebCode Editor</button>
          </Link>
          <button onClick={logOut} className="btn btn-primary">
            Log Out
          </button>
        </div>
      </div>
    </div>
  );
}

