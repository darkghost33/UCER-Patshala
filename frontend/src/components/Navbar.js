import React from 'react';
import '../css/navbar.css'
const Navbar = () => {
  return (
    <div>
      <nav>
        <div className="wraper">
          <div className="logo"><a href="/"><img src='./images/logo.png' alt='img'></img></a></div>
          <input type="radio" name="slider" id="menu-btn" />
          <input type="radio" name="slider" id="close-btn" />
          <ul className="nav-links">
            <label htmlFor="close-btn" className="btn close-btn"><i className="fas fa-times"></i></label>
            <li><a href="/">Home</a></li>
            <li><a href="/">About</a></li>
            <li>
              <a href="/" className="desktop-item">YEAR</a>
              <input type="checkbox" id="showDrop" />
              <label htmlFor="showDrop" className="mobile-item">YEAR</label>
              <ul className="drop-menu">
                <li><a href="/">FIRST YEAR</a></li>
                <li><a href="/">SECOND YEAR</a></li>
                <li><a href="/">THIRD YEAR</a></li>
                <li><a href="/">FOURTH YEAR</a></li>
              </ul>
            </li>
            <li>
              <a href="/" className="desktop-item">COURSES</a>
              <input type="checkbox" id="showMega" />
              <label htmlFor="showMega" className="mobile-item">COURSES</label>
              <div className="mega-box">
                <div className="content">
                  <div className="row">
                    <img src="img.png" alt="" />
                  </div>
                  <div className="row">
                    <header>Design Services</header>
                    <ul className="mega-links">
                      <li><a href="/">Graphics</a></li>
                      <li><a href="/">Vectors</a></li>
                      <li><a href="/">Business cards</a></li>
                      <li><a href="/">Custom logo</a></li>
                    </ul>
                  </div>
                  <div className="row">
                    <header>Email Services</header>
                    <ul className="mega-links">
                      <li><a href="/">Personal Email</a></li>
                      <li><a href="/">Business Email</a></li>
                      <li><a href="/">Mobile Email</a></li>
                      <li><a href="/">Web Marketing</a></li>
                    </ul>
                  </div>
                  <div className="row">
                    <header>Security services</header>
                    <ul className="mega-links">
                      <li><a href="/">Site Seal</a></li>
                      <li><a href="/">VPS Hosting</a></li>
                      <li><a href="/">Privacy Seal</a></li>
                      <li><a href="/">Website design</a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </li>
            <li><a href="/">Feedback</a></li>
          </ul>
          <label htmlFor="menu-btn" className="btn menu-btn"><i className="fas fa-bars"></i></label>
        </div>
      </nav>

      
    </div>
  );
};

export default Navbar;
