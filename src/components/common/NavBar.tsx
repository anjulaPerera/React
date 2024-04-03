import React, { useEffect } from "react";
import "../vendors/styles/core.css";
import "../vendors/styles/nav.css";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleDoubleRight,
  faAngleDown,
  faAngleRight,
  faArrowDown,
  faHeart,
  faHouse,
  faMessage,
  faRightFromBracket,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import Dp from "../vendors/images/photo4.jpg";
import a from "../vendors/images/a.jpg"

const NavBar: React.FC = () => {
  useEffect(() => {
    const menuOpen = document.querySelector(".menu");
    const menuClose = document.querySelector(".close");
    const overlay = document.querySelector(".overlay");

    const handleMenuOpen = () => {
      if (overlay) {
        overlay.classList.add("overlay--active");
      }
    };

    const handleMenuClose = () => {
      if (overlay) {
        overlay.classList.remove("overlay--active");
      }
    };

    if (menuOpen) {
      menuOpen.addEventListener("click", handleMenuOpen);
    }

    if (menuClose) {
      menuClose.addEventListener("click", handleMenuClose);
    }

    return () => {
      if (menuOpen) {
        menuOpen.removeEventListener("click", handleMenuOpen);
      }
      if (menuClose) {
        menuClose.removeEventListener("click", handleMenuClose);
      }
    };
  }, []);

  return (
    <>
      <header className="navBar">
        <a className="logo" href="/home">
          {<img src={a} alt="Logo" className="logo" />}
        </a>
        <nav>
                <ul className="nav__links">
                    <li><a href="#">Articles</a></li>
                    <li><a href="#">About</a></li>
                </ul>
            </nav>
            <a className="cta" href="#">Contact</a>
            <p className="menu cta">Menu</p>
        </header>
        <div id="mobile__menu" className="overlay">
            <a className="close">&times;</a>
            <div className="overlay__content">
                <a href="#">Articles</a>
                <a href="#">About</a>
                <a href="#">Contact</a>
            </div>
        </div>
    </>
  );
};

export default NavBar;
