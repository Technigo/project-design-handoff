import React from 'react';
import styled from 'styled-components';
import { BenefitsSection } from 'components/BenefitsSection';
import { Header } from 'components/Header';
import { Footer } from 'components/Footer';

export const App = () => {
  return (
    <Appdiv>
      <Header />
      <BenefitsSection />
      <Footer />
    </Appdiv>
  );
}

export const Appdiv = styled.div`
height: max-content;
background: #EDFDFF;
align-items:flex-start;
`
