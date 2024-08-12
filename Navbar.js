
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">Strike⚡</div> 
      
      <ul>
        <li><Link to="/">Home</Link></li>
       <li><Link to="/progress">Progress</Link></li> 
        <li><Link to="/workout">Workout</Link></li>
        <li><Link to="/diet">Diet Plans</Link></li>
        <li><Link to="/trainers">Trainers</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/dashboard">Dashboard</Link></li>
        <li><Link to="/login">Login🔑</Link></li>

      </ul>
    </nav>
  );
};

export default Navbar;
