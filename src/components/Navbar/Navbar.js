import React from 'react';
import PropTypes from 'prop-types';
import './Navbar.scss';
import { Link } from 'react-router-dom';
import { FiTerminal } from 'react-icons/fi';
const Navbar = ({ title, aboutLink }) => {
  return (
    <>
      <nav className="nav">
        <Link to="/" className="nav-link">
          <h1 className="nav-title">{title}</h1>
          <FiTerminal className="navbar-icon" />
        </Link>
        <div className="nav-menu">
          <Link to="/about" className="nav-link">
            {aboutLink}
          </Link>
        </div>
      </nav>
    </>
  );
};

Navbar.defaultProps = {
  title: 'Random Gifs',
  aboutLink: 'About',
};

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  aboutLink: PropTypes.string.isRequired,
};

export default Navbar;
