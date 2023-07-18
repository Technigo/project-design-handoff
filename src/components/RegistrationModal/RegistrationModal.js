import React, { useState } from 'react';
import { StyledRegistrationModal, InputSection, FormHeader, ButtonSection, Button, PlanSection, PlanCard, PlanPrice, PlanPayment, PlanSubtitle, PlanDetails } from 'components/RegistrationModal/RegistrationModal.styles';
import plans from 'libraries/plans';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark } from '@fortawesome/free-regular-svg-icons';

export const RegistrationModal = ({ id, setShowForm }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault()
    setShowForm(false)
  }

  const handleFormClose = () => {
    setShowForm(false)
  }
  // eslint-disable-next-line eqeqeq
  const planMatch = plans.find((plan) => plan.id == id);

  return (
    <StyledRegistrationModal>
      <form onSubmit={handleSubmit}>
        <InputSection>
          <FormHeader>
            <h2>Register Here</h2>
            <FontAwesomeIcon icon={faCircleXmark} className="icon" onClick={handleFormClose} />
          </FormHeader>
          <input type="text" placeholder="First Name" />
          <input type="text" placeholder="Last Name" />
          <input type="email" onChange={handleEmailChange} value={email} placeholder="Email Address" />
          <input type="password" minLength="8" onChange={handlePasswordChange} value={password} placeholder="Password" />
          <ButtonSection>
            <Button type="button" buttonColor="transparent" textColor="#02393F">Log in</Button>
            <Button type="submit" disabled={!email || !password}>Sign up</Button>
          </ButtonSection>
        </InputSection>
        <PlanSection>
          {planMatch && (
            <PlanCard>
              <h3>{planMatch.title}</h3>
              <PlanPrice>{planMatch.price}</PlanPrice>
              <PlanPayment>{planMatch.payment}</PlanPayment>
              <PlanSubtitle>{planMatch.subtitle}</PlanSubtitle>
              <PlanDetails>
                <p>{planMatch.recipes}</p>
                <p>{planMatch.yoga}</p>
                <p>{planMatch.discount}</p>
              </PlanDetails>
              {/* <button type="button">Choose this plan</button> */}
            </PlanCard>)}
        </PlanSection>
      </form>
    </StyledRegistrationModal>
  )
}