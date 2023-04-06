import React from 'react';
import { About } from 'components/About';
import { Header } from 'components/Header';
import { Form } from 'components/Form';

export const App = () => {
  return (
    <section className="main">
      <Header />
      <About />
      <Form />
    </section>
  )
}
