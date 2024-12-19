import React from 'react';
import './Header.css'
function Header() {
    return (
      <header>
        <nav>
          <ul className="header-section">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </header>
    );
  }
  
  export default Header;
  