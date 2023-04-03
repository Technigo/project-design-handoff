import React from 'react';

export const Header = ({ title, link, link1, link2, link3 }) => {
  return (
    <header>
      <header>
        <h1>{title}</h1>
        <nav>
          <ul>
            <li><a>{link}</a></li>
            <li><a>{link1}</a></li>
            <li><a>{link2}</a></li>
            <li><a>{link3}</a></li>
          </ul>
        </nav>
      </header>
    </header>
  );
}

// A header section with a logotype and navigation