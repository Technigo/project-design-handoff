import React, { useState } from 'react'

export const Form = () => {
  const [name, setName] = useState('')

  return (
    <form>
      <h1>The state is: {name}</h1>
      <input
        type="text"
        onChange={(event) => setName(event.target.value)}
        value={name} />
    </form>
  );
}