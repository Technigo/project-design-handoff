import React from 'react';
import { NavBar } from './components/NavBar';
import { Header } from './components/Header';
import { Pitch } from './components/Pitch';

export const App = () => {
  return (
    <div className="app">
      <NavBar />
      <Header />
      <Pitch />
    </div>
  )
}
