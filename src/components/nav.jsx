import React from "react";
import { HashRouter, NavLink } from "react-router-dom";


function Nav() {
    return (
        <HashRouter basename='/'>
        <nav>
            <ul>
            <li>
                <NavLink to="/" exact={true} activeClassName="selected">About me</NavLink>
            </li>
            <li>
                <NavLink to="/contact/" activeClassName="selected">Contact</NavLink>
            </li>
            <li>
                <NavLink to="/weather-app/" activeClassName="selected">Weather App</NavLink>
            </li>
            </ul>
            <div className="theme-icon--wrapper">
                <input type="checkbox" className="theme-toggle" name="theme-toggle" onClick={function(){document.getElementsByTagName("body")[0].classList.toggle("theme--dark");}}/>
                <span class="theme-icon"></span>
            </div>
        </nav>
        </HashRouter>
    );
}

export default Nav;