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

export const CardDiv = styled.div`
height: 100%;
width: 81%;
display: flex;
flex-direction: column;
gap: 16px;
background-color: #FFFFFF;

@media (min-width: 570px) {
  width: 50%;
}

@media (min-width: 769px) {
  width: 25%;
}
`
export const Imagewrapper = styled.div`
height: 50%;
width: 100%;
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