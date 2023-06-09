/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/no-unescaped-entities */
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { PrimaryBtn, OutlinedBtn2 } from 'styling/Button';
import { Tagline, Headline5, Error, Headline3 } from 'styling/Text';
import '../styling/Community.css'

const Community = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = () => {
    alert('Thank you for joining our community!');
    setFirstName('');
    setLastName('');
    setEmail('');
    setPassword('');
  };

  return (
    <section className="sectionCommunity">
      <div className="introCommunity">
        <Tagline>Community</Tagline>
        <Headline5>Sign up & join our community to get started today</Headline5>
      </div>
      <div className="communityCard" style={{ backgroundImage: 'linear-gradient(6deg, #DCD2F1 7%, rgba(255, 255, 255, 0) 50%), url("../images/backstretch.jpg")' }} />
      <div className="signUpWrapper">
        <Headline3>Create account</Headline3>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="nameInput">
            <fieldset className="name">
              <legend>First Name</legend>
              <input {...register('firstName', { required: true, pattern: /^[A-Za-z]+$/i })} onChange={(event) => setFirstName(event.target.value)} value={firstName} />
            </fieldset>
            <fieldset className="name">
              <legend>Last Name</legend>
              <input {...register('lastName', { required: true })} onChange={(event) => setLastName(event.target.value)} value={lastName} />
            </fieldset>
          </div>
          {errors?.firstName?.type === 'required' && <Error>Please enter your name</Error>}
          {errors?.firstName?.type === 'pattern' && (<Error>Alphabetical characters only</Error>)}
          <fieldset>
            <legend>Email</legend>
            <input type="email" {...register('email', { required: true, pattern: /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/i })} onChange={(event) => setEmail(event.target.value)} value={email} />
          </fieldset>
          {errors?.email?.type === 'required' && <Error>Please enter your email</Error>}
          {errors?.lastName?.type === 'pattern' && (<Error>Please enter a valid email</Error>)}
          <fieldset>
            <legend>Password</legend>
            <input type="password" {...register('password', { required: true, minLength: { value: 6 } })} onChange={(event) => setPassword(event.target.value)} value={password} />
          </fieldset>
          {errors.password && (<Error>Password must be six or more characters</Error>)}
          <PrimaryBtn className="formBtn" type="submit">Create account</PrimaryBtn>
        </form>
        <p className="accountText">Already have an account? <span className="login">Login</span></p>
        <span className="orText"><p className="line" /><p>Or</p><p className="line" /></span>
        <div className="signInBtnWrapper">
          <OutlinedBtn2 type="button">
            <span className="signInBtn"><img alt="apple icon" src="../images/icons/applelogo.png" />Sign in with Apple</span>
          </OutlinedBtn2>
          <OutlinedBtn2 type="button">
            <span className="signInBtn"><img alt="google icon" src="../images/icons/googlelogo.png" />Sign in with Google</span>
          </OutlinedBtn2>
        </div>
      </div>
    </section>
  )
};

export default Community;