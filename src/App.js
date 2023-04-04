import React from 'react'

import { NavBar } from 'Components/NavBar/NavBar';
import { Hero } from 'Components/Hero/Hero';
import { TheBenefits } from 'Components/TheBenefits/TheBenefits';
import { SpeakToTheGoals } from 'Components/SpeakToTheGoals/SpeakToTheGoals';
import { HowToAchive } from 'Components/HowToAchive/HowToAchive';
import { SocialProof } from 'Components/SocialProof/SocialProof';
import { Footer } from 'Components/Footer/Footer';

export const App = () => {
  return (
    <div>
      <div className="section1">
        <NavBar />
        <Hero />
      </div>
      <TheBenefits />
      <SpeakToTheGoals />
      <HowToAchive />
      <SocialProof />
      <Footer />
    </div>
  )
}
