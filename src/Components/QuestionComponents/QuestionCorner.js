import React from 'react';
import QandA from './QandA';
import ContactForm from './ContactForm';

const QuestionCorner = () => {
  return (
    <section className="question-section">
      <h2>QUESTION CORNER</h2>
      <div className="faq-div">
        <h3>FREQUENTLY ASKED QUESTIONS</h3>
        <QandA
          question="Can I do a program aimed at another position than my current one?"
          answer="Yes of course! It’s up to you which program you want to follow, and you are free to change to a different one whenever you want." />
        <QandA
          question="What target areas are included in each program?"
          answer="All programs include agility, endurance, strength, and prehab training, but in different proportions depending on the specific needs of each position." />
        <QandA
          question="What is prehab training?"
          answer="Prehab training is a proactive approach to injury prevention that focuses on strengthening and conditioning specific muscles and joints to reduce the risk of injury." />
        <QandA
          question="Is this program suitable for beginners?"
          answer="Yes, the program includes a specific program for referees/new players that is designed for beginners who are new to roller derby and want to improve their fitness and skills." />
        <QandA
          question="Do I need any special equipment for this program?"
          answer="While some exercises may require equipment such as resistance bands or dumbbells, many exercises can be done with just bodyweight. Any equipment needed will be clearly outlined in the program." />
      </div>
      <div className="question-form">
        <h3>GOT QUESTIONS? CURIOUS?</h3>
        <p>
          Great! Please contact us! Use the form below to send us an
          email and we will get back to you shortly.
          You can also follow us on social media and contact us there!
        </p>
        <ContactForm />
      </div>
    </section>
  )
};

export default QuestionCorner;