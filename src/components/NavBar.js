import React, { useState } from 'react';
import './NavBar.css';

const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="navbar">
            <div className="logo">
                <img src="/logo.png" alt="Site Logo" />
            </div>
            <button className="menu-toggle" onClick={toggleMenu} aria-label="Toggle menu">
                ☰
            </button>
            <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
                <li><a href="#home" onClick={toggleMenu}>Home</a></li>
                <li><a href="#events" onClick={toggleMenu}>Events</a></li>
                <li><a href="#contact" onClick={toggleMenu}>Contact</a></li>
            </ul>
        </nav>
    );
};

export default NavBar;