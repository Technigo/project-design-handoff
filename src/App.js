import React from 'react'

import { Navbar } from 'components/Navbar/Navbar';
import { Hero } from 'components/Hero/Hero';
import { TheBenefits } from 'components/TheBenefits/TheBenefits';
import { SpeakToTheGoals } from 'components/SpeakToTheGoals/SpeakToTheGoals';
import { HowToAchive } from 'components/HowToAchive/HowToAchive';
import { SocialProof } from 'components/SocialProof/SocialProof';
import { Footer } from 'components/Footer/Footer';
import { Numbers } from 'components/Numbers/Numbers';

export const App = () => {
  return (
    <div>
      <div className="section1">
        <Navbar />
        <Hero />
      </div>
      <TheBenefits />
      <SpeakToTheGoals />
      <HowToAchive />
      <SocialProof />
      <Numbers />
      <Footer />
    </div>
  )
}