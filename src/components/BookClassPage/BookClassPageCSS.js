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
}`;

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
`
export const ClassImgContainer = styled.div`
height: 324px;
overflow: hidden;
transform: skew(10deg) rotate(0deg);
width: 61vw;
`;

export const ClassImg = styled.img`
transform: skew(-12deg) rotate(0deg) translate(-12%, 0%);
object-fit: cover;
width: 130%;
`;

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
`

export const AcroArtWrapper = styled.div`
position: relative;
height: 60vh;
width: 100vw;
overflow-x: hidden;
overflow-y: visible;
`

export const RingAcrobat = styled.img`
position: inherit;
    width: 93%;
    z-index: 1;
    left: 3%;
    top: -7%;
`

export const Acrostripe1 = styled.img`
position: absolute;
width: 288.15px;
height: 264.4px;
left: 225.54px;
top: 12.5px;
`

export const Acrostripe2 = styled.img`
position: absolute;
width: 329.42px;
height: 305.86px;
left: 142.98px;
top: 12.5px;
`

export const Acrostripe3 = styled.img`
position: absolute;
width: 100%;
right: -21%;
top: 3.2%;
z-index: 2;
`

export const Acrostripe4 = styled.img`
position: absolute;
width: 199.26px;
height: 199.26px;
left: 192.56px;
top: 201.5px;
`

export const TopWrapper = styled.div`
display:flex;
width: 100vw;
align-items: center;
justify-content: space-between;
margin-top: 51px;
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
top: 3.2%;`