// Header.js
import React from 'react';
import './Header.css';

const Header = () => {
  // Function to scroll to a specific section
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="header"> {/* Make sure to keep the header structure */}
      <div className="logo">
        <img src="/images/PHOTO-2025-01-13-15-53-14.jpg" alt="Profile" className="profile-pic" />
        <span>Swetha R</span>
      </div>
      <nav className="nav">
        <ul>
          <li><a href="#home" onClick={() => scrollToSection('home')}>Home</a></li>
          <li><a href="#skills" onClick={() => scrollToSection('skills')}>Skills</a></li>
          <li><a href="#projects" onClick={() => scrollToSection('projects')}>Projects</a></li>
          <li><a href="#professional" onClick={() => scrollToSection('professional')}>Education & experience</a></li>
          <li><a href="#contact" onClick={() => scrollToSection('contact')}>Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
