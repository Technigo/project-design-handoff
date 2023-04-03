import React from 'react'

export const Form = () => {
  return (
    <form>
      <fieldset>
        <legend>Create an account</legend>
        <input type="text" placeholder="Name" required />
        <input type="email" placeholder="E-mail" required />
        <input type="tel" placeholder="Phone Number" required />
        <button type="submit">Submit</button>
      </fieldset>
    </form>

  )
}