/* eslint-disable react/void-dom-elements-no-children */
/* eslint-disable react/jsx-closing-bracket-location */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable no-unused-vars */
import React from 'react';
import { useForm } from 'react-hook-form';

import longstrech from '../assets/images/longstretch.jpg';

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
          <img src={longstrech} alt="some-alt-text" />
        </div>
        <div className="form">
          {/* "handleSubmit" will validate your inputs before invoking "onSubmit" */}
          <form onSubmit={handleSubmit(onSubmit)}>
            {/* register your input into the hook by invoking the "register" function */}
            <div>
              <fieldset>
                <legend>
                  <label htmlFor="firstName">First Name</label>
                </legend>
                <input
                  id="firstName"
                  aria-invalid={errors.firstName ? 'true' : 'false'}
                  {...register('firstName', { required: true, maxLength: 30 })}
                />
                {errors.firstName && errors.firstName.type === 'required' && (
                  <span role="alert">This is required</span>
                )}
              </fieldset>
              <fieldset>
                <legend>
                  <label htmlFor="lastName">Last Name</label>
                </legend>
                <input
                  id="lastName"
                  aria-invalid={errors.lastName ? 'true' : 'false'}
                  {...register('lastName', { required: true, maxLength: 30 })}
                />
                {errors.lastName && errors.lastName.type === 'required' && (
                  <span role="alert">This is required</span>
                )}
              </fieldset>
            </div>
            <div>
              <fieldset>
                <legend>
                  <label htmlFor="email">Email</label>
                </legend>
                <input
                  id="email"
                  aria-invalid={errors.email ? 'true' : 'false'}
                  {...register('email', { required: true, maxLength: 30 })}
                />
                {errors.email && errors.email.type === 'required' && (
                  <span role="alert">This is required</span>
                )}
              </fieldset>

              <fieldset>
                <legend>
                  <label htmlFor="password">Password</label>
                </legend>
                <input
                  id="password"
                  aria-invalid={errors.password ? 'true' : 'false'}
                  {...register('password', { required: true, maxLength: 30 })}
                />
              </fieldset>
              {errors.password && errors.password.type === 'required' && (
                <span role="alert">This is required</span>
              )}
            </div>

            <button type="submit" className="create-account-button">
              Create Account
            </button>
            <p>
              Already have an account? <span>Login</span>
            </p>
          </form>
          <div>
            <div className="divider">
              <p>
                <span className="line" />
                Or
                <span className="line" />
              </p>
            </div>
            <button type="button">Sign in with Apple</button>
            <button type="button">Sign in with Google</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignUpForm;
