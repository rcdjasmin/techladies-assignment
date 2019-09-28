import React from "react";
import { NavLink } from "react-router-dom";


function Nav() {
    return (
        <nav>
            <ul>
            <li>
                <NavLink to="/techladies-assignment/" exact={true} activeClassName="selected">About me</NavLink>
            </li>
            <li>
                <NavLink to="/techladies-assignment/contact/" activeClassName="selected">Contact</NavLink>
            </li>
            <li>
                <NavLink to="/techladies-assignment/weather-app/" activeClassName="selected">Weather App</NavLink>
            </li>
            </ul>
            <div className="theme-icon--wrapper">
                <input type="checkbox" className="theme-toggle" name="theme-toggle" onClick={function(){document.getElementsByTagName("body")[0].classList.toggle("theme--dark");}}/>
                <span class="theme-icon"></span>
            </div>
        </nav>
    );
}

export default Nav;