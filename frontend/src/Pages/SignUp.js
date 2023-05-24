import React, { useState } from "react";
import "../css/auth_css.css";
export default function SignUp() {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userType, setUserType] = useState("");
  const [SecretKey, setSecretKey] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (userType === "Admin" && SecretKey !== "Admin") {
      alert("Invalid Secret Key for Admin User");
    } else {
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
          userType
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data, "userRegister");
          if (data.status === "ok") {
            alert("Registeration Successful");
            window.location.href = "./sign-in";
          } else {
            alert("User already exists.Try registering with another email.");
          }
        });
    }
  };

  return (
    <div className="App">
      <div className="auth-wrapper">
        <div className="auth-inner">
          <form onSubmit={handleSubmit}>
            <h3>Sign Up</h3>
            <div>
              Register As
              <input
                type="radio"
                name="UserType"
                value="User"
                required
                onChange={(e) => setUserType(e.target.value)}
              />
              User
              <input
                type="radio"
                name="UserType"
                value="Admin"
                required
                onChange={(e) => setUserType(e.target.value)}
              />
              Admin
            </div>
            {userType === "Admin" ? (
              <div className="mb-3">
                <label>Secret Key</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Secret Key"
                  required
                  onChange={(e) => setSecretKey(e.target.value)}
                />
              </div>
            ) : null}

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
                Sign Up
              </button>
            </div>
            <div className="d-flex justify-content-between">
              <p className="forgot-password">
                Back to <a href="/">Home</a>
              </p>
              <p className="forgot-password">
                Already registered <a href="/sign-in">sign in?</a>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}