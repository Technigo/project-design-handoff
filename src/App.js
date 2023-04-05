import React from 'react';
import { GlobalStyle } from 'components/GlobalStyle';
import { HeroPage } from 'Sections/HeroPage';
import { Acrobatics } from 'Sections/Acrobatics';

export const App = () => {
  return (
    <div>
      <GlobalStyle />
      <HeroPage />
      <Acrobatics />
    </div>
  )
}
