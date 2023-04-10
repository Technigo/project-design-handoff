import React, { useState } from 'react'
import styled from 'styled-components'

const StyledSection = styled.section`
display: flex;
flex-direction: column;
gap: 0px;
margin: 0px 16px;
width: 248px;
height: 480px;
background-color: #DBCBD8;
border-radius: 148px 148px 8px 8px;
overflow: hidden;

h1 {
    padding: 0px;
    margin: 0px;
}
`

const FlippedStyledSection = styled(StyledSection)`
flex-direction: column-reverse;
align-items: center;
h1 {
    text-align: center;
    align-self: center;
}
`

const StyledImage = styled.img`
width: auto;
height: 304px;
object-fit: cover;
`

const StyledBottomTextContainer = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
justify-content: flex-end;
padding: 12px;
background: #DBCBD8;
height: 200px;
`

const FlippedStyledBottomTextContainer = styled(StyledBottomTextContainer)`
text-align: center;`

const CarouselCard = (props) => {
  const [flipped, setFlipped] = useState(false);

  const handleClick = (e) => {
    e.preventDefault();
    setFlipped(!flipped);
  }

  if (flipped) {
    return (
      <FlippedStyledSection>
        <FlippedStyledBottomTextContainer>
          <h1>{props.title}</h1>
          <p style={{ whiteSpace: 'pre-line' }}>{props.text}</p>
          <a href="" onClick={handleClick}><u>Back</u></a>
        </FlippedStyledBottomTextContainer>
      </FlippedStyledSection>
    )
  }
  return (
    <StyledSection>
      <StyledImage src={props.image} />
      <StyledBottomTextContainer>
        <h1>{props.title}</h1>
        <p style={{ whiteSpace: 'pre-line' }}>{props.text.split(' ').slice(0, 8).join(' ')} ...</p>
        <a href="" onClick={handleClick}><u>Read More</u></a>
      </StyledBottomTextContainer>
    </StyledSection>
  )
}

export default CarouselCard;