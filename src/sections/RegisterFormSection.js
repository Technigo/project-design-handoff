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
  padding: 32px 0px;
  
h1 {
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 130%;
  display: flex;
  align-items: center;
  text-align: center;
  color: #210440;
}

h2 {
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 150%;
  text-align: center;
  color: #252525;
  padding: 0px 16px;
}

h3 {
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 150%;
  text-align: center;
  color: #252525;
}
  
  `

const RegisterFormSection = () => {
  return (
    <StyledSection>
      <StyledContainer>

        <h1>Register at<br />
Raise Studio
        </h1>
        <h2>Create an Account to Book Barre Classes and Buy Credits. </h2>
        <h3>Already have an account? <u>Login</u></h3>
      </StyledContainer>
      <RegisterForm />
    </StyledSection>
  );
}

export default RegisterFormSection;