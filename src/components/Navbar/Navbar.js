// /////////////// IMPORT //////////////////////// //
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable indent */
import React from 'react';
import './Navbar.css';
// /////////////// COMPONENT //////////////////////// //
export const Navbar = () => {
    return (
        <section className="top-nav">
            <div className="logo-picture">
                <img src="./images/Logo.svg" alt="logo" />
            </div>
            <input id="menu-toggle" type="checkbox" />
            <label className="menu-button-container" htmlFor="menu-toggle">
                <div className="menu-button" />
            </label>
            <ul className="menu">
                <li>GIFT CARDS</li>
                <li>PROMO CODES</li>
                <li>ABOUT US</li>
                <li>CONTACT US</li>
            </ul>
        </section>
    )
}