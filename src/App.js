import { About } from 'components/About';
import { Header } from 'components/Header';
import React from 'react';

export const App = () => {
  return (
    <section className="main">
      <Header />
      <About />
    </section>
  )
}
