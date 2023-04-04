import React from 'react';

const stickyMenu = () => {
  const handleButtonClick = () => {
    alert('Thank you for trying Self Health!');
  };
  return (
    <header>
      <img className="logo" src="../assets/Logo.svg" alt="Self Health Logo" />
      <nav>
        <a href="#services">Services</a>
        <a href="#coaches">Coaches</a>
        <a href="#about">About</a>
        <a href="#shop">Shop</a>
        <a href="#club">Club</a>
        <img src="../assets/magnifying-glass.png" alt="magnifying glass" />
        <button className="tryforfree" type="submit" onClick={handleButtonClick}>Try for Free</button>
      </nav>
    </header>
  )
}

export default stickyMenu;
