import React from 'react';

import HeroImg from '../images/HeroImg.png'

import Hero from './Hero';
import Motivation from './Motivation';
import Program from './Program';
import Plan from './Plan';
import Testimonials from './Testimonials';
import Methods from './Methods';
import Footer from './Footer';
import Header from './Header';

// import backgroundImage from ''

const WebPage = () => {
  const plans = [
    { title: 'Pre-selected', amount: '0 CHF' },
    { title: '3 months plan', amount: 'XX CHF' },
    { title: '6 months plan', amount: 'XX CHF' },
    { title: '12 months plan', amount: 'XX CHF' }
  ];

  return (
    <div>
      <Header />
      <Hero
        heroImage={HeroImg}
        title="Becoming a fit parent"
        subtitle="Say Goodbye to Excuses and Hello to Results with Our Online Fitness Program for Busy Parents."
        buttonText="Start trial"
        onClick={() => console.log('Button clicked!')} />
      <Motivation
        // backgroundImg="https://example.com/background.jpg"
        title="How we get you in shape:"
        img1Title="Keep at it - even on the worse days"
        img2Title="Do it when ever where ever you want"
        img3Title="Push it but with caution"
        img1Subtitle="Read more about our science-backed hacks"
        img2Subtitle="With our science-proofed hacks you will not stay behind"
        img3Subtitle="Our experienced team knows everything about Rectus stasis, C-section and..."
        shortText="Choose your program" />
      <Program
        title="Find your program"
        img1Title="Active in Pregnancy"
        img2Title="Getting fit for your child"
        img3Title="Postnatal recovery"
        img4Title="Stay strong but soft"
        img5Title="Busy but fit"
        img6Title="Start running (again)"
        buttonText="Load more"
        onClick={() => console.log('Button clicked!')} />
      <Plan
        title1="Choose your plan"
        title2="Become a fit parent"
        plans={plans}
        buttonText="Create account"
        finishingText="Already have an account? Login"
        onClick={() => console.log('Button clicked!')} />
      <Testimonials
        title="What other parents say about the fit parents program"
        img1Title="I feel stable with my training - even in tough times."
        img2Title="It took me some time but I feel very happy about my fitness level now."
        img3Title="It was a match from the very first training!"
        img1Subtitle="Simon Owl"
        img2Subtitle="Belema Hedgehog"
        img3Subtitle="Selma Whale"
        buttonText="Start trial"
        onClick={() => console.log('Button clicked!')} />
      <Methods
        title="Read more about our methods"
        img1Title="Yoga"
        img2Title="Fitness"
        img3Title="Pilates"
        img4Title="Running" />
      <Footer
        link1="Impressum"
        link2="Datenschutz"
        shortText="Follow us"
        title="Programs"
        link3="Active in pregnancy"
        link4="Getting fit for the child"
        link5="Postnatal recovery"
        link6="Stay strong but soft"
        link7="Start running (again)"
        link8="Run better"
        link9="In shape nutrition-plan" />
    </div>
  );
};

export default WebPage;