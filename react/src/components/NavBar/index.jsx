// src/Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Archivo de estilo para el navbar

const Navbar = () => {
return (
    <nav className="navbar">
    <ul className="navbar-list">
        <li><Link to="/home" className="navbar-item">Home</Link></li>
        <li><Link to="/medical-team" className="navbar-item">Medical Team</Link></li>
        <li><Link to="/contact" className="navbar-item">Contact</Link></li>
    </ul>
    </nav>
);
}

export default Navbar;
