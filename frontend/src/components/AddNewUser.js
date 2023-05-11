import React, { useState } from "react";
import { Link } from "react-router-dom";

import "../css/auth_css.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

export default function SignUp() {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const userType = "User";
  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(lname, fname, email, password);
    fetch("http://localhost:5000/register", {
      method: "POST",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        fname,
        lname,
        email,
        password,
        userType,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "userRegister");
        if (data.status === "ok") {
          alert("New User added Successfully");
          window.location.href = "./userData";
        } else {
          alert("User already exists.Try registering with another email.");
        }
      });
  };

  return (
    <div className="App">
      <div className="auth-wrapper">
        <div className="auth-inner" style={{ position: "relative" }}>
          <Link to="/userData" style={{ textDecoration: 'none' }}>
          <FontAwesomeIcon
            icon={faArrowLeft}
            size="lg"
            style={{
                position: "absolute",
                top: 10,
                left: 15,
                fontSize: "24px",
                cursor: "pointer",
                textDecoration:"none",
                color:"black"
            }}
            ></FontAwesomeIcon>
            </Link>
          <form onSubmit={handleSubmit}>
            <h3>Add New User</h3>

            <div className="mb-3">
              <label>First name</label>
              <input
                type="text"
                className="form-control"
                placeholder="First name"
                required
                onChange={(e) => setFname(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label>Last name</label>
              <input
                type="text"
                className="form-control"
                placeholder="Last name"
                required
                onChange={(e) => setLname(e.target.value)}
              />
            </div>

            <div className="mb-3">
              <label>Email address</label>
              <input
                type="email"
                className="form-control"
                placeholder="Enter email"
                required
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="mb-3">
              <label>Password</label>
              <input
                type="password"
                className="form-control"
                placeholder="Enter password"
                required
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <div className="d-grid">
              <button type="submit" className="btn btn-primary">
                Add
              </button>
            </div>
            <div className="d-flex justify-content-between"></div>
          </form>
        </div>
      </div>
    </div>
  );
}
