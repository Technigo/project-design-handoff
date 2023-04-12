/* eslint-disable */
import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import { Wrapper, OuterContainer, InnerContainer, CardsContainer, ImgCardLarge } from 'components/styles/Section'
import { Tagline, Headline2 } from 'components/styles/Text'
import { Logo } from 'components/styles/Image'
import { Label, Form, TextInput, TextInputBox, LabelLogin, OrText, Error } from 'components/styles/Input'
import { Button } from 'components/styles/Button'

export const Community = () => {

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = () => {
    alert('Thank you for creating an account!');
    setFirstName('');
    setLastName('');
    setEmail('');
    setPassword('');
  };

  return (
    <Wrapper id="#sectionFive" height="100%">
      <OuterContainer>
        <Tagline>COMMUNITY</Tagline>
        <Headline2>Sign up & join our community to get started today</Headline2>
        <InnerContainer community grid>
          <ImgCardLarge style={{ backgroundImage: 'linear-gradient(6.08deg, #DCD2F1 7.04%, rgba(255, 255, 255, 0)  50.17%), url("./images/community-yoga.jpg")' }} workouts />
          <CardsContainer formcontainer>
            <Headline2>Create account</Headline2>
            <Form onSubmit={handleSubmit(onSubmit)}>
              <TextInputBox>
                <Label htmlFor="fname">First name</Label>
                <TextInput type="text" id="fname" name="fname" {...register('firstName', { required: true, pattern: /^[A-Za-z]+$/i, minLength: 2})} onChange={(event) => setFirstName(event.target.value)} value={firstName} />  
                {errors?.firstName && <Error>Please enter your first name</Error>}
              </TextInputBox>
              <TextInputBox>
                <Label htmlFor="lname">Last name</Label>
                <TextInput type="text" id="lname" name="lname" {...register('lastName', { required: true, pattern: /^[A-Za-z]+$/i, maxLength: 100 })} onChange={(event) => setLastName(event.target.value)} value={lastName} />
                {errors?.lastName && <Error>Please enter your last name</Error>}
              </TextInputBox>
              <TextInputBox grow>
                <Label htmlFor="email">Email</Label>
                <TextInput type="email" id="email" name="email" {...register('email', { required: true, pattern: /^\S+@\S+$/i })} onChange={(event) => setEmail(event.target.value)} value={email} />
                {errors?.email?.type === 'required' && <Error>Please enter your email</Error>}
                {errors?.lastName?.type === 'pattern' && (<Error>Please enter a valid email</Error>)}
              </TextInputBox>
              <TextInputBox grow>
                <Label htmlFor="password">Password</Label>
                <TextInput type="text" id="password" name="password" {...register('password', { required: true, minLength: 6 })} onChange={(event) => setPassword(event.target.value)} value={password} />
                {errors.password && (<Error>Password must be six or more characters</Error>)}
              </TextInputBox>
              <Button square type="submit">Create account</Button>
              <TextInputBox grow>
                <LabelLogin>Already have an account?</LabelLogin>
                <Button login>Login</Button>
              </TextInputBox>
              <OrText>Or</OrText>
              <Button logo>
                <Logo src="./assets/apple-icon2.svg" />
                Sign in with Apple
              </Button>
              <Button logo>
                <Logo src="./assets/google-icon.svg" />
                Sign in with Google
              </Button>
            </Form>
          </CardsContainer>
        </InnerContainer>
      </OuterContainer>
    </Wrapper>
  )
}