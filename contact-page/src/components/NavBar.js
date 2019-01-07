import React, { Component } from 'react';

import './NavBar.css';  
import unicode_logo from '../unicode_logo.PNG';
class NavBar extends Component {
    render() {
        return (
            <header className="navbar">
            <nav className="navbar_navigation">
                <div></div>
                    <div className="navbar_logo">
                    <img src={unicode_logo} height="47" width="237" />
                    </div>
                    <div className="spacer" />
                    <div className="navbar_navigation_items">
                        <ul>
                            <li><a href="/">Home</a></li>
                            <li><a href="/">About Us</a></li>
                            <li><a href="/">Projects</a></li>
                            <li><a href="/">Events</a></li>
                            <li><a href="/">Blog</a></li>
                            <li><a href="/">Contact</a></li>
                        </ul>
                    </div>

                
            </nav>
            </header>
        );
    }

    
};
export default NavBar