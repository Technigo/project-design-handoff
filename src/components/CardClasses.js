import styled from 'styled-components'
import nextArrow from '../images/slick-next.jpg'
import prevArrow from '../images/slick-prev.jpg'

export const SliderWrapper = styled.div`

@media (min-width: 1024px) {
  display: flex;
  justify-content: center;
}
.slick-slider {
  width: 95%;
  height: 55vh;

  @media (min-width: 1024px) {
  padding:unset;
}

  @media (min-width: 1024px) {
    width: 90vw;
  }
}

.slick-prev, .slick-next {
  top: auto !important;
  bottom: -55px !important;
  border-radius: 50%;
  height: 40px;
  width: 40px;
}

.slick-prev:before, .slick-next:before {
  content: "";
  display: block;
  width: 40px;
  height: 40px;
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
}

.slick-next {
  right: 35%;
  background-image: url(${nextArrow});
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
}

.slick-prev {
    left: 35%;
    background-image: url(${prevArrow});
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
}   

.slick-list {
  height: 100%;
}

.slick-slide {
  margin-right: 5px;

  @media (min-width: 1024px) {
    margin: 0;
  }

}

@media (min-width: 668px) {
.slick-slide > div {
  width: 98%;
  margin: 0 auto;
}
}

.slick-track::before, .slick-track::after {
  @media (min-width: 1024px) {
    width: 100vw;
  }

  .slick-slide, .slick-active, .slik-current {
  @media (min-width: 1024px) {
    width: 15vw;
  }
}

@media (min-width: 667px) {
  .slick-initialized .slick-slide {
    margin-right: 10px;
    margin-left: -5px;
  }
}
`
export const BookCardsWrapper = styled(SliderWrapper)`
flex-direction: column;
gap: 40px;
height: unset;
width: unset;

@media (min-width: 667px) {
  gap: 48px;
  margin-top: 40px;
}

@media (min-width: 1024px) {
  flex-direction: row;
  gap: 40px;
  height: 51.7%;
}
`

export const CardDiv = styled.div`
height: 54vh;
width: 95%;
margin-left: 15px;
margin-right: 10px;
background-color: #FFFFFF;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
border-radius: 40px 40px 0px 0px;

@media (min-width: 667px) {
  width: 50%;
  margin-right: 10px;
}

@media (min-width: 1024px) {
  width: 95%;
  margin: unset;
}
`
export const SingleCardBook = styled(CardDiv)`
height: 50vh;
width: 95%;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

@media (min-width: 1024px) {
  width: 25%;
  height: 100%;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 40px 40px 0px 0px;
  margin: 0 10px 0 15px;
}
`

export const Imagewrapper = styled.div`
height: 25vh;
width: 100%;
`

export const ImagewrapperBookCard = styled(Imagewrapper)`
height: 57%;
`

export const CardImage = styled.img`
width: 100%;
height: 100%;
object-fit: cover;
object-position: center;
max-width: 100%;
max-height: 100%;
`
export const TextInfoDiv = styled.div`
height: 50%;
display: flex;
flex-direction: column;
justify-content: space-around;
gap: 8px;
padding: 10px 16px;
`
export const TextInfoCardBook = styled(TextInfoDiv)`
height: 38%;
align-items: center;
gap: 24px;
`