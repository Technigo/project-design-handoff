/* eslint-disable react/jsx-props-no-spreading */
import React from 'react'
import { SectionsContainer, Section } from 'react-fullpage';
import { useMediaQuery } from 'react-responsive'

import { GlobalStyle } from 'components/styles/GlobalStyle'
import { Hero } from 'components/pages/Hero'
import { Benefits } from 'components/pages/Benefits'
import { Workouts } from 'components/pages/Workouts'
import { Activity } from 'components/pages/Activity'
import { Community } from 'components/pages/Community'

import { NavBarSticky } from 'components/parts/NavBarSticky';

export const App = () => {
  const isDesktopOrLaptop = useMediaQuery({ query: '(min-width: 1023px)' })

  const options = {
    sectionClassName: 'section',
    anchors: ['sectionOne', 'sectionTwo', 'sectionThree', 'sectionFour', 'sectionFive'],
    scrollBar: false,
    navigation: false,
    verticalAlign: false,
    sectionPaddingTop: '0',
    sectionPaddingBottom: '0',
    arrowNavigation: true,
    delay: 1000
  };

  return (
    <>
      <GlobalStyle />
      {isDesktopOrLaptop ? (
        <>
          <NavBarSticky />
          <SectionsContainer {...options}>
            <Section data-anchor="#sectionOne"><Hero /></Section>
            <Section data-anchor="#sectionTwo"><Benefits /></Section>
            <Section data-anchor="#sectionThree"><Workouts /></Section>
            <Section data-anchor="#sectionFour"><Activity /></Section>
            <Section data-anchor="#sectionFive"><Community /></Section>
          </SectionsContainer>
        </>
      ) : (
        <>
          <Hero />
          <Benefits />
          <Workouts />
          <Activity />
          <Community />
        </>
      )}
    </>
  )
}
