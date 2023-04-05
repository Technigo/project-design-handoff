import React from 'react';
import { GlobalStyle } from 'components/GlobalStyle';
import { HeroPage } from 'Sections/HeroPage';
import { BookClasses } from 'Sections/BookClasses';
import { MemberForm } from 'Sections/MemberForm';

export const App = () => {
  return (
    <div>
      <GlobalStyle />
      <HeroPage />
      <BookClasses />
      <MemberForm />
    </div>
  )
}
