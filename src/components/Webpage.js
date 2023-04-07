import React from 'react';
import Hero from './Hero';
import Motivation from './Motivation';
import Program from './Program';
import Plan from './Plan';
import Testimonials from './Testimonials';
import Methods from './Methods';
import Footer from './Footer';
// import heroImage from ''
// import backgroundImage from ''

const WebPage = () => {
  const planButtonsTexts = [
    { line1: 'Basic', line2: 'For beginners' },
    { line1: 'Intermediate', line2: 'For those with some experience' },
    { line1: 'Advanced', line2: 'For experts' },
    { line1: 'Premium', line2: 'For the best of the best' }
  ];

  return (
    <div>
      <Hero
        // heroImage={heroImage}
        title="Becoming a fit parent"
        subtitle="Say goodbye to Excuses and Hello to Results with Our Online Fitness Program for Busy Parents."
        buttonText="Start trial"
        onClick={() => console.log('Button clicked!')} />
      <Motivation
        // backgroundImg="https://example.com/background.jpg"
        title="How we get you in shape:"
        // img1="https://example.com/image1.jpg"
        // img2="https://example.com/image2.jpg"
        // img3="https://example.com/image3.jpg"
        img1Title="Keep at it - even on the worse days"
        img2Title="Do it when ever where ever you want"
        img3Title="Push it but with caution"
        img1Subtitle="Read more about our science-backed hacks"
        img2Subtitle="With our science-proofed hacks you will not stay behind"
        img3Subtitle="Our experienced teat knows everything about Rectus stasis, C-section and..."
        shortText="Choose your program" />
      {/* icon="https://example.com/icon.jpg" */}
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
        title="Choose your plan"
        buttonsTexts={planButtonsTexts}
        buttonText="Create account"
        finishingText="Already have an account? Login"
        onClick={() => console.log('Button clicked!')} />
    </div>
  );
};

export default WebPage;