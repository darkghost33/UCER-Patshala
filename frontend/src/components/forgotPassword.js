import React, { Component } from "react";
import '../css/auth_css.css'

export default class forgotPassword extends Component {
    render()
    {
        return (
          <div className="App">
        <div className="auth-wrapper">
          <div className="auth-inner">
            <form onSubmit={this.handleSubmit}>
        <h3>Forgot Password</h3>

        <div className="mb-3">
          <label>Email address</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
            required
            onChange={(e) => this.setState({ email: e.target.value })}
          />
        </div>

        <div className="d-grid">
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
        <p className="forgot-password text-right">
          New User <a href="/sign-up">Sign Up?</a>
        </p>
      </form>
      </div>
      </div>
      </div>
        )
    }
}