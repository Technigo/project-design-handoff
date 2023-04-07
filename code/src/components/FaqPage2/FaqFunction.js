/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';

const FAQ = ({ faq, index, toggleFAQ }) => {
  return (
    <div
      className={`faq${faq.open ? 'open' : ''}`}
      key={index}
      onClick={() => { toggleFAQ(index) }}>
      <div className="faq-question">
        {faq.question}
      </div>
      <div className="faq-answer">
        {faq.answer}
      </div>
    </div>
  )
}
export default FAQ