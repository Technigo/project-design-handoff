import React from 'react'
import RegisterForm from 'components/RegisterForm';
import styled from 'styled-components'

const StyledSection = styled.section`
`

const StyledContainer = styled.div`
background: #f2fdff;
  border-radius: 8px 8px 0px 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 32px 0px;`

const RegisterFormSection = () => {
  return (
    <StyledSection>
      <StyledContainer>

        <h1>Register at
Raise Studio
        </h1>
        <h2>Create an Account to Book Barre Classes and Buy Credits. </h2>
        <h3>Already have an account? Login</h3>
      </StyledContainer>
      <div className="register-form-container">
        <RegisterForm />
      </div>
    </StyledSection>
  );
}

export default RegisterFormSection;