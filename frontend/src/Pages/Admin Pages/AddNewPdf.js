import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import LoadingScreen from "../../components/LoadingScreen";
import { storage } from "../../Firebase";
import { ref, uploadBytes, getDownloadURL } from "@firebase/storage";
import { v4 } from "uuid";
import Navbar from "../../components/Navbar";

export default function AddNewPdf() {
  const [pdfFile, setPdfFile] = useState(null);
  const [branch, setBranch] = useState("");
  const [year, setYear] = useState("");
  const [subject, setSubject] = useState("");
  const [unit, setUnit] = useState("");
  const [loading, setLoading] = useState(false);

  console.log(pdfFile, branch, year, subject, unit);

  const handleSubmit = (event) => {
    event.preventDefault();
    setLoading(true);

    if (pdfFile === null) {
      return;
    }
    const pdfRef = ref(storage, `pdfs/${pdfFile.name + v4()}`);
    uploadBytes(pdfRef, pdfFile).then(() => {
      getDownloadURL(pdfRef).then((pdfUrl) => {
        console.log(pdfUrl);
        fetch("http://localhost:5000/addPdf", {
          method: "POST",
          crossDomain: true,
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
          },
          body: JSON.stringify({
            branch,
            year,
            subject,
            unit,
            pdfUrl,
          }),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data, "PDF DETAILS");
            if (data.status === "ok") {
              alert("Pdf Uploaded Successfully");
              window.location.href = "./userData";
            } else {
              alert("Some error occurred or your internet broke!!");
            }
          });
      });
      setLoading(false);
    });
  };

  return loading ? (
    <LoadingScreen text="Uploading please wait..."></LoadingScreen>
  ) : (
    <div className="App">
      <Navbar
        menuItems={["Home",]}
        loginText="Welcome Admin"
      ></Navbar>
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
                  required
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
                Upload
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
