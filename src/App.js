import React from 'react'
import Header from './sections/Header'
import Hero from './sections/Hero'
import About from './components/About'

import './index.css'

export const App = () => {
  return (
    <div>
      <Header />
      <Hero />
      <About />
    </div>
  )
}