import React, { useState } from "react";
import styled from "styled-components";

const Card = styled.div`
  background: #02393f;
  max-height: 506px;
  color: #f4e4d7;
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const CardWrapper = styled.div`
background: #02393f;
  color: #f4e4d7;
  display: flex;
  flex-direction: column;
  gap: 5px;
  height: 506px;

  @media(min-width: 768px) and (max-width: 1024px) {
    height: 488px;
  }

  @media(min-width: 1025px) {
        width: 100%;
  }
`
const Img = styled.img`
  border-radius: 12px;
  height: 245px;
  object-fit: cover;

  @media(min-width: 426px) and (max-width: 1024px) {
    object-position: top;
  }
`;

const StyledDescription = styled.p`
font-weight: 400;
font-size: 16px;
line-height: 150%;
color: #F4E4D7;
`

const Name = styled.p`
align-self: flex-end;
font-style: italic;
`

const ReadMoreButton = styled.button`
background-color: #02393f;
color: #f4e4d7;
border: none;
`

export const TestimonialCard = ({ text, img, alt, name }) => {
  const [showFullDescription, setFullDescription] = useState(false);
  // This thing checks the state for the long text break and show more

  const showFullDescriptionHandler = () => {
    setFullDescription(!showFullDescription);
    // This is the handler for showing the entire long text
  };

  const description = showFullDescription ? text : text.slice(0, 200);
  // This is the breakpoint for the long text, I put it at 200 characters

  return (
    <CardWrapper>
      <Card>
        <Img src={img} alt={alt} />
        <StyledDescription>
          {description}
          {text.length > 257 && (
            <ReadMoreButton onClick={showFullDescriptionHandler}>
              {showFullDescription ? "Show less" : "..."}
            </ReadMoreButton>
          )}
        </StyledDescription>
        <Name>{name}</Name>
      </Card>
    </CardWrapper>
  )
};
