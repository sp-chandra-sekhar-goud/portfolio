import React from "react";
import details from "../../details";
import "./Navbar.css";

const Navbar = () => {

  const logo = details.logo.name;

  const links = details.navLinks.map((item) => {
    return "#" + item;
  });

  const items = details.navLinks.map((item, index) => {
    return (
      <li>
        <a href={links[index]}>{item}</a>
      </li>
    );
  });

  return (
    <div>
      <div className="header">
        <a href={links[0]} className="logo">
          {logo}
        </a>
        <input type="checkbox" className="menu-btn" id="menu-btn" />
        <label for="menu-btn" className="menu-icon">
          <span className="navicon"></span>
        </label>
        <ul className="menu">{items}</ul>
      </div>
    </div>
  );
};

export default Navbar;
