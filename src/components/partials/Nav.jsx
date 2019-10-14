import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';

class Nav extends Component {

  render() {
    return (
      <div className="navbar">
        <nav>
          <ul>
            <li><NavLink to="/Contact">Contact</NavLink></li>
            <li><NavLink to="/About">About</NavLink></li>
            <li><NavLink to="/Projects">Projects</NavLink></li>
            <li><NavLink exact to="/">Home</NavLink></li>
          </ul>
        </nav>
    </div>
    );
  };
}

export default Nav;
