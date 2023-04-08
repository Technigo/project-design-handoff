import React from 'react';
import { About } from 'components/About';
import { Header } from 'components/Header';
import { Form } from 'components/Form';
import { Footer } from 'components/Footer';

export const App = () => {
  return (
    <section className="main">
      <Header />
      <About />
      <Form />
      <Footer />
    </section>
  )
}
