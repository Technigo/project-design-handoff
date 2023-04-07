import React from 'react';
import { GlobalStyle } from 'components/GlobalStyle';
import { HeroPage } from 'sections/HeroPage';
import { BookClasses } from 'sections/BookClasses';
import { MemberForm } from 'sections/MemberForm';
import { Contact } from 'sections/Contact';

export const App = () => {
  return (
    <div>
      <GlobalStyle />
      <HeroPage />
      <BookClasses />
      <MemberForm />
      <Contact />
    </div>
  )
}
