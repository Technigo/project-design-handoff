import React from 'react';
import styled from 'styled-components';

const ContactsWrapper = styled.div`
background-color: #EBEBEB;
display: flex;
flex-direction: column;
gap: 2.4rem;
align-items: center;
height: 100vh;
`

const HeadlineContainer = styled.div`
text-align: center;
padding: 2.4rem 2rem 0 2rem;
`

const Headline1 = styled.h2`
font-size: 28px;
font-weight: 600;
padding-left: 2.4rem;
padding-right: 1rem;
`
const Button = styled.button`
background: #025323;
color: #FFFFFF;
font-size: 20px;
font-weight: 600;
margin-top: 2rem;
width: 244px;
height: 59px;
border: none;
border-radius: 15px;
&:hover {
  cursor: pointer;
}
@media (min-width: 380px) {
    font-size: 22px;
}
`
const FormContainer = styled.div`
display: flex;
flex-direction: column;
text-align: center;
background-color: #025323;
color: #FFFFFF;
width: 80%;
max-width: 500px;
height: 301px;
border-radius: 21px;
@media (min-width: 744px) {
    max-width: 514px;
}`

const Headline = styled.h3`
font-size: 20px;
margin: 0;
padding: 0;
@media (min-width: 380px) {
    font-size: 24px;
}
`

const Form = styled.form`
text-align: center;
`
const SignUpButton = styled.button`
background: #EBEBEB;
color: #025323;
font-size: 15px;
font-weight: 600;
width: 7.7em;
height: 39px;
border: none;
border-radius: 10px;
margin-top: 1rem;
&:hover {
  cursor: pointer;
}
`
const FormTextContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: flex-start;`

const StyledInput = styled.input`
width: 80%;
height: 36px;
margin-bottom: 0.5rem;
border-radius: 7px;`

const Paragraph = styled.p`
font-size: ${(props) => props.bigSize || props.secondSize || '9px'};
margin-top: ${(props) => (props.secondSize ? '0' : 'default')};
`

const Span = styled.span`
text-decoration: underline;`

export const Contacts = () => {
  return (
    <ContactsWrapper>
      <HeadlineContainer>
        <Headline1>Visit Our Studio Or Get In Touch
        </Headline1>
        <Paragraph bigSize="20px">We Are Located In Central Uppsala
           In A Bright And Lovely Premises.
        </Paragraph>
        <Button type="button">Our studio</Button>
      </HeadlineContainer>
      <FormContainer>
        <FormTextContainer>
          <Headline><h3>Create An Account</h3></Headline>
          <Paragraph secondSize="11px">Create an account to enjoy your new lifestyle</Paragraph>
        </FormTextContainer>
        <Form>
          <StyledInput type="email" id="email" name="email" placeholder="   Your email" required />
          <StyledInput type="password" id="password" name="password" required />
          <div>
            <SignUpButton type="submit">Sign up</SignUpButton>
            <Paragraph>Already have an account?<Span>Sign In</Span></Paragraph>
          </div>
        </Form>
      </FormContainer>
    </ContactsWrapper>
  )
}