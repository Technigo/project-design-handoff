/* eslint-disable react/jsx-no-undef */
import React from 'react'
import Hero from 'components/Hero'
import Activity from 'components/Activity'
import Benefits from 'components/Benefits'
import Community from 'components/Community'
import Programs from 'components/Programs'
import Button from 'components/Button'
import './index.css'

const App = () => {
  return (
    <div className="App">
      <Hero />
      <Activity />
      <Benefits />
      <Community />
      <Programs />
      <Button />
    </div>
  )
}

export default App
