import React from 'react'
import styled from 'styled-components'
import { P12, P20 } from './Typography'

const StyledForm = styled.div`
color: #524858;
display: flex;
// border: solid 1px black;
flex-direction: column;
font-size: 12px;
font-weight: 400;
line-height: 18px;
letter-spacing: 1px;
padding: 32px 16px;
background-color: #D7C3E2;
gap: 32px;
align-items: center;

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
const StyledRadio = styled.div`
// border: solid 1px red;
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;

input {
  width: 24px;
  height: 24px;
  padding: 8px;
  border: 2px solid #131313;
  accent-color: #131313;
}
`

export const Form = () => {
  return (
    <StyledForm>
      <P20>
        Form for sign up
      </P20>
      <form>
        Name
        <input type="text" placeholder="First Lastname" />
        Email
        <input type="text" placeholder="example@email.com" />
        Phone number
        <input type="text" placeholder="+46 123 456 789" />
        Please choose a class
        <select>
          <option value="" selected>Classes..</option>
          <option value="Beginner Class">Beginner Class</option>
          <option value="Intermediate Class">Intermediate Class</option>
          <option value="Expert Class">Expert Class</option>
        </select>
        <P12>Do you have any prior experience with aerial silks?
          <StyledRadio>
            <input type="radio" />
            Yes
            <input type="radio" />
            No
            <input type="radio" />
            I don&apos;t know
          </StyledRadio>
          Do you have any injuries or medical
          conditions that may affect your
          ability to participate in aerial silks classes?
          <StyledRadio>
            <input type="radio" />
            Yes
            <input type="radio" />
            No
            <input type="radio" />
            I don&apos;t know
          </StyledRadio>
          Do you want us to contact you for any other inquiries?
          <StyledRadio>
            <input type="radio" />
            Yes
            <input type="radio" />
            No
          </StyledRadio>
        </P12>
      </form>
    </StyledForm>
  )
}