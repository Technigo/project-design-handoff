
import styled from 'styled-components'

export const StyledButtonHeader = styled.button`
  height: 67px;
  background-color: #FAC75D;
  border-radius: 50px;
  text-align: center;
  border: none;
  padding: 8px, 55px, 8px, 55px;
  cursor: pointer;

  @media (min-width: 667px) {
    width: 41%;
  }

  @media (min-width: 1024px) {
    width: 31%;
  }
`
export const IntroButton = styled(StyledButtonHeader)`
height: 48px;

@media (min-width: 667px) {
  width: 40%;
}
`
export const FooterButton = styled(StyledButtonHeader)`
height: 53px;
width: 38.97%;
`

export const CardButton = styled(IntroButton)`
height: 53px;
background-color: #4E80D5;
color: #FFFFFF;
width: 58%;

p {
  font-size: 1rem;
}
`
export const BookCardButton = styled(CardButton)`
height: 48px;
width: 53%;
cursor: pointer;
`