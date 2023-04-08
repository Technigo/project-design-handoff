/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react'
import styled from 'styled-components'
import { Button } from './Button'
import { FormP, Body, SlimForm, BoldForm } from './Typography'

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

  @media (min-width:641px) {
      font-size: 16px;
    }

  select{
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

label {
  display: flex;
  align-items: flex-end;
  gap: 8px;
}

&:hover input {
  background-color: #CDB4DB66;
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
          <SlimForm>Name</SlimForm>
          <input type="text" placeholder="First Lastname" />
        </form>
        <form>
          <SlimForm>Email</SlimForm>
          <input type="text" placeholder="example@email.com" />
        </form>
        <form>
          <SlimForm>Phone number</SlimForm>
          <input type="text" placeholder="+46 123 456 789" />
        </form>
        <form>
          <SlimForm>Please choose a class</SlimForm>
          <select>
            <option value="" disabled selected>Classes..</option>
            <option value="Beginner Class">Beginner Class</option>
            <option value="Intermediate Class">Intermediate Class</option>
            <option value="Expert Class">Expert Class</option>
          </select>
        </form>
      </div>
      <FormP>
        <StyledRadioForm>
          <div className="radio-form">
            <label htmlFor="question1">
              <BoldForm>
                Do you have any prior experience with aerial silks?
              </BoldForm>
            </label>

            <div className="button-section">
              <label htmlFor="yes1">Yes
                <input type="radio" name="button1" value="yes" />
              </label>

              <label htmlFor="no1">No
                <input type="radio" name="button1" value="no" />
              </label>

              <label htmlFor="dontknow1">I don’t know
                <input type="radio" name="button1" value="dontknow" />
              </label>
            </div>
          </div>

          <div className="radio-form">
            <label htmlFor="question2">
              <BoldForm>
                Do you have any injuries or medical conditions that may
                affect your ability to participate in aerial silks classes?
              </BoldForm>
            </label>

            <div className="button-section">
              <label htmlFor="yes2">Yes
                <input type="radio" name="button2" value="yes" />
              </label>

              <label htmlFor="no2">No
                <input type="radio" name="button2" value="no" />
              </label>

              <label htmlFor="dontknow2">I don’t know
                <input type="radio" name="button2" value="dontknow" />
              </label>
            </div>
          </div>

          <div className="radio-form">
            <label htmlFor="question3">
              <BoldForm>
                Do you want us to contact you for any other inquiries?
              </BoldForm>
            </label>

            <div className="button-section">
              <label htmlFor="yes3">Yes
                <input type="radio" name="question3" value="yes" />
              </label>

              <label htmlFor="no3">No
                <input type="radio" name="question3" value="no" />
              </label>
            </div>
          </div>
        </StyledRadioForm>
      </FormP>
      <Button textBtn>Send form</Button>
    </StyledForm>
  )
}