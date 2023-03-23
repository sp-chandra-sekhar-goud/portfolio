import React from 'react'
import './Navbar.css'

const Navbar = () => {
  return (
    <div>
        <div className="header">
        <a   href="#Home" className="logo">SPCSG.</a>
        <input type="checkbox" className="menu-btn" id="menu-btn"/>
        <label for="menu-btn" className="menu-icon">
            <span className="navicon"></span>
        </label>
        <ul className="menu">
            <li><a href="#Home">Home</a></li>
            <li><a href="#About">About Me</a></li>
            <li><a href="#Skills">Skills</a></li>
            <li><a href="#Projects">Projects</a></li>
        </ul>
    </div>
    </div>
  )
}

export default Navbar