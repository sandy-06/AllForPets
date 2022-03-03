import React from 'react'
import { Button } from 'react-bootstrap';

function NavTabs({ currentPage, handlePageChange,}) {

    function changepage(clickdata) {
      //preventDefault();
      currentPage = clickdata
      console.log(clickdata)
    }
  return (
    <nav className="uk-navbar-container" uk-navbar="true">

      <div className="uk-navbar-center">

        <ul className="uk-navbar-nav">
          <a href="" className="uk-navbar-item uk-logo">Yummy</a>
        </ul>
      </div>

      <div className="uk-navbar-right">

        <ul className="uk-navbar-nav">
          <li>
            <a href="Login">Login</a>
           <Button onClick={() =>handlePageChange('Login') }>Login</Button> 
          </li>
          <li>
            <Button onClick={() =>handlePageChange('Signup') }>Signup</Button> 
          </li>
          <li><a href="Cart">Cart</a></li>
        </ul>
      </div>
    </nav>
  );

}

export default NavTabs;