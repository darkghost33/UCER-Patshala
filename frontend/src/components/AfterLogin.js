import React, { useState, useEffect } from "react";
import AdminHome from "./AdminHome";
import UserHome from "./UserHome";

export default function AfterLoginPage() {
  const [userData, setUserData] = useState("");
  const [Admin, setAdmin] = useState(false);

  useEffect(() => {
    fetch("http://localhost:5000/userData", {
      method: "POST",
      crossDomain: true,
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
        if (data.data.userType === "Admin") {
          setAdmin(true);
        }
        setUserData(data.data);
        if (data.data === "Token Expired") {
          alert("Token Expired!! Please login again");
          window.localStorage.clear();
          window.location.href = "./";
        }
      });
  }, []);

  return Admin ? (
    <AdminHome userData={userData}></AdminHome>
  ) : (
    <UserHome userData={userData}></UserHome>
  );
}
