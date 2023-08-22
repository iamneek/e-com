import React, { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { RiArrowDropDownLine } from "react-icons/ri";
import { FiSearch } from "react-icons/fi";
import { LiaShoppingCartSolid } from "react-icons/lia";
import { BsPerson } from "react-icons/bs";
import Logo from "./assets/logo.png";
import "./Navbar.scss";
const Navbar = () => {
  return (
    <nav>
      <div className="logo_div">
        <img src={Logo} alt="Switch" className="logo" /> Switch
      </div>
      <div className="left-nav">
        <ul>
          <li>
            <div className="dropdown">
              <button className="dropbtn">
                Shop <RiArrowDropDownLine size={25} />
              </button>
              <div className="dropdown-content">
                <Link to="#">Sweaters & Coats</Link>
                <Link to="#">Shirts & T-Shirts</Link>
                <Link to="#">Pants</Link>
              </div>
            </div>
          </li>
          <li>
            <Link>Most Wanted</Link>
          </li>
          <li>
            <Link>New Arrival</Link>
          </li>
          <li>
            <Link>Brands</Link>
          </li>
        </ul>
      </div>

      <div className="right-nav">
        <form className="searchbar-nav">
          <FiSearch size={20} color="grey" className="searchicon" />
          <input
            type="text"
            placeholder="Search Switch"
            className="searchbox"
            autoFocus
          />
        </form>

        <div className="icons_nav">
          <Link>
            <LiaShoppingCartSolid size={25} />
          </Link>

          <Link>
            <BsPerson size={22} />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
