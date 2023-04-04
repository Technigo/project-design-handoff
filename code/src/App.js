import React from 'react';
import { Header } from 'components/Header';
import { NavBar } from 'components/NavBar';
import { Intro } from 'components/Intro';
import { Classes } from 'components/Classes';
import { SignUp } from 'components/SignUp';
import { Book } from 'components/Book';
import { Review } from 'components/Review';
import { Connect } from 'components/Connect';
import { Footer } from 'components/Footer';

export const App = () => {
  return (
    <main>
      <NavBar navOne="Pricelist" navTwo="About us" navThree="Location" navFour="Contact" navFive="Sign in" />
      <Header title="OUTDOOR WORKOUT" />
      <Intro />
      <Classes />
      <SignUp />
      <Book />
      <Review />
      <Connect />
      <Footer />
    </main>
  );
}
