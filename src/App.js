import React from 'react';
import HeroImg from 'components/HeroImg';
import StickyMenu from './components/StickyMenu';
import EasySteps from './components/EasySteps';
import Advantages from './components/Advantages';
import ClientReviews from './components/ClientReviews';
import Coaches from './components/Coaches';
import FAQ from './components/FAQ';
import TrialForm from './components/TrialForm';
import Footer from './components/Footer';
// import HeroImgDesktop from './components/HeroImgDesktop';
// ...

const App = () => {
  return (
    <div>
      <StickyMenu />
      <HeroImg />
      <EasySteps />
      <Advantages />
      <ClientReviews />
      <Coaches />
      <FAQ />
      <TrialForm />
      <Footer />
    </div>
  );
};

export default App;
