import React, { Component } from "react";

export default class afterLoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userData: "",
    };
  }

  componentDidMount() {
    fetch("http://localhost:5000/userData", {
      method: "POST",
      crossDomai: true,
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        token: window.localStorage.getItem("token"),
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "userData");
        this.setState({ userData: data.data });
        if (data.data == "Token Expired") {
          alert("Token Expired!! Please login again");
          window.localStorage.clear();
          window.location.href = "./";
        }
      });
  }

  logOut = () => {
    window.localStorage.clear();
    window.location.href = "./sign-in";
  };

  render() {
    return (
      <div>
        Name <h1>{this.state.userData.fname}</h1>
        Email <h1>{this.state.userData.email}</h1>
        <button onClick={this.logOut} className="btn btn-primary">
          Log Out
        </button>
      </div>
    );
  }
}

