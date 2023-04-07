
import React, { useState } from 'react';
import './FaqText2.css';
import FAQ from './FaqFunction';

const FAQuestions = () => {
  const [faqs, setfaqs] = useState([
    {
      id: 1,
      question: 'What device do I need to join the program?',
      answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing eli',
      open: true
    },
    {
      id: 2,
      question: 'What happens if I am not satisfied with your service?',
      answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing eli',
      open: true
    },
    {
      id: 3,
      question: 'Can I change my coach in the middle of the program?',
      answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing eli',
      open: true
    },
    {
      id: 4,
      question: 'What information do you need to tailor a diet plan for me?',
      answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing eli',
      open: true
    },
    {
      id: 5,
      question: 'What happens if I miss a session?',
      answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing eli',
      open: true
    },
    {
      id: 6,
      question: 'Can I record my online sessions?',
      answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing eli',
      open: true
    },
    {
      id: 7,
      question: 'Do I have acess to my coach outside of the session time?',
      answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing eli',
      open: true
    }

  ]);

  const toggleFAQ = (id) => {
    setfaqs(faqs.map((faq) => {
      if (faq.id === id) return { ...faq, open: !faq.open } 
      return faq
    }))
  }
  return (
    <div className="faq-wrapper">
      <h1>FAQs</h1>
      <div className="faqs">
        {faqs.map((faq) => (
          <FAQ key={faq.id} faq={faq} toggleFAQ={toggleFAQ} />
        ))}
      </div>
    </div>

  )
};

export default FAQuestions;