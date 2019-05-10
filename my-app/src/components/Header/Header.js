import React, { Component } from 'react';
import './Header.css'

class Header extends Component {
     render() {
         return ( 
              <div className="navbar">
               <ul className="navbar-nav">
                 <li className="nav-item">
                   Sandwiches
                 </li>
                 <li className="nav-item">
                   Order
                 </li>
                 <li className="nav-item">
                   Idk
                 </li>
               </ul>
              </div>
        )
     }
}

export default Header;