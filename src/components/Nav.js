import React from 'react'
import { Link } from 'react-router-dom'

export const Nav = () => {
  return (
    <nav>
      <div className="navbar">
        <h1>Navbar</h1>
        <ul>
          <li>
            <Link to="/form">Form</Link>
          </li>
          <li>Sizes</li>
          <li>Check out</li>
        </ul>
      </div>
    </nav>
  )
}