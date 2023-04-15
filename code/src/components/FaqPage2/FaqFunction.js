import React, { useState } from 'react';
import { IoIosArrowForward } from 'react-icons/io'

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="faq-item">
      <button type="button" className="faq-question" onClick={toggleOpen}>
        <span className="question-text">{question}</span>
        <span className="arrow-icon"><IoIosArrowForward /></span>
      </button>
      {isOpen && <div className="faq-answer">{answer}</div>}
    </div>
  );
};

export default FAQItem;
