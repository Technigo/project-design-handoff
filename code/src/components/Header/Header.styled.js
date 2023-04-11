import styled from 'styled-components';
import mobileBg from '../../assets/mobile-background.png';

export const StyledHeader = styled.header`
  display: flex;
  background-image: url(${mobileBg});
  background-position: center;
  background-size: 380%;
  background-position-x: 63%;
  background-repeat: no-repeat;
  height: 100vh;

  video {
    display: none;
    object-fit: cover;
    width: 100%;
    height: 100vh;
    position: absolute;
    z-index: -1;
    filter: grayscale(100%);
    -webkit-filter: grayscale(100%); /* for safari */
  }

  @media (min-width: 668px) {
    background-size: 230%;
    background-position-x: 52%;
    padding: 0;
    margin: 0;
  }

  @media (min-width: 1024px) {
    background-image: none;

    video {
      display: block;
    }
  }
`;

export const StyledHeaderDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  align-self: flex-end;
  margin-bottom: 67px;

  @media (min-width: 668px) {
    margin-bottom: 222px;
    align-items: flex-start;
    padding-left: 24px;
  }

  @media (min-width: 1024px) {
    margin-bottom: 115px;
    padding-left: 69px;
  }
`;

export const HeaderTitle = styled.h1`
  color: var(--primaryPink);
  font-size: 3rem;
  font-weight: 800;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  margin-bottom: 30px;
  padding-left: 0%;
  max-width: 400px;

  @media (min-width: 668px) {
    font-size: 6rem;
  }

  @media (min-width: 1024px) {
    font-size: 8rem;
    max-width: 400px;
  }
`;
