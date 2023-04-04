import React from 'react';
import { Button } from './Button';

export const SignUp = () => {
  return (
    <section className="signup">
      <img
        src={`${process.env.PUBLIC_URL}/assets/sign-up-logo.png`}
        alt="Logo that says sign up" />
      <p>As a member you get access to all of our workouts
    and can make reservations to our workout session.
      </p>
      <form>
        <fieldset>
          <input type="text" placeholder="FIRST NAME" />
          <input type="text" placeholder="LAST NAME" />
          <input type="email" placeholder="E-MAIL" />
          <input type="password" placeholder="PASSWORD" />
          <input type="password" placeholder="CONFIRM PASSWORD" />
          <Button mainCta>Continue to sign up!</Button>
        </fieldset>
      </form>
    </section>
  )
}