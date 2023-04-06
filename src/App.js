import React from 'react';
import { Header } from 'components/Header/Header';
import { Classes } from './components/Classes/Classes';
import { Adress } from './components/Adress';

export const App = () => {
  return (
    <>
      <div className="start-cont">
        <Header />
      </div>
      <main>
        <Classes />
        <Adress />
      </main>
    </>
  );
}
