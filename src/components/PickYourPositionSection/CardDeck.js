
import React from 'react';
import { PositionImage, PositionImageContainer } from './PositionsCSS';
import DesktopcardsPivot from '../../images/DesktopcardsPivot.png'
import DesktopcardsJammer from '../../images/DesktopcardsJammer.png'
import DesktopcardsBlocker from '../../images/DesktopcardsBlocker.png'
import DesktopcardsFreneso from '../../images/DesktopcardsFreneso.png'

export const CardDeck = () => {
  return (
    <>
      <PositionImageContainer>
        <PositionImage src={DesktopcardsPivot} />
      </PositionImageContainer>
      <PositionImageContainer>
        <PositionImage src={DesktopcardsJammer} />
      </PositionImageContainer>
      <PositionImageContainer>
        <PositionImage src={DesktopcardsBlocker} />
      </PositionImageContainer>
      <PositionImageContainer>
        <PositionImage src={DesktopcardsFreneso} />
      </PositionImageContainer>
    </>
  );
}