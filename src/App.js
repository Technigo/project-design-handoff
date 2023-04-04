import React from 'react'
import Header from 'components/Header';
import Carousel from 'components/Carousel';
import YogaInfo from 'components/YogaInfo';
import Find from 'components/Find';
import Join from 'components/Join';
import SignUp from 'components/SignUp';
import Footer from 'components/Footer';

export const App = () => {
  return (
    <>
      <Header />
      <Carousel />
      <YogaInfo />
      <Find />
      <Join />
      <SignUp />
      <Footer />
    </>
  )
}
