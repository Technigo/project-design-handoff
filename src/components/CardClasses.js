import styled from 'styled-components'

export const SliderWrapper = styled.div`
display: flex;
height: 50%;
width: 100%;
gap: 16px;

.slick-slider {
  width: 100%;
}
`
export const BookCardsWrapper = styled(SliderWrapper)`
height: 79%;
flex-direction: column;
gap: 40px;

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
height: 100%;
width: 81%;
display: flex;
flex-direction: column;
gap: 16px;
background-color: #FFFFFF;

@media (min-width: 667px) {
  width: 50%;
}

@media (min-width: 1024px) {
  width: 25%;
}
`
export const SingleCardBook = styled(CardDiv)`
height: 30%;
width: 100%;

@media (min-width: 1024px) {
  width: 30%;
  height: 100%;
}
`

export const Imagewrapper = styled.div`
height: 50%;
width: 100%;
`

export const ImagewrapperBookCard = styled(Imagewrapper)`
height: 58%;
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
`