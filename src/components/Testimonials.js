import React from "react";
import styled from "styled-components";
import { useMediaQuery } from "@react-hook/media-query";
import { TestimonialSlider } from "./TestimonialSlider";
import TestimonialList from "./TestimonialList";

const TestimonialWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  background: #02393f;
  padding: 1.5rem;
`;

const Title = styled.h2`
  font-weight: 700;
  font-size: 25px;
  line-height: 160%;
  color: #d0c4b8;
`;

export const Testimonials = () => {
  const isTablet = useMediaQuery('(min-width: 768px) and (max-width: 1024px)'); // Hook to check screen size.

  return (
    <TestimonialWrapper>
      <Title>What our yogis say:</Title>
      {isTablet ? <TestimonialSlider /> : <TestimonialList />
      // Rendering the slider or array of cards, depending on screen size. 
      // I've not gotten conditional rendering to work on resize of screen, only on first render of site. 
      // Instead I have installed an npm package to solve this. Might not be the best solution.
      }
    </TestimonialWrapper>
  );
};

export default Testimonials;