import React from "react";
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Carousel from './components/Carousel'
import Card from './components/Card'

function Home() {
  return (
    <>
      <Navbar />
      <Carousel />
      <Card />
      <Footer />
    </>
  );
}

export default Home;
