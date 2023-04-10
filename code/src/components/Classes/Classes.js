import React from 'react';
import { ClassesCarousel } from './ClassesCarousel';
import {
  ClassesSection,
  ClassesContainer,
  ClassesH2,
  ClassesH3,
  ClassesH4
} from './Classes.styled';

export const Classes = () => {
  return (
    <ClassesSection className="classes">
      <ClassesContainer>
        <div>
          <ClassesH2>OUR CLASSES</ClassesH2>
          <ClassesH3>WE HAVE SOMETHING FOR EVERYONE</ClassesH3>
          <ClassesH4>Four different levels. Read more</ClassesH4>
        </div>
        <ClassesCarousel />
      </ClassesContainer>
    </ClassesSection>
  );
};
