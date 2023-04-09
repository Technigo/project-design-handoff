import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { Detailtext, TitleSection, CardTitle, BookButtonP } from './Typography'
import { DropDownMenu } from './DropDownMenu'
import { BookCardsWrapper, SingleCardBook, ImagewrapperBookCard, CardImage, TextInfoCardBook } from './CardClasses'
import { BookCardButton } from './Button'
import FirstPhoneCardImg from '../images/classes-moderate.jpg'
import SecondPhoneCardImg from '../images/book-phone-second.jpg'
import ThirdPhoneCardImg from '../images/book-phone-third.jpg'
import FirstTabletCardImg from '../images/tablet-book-first.jpg'

const StyledSection = styled.section`
  background-color: #F5F5F5; 

  @media (min-width: 667px) {
    background-color: #FFFFFF;
  }
  @media (min-width: 1024px) {
    height: 100vh;
  }
`
const InnerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  background-color: #F5F5F5;
  padding: 13.3% 1.6%;

  @media (min-width: 667px) {
    padding: 0 11.35%;
    background-color: #FFFFFF;
  }

  @media (min-width: 1024px) {
    background-color: #FFFFFF;
    height: 100%;
    padding: 0 0 0 6.2%;
  }
`

export const Booking = () => {
  const [cardImage, setCardImage] = useState({});

  useEffect(() => {
    if (window.innerWidth <= 667) {
      setCardImage(FirstPhoneCardImg);
    } else {
      setCardImage(FirstTabletCardImg);
    }
  }, []);

  return (
    <StyledSection>
      <InnerWrapper>
        <TitleSection>BOOK A
      WORKOUT TODAY
        </TitleSection>
        <DropDownMenu />
        <BookCardsWrapper>
          <SingleCardBook>
            <ImagewrapperBookCard>
              <CardImage src={cardImage} />
            </ImagewrapperBookCard>
            <TextInfoCardBook>
              <Detailtext>MAGISTRATPARKEN</Detailtext>
              <CardTitle>17.30 INTENSE</CardTitle>
              <BookCardButton><BookButtonP>Book workout</BookButtonP></BookCardButton>
            </TextInfoCardBook>
          </SingleCardBook>
          <SingleCardBook>
            <ImagewrapperBookCard>
              <CardImage src={SecondPhoneCardImg} />
            </ImagewrapperBookCard>
            <TextInfoCardBook>
              <Detailtext>MAGISTRATPARKEN</Detailtext>
              <CardTitle>17.30 INTENSE</CardTitle>
              <BookCardButton><BookButtonP>Book workout</BookButtonP></BookCardButton>
            </TextInfoCardBook>
          </SingleCardBook>
          <SingleCardBook>
            <ImagewrapperBookCard>
              <CardImage src={ThirdPhoneCardImg} />
            </ImagewrapperBookCard>
            <TextInfoCardBook>
              <Detailtext>MAGISTRATPARKEN</Detailtext>
              <CardTitle>17.30 INTENSE</CardTitle>
              <BookCardButton><BookButtonP>Book workout</BookButtonP></BookCardButton>
            </TextInfoCardBook>
          </SingleCardBook>
        </BookCardsWrapper>
      </InnerWrapper>
    </StyledSection>
  )
}