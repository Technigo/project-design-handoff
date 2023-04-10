import React from 'react';
import styled from 'styled-components';
import contactStripes from '../assets/contact-stripes.svg';
import logoAG from '../assets/logo/logo-AG-white.svg';
import socialMedia from '../assets/social-media.svg';
import brand1 from '../assets/brands/brand1.svg';
import brand2 from '../assets/brands/brand2.svg';
import brand3 from '../assets/brands/brand3.svg';
import brand4 from '../assets/brands/brand4.svg';

export const Contact = () => {
  return (
    <ContactContainer>
      <ContactStripesDiv>
        <ContactStripesImage src={`${contactStripes}`} />
      </ContactStripesDiv>
      <ContactChildDiv>
        <LogoAndOContactDiv>
          <LogoDiv>
            <LogoImage src={`${logoAG}`} />
          </LogoDiv>
          <ContactInfoDiv>
            <div style={{ color: '#B9F615' }}>Contact us:</div>
            <div style={{ color: '#FFFFFF' }}>acrogym@sportsorg.se <br /> 078 652 45 32</div>
          </ContactInfoDiv>
          <SocialMedia src={`${socialMedia}`} />
        </LogoAndOContactDiv>
        <BrandsDiv>
          <BrandImage src={`${brand1}`} />
          <BrandImage src={`${brand2}`} />
          <BrandImage src={`${brand3}`} />
          <BrandImage src={`${brand4}`} />
        </BrandsDiv>
      </ContactChildDiv>
    </ContactContainer>
  );
};

const ContactContainer = styled.div`
  height: 100vh;
  width: 100vw;
  background-color:#42403C;
  position:relative;

  @media (min-width: 1024x) {
}
`;

const ContactStripesDiv = styled.div`
  display: flex;
  max-width: 75%;
  padding-top:8px;
  position:relative;
  left:-35px;

  @media (min-width: 768px) {
  width: 50%;
}

@media (min-width: 1024px) {
  width: 40%;
}
`;

const ContactStripesImage = styled.img`
  width: 100%;
`;

const ContactChildDiv = styled.div`
  display: flex;
  flex-direction: column;
  width:100vw;
  position:absolute;
  top:20%;
  justify-content: center;
  align-items: center;
  gap: 4rem;

  @media (min-width: 768px) {
  flex-direction: row;
  gap:2rem;
}

@media (min-width: 1024px) {
  gap:1rem;
  top:5%;
  left:5%;
}
`;

const LogoAndOContactDiv = styled.div`
 display: flex;
 flex-direction: column;
 align-items: center;
 height:max-content;

 @media (min-width: 768px) {
  gap:6rem;
 }

 @media (min-width: 1024px) {
  gap:2rem;
 }
`;

const LogoDiv = styled.div`
  display: flex;
  justify-content: center;
  width: 30.7%;

  @media (min-width: 1024px) {
    width:30%;
}
`;

const LogoImage = styled.img`
  width: 100%;
  `;

const ContactInfoDiv = styled.div`
  display: flex;
  flex-direction:column;
  width: 46.7%;
  margin-top:15%;
  font-style: normal;
  font-weight: 400;
  font-size: 1rem;
  line-height: 119%;
  text-align: center;
  letter-spacing: -0.022em;
`;

const SocialMedia = styled.img`
  width: 44.9%;
  height: 3.5%;
  margin-top:15%;

  @media (min-width: 1024px) {
    width:30%;
}
`;

const BrandsDiv = styled.div`
  display: flex; 
  flex-direction:column;
  width: 25.7%;
  gap:2rem; 

  @media (min-width: 768px) {
    gap:5rem;
    padding-right: 10%;
}

  @media (min-width: 1024px) {
      width: 25%;
  }
`;

const BrandImage = styled.img`
  width: 100%;
  filter: invert(100%);

  @media (min-width: 1024px) {
      width: 70%;
  }
`;

