import React from 'react';
import { Button } from './Button';
import './CTAsection.css';

export const CTAsection = () => {
  return (
    <div className="cta-background">
      <div className="button-cta">
        <Button>
        Start your 7-day free trial
        </Button>
      </div>
    </div>
  );
}