import React from 'react'
import { NavigationBar } from './components/NavigationBar/NavigationBar';
import { Hero } from './components/Hero/Hero';
import { Motivation } from './components/Motivation/Motivation'

export const App = () => {
  return (
    <div>
      <NavigationBar />
      <Hero />
      <Motivation />
      Find me in src/app.js!
    </div>
  )
}
