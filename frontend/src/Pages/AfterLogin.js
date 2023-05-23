import React, { useState, useEffect } from "react";
import AdminHome from "./Admin Pages/AdminHome";
import UserHome from "./User Pages/UserHome";
import LoadingScreen from "../components/LoadingScreen";

export default function AfterLoginPage() {
  const [userData, setUserData] = useState("");
  const [isAdmin, setIsAdmin] = useState(false);
  const [loading, setLoading] = useState(true);

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
        setTimeout(() => {
          setIsAdmin(data.data.userType === "Admin");
          setLoading(false);
          setUserData(data.data);
        }, 300);
        if (data.data === "Token Expired") {
          alert("Token Expired!! Please login again");
          window.localStorage.clear();
          window.location.href = "./";
        }
      });
  }, []);

  return loading ? (
    <LoadingScreen text="Loading"></LoadingScreen>
  ) : isAdmin ? (
    <AdminHome userData={userData} />
  ) : (
    <UserHome userData={userData} />
  );
}
