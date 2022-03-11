import React from 'react'
//import { Button, Navbar, Nav, Container, Modal, Tab } from 'react-bootstrap';
//import Login from './Login';


function appNavbar({ currentPage, handlePageChange }) {
  return (
    <ul className="nav nav-tabs" align-horizontal>
      <li className="nav-item">
        <a
          href="Homepage"
          onClick={() => handlePageChange('Homepage')}
          // This is a conditional (ternary) operator that checks to see if the current page is "Home"
          // If it is, we set the current page to 'nav-link-active', otherwise we set it to 'nav-link'
          className={currentPage === 'Homepage' ? 'nav-link active' : 'nav-link'}
        >
          Homepage
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#Login"
          onClick={() => handlePageChange('Login')}
          // Check to see if the currentPage is `About`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={currentPage === 'Login' ? 'nav-link active' : 'nav-link'}
        >
          Login
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#Signup"
          onClick={() => handlePageChange('Signup')}
          // Check to see if the currentPage is `Blog`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={currentPage === 'Signup' ? 'nav-link active' : 'nav-link'}
        >
          SignUp
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#Logout"
          onClick={() => handlePageChange('Homepage')}
          // Check to see if the currentPage is `Blog`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={currentPage === 'Homepage' ? 'nav-link active' : 'nav-link'}
        >
          Homepage
        </a>
      </li>
      
    </ul>
  );
}

export default appNavbar;