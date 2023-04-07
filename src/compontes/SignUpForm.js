/* eslint-disable react/jsx-closing-bracket-location */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable no-unused-vars */
import React from 'react';
import { useForm } from 'react-hook-form';

const SignUpForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <section>
      <div className="title-container">
        <h3>BENEFITS</h3>
        <h2>Healthy doesn’t have to be hard. We make it easy</h2>
      </div>
      <div>
        <div>
          <img alt="some-alt-text" />
        </div>
        <div className="form">
          {/* "handleSubmit" will validate your inputs before invoking "onSubmit" */}
          <form onSubmit={handleSubmit(onSubmit)}>
            {/* register your input into the hook by invoking the "register" function */}
            <div>
              <label htmlFor="firstName">First Name</label>
              <input
                id="firstName"
                aria-invalid={errors.firstName ? 'true' : 'false'}
                {...register('firstName', { required: true, maxLength: 30 })}
              />
              {errors.firstName && errors.firstName.type === 'required' && (
                <span role="alert">This is required</span>
              )}
              <label htmlFor="lastName">Last Name</label>
              <input
                id="lastName"
                aria-invalid={errors.lastName ? 'true' : 'false'}
                {...register('lastName', { required: true, maxLength: 30 })}
              />
              {errors.lastName && errors.lastName.type === 'required' && (
                <span role="alert">This is required</span>
              )}
            </div>
            <div>
              <label htmlFor="email">Email</label>
              <input
                id="email"
                aria-invalid={errors.email ? 'true' : 'false'}
                {...register('email', { required: true, maxLength: 30 })}
              />
              {errors.email && errors.email.type === 'required' && (
                <span role="alert">This is required</span>
              )}
              <input
                id="password"
                aria-invalid={errors.password ? 'true' : 'false'}
                {...register('password', { required: true, maxLength: 30 })}
              />
              {errors.password && errors.password.type === 'required' && (
                <span role="alert">This is required</span>
              )}
            </div>

            {/* include validation with required or other standard HTML validation rules */}
            <input {...register('exampleRequired', { required: true })} />
            {/* errors will return when field validation fails  */}
            {errors.exampleRequired && <span>This field is required</span>}

            <input type="submit" />
          </form>
        </div>
      </div>
    </section>
  );
};

export default SignUpForm;
