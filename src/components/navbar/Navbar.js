import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "../../images/logo-transparent.svg";

function Navbar() {
  const [click, setClick] = useState(false);

  function handleClick() {
    setClick(!click);

    const navMenu = document.querySelector(".nav-menu");

    const navLinksCon = document.querySelector(".nav-mobile-links-container");

    if (!click) {
      navMenu.style.width = "100%";
      navMenu.style.left = "0px";
      navLinksCon.style.opacity = "1";
      navMenu.style.transitionDelay = "0s";

    } else {
      navMenu.style.left = "-100px";
      navMenu.style.width = "0%";
      navMenu.style.transitionDelay = ".4s";
      navLinksCon.style.transitionDelay = "0s";
      navLinksCon.style.opacity = "0";

    }
  }


  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="menu-icon" onClick={handleClick}>
          <svg className="close"
            width="24px"
            height="18px"
            viewBox="0 0 24 24"
            className={!click ? "hidden" : "main-header__btn--close"}
          >
            <rect
              fill="currentColor"
              x="-4.2"
              y="11.3"
              transform="matrix(0.7071 -0.7071 0.7071 0.7071 -4.9706 12)"
              width="32.4"
              height="1.5"
            ></rect>
            <rect
              fill="currentColor"
              x="11.3"
              y="-4.2"
              transform="matrix(0.7071 -0.7071 0.7071 0.7071 -4.9706 12)"
              width="1.5"
              height="32.4"
            ></rect>
          </svg>

          <svg
            width="24px"
            height="18px"
            viewBox="0 0 24 18"
            className={!click ? "main-header__btn--open" : "hidden"}
          >
            <rect fill="currentColor" x="0" width="24" height="1"></rect>
            <rect
              fill="currentColor"
              x="0"
              y="8.5"
              width="24"
              height="1"
            ></rect>
            <rect fill="currentColor" x="0" y="17" width="24" height="1"></rect>
          </svg>
        </div>
        <ul className="navbar__desktop-links">
          <Link to="/food-and-drink" className="desktop-links">
            Food & Drink
          </Link>
          <Link to="/shisha" className="desktop-links">
            Shisha
          </Link>
          <Link to="/about" className="desktop-links">
            History
          </Link>
        </ul>
        <Link to="/" className="navbar-logo" >
          <img src={logo} alt="logo" />
        </Link>
        <ul className="navbar__desktop-links">
          <Link to="/live-music" className="desktop-links">
            Live Music
          </Link>
          <Link to="/contact" className="desktop-links">
            Contact
          </Link>
          <a target="_blank" href="https://www.instagram.com/borshtchntears/"
          className="desktop-links "
        >
            <svg
                  style={{ marginTop: "8px"}}
                  width="30px"
                  height="30px"
                  viewBox="0 0 35 35"
                >
                  <path
                    fill="#000"
                    d="M17.5,35C7.9,35,0,27.1,0,17.5S7.9,0,17.5,0S35,7.9,35,17.5S27.1,35,17.5,35z M17.5,1C8.4,1,1,8.4,1,17.5 C1,26.6,8.4,34,17.5,34S34,26.6,34,17.5C34,8.4,26.6,1,17.5,1z"
                  ></path>
                  <path
                    fill="#000"
                    d="M24.2,20.8c0,1.9-1.5,3.4-3.4,3.4h-6.7 c-1.9,0-3.4-1.5-3.4-3.4v-6.7c0-1.9,1.5-3.4,3.4-3.4h6.7c1.9,0,3.4,1.5,3.4,3.4V20.8z M20.8,9.5h-6.7c-2.6,0-4.6,2.1-4.6,4.6v6.7 c0,2.6,2.1,4.6,4.6,4.6h6.7c2.6,0,4.6-2.1,4.6-4.6v-6.7C25.4,11.6,23.4,9.5,20.8,9.5L20.8,9.5z"
                  ></path>
                  <path
                    fill="#000"
                    d="M17.5,20.5c-1.7,0-3-1.4-3-3c0-1.7,1.4-3,3-3 c1.7,0,3,1.4,3,3C20.5,19.1,19.1,20.5,17.5,20.5 M17.5,13.2c-2.4,0-4.3,1.9-4.3,4.3s1.9,4.3,4.3,4.3s4.3-1.9,4.3-4.3 S19.8,13.2,17.5,13.2"
                  ></path>
                  <path
                    fill="#000"
                    d="M21.8,12.5c0.3,0,0.6,0.3,0.6,0.6 c0,0.3-0.3,0.6-0.6,0.6c-0.3,0-0.6-0.3-0.6-0.6C21.2,12.8,21.5,12.5,21.8,12.5"
                  ></path>
                </svg>
        </a>
        </ul>
        <a target="_blank" href="https://www.instagram.com/borshtchntears/"
          className="nav-links-mobile nav-insta-mobile"
        >
            <svg
                  style={{ marginRight: "20px"}}
                  width="30px"
                  height="30px"
                  viewBox="0 0 35 35"
                >
                  <path
                    fill="#000"
                    d="M17.5,35C7.9,35,0,27.1,0,17.5S7.9,0,17.5,0S35,7.9,35,17.5S27.1,35,17.5,35z M17.5,1C8.4,1,1,8.4,1,17.5 C1,26.6,8.4,34,17.5,34S34,26.6,34,17.5C34,8.4,26.6,1,17.5,1z"
                  ></path>
                  <path
                    fill="#000"
                    d="M24.2,20.8c0,1.9-1.5,3.4-3.4,3.4h-6.7 c-1.9,0-3.4-1.5-3.4-3.4v-6.7c0-1.9,1.5-3.4,3.4-3.4h6.7c1.9,0,3.4,1.5,3.4,3.4V20.8z M20.8,9.5h-6.7c-2.6,0-4.6,2.1-4.6,4.6v6.7 c0,2.6,2.1,4.6,4.6,4.6h6.7c2.6,0,4.6-2.1,4.6-4.6v-6.7C25.4,11.6,23.4,9.5,20.8,9.5L20.8,9.5z"
                  ></path>
                  <path
                    fill="#000"
                    d="M17.5,20.5c-1.7,0-3-1.4-3-3c0-1.7,1.4-3,3-3 c1.7,0,3,1.4,3,3C20.5,19.1,19.1,20.5,17.5,20.5 M17.5,13.2c-2.4,0-4.3,1.9-4.3,4.3s1.9,4.3,4.3,4.3s4.3-1.9,4.3-4.3 S19.8,13.2,17.5,13.2"
                  ></path>
                  <path
                    fill="#000"
                    d="M21.8,12.5c0.3,0,0.6,0.3,0.6,0.6 c0,0.3-0.3,0.6-0.6,0.6c-0.3,0-0.6-0.3-0.6-0.6C21.2,12.8,21.5,12.5,21.8,12.5"
                  ></path>
                </svg>
        </a>
        {/* <h3>MENU</h3> */}

        <ul className="nav-menu">
          <div className="nav-mobile-links-container">
            <li className="nav-item">
              <h2>
                Borscht N <br /> TEARS.
              </h2>
            </li>
            <li className="nav-item">
              <Link
                to="/"
                className="nav-links-mobile"
                onClick={handleClick}
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/about"
                className="nav-links-mobile"
                onClick={handleClick}
              >
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/shisha"
                className="nav-links-mobile"
                onClick={handleClick}
              >
                Shisha
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/contact"
                className="nav-links-mobile"
                onClick={handleClick}
              >
                Food & Drink
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/live-music"
                className="nav-links-mobile"
                onClick={handleClick}
              >
                Live Music
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/delivery"
                className="nav-links-mobile"
                onClick={handleClick}
              >
                Delivery
              </Link>
            </li>

            <li className="nav-item">
              <Link
                to="/contact"
                className="nav-links-mobile"
                onClick={handleClick}
              >
                Contact
              </Link>
            </li>
            <li className="nav-item socials">
              <Link
                to="/contact"
                className="nav-links-mobile"
                onClick={handleClick}
              >
                <svg
                  style={{ marginRight: "20px" }}
                  width="30px"
                  height="30px"
                  viewBox="0 0 35 35"
                >
                  <path
                    fill="currentColor"
                    d="M17.5,35C7.9,35,0,27.1,0,17.5S7.9,0,17.5,0S35,7.9,35,17.5S27.1,35,17.5,35z M17.5,1C8.4,1,1,8.4,1,17.5 C1,26.6,8.4,34,17.5,34S34,26.6,34,17.5C34,8.4,26.6,1,17.5,1z"
                  ></path>
                  <path
                    fill="currentColor"
                    d="M24.2,20.8c0,1.9-1.5,3.4-3.4,3.4h-6.7 c-1.9,0-3.4-1.5-3.4-3.4v-6.7c0-1.9,1.5-3.4,3.4-3.4h6.7c1.9,0,3.4,1.5,3.4,3.4V20.8z M20.8,9.5h-6.7c-2.6,0-4.6,2.1-4.6,4.6v6.7 c0,2.6,2.1,4.6,4.6,4.6h6.7c2.6,0,4.6-2.1,4.6-4.6v-6.7C25.4,11.6,23.4,9.5,20.8,9.5L20.8,9.5z"
                  ></path>
                  <path
                    fill="currentColor"
                    d="M17.5,20.5c-1.7,0-3-1.4-3-3c0-1.7,1.4-3,3-3 c1.7,0,3,1.4,3,3C20.5,19.1,19.1,20.5,17.5,20.5 M17.5,13.2c-2.4,0-4.3,1.9-4.3,4.3s1.9,4.3,4.3,4.3s4.3-1.9,4.3-4.3 S19.8,13.2,17.5,13.2"
                  ></path>
                  <path
                    fill="currentColor"
                    d="M21.8,12.5c0.3,0,0.6,0.3,0.6,0.6 c0,0.3-0.3,0.6-0.6,0.6c-0.3,0-0.6-0.3-0.6-0.6C21.2,12.8,21.5,12.5,21.8,12.5"
                  ></path>
                </svg>
              </Link>
              <Link
                to="/contact"
                className="nav-links-mobile"
                onClick={handleClick}
              >
                <svg width="30px" height="30px" viewBox="0 0 35 35">
                  <path
                    fill="currentColor"
                    d="M17.5,35C7.9,35,0,27.1,0,17.5S7.9,0,17.5,0S35,7.9,35,17.5S27.1,35,17.5,35z M17.5,1C8.4,1,1,8.4,1,17.5 C1,26.6,8.4,34,17.5,34S34,26.6,34,17.5C34,8.4,26.6,1,17.5,1z"
                  ></path>
                  <path
                    fill="currentColor"
                    d="M16,13.2v1.9h-1.5v2.4H16v7h3.1v-7h2.1 c0,0,0.2-1.1,0.3-2.4h-2.4v-1.6c0-0.2,0.3-0.6,0.7-0.6h1.7v-2.5h-2.3C15.9,10.5,16,12.9,16,13.2"
                  ></path>
                </svg>
              </Link>
            </li>
          </div>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
