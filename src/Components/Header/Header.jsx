import React from "react";
import logo from "../../img/logo.png";
import { Link } from "react-router-dom";
import { ImSearch } from "react-icons/im";
import { FaBars } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";

import { useRef } from "react";

const Header = () => {
  const navRef = useRef();
  const showNavbar = () => {};
  return (
    <nav className="header">
      <img src={logo} alt="logo" />

      <div className="navbar">
        <Link to="/">TV Shows</Link>
        <Link to="/movies">Movies</Link>
        <Link to="/recentlyAdded">Recently Added</Link>
        <Link to="/myList">My List</Link>
      </div>

      <div className="navmob">
        <Link to="/">TV Shows</Link>
        <Link to="/movies">Movies</Link>
        <Link to="/recentlyAdded">Recently Added</Link>
        <Link to="/myList">My List</Link>
      </div>

      <button>
        <FaBars />
      </button>
      <button>
        <FaTimes />
      </button>
      <ImSearch />
    </nav>
  );
};

export default Header;
