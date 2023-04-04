import React from 'react'
import RegisterForm from 'components/RegisterForm';

const RegisterFormSection = () => {
  return (
    <section className="register-form-section">
      <div className="register-form-text">

        <h1>Register at
Raise Studio
        </h1>
        <h2>Create an Account to Book Barre Classes and Buy Credits. </h2>
        <h3>Already have an account? Login</h3>
      </div>
      <div className="register-form-container">
        <RegisterForm />
      </div>
    </section>
  );
}

export default RegisterFormSection;