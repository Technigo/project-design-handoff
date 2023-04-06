import React from 'react';
import { Header } from 'components/Header/Header';
import { Classes } from './components/Classes/Classes';
import { Adress } from './components/Adress';
import { ReviewTemp } from './components/Review/Review';

export const App = () => {
  return (
    <>
      <div className="start-cont">
        <Header />
      </div>
      <main>
        <Classes />
        <Adress />
        <ReviewTemp />
      </main>
    </>
  );
}
