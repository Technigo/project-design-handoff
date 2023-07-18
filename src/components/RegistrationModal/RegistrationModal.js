import React, { useState } from 'react';
import { StyledRegistrationModal, InputSection, FormHeader, ButtonSection, Button, PlanSection } from 'components/RegistrationModal/RegistrationModal.styles';
import { plans } from 'libraries/plans';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark } from '@fortawesome/free-regular-svg-icons';
import { Header2, Header3, PlanCardStatic, PlanPrice, PlanPayment, PlanSubtitle, PlanDetails } from 'styles/Global';

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
            <Header2 headerColor="#02393F">Register Here</Header2>
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
            <PlanCardStatic>
              <Header3>{planMatch.title}</Header3>
              <PlanPrice>{planMatch.price}</PlanPrice>
              <PlanPayment>{planMatch.payment}</PlanPayment>
              <PlanSubtitle>{planMatch.subtitle}</PlanSubtitle>
              <PlanDetails>
                <p>{planMatch.recipes}</p>
                <p>{planMatch.yoga}</p>
                <p>{planMatch.discount}</p>
              </PlanDetails>
              {/* <button type="button">Choose this plan</button> */}
            </PlanCardStatic>)}
        </PlanSection>
      </form>
    </StyledRegistrationModal>
  )
}