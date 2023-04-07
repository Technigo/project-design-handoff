/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import { ImFacebook } from 'react-icons/im'
import { BsInstagram } from 'react-icons/bs'
// import { Highlight } from 'components/styledComponents/Highlight';
// import { SectionTitle, CardText } from '../styledComponents/Texts'
import { FlexContainer } from '../styledComponents/Containers'
// import { Carousel } from './Carousel'
// import ProgramDeck from '../../images/ProgramDeck.png'
// import { PositionImage, PositionImageContainer } from './Positions';
// import DesktopcardsPivot from '../../images/DesktopcardsPivot.png'
// import DesktopcardsJammer from '../../images/DesktopcardsJammer.png'
// import DesktopcardsBlocker from '../../images/DesktopcardsBlocker.png'
import { Icon } from '../styledComponents/Image'

export const Footer = () => {
  return (
    <FlexContainer background="#EDFDFF" gap="20px" maxWidth="500px">
      <FlexContainer flexDirection="row" justifyContent="center" padding="20px">
        <Icon href="https://www.facebook.com/" target="_blank" alt="facebook icon" aria-label="facebook icon" rel="noreferrer"><ImFacebook /></Icon>
        <Icon href="https://www.instagram.com/" target="_blank" alt="instagram icon" aria-label="instagram icon" rel="noreferrer"><BsInstagram /></Icon>
      </FlexContainer>
      <p>Photography by HelenaandtheSea.com</p>
    </FlexContainer>
  )
}