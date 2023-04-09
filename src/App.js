import React from 'react';
import Header from 'components/Header.js';
import Intro from 'components/Intro.js';
import Overview from 'components/Overview.js';
import Selection from 'components/Selection.js';
import Quiz from 'components/Quiz.js';
import Reviews from 'components/Reviews.js';
import Form from 'components/Form.js';
import Footer from 'components/Footer.js'

export const App = () => {
  return (
    <div className="landingPage">
      <Header />
      <Intro />
      <Overview />
      <Selection />
      <Quiz />
      <Reviews />
      <Form />
      <Footer />
    </div>
  )
}