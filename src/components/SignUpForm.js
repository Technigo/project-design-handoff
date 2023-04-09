import React, { useState } from 'react'
import './sign-up-form.css';

const SignUpForm = () => {
  const [formData, setFormData] = useState({
    fname: '',
    lname: '',
    email: '',
    checkbox: false
  })

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const response = await fetch('https://httpbin.org/anything', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      })
      const data = await response.json()
      console.log(data)
      // Handle success: show a success message, clear form, etc.
    } catch (error) {
      console.error(error)
      // Handle error: show an error message, etc.
    }
  }

  return (
    <div>
      <h1>Become a member</h1>
      <section className="sign-up-form">
        <div className="sign-up-list">
          <form onSubmit={handleSubmit}>
            <label htmlFor="fname">First name:</label>
            <br />
            <input
              type="text"
              id="fname"
              name="fname"
              value={formData.fname}
              onChange={handleChange}
              required /><br />
            <label htmlFor="lname">Last name:</label>
            <br />
            <input
              type="text"
              id="lname"
              name="lname"
              value={formData.lname}
              onChange={handleChange}
              required /><br />
            <label htmlFor="email">E-mail:</label>
            <br />
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required />
            <br />
            <label htmlFor="newsletter-checkbox">Subscribe to Newsletter</label>
            <input
              type="checkbox"
              id="newsletter-checkbox"
              name="checkbox"
              checked={formData.checkbox}
              onChange={handleChange}
              value="subscribe" />
            <br />
            <input id="submitbutton" type="submit" value="Submit" />
          </form>
        </div>
      </section>
    </div>
  )
}

export default SignUpForm