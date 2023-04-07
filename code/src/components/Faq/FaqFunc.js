import React from 'react';

const FAQ = ({ faq, index }) => {
  return (
    <div
      className={`faq${faq.open ? 'open' : ''}`}
      key={index}>
      <div className="faq-questions">
        {faq.question}
      </div>
      <div className="faq-answer">
        {faq.answer}
      </div>
    </div>
  )
}
export default FAQ