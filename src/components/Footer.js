import React from 'react'
import styled from 'styled-components'
import LogoBig from '../images/logo-big.svg'

const FooterSection = styled.footer`
  height: 100vh;
  background-color: #4E80D5;
`
const FooterMainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 12.44% 4.1%;
`
const Logo = styled.img`
  width: 40.77%;
`

export const Footer = () => {
  return (
    <FooterSection>
      <FooterMainWrapper>
        <Logo src={LogoBig} />
      </FooterMainWrapper>
    </FooterSection>
  )
}