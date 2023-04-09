import React from 'react';
import { Header } from 'components/Header/Header';
import { PowYoga } from './components/Infotainer/PowerYoga';
import { Classes } from './components/Classes/Classes';
import { SpyStudio } from './components/Infotainer/Spys';
import { Adress } from './components/Infotainer/Adress';
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
        <PowYoga />
        <Classes />
        <SpyStudio />
        <Adress />
        <ReviewTemp />
        <SignUp />
      </main>
      <Foot />
    </>
  );
}
