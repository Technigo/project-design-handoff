import React from 'react'
import styled from 'styled-components'

const StyledSection = styled.section``

const CarouselCard = (props) => {
  return (
    <StyledSection>
      {props.text}
    </StyledSection>
  );
}

export default CarouselCard;