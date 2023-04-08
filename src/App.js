/* eslint-disable react/jsx-props-no-spreading */
import React from 'react'
import { SectionsContainer, Section } from 'react-fullpage';

import { GlobalStyle } from 'components/styles/GlobalStyle'
import { Hero } from 'components/pages/Hero'
import { Benefits } from 'components/pages/Benefits'
import { Workouts } from 'components/pages/Workouts'
import { Activity } from 'components/pages/Activity'
import { Community } from 'components/pages/Community'

import { NavBarSticky } from 'components/parts/NavBarSticky';

export const App = () => {
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
      <NavBarSticky />
      <GlobalStyle />
      <SectionsContainer {...options}>
        <Section><Hero /></Section>
        <Section><Benefits /></Section>
        <Section><Workouts /></Section>
        <Section><Activity /></Section>
        <Section> <Community /></Section>
      </SectionsContainer>
    </>
  )
}
