import React from 'react';
import styled from 'styled-components';
import { ClassCarousel } from './ClassCarousel';

const ClassesSection = styled.section`
  background-color: var(--primary-color-1);
  padding: 132px 0 132px 16px;

  @media (min-width: 668px) {
    padding: 0 0 0 16px;
    height: 100vh;
  }

  @media (min-width: 668px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  @media (min-width: 1024px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

const ClassesContainer = styled.div`
  @media (min-width: 668px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  @media (min-width: 1024px) {
    max-width: 1010px;
  }
`;

const ClassesH2 = styled.h2`
  font-size: 1rem;
  font-weight: 500;
`;

const ClassesH3 = styled.h3`
  font-size: 2.5rem;
  font-weight: 800;
  margin: 24px 0;

  @media (min-width: 1024px) {
    font-size: 3rem;
    max-width: 380px;
  }
`;

const ClassesH4 = styled.h4`
  font-size: 1rem;
  font-weight: 800;
  margin-bottom: 32px;
`;

export const Classes = () => {
  return (
    <ClassesSection className="classes">
      <ClassesContainer>
        <div>
          <ClassesH2>OUR CLASSES</ClassesH2>
          <ClassesH3>WE HAVE SOMETHING FOR EVERYONE</ClassesH3>
          <ClassesH4>Three different levels. Read more</ClassesH4>
        </div>
        <ClassCarousel />
      </ClassesContainer>
    </ClassesSection>
  )
}