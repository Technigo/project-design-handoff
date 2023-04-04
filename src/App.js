import React from 'react';
import { NavBar } from './components/NavBar';
import { Hero } from './components/Hero';
import { Pitch } from './components/Pitch';

export const App = () => {
  return (
    <div className="app">
      <header>
        <NavBar />
        <Hero />
      </header>
      <Pitch />
    </div>
  )
}
