import React from 'react'
import { Image } from '../styledComponents/Images'
import hero from '../../images/hero.svg'
import { FlexContainer } from '../styledComponents/Containers'
import { NavbarSection } from './Navbar'
import { HeroSection } from './Hero'

export const HeaderSection = () => {
  return (
    <FlexContainer background="#045661" padding="5%" main>
      <Image src={hero} />
      <NavbarSection />
      <HeroSection />
    </FlexContainer>
  )
}