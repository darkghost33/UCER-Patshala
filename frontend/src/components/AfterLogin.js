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
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid">
            <a className="navbar-brand" href="/">
              UCER Pathshala
            </a>
            <div></div>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="/userData">
                    <i class="bi bi-person-circle"></i>
                  </a>
                </li>
                <li className="nav-item dropdown text-dark">
                  <a
                    className="nav-link dropdown-toggle text-dark"
                    href="/"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    {this.state.userData.email}
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a className="dropdown-item" href="/">
                        Welcome {this.state.userData.fname}
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="/">
                        Courses
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="/">
                        Notes
                      </a>
                    </li>
                    <li>
                      <button
                        onClick={this.logOut}
                        className="btn btn-primary ms-3"
                      >
                        Log Out
                      </button>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        {/* <div>
          Name <h1>{this.state.userData.fname}</h1>
          Email <h1>{this.state.userData.email}</h1>
          <button onClick={this.logOut} className="btn btn-primary">
            Log Out
          </button>
        </div> */}
      </div>
    );
  }
}
