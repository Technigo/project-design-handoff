/* eslint-disable react/jsx-props-no-spreading */
import React from 'react'
import styled from 'styled-components'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Detailtext, TitleSection, Pbold, CardTitle, Pregular } from './Typography'
import { SliderWrapper, CardDiv, Imagewrapper, CardImage, TextInfoDiv } from './CardClasses'
import { CardButton } from './Button'
import ClassesModerate from '../images/classes-moderate.jpg'
import ClassesCardio from '../images/classes-cardio.jpg'
import ClassesIntense from '../images/classes-intense.jpg'

const Section = styled.section`
  height: 100vh;
  background-color: #F5F5F5;
`
const IntroWrapper = styled.div`
  height: 100%;
  background-color: #F5F5F5;
  padding: 16px;
`

const TextDiv = styled.div`
display: flex;
flex-direction: column;
gap: 24px;
margin-bottom: 32px;
margin-top: 50px;
`

export const Classes = () => {
  let slidesToShow = 1.1;
  let slidesToScroll = 1;
  let dots = false;
  let arrows = true;

  if (window.innerWidth > 1023) {
    slidesToShow = 4;
    slidesToScroll = 4;
    dots = false;
    arrows = false;
  } else if (window.innerWidth > 667) {
    slidesToShow = 2.1;
    slidesToScroll = 2;
    dots = false;
    arrows = true
  }

  const settings = {
    dots,
    speed: 500,
    slidesToShow,
    slidesToScroll,
    arrows
  };

  return (
    <Section>
      <IntroWrapper>
        <TextDiv>
          <Detailtext>OUR CLASSES</Detailtext>
          <TitleSection>
          WE HAVE SOMETHING
          FOR EVERYONE
          </TitleSection>
          <Pbold>
        Three different levels. Read more
          </Pbold>
        </TextDiv>
        <SliderWrapper>
          <Slider {...settings}>
            <CardDiv>
              <Imagewrapper>
                <CardImage src={ClassesCardio} alt="two people jogging outdoors" />
              </Imagewrapper>
              <TextInfoDiv>
                <div>
                  <CardTitle>CARDIO</CardTitle>
                  <Pregular>Focuses on different cardio exercises such as jogging,
          running stairs, jump rope, uphill sprints and more.
                  </Pregular>
                </div>
                <CardButton><p>Read more</p></CardButton>
              </TextInfoDiv>
            </CardDiv>
            <CardDiv>
              <Imagewrapper>
                <CardImage src={ClassesModerate} alt="two people outside stretching" />
              </Imagewrapper>
              <TextInfoDiv>
                <div>
                  <CardTitle>MODERATE</CardTitle>
                  <Pregular>
          Classes that everyone can participate in regardless of age,
           shape or athletic ability.
                  </Pregular>
                </div>
                <CardButton><p>Read more</p></CardButton>
              </TextInfoDiv>
            </CardDiv>
            <CardDiv>
              <Imagewrapper>
                <CardImage src={ClassesIntense} alt="two people outside stretching" />
              </Imagewrapper>
              <TextInfoDiv>
                <div>
                  <CardTitle>INTENSE</CardTitle>
                  <Pregular>
                    Vigorous exercises that pushes your body to the max.
                  </Pregular>
                </div>
                <CardButton><p>Read more</p></CardButton>
              </TextInfoDiv>
            </CardDiv>
            <CardDiv>
              <Imagewrapper>
                <CardImage src={ClassesIntense} alt="two people outside stretching" />
              </Imagewrapper>
              <TextInfoDiv>
                <div>
                  <CardTitle>HIIT</CardTitle>
                  <Pregular>
                  Intense interval exercises
                  </Pregular>
                </div>
                <CardButton><p>Read more</p></CardButton>
              </TextInfoDiv>
            </CardDiv>
          </Slider>
        </SliderWrapper>
      </IntroWrapper>
    </Section>
  )
}