import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Motivation } from './components/Motivation';
import { Methods } from './components/Methods';

export const App = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Motivation />
      <Methods />
    </div>
  )
}
