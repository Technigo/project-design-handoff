import React from 'react'

export const Form = (props) => {
  const handleSubmit = (event) => {
    props.setName(event.targe.usernameInput.value);
  }

  return (
    <div className="main-container">
      <h2>Enter your name</h2>
      <form className="form" onSubmit={handleSubmit}>
        <input
          name="usernameInput"
          type="text"
          required />
      </form>
    </div>
  )
}