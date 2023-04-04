import React from 'react';
import styled from 'styled-components'
import VolSrc from '../icons/volunteering.svg'
import MedSrc from '../icons/meditation.svg'
import SelSrc from '../icons/self-care.svg'

const Card = styled.div`
    background-color: #D0C4B8;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 425px;
    padding: 32px 24px;
    color: #02393F;
    box-shadow: 0px 5px 31px rgba(0, 0, 0, 0.16);
    border-radius: 12px;
`
const Title = styled.h2`
    font-weight: 700;
    font-size: 25px;
    line-height: 160%;
    color: #02393F;
`

const Icon = styled.img`
    width: 126px;
`
const BenefitsWrapper = styled.div`
    padding: 24px;
    background-color: #D0C4B8;
    display: flex;
    flex-direction: column;
    gap: 24px;
`

const Benefits = () => {
  return (
    <section>
      <BenefitsWrapper>
        <Title>Ready to prioritize your well-being?</Title>
        <Card>
          <Icon src={SelSrc} />
          <p>Whether youre looking to reduce stress,
                 improve your flexibility or build strength - theres a yoga class for you.
          </p>
        </Card>
        <Card>
          <Icon src={MedSrc} />
          <p>No matter where you are or what your schedule looks like,
             this wellness program is here for you.
          </p>
        </Card>
        <Card>
          <Icon src={VolSrc} />
          <p>Get a nutrient-rich diet with
             recipes and meal plans for informed nutrition decisions from our experts.
          </p>
        </Card>
      </BenefitsWrapper>
    </section>
  )
}

export default Benefits