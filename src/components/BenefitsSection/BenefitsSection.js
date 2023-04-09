/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import { SectionTitle } from '../styledComponents/Texts'
import { FlexContainer } from '../styledComponents/Containers'
import { Cards } from './Cards'
import { BenefitsText } from './BenefitsText'

export const BenefitsSection = () => {
  return (
    <FlexContainer gap="20px" wrap>
      <SectionTitle>Benefits of fit2Derby</SectionTitle>
      <BenefitsText />
      <Cards />
    </FlexContainer>
  )
}