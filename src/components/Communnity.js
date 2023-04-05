import React from 'react';
import { useForm } from 'react-hook-form';
import { SubmitButton } from 'style/ButtonsStyle';
import { FlexColumn } from 'style/Flex';
import { Error } from 'style/FormStyle';
import { H3, TagLine, H5 } from 'style/Texts';
import '../style/form.css'
import { Card } from './Cards';

export const Form = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm();

  const onSubmit = (data) => {
    alert(JSON.stringify(data));
  };

  console.log(watch('example')); // watch input value by passing the name of it

  return (
    <>
    <TagLine color="#222322">Community</TagLine>
    <H5 color="#222322">Sign up & join our community to get started today</H5>
      <Card
        color="#DCBAF9"
        imgSrc="./images/longstretch.jpg"
        headline=""
        text="" />
    <FlexColumn>
      <H3 color="#222322">Create account</H3>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>First name</label>
        <input 
          {...register('firstName', { required: true, maxLength: 20, pattern: /^[A-Öa-ö]+$/i })} />
          {errors?.firstName?.type === 'required' && ( <Error>⚠ This field is required</Error> )}
          {errors?.firstName?.type === 'maxLength' && ( <Error>⚠ First name cannot exceed 20 characters</Error> )}
          {errors?.firstName?.type === 'pattern' && ( <Error>⚠ Alphabetical characters only</Error> )}
        <label>Last name</label>
        <input 
          {...register('lastName', { required: true, maxLength: 20, pattern: /^[A-Öa-ö]+$/i })} />
          {errors?.lastName?.type === 'required' && ( <Error>⚠ This field is required</Error> )}
          {errors?.lastName?.type === 'maxLength' && ( <Error>⚠ Last name cannot exceed 20 characters</Error> )}
          {errors?.lastName?.type === 'pattern' && ( <Error>⚠ Alphabetical characters only</Error> )}
        <label>Email</label>
        <input type="email" 
          {...register('email', { required: true })} />
          {errors?.email?.type === 'required'&& <Error>⚠ This field is required</Error>}
        <label>Password</label>
        <input type="password" 
          {...register('password', { required: true })} />
          {errors?.password?.type === 'required' && <Error>⚠ This field is required</Error>}
        <SubmitButton bg="#DCD2F1" color="##222322" type="submit">Create account</SubmitButton>
      </form>
    </FlexColumn>
    </>
  );
}
