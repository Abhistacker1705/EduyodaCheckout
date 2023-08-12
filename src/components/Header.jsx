import React from "react";
import EdyodaLogo from "/EdyodaLogo.png";
import {MdKeyboardArrowDown} from "react-icons/md";
import {SlMagnifier} from "react-icons/sl";
import {AiOutlineMenu} from "react-icons/ai";
const Header = () => {
  return (
    <header className="header-container">
      <div className="logo-dropdown-container">
        <img src={EdyodaLogo} />
        <p className="header-dropdown">
          Courses <MdKeyboardArrowDown />
        </p>
        <p className="header-dropdown">
          Programs <MdKeyboardArrowDown />
        </p>
      </div>
      <div className="search-cta-container">
        <SlMagnifier className="searchIcon" />
        <AiOutlineMenu className="menuIcon" />
        <p className="header-login">Log in</p>
        <button className="btn">JOIN NOW</button>
      </div>
    </header>
  );
};

export default Header;
