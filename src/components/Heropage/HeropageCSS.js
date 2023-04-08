/* import React from 'react'; */
import styled from 'styled-components';
import heroimg from '../../assets/hero.svg'
import Heroimg1024 from '../../assets/HeroBkgrnd1024.svg'

export const Parentdiv = styled.div`
  height: 100vh;
  width: 100vw;
  background-image: url(${heroimg});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: left 45% center;

  @media (min-width: 1024px) {
    background-image: url(${Heroimg1024});
    height: 1375px;
  }
`;

export const Logo = styled.img`
max-width: 166px;
width: 21.5%;
margin-top: 4%;
`

export const TopWrapper = styled.div`
display: flex;
justify-content: space-between;
margin: 4.5%;
margin-top: 0;
`

export const Navbar = styled.div`
position: relative;
display: flex;
flex-direction: column;
margin-top: 4%;
align-items: flex-end 4.5% !important;
align-items: flex-end;
`

export const HambMenuBtn = styled.button`
position: relative;
width: 50px;
height: 50px;
border: none;
background-color: #0962CF;
cursor: pointer;
border-radius: 5px;
display: flex;
align-items: center;
justify-content: center;
z-index: 1;

@media (min-width: 1024px) {
  width: 75px;
height: 75px;
}
`

export const HambMenuIcon = styled.span`
  position: absolute;
  width: 59%;
  height: 3px;
  background-color: #fff;
  transition: all 0.3s ease-in-out;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  color: white;
  border-radius: 10px;

  &:before {
    position: absolute;
    width: 100%;
    height: 3px;
    background-color: #fff;
    transition: all 0.3s ease-in-out;
    content: '';
    top: -8px;
    border-radius: 10px;

    @media (min-width: 1024px) {
      height: 6px;
      top: -15px;
    }
  }

  &:after {
    position: absolute;
    width: 100%;
    height: 3px;
    background-color: #fff;
    transition: all 0.3s ease-in-out;
    content: '';
    bottom: -8px;
    border-radius: 10px;

    @media (min-width: 1024px) {
      height: 6px;
      bottom: -15px;
    }
  }

  @media (min-width: 1024px) {
    width: 66%;
    height: 6px;
  }

  ${({ isOpen }) => isOpen && `
    display: none;
  `}
`;

export const HambMenuIconOpen = styled.span`
  display: none;

  ${({ isOpen }) => isOpen && `
    display: block;
    color: white;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) rotate(45deg);
    width: 65%;
    height: 3px;
    background-color: #fff;
    transition: all 0.3s ease-in-out;
    border-radius: 10px;
    
    &:before {
      position: absolute;
      content: '';
      width: 100%;
      height: 3px;
      background-color: #fff;
      transition: all 0.3s ease-in-out;
      top: 0;
      left: 0;
      transform: rotate(-90deg);
      border-radius: 10px;

      @media (min-width: 1024px) {
        height: 6px;
      }
    }
    
@media (min-width: 1024px) {
      height: 6px;
      width: 75%;
    }
  `}
`;

export const HambMenuList = styled.ul`
    display: none;`

export const HambMenuListOpen = styled.ul`
display: flex;
flex-direction: column;
-moz-box-pack: center;
justify-content: center;
background: rgba(255, 255, 255, 0.85);
width: 214px;
height: 344px;
position: relative;
top: -57%;
right: -41%;
position: absolute;

@media (min-width: 800px) {
  top: -12%;
  right: -23%;
  scale: 1.2;
}

@media (min-width: 1024px) {
  top: 31%;
  right: 24%;
  scale: 1.5;
}
`

export const HambMenuItem = styled.li`
    list-style: none;
    margin: 8px;
`

export const LiElipblue = styled.img`
    scale: 1;
`

export const LiElipgreen = styled.img`
    scale: 1;
`

export const HambMenuItemLink = styled.a`
font-family: Kulim Park;
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 12px;
letter-spacing: -0.022em;
color: #0962CF;
text-decoration: none;
margin: 20px;
position: relative;
bottom: 7px;
`
export const ButtonImage = styled.img`
width: 132px;

@media (min-width: 540px) {
  width: 180px;
}

@media (min-width: 800px) {
  width: 282px;
  height: 96px;
}

@media (min-width: 1024px) {
  position: relative;
  bottom: -131%;
  right: -3%;
  width: 364px;
}
`;

export const ButtonDiv = styled.div`
display: flex;
height: 54.4%;
max-height: 500px;
align-items: flex-end;
justify-content: flex-end;
`

export const SloganWrapper = styled.div`
display:flex;
width: 100vw;
justify-content: center;
flex-wrap: wrap;
flex-direction: column;
`

export const Go = styled.h1`
font-family: "Kulim Park";
font-style: italic;
font-weight: 600;
font-size: 142.936px;
line-height: 99px;
letter-spacing: -0.022em;
color: rgb(185, 246, 21);
margin: 0px 0px 0px 3.5%;

@media (min-width: 540px) {
  margin: 0;
  position: absolute;
  bottom: 23%;
  left: 7%;
}

@media (min-width: 800px) {
  bottom: 32%;
  font-size: 204px;
  left: 13%;
}

@media (min-width: 1024px) {
  font-size: 274px;
  bottom: -10%;
  left: 4.5%;
}
`

export const Beyond = styled.h3`
font-family: 'Kulim Park';
font-style: italic;
font-weight: 600;
font-size: 39.9506px;
letter-spacing: -0.022em;
color: #B9F615;
margin: 8% 0px 0px 5%;

@media (min-width: 540px) {
  margin: 0;
  position: absolute;
  left: 8%;
  bottom: 17%;
}

@media (min-width: 800px) {
  left: 14%;
  bottom: 19%;
  font-size: 71px;
}

@media (min-width: 1024px) {
  left: 7%;
  bottom: -31%;
  font-size: 99px;
}
`

export const The = styled.h3`
font-family: 'Kulim Park';
font-style: italic;
font-weight: 600;
font-size: 44.0651px;
line-height: 52px;
letter-spacing: -0.022em;
color: #B9F615;
margin: 0% 5% 9% 23%;


@media (min-width: 540px) {
  margin: 0;
  position: absolute;
  left: 30%;
  bottom: 11%;
}

@media (min-width: 800px) {
  left: 27%;
  bottom: 12%;
  font-size: 71px;
}

@media (min-width: 1024px) {
  left: 19%;
  bottom: -41%;
  font-size: 110px;
}
`

export const Limits = styled.h2`
font-family: 'Kulim Park';
font-style: italic;
font-weight: 600;
font-size: 55.0281px;
line-height: 65px;
letter-spacing: -0.022em;
color: #B9F615;
margin: 0px 4% 9% 6%;

@media (min-width: 540px) {
  margin: 0;
  position: absolute;
  left: 51%;
  bottom: 11%;
}

@media (min-width: 800px) {
  left: 50%;
  bottom: 13%;
  font-size: 99px;
}

@media (min-width: 1024px) {
  left: 44%;
  bottom: -38%;
  font-size: 173.5px;
}
`

export const SloganSubWrapper = styled.div`
display: flex;
align-items: flex-end;
-webkit-box-pack: end;
justify-content: flex-start;`

export const AcroPromoText = styled.p`
display: none;

@media (min-width: 1024px) {
  display: block;
  font-family: 'Kulim Park';
  font-style: normal;
  font-weight: 300;
  font-size: 33px;
  line-height: 41px;
  letter-spacing: -0.022em;
  color: #FFFFFF;
  width: 42%;
  position: absolute;
  right: 7%;
  bottom: -25%;
}`