import React from 'react';
import styled from 'styled-components';

const FooterSection = styled.div`
height: 178px;
background-color: #2E160E;
`

const Link = styled.p`
display: flex;
flex-direction: row;
justify-content: space-around;
align-items: center;
font-size: 15px;
color: white;
`

const Line = styled.img`
background-color: white;
height: 1px;
width: 334px;
display: flex;
margin-top: 62px;
margin-left: 50px;
`
const FontAwesomeIcon = styled.i`
background-color: white;
`

const Footer = () => {
  return (
    <FooterSection>
      <Link>
        <p>Classes</p>
        <p>About</p>
        <p>Contact</p>
      </Link>
      <Line src="./images/Vector 750.png" />
      <FontAwesomeIcon icon="fa-brands fa-instagram" />
      <FontAwesomeIcon icon="fa-brands fa-facebook" />
      <FontAwesomeIcon icon="fa-brands fa-linkedin" />
      <FontAwesomeIcon icon="fa-brands fa-twitter" />
    </FooterSection>
  )
}

export default Footer;