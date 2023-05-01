import React from 'react';
import styled from 'styled-components';
import Insagram from '../Images/Instagram.png';
import Facebook from '../Images/Facebook.png';

export const Footer = () => {
  return (
    <div>
      <FlexContainerBig>
        <FlexContainerSmall>
          <img src={Insagram} alt="Instagram" />
          <img src={Facebook} alt="Facebook" />
        </FlexContainerSmall>
        <p>Photography by HelenaandtheSea.com</p>
      </FlexContainerBig>
    </div>
  );
}

export const FlexContainerSmall = styled.div`
box-sizing: border-box;
max-width:100%;
display:flex;
flex-direction:row;
align-self: center;
justify-content: center;
position:relative;
align-items:center;
background:#045661;
padding:20px;
gap:20px;
`

export const FlexContainerBig = styled.div`
box-sizing: border-box;
max-width:100%;
display:flex;
flex-direction:column;
align-self: center;
justify-content: center;
position:relative;
align-items:center;
background:#045661;
padding:0px 8px 8px 8px;
gap:20px;
`
