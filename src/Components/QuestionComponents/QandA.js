import React from 'react';

const QandA = ({ question, answer }) => {
  return (
    <div>
      <h5>{question}</h5>
      <p>{answer}</p>
    </div>
  )
};

export default QandA;