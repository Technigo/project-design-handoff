import React from 'react'
import Header from 'components/Header';
import YogaInfo from 'components/YogaInfo';
import Carousel from 'components/Carousel';
import About from 'components/About';
import Find from 'components/Find';
import Join from 'components/Join';
import SignUp from 'components/SignUp';
import Footer from 'components/Footer';

export const App = () => {
  return (
    <>
      <Header />
      <YogaInfo />
      <Carousel />
      <About />
      <Find />
      <Join />
      <SignUp />
      <Footer />
    </>
  )
}
