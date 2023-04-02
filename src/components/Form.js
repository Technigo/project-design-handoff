import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export const Form = () => {
  const [name, setName] = useState('')
  const navigate = useNavigate()

  const onBackButtonClick = () => {
    navigate(-1);
  }

  return (
    <div className="form-container">
      <form>
        <h1>The state is: {name}</h1>
        <input
          type="text"
          onChange={(event) => setName(event.target.value)}
          value={name} />
      </form>
      <button type="button" onClick={onBackButtonClick}>Go back</button>
    </div>
  );
}