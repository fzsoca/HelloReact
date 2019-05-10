import React, { Component } from 'react';
import './Header.css'

class Header extends Component {
     render() {
         return ( 
              <div className="navbar">
               <ul className="navbar-nav">
                 <li>
                   Sandwiches
                 </li>
                 <li >
                   Order
                 </li>
                 <li>
                   Idk
                 </li>               
               </ul>
               <ul className="navbar-nav">
               <li className="navlink-right">
                   Login
                 </li>
               </ul>
              </div>
        )
     }
}

export default Header;