import styled from 'styled-components';

export const StyledDesktopHero = styled.div`
  #hero-video {
    filter: grayscale(100%);
    -webkit-filter: grayscale(100%); /* for safari */
    transform: scaleX(-1);
    position: fixed;
    min-width: 100%;
    background-size: cover;
    background-position: center;
  }

  .hero {
    position: relative;
  }

  .hero-text {
    position: absolute;
    transform: translate(0%, 70%);
    z-index: 2;
    color: var(--primaryPink);
    text-transform: uppercase;
    font-weight: 900;
    font-size: 8vw;
    margin: 4vw;
  }

  .hero-btn {
    width: 209px;
    cursor: pointer;
    position: relative;
    transform: translate(4vw, 37vw);
  }
`;
