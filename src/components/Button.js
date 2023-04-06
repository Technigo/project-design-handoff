
import styled from 'styled-components'

export const StyledButtonHeader = styled.button`
  height: 67px;
  background-color: #FAC75D;
  border-radius: 50px;
  text-align: center;
  border: none;
  padding: 8px, 55px, 8px, 55px;

  p {
    font-weight: 400;
    font-size: 2rem;
  }

  @media (min-width: 570px) {
    width: 41%;
  }

  @media (min-width: 769px) {
    width: 31%;
  }
`
export const IntroButton = styled(StyledButtonHeader)`
height: 48px;

p {
  font-style: normal;
  font-weight: 400;
  font-size: 1,5rem;
  line-height: 29px;
} 

@media (min-width: 570px) {
  width: 40%;
}
`
export const CardButton = styled(IntroButton)`
background-color: #4E80D5;
color: #FFFFFF;
width: 58%;

p {
  font-size: 1rem;
}
`