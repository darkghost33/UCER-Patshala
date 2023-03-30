import React, { Component } from "react";
import '../css/auth_css.css'
export default class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fname: "",
      lname: "",
      email: "",
      password: "",
    };
    this.handleSubmit=this.handleSubmit.bind(this)
  }

  handleSubmit(e) {
    e.preventDefault();
    const{fname,lname,email,password} = this.state;
    console.log(lname,fname,email,password);
    fetch("http://localhost:5000/register",{
      method:"POST",
      crossDomai:true,
      headers:{
        "Content-Type":"application/json",
        "Access-Control-Allow-Origin":"*"
      },
      body: JSON.stringify({
        fname,lname,email,password
      })
    }).then((res)=>res.json())
    .then((data)=>{
      console.log(data,"userRegister");
      if(data.status == "ok")
    {
      alert("Registeration Successful");
      window.location.href = './sign-in'
    }
    })
  }

  render() {
    return (
      <div className="App">
        <div className="auth-wrapper">
          <div className="auth-inner">
      <form onSubmit={this.handleSubmit}>
        <h3>Sign Up</h3>

        <div className="mb-3">
          <label>First name</label>
          <input
            type="text"
            className="form-control"
            placeholder="First name"
            required
            onChange={(e) => this.setState({ fname: e.target.value })}
          />
        </div>

        <div className="mb-3">
          <label>Last name</label>
          <input
            type="text"
            className="form-control"
            placeholder="Last name"
            required
            onChange={(e) => this.setState({ lname: e.target.value })}
          />
        </div>

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

        <div className="mb-3">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
            required
            onChange={(e)=>this.setState({password: e.target.value})}
          />
        </div>

        <div className="d-grid">
          <button type="submit" className="btn btn-primary">
            Sign Up
          </button>
        </div>
        <p className="forgot-password">
          Already registered <a href="/sign-in">sign in?</a>
        </p>
      </form>
      </div>
      </div>
      </div>
    );
  }
}
