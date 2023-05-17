import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import LoadingScreen from "./LoadingScreen";

export default function UserHome() {
  const [pdfFile, setPdfFile] = useState("");
  const [branch, setBranch] = useState("");
  const [year, setYear] = useState("");
  const [subject, setSubject] = useState("");
  const [unit, setUnit] = useState("");
  const [loading, setLoading] = useState(false);

  const logOut = () => {
    window.localStorage.clear();
    window.location.href = "./sign-in";
  };

  console.log(pdfFile, branch, year, subject, unit);

  const handleSubmit = (event) => {
    event.preventDefault();
    setLoading(true);

    fetch("http://localhost:5000/getAllPdf", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        setLoading(false);
        setPdfFile(data.pdfFile);
      });
  };

  return loading ? (
    <LoadingScreen text="Loading..."></LoadingScreen>
  ) : (
    <div className="App">
      <div className="auth-wrapper">
        <div className="auth-inner" style={{ position: "relative" }}>
          <Link to="/" style={{ textDecoration: "none" }}>
            <FontAwesomeIcon
              icon={faArrowLeft}
              size="lg"
              style={{
                position: "absolute",
                top: 10,
                left: 15,
                fontSize: "24px",
                cursor: "pointer",
                textDecoration: "none",
                color: "black",
              }}
            ></FontAwesomeIcon>
          </Link>
          <form onSubmit={handleSubmit}>
            <div
              style={{
                width: "auto",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "10px",
                border: "2px solid green",
              }}
            >
              <div>
                <label>Branch:</label>
                <select
                  id="branch-select"
                  required
                  value={branch}
                  onChange={(e) => setBranch(e.target.value)}
                >
                  <option value="">Select a branch</option>
                  <option value="cs/it">CS/IT</option>
                  <option value="ec">EC</option>
                  <option value="ee">EE</option>
                  <option value="me">ME</option>
                </select>
              </div>
              <div>
                <label>Year:</label>
                <select
                  id="year-select"
                  required
                  value={year}
                  onChange={(e) => setYear(e.target.value)}
                >
                  <option value="">Select a year</option>
                  <option value="1st">1st</option>
                  <option value="2nd">2nd</option>
                  <option value="3rd">3rd</option>
                  <option value="4th">4th</option>
                </select>
              </div>
              <div>
                <label>Subject:</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  placeholder="Enter subject name"
                  required
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                />
              </div>
              <div>
                <label>Unit:</label>
                <select
                  id="unit-select"
                  value={unit}
                  required
                  onChange={(e) => setUnit(e.target.value)}
                >
                  <option value="">Select unit</option>
                  <option value="1st">1st</option>
                  <option value="2nd">2nd</option>
                  <option value="3rd">3rd</option>
                  <option value="4th">4th</option>
                  <option value="5th">5th</option>
                </select>
              </div>
              <button className="btn btn-primary" type="submit">
                View PDF
              </button>
              <button onClick={logOut} className="btn btn-primary">
                Log Out
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

// import React from "react";
// // import Pdf from "./Pdf";
// export default function UserHome({ userData }) {
//   const logOut = () => {
//     window.localStorage.clear();
//     window.location.href = "./sign-in";
//   };
//   return (
//     <div>
//       <nav className="navbar navbar-expand-lg bg-body-tertiary">
//         <div className="container-fluid">
//           <a className="navbar-brand" href="/">
//             UCER Pathshala
//           </a>
//           <div></div>
//           <div className="collapse navbar-collapse" id="navbarSupportedContent">
//             <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
//               <li className="nav-item">
//                 <a
//                   className="nav-link active"
//                   aria-current="page"
//                   href="/userData"
//                 >
//                   <i className="bi bi-person-circle"></i>
//                 </a>
//               </li>
//               <li className="nav-item dropdown text-dark">
//                 <a
//                   className="nav-link dropdown-toggle text-dark"
//                   href="/"
//                   role="button"
//                   data-bs-toggle="dropdown"
//                   aria-expanded="false"
//                 >
//                   {userData.email}
//                 </a>
//                 <ul className="dropdown-menu">
//                   <li>
//                     <a className="dropdown-item" href="/">
//                       Welcome {userData.fname}
//                     </a>
//                   </li>
//                   <li>
//                     <a className="dropdown-item" href="/">
//                       Courses
//                     </a>
//                   </li>
//                   <li>
//                     <a className="dropdown-item" href="/">
//                       Notes
//                     </a>
//                   </li>
//                   <li>
//                     <button onClick={logOut} className="btn btn-primary ms-3">
//                       Log Out
//                     </button>
//                   </li>
//                 </ul>
//               </li>
//             </ul>
//           </div>
//         </div>
//       </nav>
//       {/* <Pdf></Pdf> */}
//     </div>
//   );
// }
