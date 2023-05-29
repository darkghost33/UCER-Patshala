import React from "react";
import "../css/navbar.css";
import {
  faXmark,
  faBars,
  faCode,
  faHome,
  faAddressCard,
  faPersonRays,
  faCircleUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Navbar = (props) => {
  const { menuItems, loginText } = props;
  const menuIcons = {
    WebCode: <FontAwesomeIcon icon={faCode} />,
    Home: <FontAwesomeIcon icon={faHome} />,
    About: <FontAwesomeIcon icon={faPersonRays} />,
    Contact: <FontAwesomeIcon icon={faAddressCard} />,
  };
  return (
    <div>
      <nav>
        <div className="wraper">
          <div className="logo">
            <a href="/">
              <img src="./images/logo.png" alt="img"></img>
            </a>
          </div>
          <input type="radio" name="slider" id="menu-btn" />
          <input type="radio" name="slider" id="close-btn" />
          <ul className="nav-links">
            <label htmlFor="close-btn" className="btn close-btn">
              <FontAwesomeIcon icon={faXmark} />
            </label>
            {menuItems.map((item, index) => (
              <li key={index}>
                {item === "WebCode" ? (
                  <a href="/webCode">
                    {menuIcons[item]} {item}
                  </a>
                ) : item === "Home" ? (
                  <a href="/">
                    {menuIcons[item]} {item}
                  </a>
                ) : item === "About" ? (
                  <a href="/">
                    {menuIcons[item]} {item}
                  </a>
                ) : item === "Contact" ? (
                  <a href="/">
                    {menuIcons[item]} {item}
                  </a>
                ) : (
                  <a href="/">{item}</a>
                )}
              </li>
            ))}
            <li>
              <a href="/sign-in">
                {loginText && (
                  <FontAwesomeIcon icon={faCircleUser}></FontAwesomeIcon>
                )}
                {loginText && " "}
                {loginText}
              </a>
            </li>
          </ul>
          <label htmlFor="menu-btn" className="btn menu-btn">
            <FontAwesomeIcon icon={faBars} style={{ color: "#E95908" }} />
          </label>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
