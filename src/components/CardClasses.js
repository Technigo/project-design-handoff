import styled from 'styled-components'

export const SliderWrapper = styled.div`
display: flex;
justify-content: center;
gap: 16px;
height: 50vh;
width: 100%;

.slick-slider {
  width: 80%;
  height: 50vh;
}

.slick-list {
  height: 100%;
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
height: 50vh;
width: 81%;
background-color: #FFFFFF;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
border-radius: 40px 40px 0px 0px;

@media (min-width: 667px) {
  width: 50%;
  margin-right: 10px;
}

@media (min-width: 1024px) {
  width: 20%;
}
`
export const SingleCardBook = styled(CardDiv)`
height: 50vh;
width: 100%;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

@media (min-width: 1024px) {
  width: 25%;
  height: 100%;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 40px 40px 0px 0px;
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
gap: 8px;
padding: 10px 16px;
`
export const TextInfoCardBook = styled(TextInfoDiv)`
height: 42%;
align-items: center;
gap: 24px;
`