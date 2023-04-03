import React from 'react';

export const NavBar = () => {
  return (
    <nav className="nav-bar">
      <div className="nav-container">
        <div className="logo-and-title">
          <img alt="logo" className="logo" src="https://cdn.worldvectorlogo.com/logos/svg-1.svg" />
          <h1>Title text</h1>
        </div>
        <div className="nav-links">
          <ul>
            <li>About</li>
            <li>Home</li>
            <li>Yada yada</li>
          </ul>
        </div>
      </div>
    </nav>
  )
}