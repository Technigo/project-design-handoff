/* eslint-disable linebreak-style */
import React from 'react'
import { Section } from './components/Section'
import { TextBox } from './components/TextBox'
import { Location } from './components/Location'
import { SignUpForm } from './components/SignUpForm'
import { Header } from './components/Header'
import { Welcome } from './components/Welcome'

export const App = () => {
  return (
    <div>
      <Section image>
        <Header />
        <Welcome />
      </Section>
      <Section brown removeOnMobile>
        <TextBox
          heading="What is Power Yoga?"
          text="Power yoga is a fast-paced style of yoga that's focused on building strength and endurance. Whilst practising this form of yoga, you will feel the tension and toxins leaving your body and your posture and back pain getting better." />
      </Section>
      <Section white>
        Classes section
      </Section>
      <Section brown removeOnMobile>
        <TextBox
          heading="Santulan Power Yoga Studio"
          text="Put simply, Yoga transformed our lives and we want to share that magic with you. We created Santulan to empower your journey to personal growth and well-being. Our classes weave ancient yogic philosophy into 21st century life, and everyone’s welcome, from absolute beginners to advanced practitioners. We passionately believe that Power Yoga is for everyone, and no matter your age or flexibility, our expert teachers will ensure you leave each class stronger in mind and body." />
      </Section>
      <Section white>
        <Location />
      </Section>
      <Section blue halfWidth>
        Contact section
      </Section>
      <Section white halfWidth id="sign-up-section">
        <SignUpForm />
      </Section>
      <Section brown>
        Footer section
      </Section>
    </div>
  )
}
