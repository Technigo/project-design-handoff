import React, { useState } from 'react';
import './PrimaryButtonLarge.css';

const PrimaryButtonLarge = ({ buttonText }) => {
  const [disabled, setDisabled] = useState(false);

  const onClick = () => {
    setDisabled(true);
    console.log('Button clicked!');
  };

  return (
    <button type="button" className="primaryButtonLarge" onClick={onClick} disabled={disabled}>
      {buttonText}
    </button>
  )
}

export default PrimaryButtonLarge;