import React from "react";
import { TestimonialCard } from "./TestimonialCard";

export const testimonialArray = [
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
    name: "-Kim, Norway",
  },
  {
    id: 3,
    text:
        "“Being able to be mindful of my body movements for 20 minutes was something I never thought I'd be able to do. Now my favorite Saturday activity is doing yoga in my garden - even early in the morning!” ",
    img: "/img/vishal-bhutani-hy3dqwj0_gw-unsplash.png",
    alt: "a person doping yoga",
    name: "-Matilda, Poland",
  },
];

const TestimonialList = () => {
  return (
    <div>
      {testimonialArray.map((testimonial) => (
        // mapping through the array to get each single card
        <TestimonialCard
          key={testimonial.id}
          text={testimonial.text}
          img={testimonial.img}
          alt={testimonial.alt}
          name={testimonial.name}
        />
      ))}
    </div>
  );
};

export default TestimonialList