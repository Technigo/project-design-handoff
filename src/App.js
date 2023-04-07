import React from 'react';
import { Header } from 'components/Header/Header';
import { Classes } from './components/Classes/Classes';
import { Adress } from './components/Adress';
import { ReviewTemp } from './components/Review/Review';
import { SignUp } from './components/SignUp';
import { Foot } from './components/Footer/Footer';

export const App = () => {
  return (
    <>
      <header className="start-cont">
        <Header />
      </header>
      <main>
        <Classes />
        <Adress />
        <ReviewTemp />
        <SignUp />
      </main>
      <Foot />
    </>
  );
}
