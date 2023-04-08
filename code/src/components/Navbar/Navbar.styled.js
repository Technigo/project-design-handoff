import styled from 'styled-components';

export const StyledNavbar = styled.div`
  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 2rem;
    color: var(--neutralBlack);
    z-index: 1;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 97px;
  }

  .logo-img {
    width: 10vw;
  }

  nav a {
    margin: 0px 1.5rem;
    color: var(--neutralBlack);
    text-decoration: none;
    font-size: 20px;
  }

  nav a:hover {
    text-decoration: underline var(--primaryPink) 2px;
  }

  header .nav-btn {
    padding: 5px;
    cursor: pointer;
    background: transparent;
    border: none;
    outline: none;
    color: #fff;
    visibility: hidden;
    opacity: 0;
    font-size: 1.8rem;
  }

  @media screen and (max-width: 820px) {
    header nav {
      display: flex;
      flex-wrap: nowrap;
      justify-content: space-evenly;
      align-items: center;
      width: 100%;
    }
  }

  @media screen and (max-width: 640px) {
    header .nav-btn {
      visibility: visible;
      opacity: 1;
      color: var(--neutralBlack);
    }

    header nav {
      color: var(--neutralBlack);
      background-color: var(--primaryWhite);
      position: fixed;
      top: 0;
      right: 0;
      width: 243px;
      padding: 160px 0;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 1.5rem;
      transition: 0.5s;
      transform: translateY(-100vh);
    }

    header .responsive_nav {
      transform: none;
      background-color: var(--primaryWhite);
      text-transform: uppercase;
    }

    nav .nav-close-btn {
      position: absolute;
      top: 1rem;
      right: 1rem;
    }

    nav a {
      font-size: 1.5rem;
    }

    .logo-img {
    }
  }
`;
