import React, { useState } from 'react';
import { plans } from 'libraries/plans';
import { StyledPlans, PlanWrapper } from 'components/Plans/Plans.styles';
import { RegistrationModal } from 'components/RegistrationModal/RegistrationModal'
import { Header2, Header3, PlanCard, PlanButton, PlanPrice, PlanPayment, PlanSubtitle, PlanDetails } from 'styles/Global';

export const Plans = () => {
  const [id, setId] = useState(0)
  const [showform, setShowForm] = useState(false)

  const handleClick = (event) => {
    setId(event.target.value)
    setShowForm(true);
  }
  return (
    <>
      <StyledPlans>
        <Header2 headerColor="#F4E4D7" id="plans">Choose your preferred pricing plan:</Header2>
        <PlanWrapper>
          {plans.map((plan) => (
            <PlanCard key={plan.id}>
              <Header3>{plan.title}</Header3>
              <PlanPrice>{plan.price}</PlanPrice>
              <PlanPayment>{plan.payment}</PlanPayment>
              <PlanSubtitle>{plan.subtitle}</PlanSubtitle>
              <PlanDetails>
                <p>{plan.recipes}</p>
                <p>{plan.yoga}</p>
                <p>{plan.discount}</p>
              </PlanDetails>
              <PlanButton type="button" value={plan.id} onClick={handleClick}>Choose this plan</PlanButton>
            </PlanCard>
          ))}
        </PlanWrapper>
      </StyledPlans>
      {showform && (<RegistrationModal id={id} setShowForm={setShowForm} />)}
    </>

  )
}