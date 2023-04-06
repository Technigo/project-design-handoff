import React from 'react'
import styled from 'styled-components'
import { Button } from './Button'
import { FormP, Body } from './Typography'

const StyledForm = styled.div`
color: #524858;
display: flex;
flex-direction: column;
align-items: center;
padding: 40px 60px 36px 60px;
background-color: #D7C3E2;
gap: 32px;

.big-form {
  display: flex;
  flex-direction: column;
  align-self: stretch;
}

@media (min-width:1025px){
  border-radius: 16px;
  box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.15);
}

@media (min-width:641px) and (max-width:1024px) {
  border-radius: 16px;
  box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.15);
 }

 @media (min-width:1025px)  {
  padding: 48px 128px 44px 128px;
  max-width:736px;
 }

 .big-form {
  gap: 16px;
 }

form {
  display: flex;
  flex-direction: column;
}

input, select {
  background-color: #F9F6FB;
  color: #524858;
  border: 1px solid #7B6C83;
  border-radius: 8px;
  padding: 8px;
  font-size: 12px;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: 1px;

  select {
    &:hover{
      color: #7B6C83;
    }
  }
`
const StyledRadioForm = styled.div`
display: flex;
flex-direction: column;
gap: 16px;

.radio-form{
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.button-section {
  display:flex;
  gap: 24px;
}

form{
  display:flex;
  flex-direction: row;
  font-size: 11px;
  gap: 10px;
}

input {
  width: 24px;
  height: 24px;
  padding: 8px;
  accent-color: #131313;
}
`

export const Form = () => {
  return (
    <StyledForm>
      <Body>
        Form for sign up
      </Body>
      <div className="big-form">
        <form>
          Name
          <input type="text" placeholder="First Lastname" />
        </form>
        <form>
          Email
          <input type="text" placeholder="example@email.com" />
        </form>
        <form>
          Phone number
          <input type="text" placeholder="+46 123 456 789" />
        </form>
        <form>
          Please choose a class
          <select>
            <option value="" selected>Classes..</option>
            <option value="Beginner Class">Beginner Class</option>
            <option value="Intermediate Class">Intermediate Class</option>
            <option value="Expert Class">Expert Class</option>
          </select>
        </form>
      </div>
      <FormP>
        <StyledRadioForm>
          <div className="radio-form">
            Do you have any prior experience with aerial silks?
            <div className="button-section">
              <form>
                Yes
                <input
                  type="radio" />
              </form>
              <form>
                No
                <input
                  type="radio" />
              </form>
              <form>
                I don&apos;t know
                <input
                  type="radio" />
              </form>
            </div>
          </div>
          <div className="radio-form">
            Do you have any injuries or medical
            conditions that may affect your
            ability to participate in aerial silks classes?
            <div className="button-section">
              <form>
                Yes
                <input
                  type="radio" />
              </form>
              <form>
                No
                <input
                  type="radio" />
              </form>
              <form>
                I don&apos;t know
                <input
                  type="radio" />
              </form>
            </div>
          </div>
          <div className="radio-form">
            Do you want us to contact you for any other inquiries?
            <div className="button-section">
              <form>
                Yes
                <input
                  type="radio" />
              </form>
              <form>
                No
                <input
                  type="radio" />
              </form>
            </div>
          </div>
        </StyledRadioForm>
      </FormP>
      <Button textBtn>Send form</Button>
    </StyledForm>
  )
}