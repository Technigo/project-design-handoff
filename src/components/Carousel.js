import React from 'react';
import styled from 'styled-components';

const CarouselSection = styled.div`
display: flex;
flex-direction: column;
align-items: center;
`

const OurClasses = styled.h1`
font-size: 18px;
color: #FF9F0A;
`

const Carousel = () => {
  return (
    <CarouselSection>
      <OurClasses>
        <h1>Our classes </h1>
      </OurClasses>
    </CarouselSection>
  )
}

export default Carousel;