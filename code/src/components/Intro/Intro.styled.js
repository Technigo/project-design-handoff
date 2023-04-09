import styled from 'styled-components';

export const StyledIntro = styled.div`
  .intro-wrapper {
    height: 100vh;
    margin: 0 40px;
    display: flex;
    align-items: center;
  }

  .intro-wrapper img {
    margin: 20px;
    margin-left: 40px;
    width: 47vw;
  }

  .intro-text h3 {
    font-size: 1.3vw;
    font-weight: 300;
    margin: 10px;
  }

  .intro-text h1 {
    font-size: 5.5vw;
    margin: 10px;
  }

  .intro-text h2 {
    font-size: 1.3vw;
    margin: 10px;
  }

  .intro-text p {
    font-size: 1.3vw;
    margin: 10px;
  }

  .intro-text button {
    background-color: var(--primaryYellow);
    color: black;
    font-size: 1.5vw;
    padding: 10px 20px;
    width: 10em;
    border: none;
    border-radius: 30px;
    cursor: pointer;
    margin: 10px;
  }

  @media screen and (max-width: 820px) {
    flex-direction: column;
  }
`;
