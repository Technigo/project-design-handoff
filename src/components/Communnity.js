import React from 'react';
import { useForm } from 'react-hook-form';

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
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* register your input into the hook by invoking the "register" function */}
      <label>First name</label>
      <input
        {...register("firstName", {
          required: true,
          maxLength: 20,
          pattern: /^[A-Öa-ö]+$/i
        })}
      />
      {errors?.firstName?.type === "required" && <p>This field is required</p>}
      {errors?.firstName?.type === "maxLength" && (
        <p>First name cannot exceed 20 characters</p>
      )}
      {errors?.firstName?.type === "pattern" && (
        <p>Alphabetical characters only</p>
      )}

      {/* include validation with required or other standard HTML validation rules */}
      <label>Last name</label>
      <input
        {...register("lastName", {
          required: true,
          maxLength: 20,
          pattern: /^[A-Öa-ö]+$/i
        })}
      />
      {errors?.lastName?.type === "required" && <p>This field is required</p>}
      {errors?.lastName?.type === "maxLength" && (
        <p>Last name cannot exceed 20 characters</p>
      )}
      {errors?.lastName?.type === "pattern" && (
        <p>Alphabetical characters only</p>
      )}

<label>Email</label>
      <input
        {...register("email", {
          required: true,
          pattern: /^[A-Za-z]+$/i
        })}
      />
      {errors?.lastName?.type === "required" && <p>This field is required</p>}
      {errors?.lastName?.type === "maxLength" && (
        <p>Last name cannot exceed 20 characters</p>
      )}
      {errors?.lastName?.type === "pattern" && (
        <p>Alphabetical characters only</p>
      )}

      <input type="submit" />
    </form>
  );
}
