import React, { useState } from 'react';
import './Faq/FaqText.css';
import FAQ from '../Faqfunc'

const FAQuestions = () => {
  const [faqs] = useState([
    {
      question: 'What device do I need to join the program?',
      answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing eli',
      open: true
    },
    {
      question: 'What happens if I am not satisfied with your service?',
      answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing eli',
      open: true
    },
    {
      question: 'Can I change my coach in the middle of the program?',
      answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing eli',
      open: true
    },
    {
      question: 'What information do you need to tailor a diet plan for me?',
      answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing eli',
      open: true
    },
    {
      question: 'What happens if I miss a session?',
      answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing eli',
      open: true
    },
    {
      question: 'Can I record my online sessions?',
      answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing eli',
      open: true
    },
    {
      question: 'Do I have acess to my coach outside of the session time?',
      answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing eli',
      open: true
    }

  ]);
  return (
    <div className="faqs">
      {faqs.map((faq, i) => (
        <FAQ faq={faq} index={i} />
      ))}

    </div>

  )
};

export default FAQuestions;