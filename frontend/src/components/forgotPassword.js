import React, { useState } from "react";
import "../css/auth_css.css";

export default function ForgotPassword() {
  const [email, setemail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("http://localhost:5000/forgot-password", {
      method: "POST",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        email,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        alert(data.status);
        // console.log(email);
      });
  };

  return (
    <div className="App">
      <div className="auth-wrapper">
        <div className="auth-inner">
          <form onSubmit={handleSubmit}>
            <h3>Forgot Password</h3>

            <div className="mb-3">
              <label>Email address</label>
              <input
                type="email"
                className="form-control"
                placeholder="Enter email"
                required
                onChange={(e) => setemail(e.target.value)}
              />
            </div>

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
