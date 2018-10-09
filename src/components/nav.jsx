import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = () => {
  return (
    <div className="ui menu">
      <div className="header item">Our Company</div>
      <NavLink className="item" to="/aboutus">
        About Us
      </NavLink>
      <NavLink className="item" to="/home">
        Home
      </NavLink>
      <NavLink className="item" to="/products">
        Products
      </NavLink>
    </div>
  );
};

export default Nav;
