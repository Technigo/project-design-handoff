import React from 'react';

const QandA = ({ question, answer }) => {
  return (
    <div>
      <p className="bold">{question}</p>
      <p>{answer}</p>
    </div>
  )
};

export default QandA;