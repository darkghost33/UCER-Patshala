import React, { useEffect, useState } from "react";
import "../../css/auth_css.css";

import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar";

export default function ViewAllUploadedPdf() {
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/getAllUploadedPdf", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        setData(data.data);
      });
    const filtered = data.filter(
      (i) =>
        i.branch.toLowerCase().includes(searchTerm.toLowerCase()) ||
        i.year.toLowerCase().includes(searchTerm.toLowerCase()) ||
        i.subject.toLowerCase().includes(searchTerm.toLowerCase()) ||
        i.unit.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredData(filtered);
  }, [data, searchTerm]);

  const logOut = () => {
    window.localStorage.clear();
    window.location.href = "./sign-in";
  };

  return (
    <div className="App">
      <Navbar
        menuItems={["Home", "About", "WebCode", "Contact"]}
        loginText="Welcome User"
      ></Navbar>
      <div className="auth-wrapper">
        <div
          className="auth-inner"
          style={{
            width: "auto",
            display: "flex",
            flexDirection: "column",
            position: "relative",
            marginTop: "200px",
          }}
        >
          <Link to={"/userData"} style={{ textDecoration: "none" }}>
            <FontAwesomeIcon
              icon={faArrowLeft}
              size="lg"
              style={{
                color: "black",
                top: 10,
                left: 15,
                position: "absolute",
              }}
            />
          </Link>
          <input
            type="text"
            placeholder="Search by Branch or Year or Subject or Unit here"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <table className="table table-borderless">
            <thead>
              <tr>
                <th scope="col">Entry No.</th>
                <th scope="col">Branch</th>
                <th scope="col">Year</th>
                <th scope="col">Subject</th>
                <th scope="col">Unit</th>
                <th scope="col">Pdf Preview</th>
                <th scope="col">Pdf Link</th>
              </tr>
            </thead>
            <tbody>
              {filteredData.map((i, index) => {
                return (
                  <tr key={i._id}>
                    <th scope="row">{index + 1}</th>
                    <td>{i.branch}</td>
                    <td>{i.year}</td>
                    <td>{i.subject}</td>
                    <td>{i.unit}</td>
                    <iframe title="preview" src={i.pdfUrl}></iframe>
                    <td>
                      <a href={i.pdfUrl}>Link to Pdf File</a>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          <button onClick={logOut} className="btn btn-primary">
            Log Out
          </button>
        </div>
      </div>
    </div>
  );
}

//Manual Search Code

// import React, { useState } from "react";
// import "../../css/auth_css.css";

// import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { Link } from "react-router-dom";

// export default function UserFindPdf() {
//   const [data, setData] = useState([]);
//   const [searchTerm, setSearchTerm] = useState("");
//   const [branch, setBranch] = useState("");
//   const [year, setYear] = useState("");
//   const [subject, setSubject] = useState("");
//   const [unit, setUnit] = useState("");

//   const handleSearch = (e) => {
//     e.preventDefault();
//     const searchQuery = new URLSearchParams({ branch, year, unit }).toString();
//     fetch(`http://localhost:5000/getAllUploadedPdf?${searchQuery}`, {
//       method: "GET",
//     })
//       .then((res) => res.json())
//       .then((data) => {
//         setData(data.data);
//       });
//   };

//   const logOut = () => {
//     window.localStorage.clear();
//     window.location.href = "./sign-in";
//   };

//   return (
//     <div className="App">
//       <div className="auth-wrapper">
//         <div
//           className="auth-inner"
//           style={{
//             width: "auto",
//             display: "flex",
//             flexDirection: "column",
//             position: "relative",
//           }}
//         >
//           <div>
//             <label>Search for pdf: </label>
//           </div>
//           <form onSubmit={handleSearch}>
//             <div
//               style={{
//                 width: "auto",
//                 display: "flex",
//                 alignItems: "center",
//                 gap: "10px",
//                 border: "2px solid green",
//               }}
//             >
//               <div>
//                 <label>Branch:</label>
//                 <select
//                   id="branch-select"
//                   value={branch}
//                   required
//                   onChange={(e) => setBranch(e.target.value)}
//                 >
//                   <option value="">Select a branch</option>
//                   <option value="cs/it">CS/IT</option>
//                   <option value="ec">EC</option>
//                   <option value="ee">EE</option>
//                   <option value="me">ME</option>
//                 </select>
//               </div>
//               <div>
//                 <label>Year:</label>
//                 <select
//                   id="year-select"
//                   value={year}
//                   required
//                   onChange={(e) => setYear(e.target.value)}
//                 >
//                   <option value="">Select a year</option>
//                   <option value="1st">1st</option>
//                   <option value="2nd">2nd</option>
//                   <option value="3rd">3rd</option>
//                   <option value="4th">4th</option>
//                 </select>
//               </div>
//               <div>
//                 <label>Subject:</label>
//                 <input
//                   type="text"
//                   id="subject"
//                   name="subject"
//                   placeholder="Enter subject name"
//                   value={subject}
//                   onChange={(e) => setSubject(e.target.value)}
//                 />
//               </div>
//               <div>
//                 <label>Unit:</label>
//                 <select
//                   id="unit-select"
//                   value={unit}
//                   onChange={(e) => setUnit(e.target.value)}
//                 >
//                   <option value="">Select unit</option>
//                   <option value="1st">1st</option>
//                   <option value="2nd">2nd</option>
//                   <option value="3rd">3rd</option>
//                   <option value="4th">4th</option>
//                   <option value="5th">5th</option>
//                 </select>
//               </div>
//               <button className="btn btn-primary" type="submit">
//                 Search
//               </button>
//             </div>
//           </form>
//           <Link to={"/userData"} style={{ textDecoration: "none" }}>
//             <FontAwesomeIcon
//               icon={faArrowLeft}
//               size="lg"
//               style={{
//                 color: "black",
//                 top: 10,
//                 left: 15,
//                 position: "absolute",
//               }}
//             />
//           </Link>
//           <input
//             type="text"
//             placeholder="Search the result by Branch or Year or Subject or Unit"
//             value={searchTerm}
//             onChange={(e) => setSearchTerm(e.target.value)}
//           />

//           <table style={{ width: "auto", border: "2px solid black" }}>
//             <tr>
//               <th>Entry No.</th>
//               <th>Branch</th>
//               <th>Year</th>
//               <th>Subject</th>
//               <th>Unit</th>
//               <th>Pdf Preview</th>
//               <th>Pdf Link</th>
//             </tr>
//             {data
//               .filter(
//                 (item) =>
//                   item.branch
//                     .toLowerCase()
//                     .includes(searchTerm.toLowerCase()) ||
//                   item.year.toLowerCase().includes(searchTerm.toLowerCase()) ||
//                   item.subject
//                     .toLowerCase()
//                     .includes(searchTerm.toLowerCase()) ||
//                   item.unit.toLowerCase().includes(searchTerm.toLowerCase())
//               )
//               .map((i, index) => {
//                 return (
//                   <tr key={i._id} style={{ border: "2px solid black" }}>
//                     <td>{index + 1}</td>
//                     <td>{i.branch}</td>
//                     <td>{i.year}</td>
//                     <td>{i.subject}</td>
//                     <td>{i.unit}</td>
//                     <td>
//                       <iframe title="pdfview" src={i.pdfUrl}></iframe>
//                     </td>
//                     <td>
//                       <a href={i.pdfUrl}>Pdf Link</a>
//                     </td>
//                   </tr>
//                 );
//               })}
//           </table>
//           <button onClick={logOut} className="btn btn-primary">
//             Log Out
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }
