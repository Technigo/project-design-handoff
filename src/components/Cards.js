import React from 'react';
import styled from 'styled-components';

const CardContainer = styled.div`
background-color: #D7CBFF;
box-shadow: 0px 5px 31px rgba(0, 0, 0, 0.3);
width: 320px;
height: 382.5px;
border-radius: 30px;
padding: 20px;

  @media only screen and (max-width: 767px) {
    width: 100%;
    height: auto;
  }
`;

const ReviewTitle = styled.h3`
color: #000;

@media only screen and (max-width: 767px) {
    font-size: 1.2rem;
  }
`;
const ReviewText = styled.h3`
    color: #000;

 @media only screen and (max-width: 767px) {
    font-size: 1rem;
  }
`;

const CustomerImage = styled.img`
 display: block;

 @media only screen and (max-width: 767px) {
    font-size: 1rem;
    height: auto;
  }
`;

export const CustomerCard = ({ customerImage, title, text }) => {
  return (
    <CardContainer>
      <CustomerImage src={customerImage} alt="customers" />
      <ReviewTitle> {title} </ReviewTitle>
      <ReviewText> {text} </ReviewText>
    </CardContainer>
  );
};

