import React from 'react';
import styled from 'styled-components';

const TestimonialWrapper = styled.div`
display: flex;
flex-direction: column;
gap: 1.5rem;
background: #02393F;
padding: 1.5rem;
`

const TestimonialCard = styled.div`
background: #02393F;
color: #F4E4D7;
`
const Img = styled.img`
border-radius: 12px;
`
const Title = styled.h2`
    font-weight: 700;
    font-size: 25px;
    line-height: 160%;  
    color: #D0C4B8;
`

export const Testimonials = () => {
  return (
    <TestimonialWrapper>
      <Title>What our yogis say:</Title>
      <TestimonialCard>
        <p>
        “This program has really helped me to be more grounded in the present moment.
        I used to envy my dog, who always would finds joy in the little things and be very present
         with what is. He truly is my meditation master!”
        </p>
        <p>-Laura, Vienna</p>
      </TestimonialCard>
      <TestimonialCard>
        <p>
      “I used to have a very troubled relationship with food...
       I would constantly crave something sweet and I have NEVER enjoyed cooking.
        I tried out this program because it combines nutrition with
         mindfulness. The meal plan is catered/personalized to your own lifestyle and habits, and
      I was surprised how easy
        (and tasty) the recipes are.
        I feel so much more energized, focused and I no longer eat sweets all the time!”
        </p>
        <p>-Laura, Vienna</p>
      </TestimonialCard>
      <TestimonialCard>
        <p>
        “Being able to be mindful of my body movements for 20 minutes was something
         I never thought Id be able to do. Now my favorite Saturday activity is
          doing yoga in my garden - even early in the morning! ”
        </p>
        <p>-Laura, Vienna</p>
      </TestimonialCard>
    </TestimonialWrapper>
  )
}

export default Testimonials