import React from 'react';

const stickyMenu = () => {
  const handleButtonClick = () => {
    alert('Thank you for trying Self Health!');
  };
  return (
    <header>
      <div>
        <img className="logo" src="../assets/Logo.svg" alt="Self Health Logo" />
      </div>

      <nav>
        <a className="navcomp" href="#services">Services</a>
        <a className="navcomp" href="#coaches">Coaches</a>
        <a className="navcomp" href="#about">About</a>
        <a className="navcomp" href="#shop">Shop</a>
        <a className="navcomp" href="#club">Club</a>
      </nav>

      <div>
        <img src="../assets/magnifying-glass.png" alt="magnifying glass" />
      </div>

      <button className="tryforfree" type="submit" onClick={handleButtonClick}>Try for Free</button>

    </header>
  )
}

export default stickyMenu;
