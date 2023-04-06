/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import styled from 'styled-components';
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
import BlueBtnBkgrndImg from '../../assets/BlueBtnBkgrnd.svg'

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

  const SliderContainer = styled.div`
  position: relative;
width: 100vw;;
height: 322px;

.slick-dots li {
  margin-right: -5px; /* Increase or decrease the value to adjust the space between dots */
}
.slick-dots li button:before {
 color: white; /*changes the color of the dots to white*/
}`;

  const NameText = styled.p`
  font-family: 'Kulim Park';
  font-style: italic;
  font-weight: 600;
  font-size: 21px;
  line-height: 30px;
  text-align: center;
  letter-spacing: -0.022em;
  color: #000000;
`
  const ClassImgContainer = styled.div`
height: 324px;
overflow: hidden;
transform: skew(10deg) rotate(0deg);
width: 61vw;
`;

  const ClassImg = styled.img`
  transform: skew(-12deg) rotate(0deg) translate(-12%, 0%);
  object-fit: cover;
  width: 130%;
`;

  const ClassDiv = styled.div`
  display: flex;
  flex-direction: column;
  background-color: transparent;
  height: 324px;
  width: 100vw;
  `

  const ClassId = styled.div`
  display:flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 322px;
  flex-wrap: wrap;
    align-content: center;
    position:relative;
`

  const LogoLeft = styled.img`
transform: rotate(270deg);
width: 7%;
position: absolute;
top: 45%;
z-index: 1;
`

  const LogoRight = styled.img`
transform: rotate(90deg);
width: 7%;
position: absolute;
bottom: 45%;
left: 93%;
`

  const LearnBtn = styled.button`
  width: 148.8px;
  height: 40.49px;
  background-color: transparent;
  border-style: none;
  position: absolute;
  top: 85%;
  left: 53.85%;
  background-image: url(${BlueBtnBkgrndImg});
  color: white;
  font-family: 'Kulim Park';
  font-style: italic;
  font-weight: 600;
  font-size: 21px;
  line-height: 27px;
  text-align: justify;
  padding-left: 12px;
  `

  return (
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
  );
}