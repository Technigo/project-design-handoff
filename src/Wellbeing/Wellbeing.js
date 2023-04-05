import React from 'react';
import WellbeingCards from './WellbeingCards';

const Wellbeing = () => {
  return (
    <>
      <div className="wellbeing-header">
        <h1>Ready to prioritize your well-being?</h1>
      </div>
      <div className="wellbeing-cards">
        <WellbeingCards />
      </div>
    </>
  )
}

export default Wellbeing;