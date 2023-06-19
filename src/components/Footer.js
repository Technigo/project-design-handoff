import React from 'react';
import styled from 'styled-components';

const FooterSection = styled.div`
height: 178px;
background-color: #2E160E;
`

const Link = styled.div`
display: flex;
flex-direction: row;
align-items: center;
justify-content: center;
font-size: 15px;
color: white;
padding-top: 30px;
ul {
  list-style: none;
  display: flex;
  gap: 30px;
}
a {
     font-size: 12px;
     font-weight: 400;
     color: #fff;
     text-decoration: none;
}
`

const Line = styled.hr`
background-color: white;
height: 1px;
border: none;
width: 80%;
display: flex;
`
const Icons = styled.div`
display: flex;
justify-content: center;
gap: 25px;
margin: 20px;
i {
  font-size: 20px;
  color: #fff;
}
i:hover {
     opacity: 70%;
    }
`

const Footer = () => {
  return (
    <FooterSection>
      <Link>
        <ul>
          <li><a href="Classes">Classes</a></li>
          <li><a href="About">About Us</a></li>
          <li><a href="Contact">Contact</a></li>
        </ul>
      </Link>
      <Line />
      <Icons>
        <i className="fa-brands fa-instagram" />
        <i className="fa-brands fa-facebook" />
        <i className="fa-brands fa-linkedin" />
        <i className="fa-brands fa-twitter" />
      </Icons>
    </FooterSection>
  )
}

export default Footer;