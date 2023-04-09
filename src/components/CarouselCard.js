import React from 'react'
import styled from 'styled-components'

const StyledSection = styled.section`
display: flex;
flex-direction: column;
gap: 0px;
margin: 0px 16px;
width: 248px;

h1 {
    padding: 0px;
    margin: 0px;
}

`

const StyledImage = styled.img`
width: auto;
height: 304px;
border-radius: 148px 148px 0px 0px;
object-fit: cover;
`

const StyledBottomTextContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: flex-start;
padding: 8px;
background: #DBCBD8;
border-radius: 0px 0px 8px 8px;
`

const CarouselCard = (props) => {
  return (
    <StyledSection>
      <StyledImage src={props.image} />
      <StyledBottomTextContainer>
        <h1>{props.title}</h1>
        <p>{props.text.split(' ').slice(0, 11).join(' ')} ...</p>
        <a href="#">Read More</a>
      </StyledBottomTextContainer>
    </StyledSection>
  );
}

export default CarouselCard;