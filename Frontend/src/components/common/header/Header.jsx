import React, { useState } from "react";
import "./header.css";
import { nav } from "../../data/Data";
import { Link } from "react-router-dom";
import img1 from "../../images/logo5.png";
const Header = () => {
  const [navList, setNavList] = useState(false);


  return (
    <>
      <header>
        <div className="container flex">

          <div className="logo">
            <Link to="/">
              <img src={img1} alt="" className="logoImg" />
            </Link>
          </div>

          <div className="nav">
            <ul className={navList ? "small" : "flex"}>
              {nav.map((list, index) => (
                <li key={index}>
                  <Link to={list.path}>{list.text}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="button flex">
            <>
              <div className="profile">

              </div>
            </>
          </div>
          <div className="toggle">
            <button onClick={() => setNavList(!navList)}>
              {navList ? (
                <i className="fa fa-times"></i>
              ) : (
                <i className="fa fa-bars"></i>
              )}
            </button>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
