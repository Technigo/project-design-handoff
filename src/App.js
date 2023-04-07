import React from 'react'
import { BenefitsSection } from 'components/BenefitsSection/BenefitsSection'
import { HeaderSection } from './components/HeaderSection/HeaderSection'
import { PickYourPositionSection } from './components/PickYourPositionSection/PickYourPosition'
import { ReviewSection } from './components/ReviewSection/ReviewSection'
import { QuestionSection } from './components/QuestionSection/Questions'
import { Footer } from './components/Footer/Footer'

export const App = () => {
  return (
    <div style={{ height: 'max-content' }}>
      <HeaderSection />
      <BenefitsSection />
      <PickYourPositionSection />
      <ReviewSection />
      <QuestionSection />
      <Footer />
    </div>
  )
}
