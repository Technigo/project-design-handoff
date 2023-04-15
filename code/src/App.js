import React from 'react';
import { Header } from 'components/Header';
import { Intro } from 'components/Intro';
import { Classes } from 'components/WorkoutClasses/Classes';
import { SignUp } from 'components/SignUp';
import { Book } from 'components/Book';
import { Review } from 'components/Review';
import { Connect } from 'components/Connect';
import { Footer } from 'components/Footer/Footer';
import { GlobalStyles } from 'components/GlobalStyles';

export const App = () => {
  return (
    <>
      <GlobalStyles />
      <Header title="OUTDOOR WORKOUT" />
      <main>
        <Intro />
        <Classes />
        <SignUp />
        <Book />
        <Review />
        <Connect />
      </main>
      <Footer />
    </>
  );
}
