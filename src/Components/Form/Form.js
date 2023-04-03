// /////////////// IMPORT //////////////////////// //

import React from 'react';
import './Form.css';

// /////////////// COMPONENT //////////////////////// //

export const Form = () => {
  return (
    <div className="form-box">
      <form>
        <label htmlFor="form-inputfield">
          Name:
          <input type="text" name="name" />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>
  )
}