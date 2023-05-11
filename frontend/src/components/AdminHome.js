import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../css/auth_css.css";

import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function AdminHome({ userData }) {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/getAllUser", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        setData(data.data);
      });
  });

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
        <div className="auth-inner" style={{ width: "auto" }}>
          Name<h1>{userData.fname}</h1>
          Email<h1>{userData.email}</h1>
          <Link to={"/addNewUser"}>
            <button className="btn btn-primary">Add New User</button>
          </Link>
          <table style={{ width: 500, border: "2px solid black" }}>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>UserType</th>
              <th>Delete</th>
            </tr>
            {data.map((i) => {
              return (
                <tr style={{ border: "2px solid black" }}>
                  <td>{`${i.fname} ${i.lname}`}</td>
                  <td>{i.email}</td>
                  <td>{i.userType}</td>
                  <td>
                    <FontAwesomeIcon
                      icon={faTrash}
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
