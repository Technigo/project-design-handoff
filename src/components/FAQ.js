import React, { useState } from 'react';
import './FAQ.css';

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="faq-item">
      <button type="button" className="faq-question" onClick={toggleOpen}>
        {question}
      </button>
      {isOpen && <div className="faq-answer">{answer}</div>}
    </div>
  );
};

const FAQ = () => {
  const faqList = [
    {
      id: 'q1',
      question: 'What device do I need to join the program?',
      answer: ' '
    },
    {
      id: 'q2',
      question: 'What happens if I am not satisfied with your service?',
      answer: ' '
    },
    {
      id: 'q3',
      question: 'Can I change my coach in the middle of the program?',
      answer: ' '
    },
    {
      id: 'q4',
      question: ' What information do you need to tailor a diet plan for me?',
      answer: ' '
    }
  ];

  return (
    <div className="FAQ">
      <h1>FAQs</h1>
      <div className="faq-container">
        {faqList.map((item) => (
          <FAQItem key={item.id} question={item.question} answer={item.answer} />
        ))}
      </div>
    </div>
  );
};

export default FAQ;

