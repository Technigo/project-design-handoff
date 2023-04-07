import React from 'react';
import styled from 'styled-components';
import { Button } from '../Button';

const ClassCardContainer = styled.div`
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  margin: 0 16px 5px 5px;

  @media (min-width: 1024px) {
    box-shadow: none;

    &:hover {
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    }
  }
`;

const StyledClassCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background-color: var(--neutral-light);
  gap: 16px;
  height: 505px;
  overflow: hidden;

  @media (min-width: 1024px) {
    height: 400px;
    background-color: var(--primary-color-1);
    border: none;
    box-shadow: none;
    outline: none;
    filter: grayscale(100%);
    
    &:focus {
      outline: none;
    }

    &:hover {
      filter: none;
    }
  }
`;

const ClassImg = styled.img`
  width: 100%;
  height: 50%;
  object-fit: cover;
`;

const CardH3 = styled.h3`
  font-size: 2rem;
  font-weight: 800;
  padding: 0px 16px;
`;

const CardP = styled.p`
  font-size: 1rem;
  font-weight: 400;
  padding: 0px 16px;
`;

const CardButton = styled(Button)`
  position: absolute;
  padding: 12px 30px;
  bottom: 16px;
  left: 10px;
`;

export const ClassCard = ({ imgSrc, imgAlt, title, description, shadow }) => {
  return (
    <ClassCardContainer shadow={shadow}>
      <StyledClassCard className="carousel-cards">
        <ClassImg src={imgSrc} alt={imgAlt} />
        <CardH3>{title}</CardH3>
        <CardP>{description}</CardP>
        <CardButton cardCta>Read more</CardButton>
      </StyledClassCard>
    </ClassCardContainer>
  )
}
