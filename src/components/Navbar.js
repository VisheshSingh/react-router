import React from 'react';
import { Link, NavLink, withRouter } from 'react-router-dom';

function Navbar(props) {
  setTimeout(() => {
    props.history.push('/');
  });
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
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contact</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default withRouter(Navbar);
