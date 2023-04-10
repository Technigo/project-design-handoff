import React from 'react';
import { NavBar } from 'components/Navbar/Navbar';
import { Header } from 'components/Header/Header';
// import { Hero } from 'components/Hero/Hero';
// import { Intro } from 'components/Intro/Intro';
// import { Classes } from 'components/WorkoutClasses/Classes';
// import { SignUp } from 'components/SignUp';
// import { Book } from 'components/Book/Book';
// import { Review } from 'components/Review';
// import { Connect } from 'components/Connect';
// import { Footer } from 'components/Footer/Footer';
// import { GlobalStyles } from 'components/GlobalStyles';

export const App = () => {
  return (
    <>
      <NavBar />
      {/* <GlobalStyles /> */}
      <Header title="OUTDOOR WORKOUT" />
      {/* <main>
        <Intro />
        <Classes />
        <SignUp />
        <Book />
        <Review />
        <Connect />
      </main>
      <Footer /> */}
    </>
  );
};
