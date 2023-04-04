import React from 'react'
import { NavigationBar } from './components/NavigationBar/NavigationBar';
import { Hero } from './components/Hero/Hero';

export const App = () => {
  return (
    <div>
      <NavigationBar />
      <Hero />
      Find me in src/app.js!
    </div>
  )
}
