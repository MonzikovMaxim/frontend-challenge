import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.scss";

const Navbar = () => {
  return (
    <div className="nav__bar">
      <nav className="nav__container">
      <NavLink className='nav__button' activeclassname="active" to="/">Все котики</NavLink>
      <NavLink className='nav__button' activeclassname="active" to="/likes">Любимые котики</NavLink>
      </nav>
    </div>
  );
};

export default Navbar;
