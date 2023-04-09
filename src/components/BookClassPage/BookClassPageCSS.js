import styled from 'styled-components';
import BlueBtnBkgrndImg from '../../assets/BlueBtnBkgrnd.svg'
import BookClassBtnImg from '../../assets/BookClassBtn.svg'
import ParkourImgBkgrnd from '../../assets/ParkourImgBkgrnd.svg'

export const SliderContainer = styled.div`
position: relative;
width: 100vw;;
height: 322px;

.slick-dots li {
margin-right: -5px; /* Increase or decrease the value to adjust the space between dots */
}
.slick-dots li button:before {
color: white; /*changes the color of the dots to white*/
}

@media (min-width: 1024px) {
  display: none;
}
`;

export const NameText = styled.p`
font-family: 'Kulim Park';
font-style: italic;
font-weight: 600;
font-size: 21px;
line-height: 30px;
text-align: center;
letter-spacing: -0.022em;
color: #000000;
margin-top: 0;

@media (min-width: 540px) {
  margin-top: 16%;
}

@media (min-width: 1024px) {
  margin-top: -7%;
  font-size: 56px;
  position: relative;
  right: 0%;
  transform: skew(10deg, 0deg);
}
`
export const ClassImgContainer = styled.div`
height: 324px;
overflow: hidden;
transform: skew(10deg) rotate(0deg);
width: 61vw;

@media (min-width: 540px) {
  height: 148%;
  width: 61vw;
}

@media (min-width: 800px) {
  height: 179%;
  width: 60vw;
}
`;

export const ClassImg = styled.img`
transform: skew(-12deg) rotate(0deg) translate(-12%, 0%);
object-fit: cover;
width: 127%;
height: 115%;

@media (min-width: 1024px) {
  height: 478px;
  width: 485px;
  transform: skew(10deg) translate(-17%);
}
`;

export const FilterHover = styled.img`
`

export const ClassDiv = styled.div`
display: flex;
flex-direction: column;
background-color: transparent;
height: 324px;
width: 100vw;
`

export const ClassId = styled.div`
display:flex;
flex-direction: row;
justify-content: center;
align-items: center;
height: 322px;
flex-wrap: wrap;
align-content: center;
position:relative;
`

export const LogoLeft = styled.img`
transform: rotate(270deg);
width: 7%;
position: absolute;
top: 45%;
z-index: 1;
`

export const LogoRight = styled.img`
transform: rotate(90deg);
width: 7%;
position: absolute;
bottom: 45%;
left: 93%;
`

export const LearnBtn = styled.button`
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

@media (min-width: 540px) {
  top: 111%;
  left: 66.85%;
}

@media (min-width: 800px) {
  top: 121%;
  left: 70.85%;
  scale: 1.2;
}

@media (min-width: 1024px) {
  top: -9%;
  left: 37.85%;
  position: relative;
  scale: 1;
  width: 222px;
  height: 60.7px;
  background-repeat: no-repeat;
  background-size: cover;
  font-size: 34px;
}
`

export const BCPageWrapper = styled.div`
display: flex;
flex-direction: column;
width: 100vw;
align-items: center;
background-image: url(${ParkourImgBkgrnd});
background-size: cover;
background-repeat: no-repeat;
`

export const ParkourIMG = styled.img`
  position: absolute;
  z-index: -1;
  width: 100vw;
`;

export const ButWhatBannerHolder = styled.img`
width: 80.5%;
margin-top: 42.5px;

@media (min-width: 800px) {
  width: 60.5%;
  margin-top: 12%;
}

@media (min-width: 1024px) {
  width: 67%;
  margin-top: 10%;
}
`
export const BWBWrapper = styled.div`
display: flex;`

