import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.scss";

const Navbar = () => {
  return (
    <div className="nav__bar">
      <nav className="nav__container">
      <NavLink className='nav__button' activeclassname="active" to="/frontend-challenge">Все котики</NavLink>
      <NavLink className='nav__button' activeclassname="active" to="/frontend-challenge/likes">Любимые котики</NavLink>
      </nav>
    </div>
  );
};

export default Navbar;
