import React from 'react';

import { Hero } from './components/maininfo';
import { Register } from './components/register';
import { Classes } from './components/classes';
import { Footer } from './components/footer';
import './index.css'

export const App = () => {
  return (
    <div className="Main-container">

      <Hero />
      <Register />
      <Classes />
      <Footer />

    </div>

  );
}

/*
<Routes>
          <Route component={Header} />
          <Route path="/" element={<Hero />} />
          <Route path="/register/" element={<Register />} />
          <Route path="/classes" element={<Classes />} />
          <Route component={Footer} />
          <Route path="*" element={<Navigate to="/404" replace />} />
        </Routes>
        */