export const AcroPromoText = styled.p`
font-family: 'Kulim Park';
font-style: normal;
font-weight: 300;
font-size: 16px;
line-height: 25px;
text-align: justify;
letter-spacing: -0.022em;
color: #000000;
padding-left: 23.5px;
padding-right: 23.5px;
margin-top: 0px;
margin-bottom: 0;

@media (min-width: 800px) {
  margin-top: 6%;
  margin-bottom: 0px;
  margin-right: 44%;
  margin-left: 2%;
}

@media (min-width: 1024px) {
  margin: 6% 46% 0px 2%;
  font-size: 26px;
  line-height: 142%;
}
`

export const BookClassBtn = styled.button`
width:241px;
height:36px;
background-color: transparent;
border-style: none;
background-image: url(${BookClassBtnImg});
background-size: 100% auto;
margin-top: 27%;
margin-bottom: 20%;

@media (min-width: 800px) {
  scale: 1.4;
}

@media (min-width: 1024px) {
  scale: 1.0;
  margin-top: -187px;
  margin-bottom: 12%;
  width: 596px;
  height: 96px;
}
`

export const AcroArtWrapper = styled.div`
position: relative;
height: 60vh;
width: 100vw;
overflow-x: hidden;
overflow-y: visible;

@media (min-width: 540px) {
  height: 55vh;
  width: 71vw;
  left: 14%;
  overflow: hidden;
}

@media (min-width: 800px) {
  height: 680px;
  width: 63vw;
  left: 37%;
  overflow: hidden;
  position: absolute;
}
`

export const RingAcrobat = styled.img`
position: inherit;
width: 99%;
z-index: 1;
left: 9%;
top: 0%;

@media (min-width: 540px) {
  top: -14%;
}
@media (min-width: 800px) {
  top: 10%;
  left: 24%;
  width: 80%;
}

@media (min-width: 1024px) {
  top: 0%;
  left: 34%;
  width: 88%;
}
`

export const Acrostripe3 = styled.img`
position: absolute;
width: 100%;
right: -21%;
top: 3.2%;
z-index: 2;

@media (min-width: 800px) {
  display: none;
}
`

export const TopWrapper = styled.div`
display:flex;
width: 100vw;
align-items: center;
justify-content: space-between;
margin-top: 51px;

@media (min-width: 800px) {
  display:none
}
`

export const LogoLeftTop = styled.img`
transform: rotate(90deg);
width: 12.7%;
`

export const LogoRightTop = styled.img`
transform: rotate(270deg);
width: 12.7%;
`

export const Description = styled.p`
font-family: 'Kulim Park';
font-style: normal;
font-weight: 300;
font-size: 16px;
line-height: 20px;
text-align: center;
letter-spacing: -0.022em;
color: #0962CF;
width: 66%;
margin: 0;
`

export const Lines = styled.img`
position: absolute;
width: 82%;
right: -3%;
top: 3.2%;

@media (min-width: 1024px) {
  right: -16%;
  width: 73%;
}
`

export const PromoSubText = styled.p`
  font-family: "Kulim Park";
  font-style: normal;
  font-weight: 300;
  font-size: 16px;
  line-height: 25px;
  text-align: justify;
  letter-spacing: -0.022em;
  color: rgb(0, 0, 0);
  padding-left: 23.5px;
  padding-right: 23.5px;
  margin-top: 0px;
  margin-bottom: 0px;

  @media (min-width: 800px) {
    margin: 0% 44% 0px 2%
  }
  
  @media (min-width: 1024px) {
    visibility: hidden;
  }
`

export const ImagesWrapper = styled.div`
`

export const DesktopImages = styled.div`
display: none;

@media (min-width: 1024px) {
  display: flex;
  width: 90%;
  height: 2686px;
  flex-direction: column;
  align-content: center;
  flex-wrap: wrap;
  margin-left: 21%;
}
`

export const ClassDivDesktop = styled.div`

`

export const DesktopWrapper = styled.div`
transform: skew(-10deg) rotate(0deg);
    overflow: hidden;
    width: 70%;
    margin-right: 70px;
    `