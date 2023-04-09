import React from 'react';
import { Header } from 'components/Header';
import { Hero } from 'components/Hero';
import { Join } from 'components/Join';
import { Class } from 'components/Class';
import { Quizzes } from 'components/Quizzes';
import { Praise } from 'components/Praise';
import { Form } from 'components/Form';
import { Footer } from 'components/Footer';

export const App = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Join />
      <Class />
      <Quizzes />
      <Praise />
      <Form />
      <Footer />
    </div>
  );
}