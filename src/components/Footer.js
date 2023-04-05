import React from 'react';
import styled from 'styled-components';
import { SmallText } from './Hero';

const FooterWrapper = styled.div`
background-color: #2E160E;
height: 100px;
display: flex;
flex-direction: column;
align-items: center;
`
const LinksSection = styled.div`
display: flex;
flex-direction: row;
align-items: center; 
gap: 20px;
`
const LineStyle = {
  backgroundColor: 'white',
  height: '1px',
  width: '80%',
  margin: '10px 0',
  border: 'none'
};

export const Footer = () => {
  return (
    <FooterWrapper>
      <svg width="35" height="48" viewBox="0 0 35 48" fill="#ffffff" xmlns="http://www.w3.org/2000/svg">
        <path d="M24.6296 4.28108C24.6296 6.93205 21.4376 8.56216 17.5 8.56216C13.5624 8.56216 10.3704 6.93205 10.3704 4.28108C10.3704 1.63011 13.5624 0 17.5 0C21.4376 0 24.6296 1.63011 24.6296 4.28108Z" fill="white" />
        <path d="M30.7752 16.8443C31.6386 20.9091 26.3423 24.5513 18.7093 26.175C11.0762 27.7987 4.88441 26.6002 4.02108 22.5355C3.15776 18.4707 8.27328 14.6017 15.9063 12.978C23.5394 11.3543 29.9119 12.7796 30.7752 16.8443Z" fill="white" />
        <path d="M35 39.4753C35 44.8295 27.4027 48 17.4171 48C7.43144 48 0 44.8295 0 39.4753C0 34.121 7.43144 30.6162 17.4171 30.6162C27.4027 30.6162 35 34.121 35 39.4753Z" fill="white" />
      </svg>

      <LinksSection>
        <SmallText fw500>Classes</SmallText>
        <SmallText fw500>About</SmallText>
        <SmallText fw500>Contact</SmallText>
      </LinksSection>
      <hr style={LineStyle} />

    </FooterWrapper>
  )
}