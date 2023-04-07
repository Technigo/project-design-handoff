import React from 'react';
import Footer from 'components/Footer';
import Header from 'components/Header';
import Hero from 'components/Hero';
import Join from 'components/Join';
import Classes from 'components/Classes';
//import Quiz from 'components/Quiz';
//import Praise from 'components/Praise';
//import Form from 'components/Form';

export const App = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Join />
      <Classes />
      <Footer />
    </div>
  )
}
