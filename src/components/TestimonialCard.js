import React, { useState } from "react";
import styled from "styled-components";

const testimonalarray = [
  {
    id: 1,
    text:
      "“This program has really helped me to be more grounded in the present moment. I used to envy my dog, who always would finds joy in the little things and be very present with what is. He truly is my meditation master!”",
    img: "/img/pexels-cottonbro-studio-4056535.png",
    alt: "a person meditating with a dog next to them",
    name: "-Laura, Vienna",
  },
  {
    id: 2,
    text:
      "“I used to have a very troubled relationship with food... I would constantly crave something sweet and I have NEVER enjoyed cooking. I tried out this program because it combines nutrition with mindfulness. The meal plan is catered/personalized to your own lifestyle and habits, and I was surprised how easy (and tasty) the recipes are. I feel so much more energized, focused and I no longer eat sweets all the time!”",
    img: "/img/benjamin-suter-eWeH0gonEkI-unsplash.png",
    alt: "a happy woman eating salad alone",
    name: "-Laura, Vienna",
  },
  {
    id: 3,
    text:
      "“Being able to be mindful of my body movements for 20 minutes was something I never thought I'd be able to do. Now my favorite Saturday activity is doing yoga in my garden - even early in the morning!” ",
    img: "/img/vishal-bhutani-hy3dqwj0_gw-unsplash.png",
    alt: "a person doping yoga",
    name: "-Laura, Vienna",
  },
];

const Card = styled.div`
  background: #02393f;
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
`
const Img = styled.img`
  border-radius: 12px;
`;

const Name = styled.p`
align-self: flex-end;
font-style: italic;
`

const ReadMoreButton = styled.button`
background-color: #02393f;
color: #f4e4d7;
border: none;
`

export const TestimonialCard = () => {
  const [showFullDescription, setFullDescription] = useState(false);

  const showFullDescriptionHandler = () => {
    setFullDescription(!showFullDescription);
  };

  return (
    <CardWrapper>
      {testimonalarray.map((testimonial) => {
        const description = showFullDescription
          ? testimonial.text
          : testimonial.text.slice(0, 257);

        return (
          <Card key={testimonial.id}>
            <Img src={testimonial.img} alt={testimonial.alt} />
            <p>{description}
              {testimonial.text.length > 257 && (
                <ReadMoreButton onClick={showFullDescriptionHandler}>{showFullDescription ? "Show less" : "..."}
                </ReadMoreButton>
              )}
            </p> 
            <Name>{testimonial.name}</Name>
          </Card>
        );
      })
      }
    </CardWrapper>
  )
};
