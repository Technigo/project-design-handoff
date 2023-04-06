import React from 'react';
import styled from 'styled-components';

const ContactsWrapper = styled.div`
background-color: #EBEBEB;
display: flex;
flex-direction: column;
height: 100vh;
gap: 2.4rem;
align-items: center;
padding-bottom: 6em;

@media (min-width: 968px) {
    flex-direction: row;
}
`

const HeadlineContainer = styled.div`
text-align: center;
padding: 2.4rem 2rem 0 2rem;

@media (min-width: 744px) {
    padding: 2.4rem 2.2rem 0 2.2rem;
}
@media (min-width: 968px) {
    text-align: left;
}
`

const Headline1 = styled.h2`
font-size: 28px;
font-weight: 600;
padding-left: 2.4rem;
padding-right: 1rem;

@media (min-width: 744px) {
    font-size: 52px;
}
@media (min-width: 968px) {
    margin-top: -120px;
}
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

@media (min-width: 380px) {
    font-size: 22px;
}
@media (min-width: 968px) {
    margin-left: 2.4rem;
}
&:hover {
    cursor: pointer;
  }
`
const FormContainer = styled.div`
display: flex;
flex-direction: column;
text-align: center;
background-color: #025323;
color: #FFFFFF;
width: 80%;
min-width: 278px;
max-width: 500px;
aspect-ratio: 1 / 1;
border-radius: 21px;

@media (min-width: 744px) {
    max-width: 500px;
    height: 500px;
}
@media (min-width: 968px) {
    margin-right: 4em; 
}
`

const Headline = styled.h3`
display: inline-block;
font-size: 20px;
font-weight: 600;
line-height: 31px;
margin-top: 1.5em;
margin-bottom: 0.6em;

@media (min-width: 380px) {
    font-size: calc(20px + 2vw);
  }
  @media (min-width: 744px) {
    font-size: calc(24px + 1vw);
  }
  @media (min-width: 1048px) {
    font-size: calc(40px);
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
width: clamp(160px, 24vw, 288px);
  height: clamp(39px, 8vw, 67px);
border: none;
border-radius: 10px;
margin-top: 1rem;
line-height: 29px;

@media (min-width: 744px) {
    font-size: 24px;
  }
  @media (min-width: 968px) {
    font-size: 22px;
  }

&:hover {
    cursor: pointer;
  }
`
const FormTextContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: flex-start;

@media (min-width: 744px) {
    padding: 0 2.2em 0 2.2em;
}`

const StyledInput = styled.input`
width: 80%;
height: clamp(36px, 10vw, 60px);
margin-bottom: 0.5rem;
border-radius: 7px;

    &::placeholder {
      color: #C4C4C4;
      font-size: 12px;
      font-weight: 600;
    }
${({ passwordStyle }) => passwordStyle
&& `
    -webkit-text-security;
    font-size: 4rem;
    color: #9F9F9F;
    letter-spacing: -4px;

    @-moz-document url-prefix() {
      font-size: 2rem;
    }
  }
  `}
  @media (min-width: 744px) {
    height: 60px;
    &::placeholder {
      font-size: 16px;
      font-weight: 500;
    }
    ${({ passwordStyle }) => passwordStyle
&& `
    @-moz-document url-prefix() {
      font-size: 3rem;
    }`
}
    @media (min-width: 968px) {
      &::placeholder {
      font-size: 22px;
    }
    }
}`

const Paragraph = styled.p`
font-size: ${(props) => (props.bigSize && '20px') || (props.secondSize && '11px') || '9px'};
margin-top: ${(props) => (props.secondSize ? '0' : 'default')};
max-width: 364px;
margin-left: auto;
margin-right: auto;

@media (min-width: 500px) {
  font-size: ${(props) => (props.bigSize && '21px') || (props.secondSize && '15px') || '12px'};
}
@media (min-width: 744px) {
    font-size: ${(props) => ((props.bigSize && '22px') || (props.secondSize && '18px') || '16px')};
}
@media (min-width: 968px) {
    margin-left: ${(props) => props.bigSize && '2.4rem'};
  }`

const Span = styled.span`
text-decoration: underline;

&:hover {
    cursor: pointer;
  }`

const SpanNewLine = styled.span`
  display: block;`

const Contacts = () => {
  return (
    <ContactsWrapper>
      <HeadlineContainer>
        <Headline1>Visit Our Studio Or Get In Touch
        </Headline1>
        <Paragraph bigSize>We Are Located In Central Uppsala
           In A Bright And Lovely Premises.
        </Paragraph>
        <Button type="button">Our studio</Button>
      </HeadlineContainer>
      <FormContainer>
        <FormTextContainer>
          <Headline>Create An Account</Headline>
          <Paragraph secondSize>
            Create an account to enjoy your new <SpanNewLine>lifestyle</SpanNewLine>
          </Paragraph>
        </FormTextContainer>
        <Form>
          <StyledInput type="email" id="email" name="email" placeholder="   Your email" required />
          <StyledInput passwordStyle type="password" id="password" name="password" required />
          <div>
            <SignUpButton type="submit">Sign up</SignUpButton>
            <Paragraph>Already have an account? <Span>Sign In</Span></Paragraph>
          </div>
        </Form>
      </FormContainer>
    </ContactsWrapper>
  )
}

export default Contacts;