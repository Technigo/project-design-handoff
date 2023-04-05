import React from 'react';
import { useForm } from 'react-hook-form';
import { SubmitButton } from 'style/ButtonsStyle';
import { FlexColumn } from 'style/Flex';
import { Container } from 'style/Container';
import { FormStyle, Error } from 'style/FormStyle';
import { H3 } from 'style/Texts';
import '../style/form.css'

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
      <FlexColumn>
        <H3 color="#222322">Create account</H3>
          {/* "handleSubmit" will validate your inputs before invoking "onSubmit" */}
          <form onSubmit={handleSubmit(onSubmit)}>
            {/* register your input into the hook by invoking the "register" function */}
            <FormStyle>
            <label>First name</label>
            <input
              {...register('firstName', {
                required: true,
                maxLength: 20,
                pattern: /^[A-Öa-ö]+$/i
              })}
            />
            {errors?.firstName?.type === 'required' && (
              <Error>⚠ This field is required</Error>
            )}
            {errors?.firstName?.type === 'maxLength' && (
              <Error>⚠ First name cannot exceed 20 characters</Error>
            )}
            {errors?.firstName?.type === 'pattern' && (
              <Error>⚠ Alphabetical characters only</Error>
            )}
            {/* include validation with required or other standard HTML validation rules */}
            <label>Last name</label>
            <input
              {...register('lastName', {
                required: true,
                maxLength: 20,
                pattern: /^[A-Öa-ö]+$/i
              })}
            />
            {errors?.lastName?.type === 'required' && (
              <Error>⚠ This field is required</Error>
            )}
            {errors?.lastName?.type === 'maxLength' && (
              <Error>⚠ Last name cannot exceed 20 characters</Error>
             )}
              {errors?.lastName?.type === 'pattern' && (
                  <Error>⚠ Alphabetical characters only</Error>
              )}

               <label>Email</label>
            <input
              {...register('email', {
                required: true,
              })}
            />
            {errors?.email?.type === 'required'&& <Error>This field is required</Error>}

            <label>Password</label>
            <input
              {...register('password', {
                required: true,
              })}
            />
            {errors?.password?.type === 'required' && <Error>This field is required</Error>}
            </FormStyle>
     
            <SubmitButton bg="#DCD2F1" color="##222322" type="submit">Create account</SubmitButton>
          </form>
          </FlexColumn>
  );
}
