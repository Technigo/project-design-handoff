import React, { useState } from 'react';
import './PrimaryButtonSmall.css';

const PrimaryButtonSmall = ({ buttonText }) => {
  const [disabled, setDisabled] = useState(false);

  const onClick = () => {
    setDisabled(true);
    console.log('Button clicked!');
  };

  return (
    <button type="button" className="primaryButtonSmall" onClick={onClick} disabled={disabled}>
      {buttonText}
    </button>
  )
}

export default PrimaryButtonSmall;