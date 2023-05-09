import React from "react";
// import Pdf from "./Pdf";
export default function UserHome({ userData }) {
  const logOut = () => {
    window.localStorage.clear();
    window.location.href = "./sign-in";
  };
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            UCER Pathshala
          </a>
          <div></div>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a
                  className="nav-link active"
                  aria-current="page"
                  href="/userData"
                >
                  <i className="bi bi-person-circle"></i>
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
                  {userData.email}
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="/">
                      Welcome {userData.fname}
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
                    <button onClick={logOut} className="btn btn-primary ms-3">
                      Log Out
                    </button>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {/* <Pdf></Pdf> */}
    </div>
  );
}
