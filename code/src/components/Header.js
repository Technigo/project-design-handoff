import React from 'react';

const stickyMenu = () => {
  const handleButtonClick = () => {
    alert('Thank you for trying Self Health!');
  };
  return (
    <header>
      <img src="../assets/Logo.jpg" alt="Self Health Logo" />
      <nav>
        <a href="#services">Services</a>
        <a href="#coaches">Coaches</a>
        <a href="#about">About</a>
        <a href="#shop">Shop</a>
        <a href="#club">Club</a>
        <img src="https://icons8.com/icon/DlQ7rde0TrSv/magnifying-glass" alt="magnifying glass" />
        <button type="submit" onClick={handleButtonClick}>Try for Free</button>
      </nav>
    </header>
  )
}

export default stickyMenu;
