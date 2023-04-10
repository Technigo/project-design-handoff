import React from 'react';
import { StyledNewsletter, NewsH2, NewsH3, NewsP, NewsInput, SendButton } from './Footer.styled';

export const Newsletter = () => {
  return (
    <StyledNewsletter>
      <NewsH2>STAY IN TOUCH</NewsH2>
      <NewsH3>JOIN OUR NEWSLETTER</NewsH3>
      <NewsP>Subscribe to our newsletter to receive the latest news.</NewsP>
      <NewsInput type="email" placeholder="YOUR E-MAIL" />
      <SendButton footerCta />
    </StyledNewsletter>
  );
};
