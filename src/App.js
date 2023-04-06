import React from 'react';
import { GlobalStyle } from 'components/GlobalStyle';
import { HeroPage } from 'Sections/HeroPage';
import { BookClasses } from 'Sections/BookClasses';
import { MemberForm } from 'Sections/MemberForm';
import { Contact } from 'Sections/Contact';

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
