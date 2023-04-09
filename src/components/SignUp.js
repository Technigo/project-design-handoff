import React from 'react';
import styled from 'styled-components';
import { ClassBtn, SignUpBtn } from './Buttons'

const SignUpFun = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #66A1AE;
`

const Inputs = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
  width: 98vw;
  margin: 5px;
  padding: 10px 30px;

  h2 {
    padding: 20px;
  }

  h4 {
    font-weight: 600;
    font-size: 20px;
    padding-top: 20px;
    padding-bottom: 8px;
  }

  input {
    border-radius: 15px;
    border: solid 1px #888585; 
    height: 18px;
    width: 230px;
    margin: 0 0 8px 0 ;
    padding: 12px;
    font-size: 16px;
    font-family: 'Outfit', sans-serif;
  }
`;

export const SignUp = () => {
  return (
    <SignUpFun>
      <Inputs>
        <h2>Sign up for a class!</h2>
        <h4>Enter personal details*</h4>

        <input
          aria-label="name-input"
          type="text"
          placeholder="Name"
          required />
        <input
          aria-label="email-input"
          type="email"
          placeholder="Email"
          required />
        <input
          aria-label="phone-input"
          type="tel"
          id="phone"
          placeholder="Phonenumber"
          required />

        <h4>Choose a class*</h4>
        <ClassBtn />
        <SignUpBtn />
      </Inputs>
    </SignUpFun>
  )
}