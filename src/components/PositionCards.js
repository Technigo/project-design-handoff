/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { PositionImageContainer, PositionImage } from 'components/PositionSectionWrappers';
import JammerProgram from '../Assets/JammerDesktopcards.png';
import BlockerProgram from '../Assets/BlockerDesktopcards.png';
import FreNsoProgram from '../Assets/FrensoDesktopcards.png';
import PivotProgram from '../Assets/PlayerImage.png';

export const CardDeck = () => {
  return (
    <>
      <PositionImageContainer>
        <PositionImage src={PivotProgram} />
      </PositionImageContainer>
      <PositionImageContainer>
        <PositionImage src={JammerProgram} />
      </PositionImageContainer>
      <PositionImageContainer>
        <PositionImage src={BlockerProgram} />
      </PositionImageContainer>
      <PositionImageContainer>
        <PositionImage src={FreNsoProgram} />
      </PositionImageContainer>
    </>
  );
}
