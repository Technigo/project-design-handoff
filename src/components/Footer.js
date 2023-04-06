import React from 'react'
import styled from 'styled-components'
import LogoImg from '../images/Site-logo.png'
import { P16 } from './Typography'
import FacebookIcon from '../icons/Facebook svg.png'
import InstagramIcon from '../icons/Instagram svg.png'
import TwitterIcon from '../icons/Twitter  svg.png'
import LinkedInIcon from '../icons/LinkedIn svg.png'

const EmptyDiv = styled.div`
height: 80px;
`
const StyledFooter = styled.div`
height: 318px;
background-color: #4C5A66;
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-evenly;
padding: 64px;

.logo {
  filter: brightness(5000%);
  width:128px;
  height: 38px;
}

ul {
  display: flex;
  align-self: stretch;
  justify-content: space-between;
  list-style-type: none;
  gap: 56px;

}
li{
  color: #F9F6FB;
}

.divider {
  border-bottom: 1px solid #F9F6FB;
  align-self: stretch;
  margin-top: 32px;
}

container {
  display: flex;
  align-self: stretch;
  justify-content: space-between;
}

container .icon1{
  width: 32px;
  height:32px;
}

container .icon3{
  width: 37.91px;
  height:c32px;
}

container .icon4{
  width: 38.54px;
  height:31.37px;
  }

  @media (min-width:641px) and (max-width:1024px) {
    height: 328px;
  }

`

export const Footer = () => {
  return (
    <>
      <EmptyDiv />
      <StyledFooter>
        <img className="logo" src={LogoImg} alt="logo" />
        <P16>
          <ul>
            <li>Classes</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
          <div className="divider" />
        </P16>
        <container>
          <img className="icon1" src={InstagramIcon} alt="instagram" />
          <img className="icon1" src={FacebookIcon} alt="facebook" />
          <img className="icon3" src={LinkedInIcon} alt="linked in" />
          <img className="icon4" src={TwitterIcon} alt="twitter" />
        </container>
      </StyledFooter>
    </>
  )
}