import React from 'react';
import YogisCards from './YogisCards';

const Yogis = () => {
  return (
    <>
      <div className="yogis-header">
        <h1>What our yogis say:</h1>
      </div>
      <div className="yoga-container">
        <div className="wellbeing-cards">
          <YogisCards />
        </div>
      </div>
    </>
  )
}

export default Yogis;