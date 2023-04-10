import styled from 'styled-components';

export const ImageHero = styled.div`
  background-image: url("./images/yoga-hero.jpg");
  background-size: cover;
  width: 100%;
  height:100%;
  box-sizing: border-box;
  border-radius: 30px;
  background-position: center;
`

export const PlayButton = styled.img`
  object-fit: cover;
  height: 102px;
  width: 102px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  cursor: pointer;

  &:hover {
    height: 90px;
    width: 90px;
  }
`

export const Logo = styled.img`
  object-fit: cover;
  cursor: pointer;
`

export const Hamburger = styled.img`
  display:none;
  height: 24px;
  width: 24px;
  
  @media (max-width: 668px) {
    display: block;
  }
`

export const PhoneImage = styled.img`
  object-fit: cover;
  justify-self: center;
     
  @media (min-width: 668px) and (max-width: 1023px) {
    width: 345px;
    height: 625px;
  }

  @media (max-width: 668px) {
    height: 440px;
    width: 240.8px;
  }
`