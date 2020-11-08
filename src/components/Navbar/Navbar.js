import React from 'react';
import PropTypes from 'prop-types';
import './Navbar.scss';
import {Link} from 'react-router-dom';
import {FiTerminal} from 'react-icons/fi'
const Navbar = () => { 
  return (
    <>
    <nav className="nav">
      <Link to='/' className='nav-link'>
        <h1>Random Gifs</h1>
        <FiTerminal className='navbar-icon'/> 
      </Link>
      <div className="nav-menu">
      <Link to='/about' className='nav-link'>About</Link>
      </div>
    </nav>
    </>
  )
}
export default Navbar;