import React from 'react';
import './FaqText2.css';
import FAQItem from './FaqFunction';

const FAQuestions = () => {
  const faqList = [
    {
      id: 1,
      question: 'What device do I need to join the program?',
      answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing eli'
    },
    {
      id: 2,
      question: 'What happens if I am not satisfied with your service?',
      answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing eli'
    },
    {
      id: 3,
      question: 'Can I change my coach in the middle of the program?',
      answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing eli'
    },
    {
      id: 4,
      question: 'What information do you need to tailor a diet plan for me?',
      answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing eli'
    },
    {
      id: 5,
      question: 'What happens if I miss a session?',
      answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing eli'
    },
    {
      id: 6,
      question: 'Can I record my online sessions?',
      answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing eli'
    },
    {
      id: 7,
      question: 'Do I have acess to my coach outside of the session time?',
      answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing eli'
    }

  ];

  return (
    <div className="faq-outer-wrapper">
      <h1>FAQs</h1>
      <div className="faq-inner-wrapper">
        {faqList.map((item) => (
          <FAQItem key={item.id} question={item.question} answer={item.answer} />
        ))}
      </div>
    </div>
  );
};

export default FAQuestions;
