import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

export default function AddNewPdf() {
  const [pdfFile, setPdfFile] = useState(null);
  const [branch, setBranch] = useState("");
  const [year, setYear] = useState("");
  const [subject, setSubject] = useState("");
  const [unit, setUnit] = useState("");
  console.log(pdfFile, branch, year, subject, unit);
  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append("pdfFile", pdfFile);
    formData.append("branch", branch);
    formData.append("year", year);
    formData.append("subject", subject);
    formData.append("unit", unit);
    console.log(formData);

    fetch("http://localhost:5000/addPdf", {
      method: "POST",
      crossDomain: true,
    //   headers: {
    //     "Content-Type": "application/json",
    //     "Access-Control-Allow-Origin": "*",
    //   },
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        if (data.status === "ok") {
          alert("New Pdf added Successfully");
          window.location.href = "./userData";
        } else {
          alert("Pdf file already exists!!");
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="App">
      <div className="auth-wrapper">
        <div className="auth-inner" style={{ position: "relative" }}>
          <Link to="/userData" style={{ textDecoration: "none" }}>
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
                <label
                  style={{
                    border: "2px solid red",
                    display: "block",
                    textAlign: "center",
                  }}
                >
                  PDF File:
                </label>
                <input
                  className="btn btn-primary"
                  type="file"
                  id="pdfFile"
                  name="pdfFile"
                  accept=".pdf"
                  onChange={(e) => {
                    setPdfFile(e.target.files[0]);
                    console.log(e.target.files);
                  }}
                />
              </div>
              <div>
                <label>Branch:</label>
                <select
                  id="branch-select"
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
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                />
              </div>
              <div>
                <label>Unit:</label>
                <select
                  id="unit-select"
                  value={unit}
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
                Upload
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
