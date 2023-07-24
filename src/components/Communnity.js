/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { useForm } from 'react-hook-form';
import { SubmitButton } from 'style/ButtonsStyle';
import { FlexColumn, FlexColumnCenter } from 'style/Flex';
import { Error } from 'style/FormStyle';
import { H3, TagLine, H5, BodyText } from 'style/Texts';
import '../style/form.css'
import { Card } from './Cards';

export const Community = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  const onSubmit = (data) => {
    alert(JSON.stringify(data));
  };

  return (
    <>
      <TagLine color="#222322">Community</TagLine>
      <H5 color="#222322">Sign up & join our community to get started today</H5>
      <Card
        color="#DCBAF9"
        imgSrc="https://images.unsplash.com/photo-1552286450-4a669f880062?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80"
        headline=""
        text="" />
      <FlexColumnCenter>
        <FlexColumn>
          <H3 color="#222322">Create account</H3>
          <form onSubmit={handleSubmit(onSubmit)}>
            <fieldset>
              <legend>First name</legend>
              <input {...register('firstName', { required: true, maxLength: 20, pattern: /^[A-Öa-ö]+$/i })} />
            </fieldset>
            {errors?.firstName?.type === 'required' && (<Error>⚠ This field is required</Error>)}
            {errors?.firstName?.type === 'maxLength' && (<Error>⚠ First name cannot exceed 20 characters</Error>)}
            {errors?.firstName?.type === 'pattern' && (<Error>⚠ Alphabetical characters only</Error>)}
            <fieldset>
              <legend>Last name</legend>
              <input {...register('lastName', { required: true, maxLength: 20, pattern: /^[A-Öa-ö]+$/i })} />
            </fieldset>
            {errors?.lastName?.type === 'required' && (<Error>⚠ This field is required</Error>)}
            {errors?.lastName?.type === 'maxLength' && (<Error>⚠ Last name cannot exceed 20 characters</Error>)}
            {errors?.lastName?.type === 'pattern' && (<Error>⚠ Alphabetical characters only</Error>)}
            <fieldset>
              <legend>Email</legend>
              <input type="email" {...register('email', { required: true })} />
            </fieldset>
            {errors?.email?.type === 'required' && <Error>⚠ This field is required</Error>}
            <fieldset>
              <legend>Password</legend>
              <input type="password" {...register('password', { required: true })} />
            </fieldset>
            {errors?.password?.type === 'required' && <Error>⚠ This field is required</Error>}
            <SubmitButton bg="#DCD2F1" color="##222322" type="submit">Create account</SubmitButton>
          </form>
          <BodyText>Already have an account?
            <a href="https://www.google.com/webhp?hl=sv&sa=X&ved=0ahUKEwiK8t7U7pT-AhUBSfEDHbflAIIQPAgI">Login</a>
          </BodyText>
        </FlexColumn>
      </FlexColumnCenter>
    </>
  );
}
