import React from 'react';
import './Navbar.css';

function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar-content">
        <div className="Logo-Search">
          <h1 className="navbar-title">Navbar</h1>
          <form className="navbar-search">
            <input type="search" placeholder="Search" className="navbar-search-input" />
            <button type="submit" className="navbar-search-button">Search</button>
          </form>
        </div>
        <div className="navbar-menu">
          <h4>Overview</h4>
          <h4>Finance</h4>
          <h4>Calendar</h4>
          <h4>Events</h4>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
