import React from "react";
import cartIcon from "./shopping-cart-solid.svg";
import { NavLink } from "react-router-dom";
import "./app-header.scss";

const AppHeader = ({ total }) => {
  return (
    <header className="header">
      <NavLink to="/" className="header__link">
        Menu
      </NavLink>
      <NavLink to="/cart" className="header__link">
        <img className="header__cart" src={cartIcon} alt="cart"></img>
        Total: {total} $
      </NavLink>
    </header>
  );
};

export default AppHeader;
