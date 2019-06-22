import React from 'react';
import { Link, NavLink } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="nav-wrapper pink darken-3">
      <div className="container">
        <a href="/" className="brand-logo">
          Poke'Times
        </a>
        <ul className="right">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
