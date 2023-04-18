import React from 'react';
import styled from 'styled-components';

const MenuDesk = styled.nav`
    display: flex;
    flex-direction: row;
    gap: 5rem;
    padding: 0 10px;

    a {
        font-size: 18px;
        margin-top: 25px;
        color: white;
        cursor: pointer;
    }

    i {
      font-size: 20px;
      padding-top: 25px;
      margin-right: 20px;
      cursor: pointer;
    }

    @media (max-width: 895px) {
        display: none;
    }
     @media (min-width: 895px) {
        display: flex;
    }
    `;

export const MenuDeskTop = () => {
  return (
    <MenuDesk>
      <a>Our Gym</a>
      <a>Workout</a>
      <a>About us</a>
      <a>Contact</a>
      <i className="fa-sharp fa-solid fa-magnifying-glass" />
    </MenuDesk>

  )
}