import React from 'react';
import styled from 'styled-components';
import { Button } from './Button';

const ClassesSection = styled.section`
  background-color: var(--primary-color-1);
  padding: 132px 16px;
`;

const ClassesH2 = styled.h2`
  font-size: 1rem;
  font-weight: 500;
`;

const ClassesH3 = styled.h3`
  font-size: 2.5rem;
  font-weight: 800;
  margin: 24px 0;
`;

const ClassesH4 = styled.h4`
  font-size: 1rem;
  font-weight: 800;
  margin-bottom: 32px;
`;

const ClassCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background-color: var(--neutral-light);
  padding: 0px 0px 10px;
  gap: 16px;
  height: 505px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

const ClassImg = styled.img`
  width: 100%;
  height: 50%;
`;

const CardH3 = styled.h3`
  font-size: 2rem;
  font-weight: 800;
`;

const CardP = styled.p`
  font-size: 1rem;
  font-weight: 400;
`;

export const Classes = () => {
  return (
    <ClassesSection className="classes">
      <div>
        <ClassesH2>OUR CLASSES</ClassesH2>
        <ClassesH3>WE HAVE SOMETHING FOR EVERYONE</ClassesH3>
        <ClassesH4>Three different levels. Read more</ClassesH4>
      </div>
      <ClassCard>
        <ClassImg src={`${process.env.PUBLIC_URL}/assets/pexels-karolina-grabowska-4379000 1.png`} alt="couple working out outside" />
        <CardH3>MODERATE WORKOUT</CardH3>
        <CardP>CrossPark is currently located in Stockholm, Göteborg and Malmö.</CardP>
        <Button cardCta>Read more</Button>
      </ClassCard>
    </ClassesSection>
  )
}