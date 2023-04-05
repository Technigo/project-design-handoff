/* eslint-disable linebreak-style */
/* eslint-disable no-nested-ternary */
import styled, { css } from 'styled-components'

export const Section = styled.section`
  display: block;
  color: blue;
  /*background-color: ${(colour) => (colour.white ? 'white' : colour.blue ? 'blue' : 'brown')}  
  This does't seem to allow for hex colors*/
  background-color: white;
  
  /* Background-image for the top-section */
  ${(background) => background.image && css`
    /*background: #2E160E url('https://images.pexels.com/photos/4325484/pexels-photo-4325484.jpeg');*/
    background: #2E160E url('../images/hero-image.png');
    background-size: cover;
    background-position: center;
    /*transform: scaleX(-1);*/
    color: red;
    height: 982px;
  `}
  /* Background-colours for the different sections */
  ${(background) => background.brown && css`
    background-color: #2E160E;
  `}
  ${(background) => background.white && css`
    background-color: #FFFFFF
;
  `}
  ${(background) => background.blue && css`
    background-color: #66A1AE;
  `}

  /* Media Queries for responsivenes */

  /* Removes certain sections on mobile */
  @media (max-width: 453px) {
    ${(remove) => remove.removeOnMobile && css`
      display: none;
    `}
  }
  /* Changes layout on larger screens/desktop */
  @media (min-width: 686px) {
    border: none;
    ${(size) => size.halfWidth && css`
      width: 50%;
      display: inline-block; 
    `}
  }

`