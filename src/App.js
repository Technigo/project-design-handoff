import Application from 'compontes/Application';
import Benefits from 'compontes/Benefits';
import Header from 'compontes/Header';
import SignUpForm from 'compontes/SignUpForm';
import StickyNav from 'compontes/StickyNav';
import Workout from 'compontes/Workout';
import React from 'react';

export const App = () => {
  return (
    <>
      <Header />
      <Benefits />
      <Workout />
      <Application />
      <SignUpForm />
      <StickyNav />
    </>
  );
};
