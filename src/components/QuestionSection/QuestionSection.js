/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/no-unescaped-entities */
import React, { useState } from 'react'
import { BackgroundColor } from 'components/styledComponents/Backgrounds'
import { ImagePlank } from 'components/styledComponents/Images'
import { SectionTitle } from '../styledComponents/Texts'
import { FlexContainer, QuestionsContainer } from '../styledComponents/Containers'
import PlankBalance from '../../images/PlankBalance.png'
import { FAQSection } from './FAQSection'
import { FormSection } from './FormSection'

export const QuestionSection = () => {
  const [text, setText] = useState('');
  const [email, setEmail] = useState('');
  return (
    <FlexContainer
      gap="20px"
      plankPositioning>
      <BackgroundColor background="#004852" width="100vw" />
      <ImagePlank src={PlankBalance} />
      <SectionTitle>
       Question corner
      </SectionTitle>
      <QuestionsContainer question>
        <FAQSection />
        <FormSection text={text} setText={setText} email={email} setEmail={setEmail} />
      </QuestionsContainer>
    </FlexContainer>
  )
}