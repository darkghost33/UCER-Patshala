import React from "react";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Carousel from "./components/Carousel";
import Card from "./components/Card";
import TypeWriter from "./components/TypeWriter";

function Home() {
  return (
    <>
      <Navbar
        menuItems={["Home", "About", "WebCode","Contact"]}
        loginText="Login/SignUp"
      />
      <TypeWriter />
      <Carousel />
      <Card />
      <Footer />
    </>
  );
}

export default Home;
