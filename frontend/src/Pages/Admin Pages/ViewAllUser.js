import React, { useEffect, useState } from "react";
import "../../css/auth_css.css";

import { faTrash, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

export default function ViewAllUser() {
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/getAllUser", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        setData(data.data);
      });
    const filtered = data.filter(
      (i) =>
        i.fname.toLowerCase().includes(searchTerm.toLowerCase()) ||
        i.lname.toLowerCase().includes(searchTerm.toLowerCase()) ||
        i.email.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredData(filtered);
  }, [data, searchTerm]);

  const logOut = () => {
    window.localStorage.clear();
    window.location.href = "./sign-in";
  };

  const deleteUser = (id, name) => {
    console.log("delete user" + id);
    if (window.confirm(`Are you sure you want to delete ${name}`)) {
      fetch("http://localhost:5000/deleteUser", {
        method: "POST",
        crossDomain: true,
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify({
          userid: id,
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          alert(data.data);
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
            placeholder="Search by name or email"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />

          <table style={{ width: 500, border: "2px solid black" }}>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>UserType</th>
              <th>Delete</th>
            </tr>
            {filteredData.map((i) => {
              return (
                <tr key={i._id} style={{ border: "2px solid black" }}>
                  <td>{`${i.fname} ${i.lname}`}</td>
                  <td>{i.email}</td>
                  <td>{i.userType}</td>
                  <td>
                    <FontAwesomeIcon
                      icon={faTrash}
                      style={{
                        cursor: "pointer",
                      }}
                      onClick={() => deleteUser(i._id, i.fname)}
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
