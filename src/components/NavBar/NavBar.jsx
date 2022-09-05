import React, { useState } from "react";
import "./NavBar.scss";
import logo from "../../assets/img/shared/logo";
import closeIcon from "../../assets/img/shared/icon-close";
import openIcon from "../../assets/img/shared/icon-hamburger";
import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
  const [activeNav, setActiveNav] = useState(false);

  return (
    <header className="header">
      <div className="header__container">
        <Link to="/" className="header__logo">
          <img src={logo} alt="logo" />
        </Link>

        <div
          className="toggle-btn toggle-btn--open"
          onClick={() => {
            setActiveNav(!activeNav);
          }}
        >
          <img src={openIcon} alt="open btn" />
        </div>

        <nav className={activeNav ? "nav active" : "nav"}>
          <div
            className="toggle-btn toggle-btn--close"
            onClick={() => {
              setActiveNav(!activeNav);
            }}
          >
            <img src={closeIcon} alt="open btn" />
          </div>

          <ul className="nav__list">
            <li className="nav__item">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "active-link" : "inactive-link"
                }
                onClick={() => {
                  setActiveNav(false);
                }}
              >
                <span className="bold">00</span> HOME
              </NavLink>
            </li>
            <li className="nav__item">
              <NavLink
                to="destination"
                className={({ isActive }) =>
                  isActive ? "active-link" : "inactive-link"
                }
                onClick={() => {
                  setActiveNav(false);
                }}
              >
                <span className="bold">01</span> DESTINATION
              </NavLink>
            </li>
            <li className="nav__item">
              <NavLink
                to="crew"
                className={({ isActive }) =>
                  isActive ? "active-link" : "inactive-link"
                }
                onClick={() => {
                  setActiveNav(false);
                }}
              >
                <span className="bold">02</span> CREW
              </NavLink>
            </li>
            <li className="nav__item">
              <NavLink
                to="technology"
                className={({ isActive }) =>
                  isActive ? "active-link" : "inactive-link"
                }
                onClick={() => {
                  setActiveNav(false);
                }}
              >
                <span className="bold">03</span> TECHNOLOGY
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default NavBar;
