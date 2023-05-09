import React, { useState } from "react";
import "../css/auth_css.css";

export default function Login(){
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const handleSubmit= (e) => {
    e.preventDefault();
    console.log(email, password);
    fetch("http://localhost:5000/login-user", {
      method: "POST",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "userRegister");
        if (data.status === "ok") {
          alert("Login Successful");
          window.localStorage.setItem("token", data.data);
          window.localStorage.setItem("loggedIn", true);
          window.location.href = "./userData";
        } else {
          alert("Wrong Password or Email");
        }
      });
  }


    return (
      <div className="App">
        <div className="auth-wrapper">
          <div className="auth-inner">
            <form onSubmit={handleSubmit}>
              <h3>Sign In</h3>

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

              <div className="mb-2">
                <label>Password</label>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Enter password"
                  required
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <p className="forgot-password text-right mb-3">
                <a href="/forgot-password">Forgot Password?</a>
              </p>

              <div className="d-grid">
                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
              </div>
              <div className="d-flex justify-content-between">
                <p className="forgot-password">
                  Back to <a href="/">Home</a>
                </p>
                <p className="forgot-password">
                  New User <a href="/sign-up">Sign Up?</a>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }