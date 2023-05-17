import React, { useEffect, useState } from "react";
import "../css/auth_css.css";
import { storage } from "../Firebase.js";
import { ref, deleteObject } from "@firebase/storage";

import { faTrash, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

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

  const deletePdfEntry = (id, branch, year, subject, unit, pdfUrl) => {
    console.log("delete user" + id);
    if (
      window.confirm(
        `Are you sure you want to delete pdf of Branch - ${branch} , Year - ${year}, Subject - ${subject}, Unit - ${unit}`
      )
    ) {
      fetch("http://localhost:5000/deleteUploadedPdf", {
        method: "POST",
        crossDomain: true,
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify({
          pdfid: id,
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          alert(data.data);
          const fileRef = ref(storage, pdfUrl);
          deleteObject(fileRef)
            .then(() => {
              console.log("File deleted successfully");
              alert("Deleted file")
            })
            .catch((error) => {
              console.log("Error deleting file:", error);
            });
        });
    } else {
    }
  };

  return (
    <div className="App">
      <div className="auth-wrapper">
        <div
          className="auth-inner"
          style={{
            width: "auto",
            display: "flex",
            flexDirection: "column",
            position: "relative",
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

          <table style={{ width: 500, border: "2px solid black" }}>
            <tr>
              <th>Entry No.</th>
              <th>Branch</th>
              <th>Year</th>
              <th>Subject</th>
              <th>Unit</th>
              <th>Pdf Link</th>
              <th>Delete Pdf</th>
            </tr>
            {filteredData.map((i, index) => {
              return (
                <tr key={i._id} style={{ border: "2px solid black" }}>
                  <td>{index + 1}</td>
                  <td>{i.branch}</td>
                  <td>{i.year}</td>
                  <td>{i.subject}</td>
                  <td>{i.unit}</td>
                  <td>
                    <a href={i.pdfUrl}>Link to Pdf File</a>
                  </td>
                  <td>
                    <FontAwesomeIcon
                      icon={faTrash}
                      style={{
                        cursor: "pointer",
                      }}
                      onClick={() =>
                        deletePdfEntry(
                          i._id,
                          i.branch,
                          i.year,
                          i.subject,
                          i.unit,
                          i.pdfUrl
                        )
                      }
                    />
                  </td>
                </tr>
              );
            })}
          </table>
          <button onClick={logOut} className="btn btn-primary">
            Log Out
          </button>
        </div>
      </div>
    </div>
  );
}
