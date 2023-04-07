import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from './Button';
import './CTAsection.css';

export const CTAsection = () => {
  const navigate = useNavigate(); // Initialize the navigate function from react-router-dom

  const handleButtonClick = () => {
    navigate('/pricingplan'); // Navigate to the Pricingplan component
  };
  return (
    <div className="cta-background">
      <Button onClick={handleButtonClick}>
        Start your 7-day free trial
      </Button>
    </div>
  );
}