import React from 'react'
import { FormDesign } from './FormDesign'

export const Form = () => {
  return (
    <FormDesign>
      <form className="orderCard">
        <label htmlFor="orderHere">Your contacts
          <input type="text" placeholder="Name" required />
          <input type="email" placeholder="E-mail" required />
          <input type="tel" placeholder="Phone Number" required />
        </label>
        <button type="submit">Submit</button>
      </form>
    </FormDesign>
  )
}