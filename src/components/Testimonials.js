import React from "react";
import styled from "styled-components";
import { useMediaQuery } from "@react-hook/media-query";
import { TestimonialSlider } from "./TestimonialSlider";
import TestimonialList from "./TestimonialList";

const TestimonialSection = styled.section`
background: #02393f;

@media(min-width: 1025px) {
  display: flex;
  flex-direction: column;
  gap: 2.75rem;
  margin: auto;
  padding-left: 4rem;
}
`

const TestimonialWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  padding: 1.5rem;

  @media(min-width: 768px) and (max-width: 1024px) {
    padding-right: 0;
    padding-left: 0;
    padding-top: 3rem;
    padding-bottom: 4rem;
  }

  @media(min-width: 1025px) {
    max-width: 1180px;
    margin-auto;
    padding-top: 3.25rem;
    padding-bottom: 10rem;
  }
`

const Title = styled.h2`
  font-weight: 700;
  font-size: 25px;
  line-height: 160%;
  color: #d0c4b8;

  @media(min-width: 768px) and (max-width: 1024px) {
    font-size: 40px;
    margin-left: 2rem;
    }

@media(min-width: 1025px) {
  font-size: 40px;
}
`

export const Testimonials = () => {
  const isMobile = useMediaQuery('(max-width: 767px)'); // Hook to check screen size.

  return (
    <TestimonialSection>
      <TestimonialWrapper>
        <Title>What our yogis say:</Title>
        {isMobile ? <TestimonialList /> : <TestimonialSlider />
          // Rendering the slider or array of cards, depending on screen size. 
          // I've not gotten conditional rendering to work on resize of screen, only on first render of site. 
          // Instead I have installed an npm package to solve this. Might not be the best solution.
        }
      </TestimonialWrapper>
    </TestimonialSection>
  );
};

export default Testimonials;