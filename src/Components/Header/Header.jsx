import React from "react";
import logo from "../../img/logo.png";
import { Link } from "react-router-dom";
import { ImSearch } from "react-icons/im";
import { IoReorderThreeOutline } from "react-icons/io5";

import { FaTimes } from "react-icons/fa";

import { useRef } from "react";

const Header = () => {
  const navRef = useRef();
  const showNavBar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };
  return (
    <nav className="header">
      <img src={logo} alt="logo" />

      <div className="navmob" ref={navRef}>
        <Link to="/tv_shows">TV Shows</Link>
        <Link to="/movies">Movies</Link>
        <Link to="/recentlyAdded">Recently Added</Link>
        <Link to="/myList">My List</Link>

        <button className="nav-btn nav-close-btn" onClick={showNavBar}>
          <FaTimes />
        </button>
      </div>

      <button className="nav-btn" onClick={showNavBar}>
        <IoReorderThreeOutline />
      </button>
      <ImSearch className="search" />
    </nav>
  );
};

export default Header;
