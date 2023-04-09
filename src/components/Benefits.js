import React from 'react';
import styled from 'styled-components'
import VolSrc from '../icons/volunteering.svg'
import MedSrc from '../icons/meditation.svg'
import SelSrc from '../icons/self-care.svg'

const StyledSection = styled.section`
background-color: #D0C4B8;
padding: 1.5rem;
`

const StyledBenefitsWrapper = styled.div`
    
    background-color: #D0C4B8;
    display: flex;
    flex-direction: column;
    gap: 1.7rem;
    align-items: center;

    @media(min-width: 768px) and (max-width: 1024px) {
    gap: 3rem;
    padding-bottom: 8rem;
    }

    @media(min-width: 1025px) {
    flex-direction: row;
    max-width: 1216px;
    gap: 5rem;
    }
`

const StyledCard = styled.div`
    display: flex;
    padding: 32px 24px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 342px;
    color: #02393F;
    box-shadow: 0px 5px 31px rgba(0, 0, 0, 0.16);
    border-radius: 12px;

    @media(min-width: 768px) and (max-width: 1024px) {
      max-height: 313px;
      max-width: 450px;
     
    }

    @media(min-width: 1025px) {
      max-width: 352px;
      max-height: 345px;
      padding: 16px 8px;
    }

`
const StyledH2 = styled.h2`
    font-weight: 700;
    font-size: 25px;
    line-height: 160%;
    color: #02393F;

    @media(min-width: 768px) and (max-width: 1024px) {
      font-size: 40px;
      width: 540px;
      margin-left: 32px;
      margin-bottom: 64px;
    }

    @media(min-width: 1025px) {
      width: unset;
    }
`
const Icon = styled.img`
    width: 126px;

`
const StyledP = styled.p`
font-weight: 400;
color: #02393F;
font-size: 20px;
line-height: 160%;
`

const Benefits = () => {
  return (
    <StyledSection>
      <StyledH2>Ready to prioritize your well-being?</StyledH2>
      <StyledBenefitsWrapper>
        <StyledCard>
          <Icon src={SelSrc} />
          <StyledP>Whether you&rsquo;re looking to reduce stress,
            improve your flexibility or build strength - there&rsquo;s a yoga class for you.
          </StyledP>
        </StyledCard>
        <StyledCard>
          <Icon src={MedSrc} />
          <StyledP>No matter where you are or what your schedule looks like,
             this wellness program is here for you.
          </StyledP>
        </StyledCard>
        <StyledCard>
          <Icon src={VolSrc} />
          <StyledP>Get a nutrient-rich diet with
             recipes and meal plans for informed nutrition decisions from our experts.
          </StyledP>
        </StyledCard>
      </StyledBenefitsWrapper>
    </StyledSection>
  )
}

export default Benefits