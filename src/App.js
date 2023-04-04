import React from 'react';
import { NavBar } from './components/NavBar';
import { Hero } from './components/Hero';
import { Pitch } from './components/Pitch';
import { Methods } from './components/Methods';

export const App = () => {
  return (
    <div className="app">
      <header>
        <NavBar />
        <Hero />
      </header>
      <Pitch />
      <Methods />
    </div>
  )
}
