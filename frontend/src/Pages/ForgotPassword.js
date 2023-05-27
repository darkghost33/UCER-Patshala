import React, { useState } from "react";
import "../css/auth_css.css";
import { toast, ToastContainer } from "../components/Toastify";
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
        if (data.status === "ok") {
        toast.success(`"Reset link sent to ${email}"`);
        // alert(data.status);
        }
        else if(data.status === "User does not exist!!"){
          toast.error("User does not exist!!");
        }
        else{
          toast.error("Something went wrong");
        }
        // console.log(email);
      });
  };

  return (
    <div className="App">
      <ToastContainer autoClose={1500} position="top-center" closeButton={false}></ToastContainer>
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
