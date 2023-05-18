import React from 'react'
import Navbar from 'components/Navbar'
import Header from 'components/Header';
import Carousel from 'components/Carousel';
import About from 'components/About';
import Find from 'components/Find';
import Join from 'components/Join';
import SignUp from 'components/SignUp';
import Footer from 'components/Footer';

export const App = () => {
  return (
    <>
      <Navbar />
      <Header />
      <Carousel />
      <About />
      <Find />
      <Join />
      <SignUp />
      <Footer />
    </>
  )
}
