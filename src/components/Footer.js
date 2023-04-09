import React from 'react'
import styled from 'styled-components'
import FooterLogo from '../assets/header-logo.svg'
import Facebook from '../assets/facebook.svg'
import Instagram from '../assets/instagram.svg'
import TikTok from '../assets/tiktok.svg'

const StyledSection = styled.section`
  display: flex;
  justify-content: center;
  background-color: var(--secondary-bg-color);
`

const StyledContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding: 32px 0px;
`
const StyledNav = styled.nav`
display: flex;
flex-direction: column;
gap: 24px;
`

const StyledNavContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

h1 {
  font-family: 'Poppins';
font-style: normal;
font-weight: 500;
font-size: 16px;
line-height: 160%;
color: #210440;
margin: 0;
}

h2 {
  font-family: 'Poppins';
font-style: normal;
font-weight: 500;
font-size: 14px;
line-height: 160%;
text-align: center;
color: #210440;
}

a {
font-family: 'Poppins';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 160%;
text-align: center;
color: #252525;
text-decoration: none;
}

`

const StyledNavIconContainer = styled(StyledNavContainer)`
flex-direction: row;
gap: 16px;`

const Footer = () => {
  return (
    <StyledSection>
      <StyledContainer>
        <img src={FooterLogo} alt="Footer logo" />
        <p>Vallgatan 6<br />
223 61, Lund
        </p>
        <StyledNav>
          <StyledNavContainer>
            <h1>Company</h1>
            <a href="#">About Us</a>
            <a href="#">Contact Us</a>
            <a href="#">Our Studio</a>
            <a href="#">FAQs</a>
          </StyledNavContainer>
          <StyledNavContainer>
            <h1>Classes</h1>
            <a href="#">Pricing</a>
            <a href="#">Schedule</a>
            <a href="#">Instructors</a>
            <a href="#">About Barre</a>
          </StyledNavContainer>
          <StyledNavContainer>
            <h2>Follow Us</h2>
            <StyledNavIconContainer>

              <a href="#"><img src={Facebook} alt="Facebook" /></a>
              <a href="#"><img src={Instagram} alt="Instagram" /></a>
              <a href="#"><img src={TikTok} alt="TikTok" /></a>
            </StyledNavIconContainer>
          </StyledNavContainer>
        </StyledNav>
      </StyledContainer>
    </StyledSection>
  );
}

export default Footer;