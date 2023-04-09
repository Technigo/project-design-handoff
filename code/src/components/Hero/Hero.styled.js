import styled from 'styled-components';

export const StyledHero = styled.div`
  #hero-video {
    filter: grayscale(100%);
    -webkit-filter: grayscale(100%); /* for safari */
    transform: scaleX(-1);
    width: 100vw;
  }

  .hero {
    position: relative;
    width: 100vw;
  }

  .hero-text {
    position: absolute;
    z-index: 2;
    color: var(--primaryPink);
    text-transform: uppercase;
    font-weight: 900;
    font-size: 8vw;
    margin: 4vw;
    top: 1.6em;
  }

  .hero-btn {
    background-color: var(--primaryYellow);
    color: black;
    font-size: 1.3em;
    padding: 10px 20px;
    width: 10em;
    border: none;
    border-radius: 30px;
    cursor: pointer;
    position: absolute;
    bottom: 16vw;
    left: 5vw;
  }

  #hero-image {
    display: none;
  }

  @media screen and (max-width: 640px) {
    #hero-video {
      display: none;
    }

    #hero-image {
      display: inline;
      filter: grayscale(100%);
      -webkit-filter: grayscale(100%); /* for safari */
      transform: scaleX(-1);
      height: 100vh;
      background-size: cover;
      position: absolute;
      left: -35em;
    }

    .hero-text {
      font-size: 8vh;
      position: absolute;
      top: 5em;
    }

    .hero-btn {
      top: 26em;
    }
  }
`;
