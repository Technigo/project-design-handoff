import React from 'react';
import { NavBar } from 'components/Navbar/Navbar';
import { Header } from 'components/Header/Header';
import { Intro } from 'components/Intro/Intro';
import { Classes } from 'components/Classes/Classes';
import { SignUp } from 'components/SignUp/SignUp';
import { Book } from 'components/Book/Book';
import { Review } from 'components/Review/Review';
import { Connect } from 'components/Connect/Connect';
import { Footer } from 'components/Footer/Footer';

export const App = () => {
  return (
    <>
      <NavBar />
      <Header />
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
};
