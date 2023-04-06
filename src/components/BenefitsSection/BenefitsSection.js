import React from 'react'
// import styled from 'styled-components';
// eslint-disable-next-line max-len
// import { Navbar, Logo, HamburgerIcon, NavbarOptions, NavbarOption, ContainerNavbar } from './Navbar'
// import { Hero, Title, SecondaryTitle, ButtonContainer, ParagraphContainer } from './Hero'
// import { Button } from '../styledComponents/Button'
import { Highlight } from '../styledComponents/Highlight'
import { Paragraph, SectionTitle, ListItem } from '../styledComponents/Texts'
import { FlexContainer, UnorderedList } from '../styledComponents/Containers'
// import logo from '../../images/logo.svg'
// import hero from '../../images/hero.svg'
// import hamburger from '../../images/hamburger.svg'

export const BenefitsSection = () => {
//   const [show, setShow] = useState(false)
  return (
    <FlexContainer background="#EDFDFF" gap="20px">
      <SectionTitle>Benefits of fit2Derby</SectionTitle>
      <FlexContainer background="#004852" width="92%" height="max-content" borderRadius="8px" gap="20px" justifyContent="center">
        <Paragraph>All our programs includes
          <Highlight>exercises to increase your endurance and
            agility as well as strengthening
            your neck muscles, core and lower body
          </Highlight>,
             all to prevent injuries and optimise your skating,
            blocking, juking and overall playing skills
        </Paragraph>
        <FlexContainer gap="20px">
          <SectionTitle>Examples of exercises</SectionTitle>
          <UnorderedList>
            <ListItem><Highlight color="#F7FEFF">High Intensity Interval Training </Highlight>(HIIT)</ListItem>
            <ListItem>
              <Highlight color="#F7FEFF">Mobility training </Highlight>  such as yoga movements for stretching and stability
            </ListItem>
            <ListItem>
              <Highlight color="#F7FEFF">Recommendations </Highlight> on gym classes and exercises involving gym equipment
            </ListItem>
          </UnorderedList>
        </FlexContainer>

      </FlexContainer>
    </FlexContainer>
  )
}