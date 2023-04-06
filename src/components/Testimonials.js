import React from "react";
import styled from "styled-components";
import { TestimonialCard } from "./TestimonialCard";

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
  return (
    <TestimonialWrapper>
      <Title>What our yogis say:</Title>
      <TestimonialCard />
    </TestimonialWrapper>
  );
};

export default Testimonials;