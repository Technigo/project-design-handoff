import React, { useState } from 'react';
import './Button.css';

const Button = ({ buttonText }) => {
  const [disabled, setDisabled] = useState(false);

  const onClick = () => {
    setDisabled(true);
    console.log('Button clicked!');
  };

  return (
    <button type="button" className="button" onClick={onClick} disabled={disabled}>
      {buttonText}
    </button>
  )
}

export default Button;