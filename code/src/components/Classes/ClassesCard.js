import React from 'react';
import {
  ClassCardContainer,
  StyledClassCard,
  ClassImg,
  CardH3,
  CardP,
  CardButton
} from './Classes.styled';

export const ClassesCard = ({ imgSrc, imgAlt, title, description, shadow }) => {
  return (
    <ClassCardContainer shadow={shadow}>
      <StyledClassCard className="carousel-cards">
        <ClassImg src={imgSrc} alt={imgAlt} />
        <CardH3>{title}</CardH3>
        <CardP>{description}</CardP>
        <CardButton cardCta>Read more</CardButton>
      </StyledClassCard>
    </ClassCardContainer>
  );
};
