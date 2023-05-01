import React from 'react';
import GlobalStyles from 'styles/Global';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Hero } from 'components/Hero/Hero';
import { ThemeProvider } from 'styled-components';
import { TheBenefits } from 'components/TheBenefits/TheBenefits';
import { SpeakToTheGoals } from 'components/SpeakToTheGoals/SpeakToTheGoals';
import Footer from './components/Footer';

const theme = {
  colors: {
    header: '#ebfbff',
    body: '#fff',
    footer: '#00333'
  },
  primaryButton: {
    bg: '#F35408',
    outline: 'none'
  }
}

export const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Router>
        <Hero />
        <Routes>
          <Route path="/" />
          <Route path="/products" />
          <Route path="/contact" />
          <Route path="/about" />
        </Routes>
        <TheBenefits />
        <SpeakToTheGoals />
        <Footer />
      </Router>
    </ThemeProvider>
  )
}
