/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import AcrobaticIMG from '../../assets/Acrobatics.svg'
import AcrobaticIMGhover from '../../assets/Acrobaticshover.svg'
import AerialcircusIMG from '../../assets/Aerialcircus.svg'
import AerialcircusIMGhover from '../../assets/Aerialcircushover.svg'
import CheerleadingIMG from '../../assets/Cheerleading.svg'
import CheerleadingIMGhover from '../../assets/Cheerleadinghover.svg'
import ParkourIMG from '../../assets/Parkour.svg'
import ParkourIMGhover from '../../assets/Parkourhover.svg'
import TrampolineIMG from '../../assets/Trampoline.svg'
import TrampolineIMGhover from '../../assets/Trampolinehover.svg'
import TumbleIMG from '../../assets/Tumble.svg'
import TumbleIMGhover from '../../assets/Tumblehover.svg'
import SingleLogoABlue from '../../assets/SingleLogoABlue.svg'
import { SliderContainer, LogoLeft, ClassDiv, ClassId, ClassImgContainer, ClassImg, LearnBtn, NameText, LogoRight, ImagesWrapper, DesktopImages, ClassDivDesktop, DesktopWrapper } from './BookClassPageCSS'

export const ClassCarousel = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768, // breakpoint for mobile devices
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  const Class = [
    {
      id: 1,
      image: AerialcircusIMG,
      hover: AerialcircusIMGhover,
      name: 'Aerial circus'
    },
    {
      id: 2,
      image: TumbleIMG,
      hover: TumbleIMGhover,
      name: 'Tumble'
    },
    {
      id: 3,
      image: ParkourIMG,
      hover: ParkourIMGhover,
      name: 'Parkour'
    },
    {
      id: 4,
      image: AcrobaticIMG,
      hover: AcrobaticIMGhover,
      name: 'Acrobatic gymnastics'
    },
    {
      id: 5,
      image: CheerleadingIMG,
      hover: CheerleadingIMGhover,
      name: 'Cheerleading'
    },
    {
      id: 6,
      image: TrampolineIMG,
      hover: TrampolineIMGhover,
      name: 'Trampoline'
    }
  ]

  return (
    <ImagesWrapper>
      <SliderContainer>
        <LogoLeft src={`${SingleLogoABlue}`} />
        <Slider {...settings} className="slider">
          {Class.map((classes) => (
            <ClassDiv key={classes.id}>
              <ClassId>
                <ClassImgContainer>
                  <ClassImg src={classes.image} alt={classes.name} />
                </ClassImgContainer>
                <LearnBtn>
                Learn more
                </LearnBtn>
              </ClassId>
              <NameText>{classes.name}</NameText>
            </ClassDiv>
          ))}
        </Slider>
        <LogoRight src={`${SingleLogoABlue}`} />
      </SliderContainer>
      <DesktopImages>
        {Class.map((classes) => (
          <DesktopWrapper>
            <ClassDivDesktop key={classes.id}>
              <ClassImg src={classes.image} alt={classes.name} />
            </ClassDivDesktop>
            <LearnBtn>
                Learn more
            </LearnBtn>
            <NameText>{classes.name}</NameText>
          </DesktopWrapper>
        ))}
      </DesktopImages>
    </ImagesWrapper>
  );
}