import React from 'react';
import Footer from 'components/Footer';
import Header from 'components/Header';
import Hero from 'components/Hero';
import Join from 'components/Join';
import Class from 'components/Class';
import Quiz from 'components/Quiz';
import Praise from 'components/Praise';
import Form from 'components/Form';

export const App = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Join />
      <Class />
      <Quiz />
      <Praise />
      <Form />
      <Footer />
    </div>
  )
}
