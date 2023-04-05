import React from 'react';
import styled from 'styled-components';
import { Button } from './Button';

const BookSection = styled.section`
  background-color: var(--primary-color-1);;
`;

export const Book = () => {
  return (
    <BookSection className="book">
      <h2>BOOK A WORKOUT TODAY</h2>
      <select type="select" name="book-city">
        <option value="malmo">MALMÖ</option>
      </select>
      <article>
        <p>MAGISTRATPARKEN</p>
        <p>17:30 INTENSE</p>
        <Button cardCta>Book workout</Button>
      </article>
      <article>
        <p>MAGISTRATPARKEN</p>
        <p>17:30 INTENSE</p>
        <Button cardCta>Book workout</Button>
      </article>
      <article>
        <p>MAGISTRATPARKEN</p>
        <p>17:30 INTENSE</p>
        <Button cardCta>Book workout</Button>
      </article>
    </BookSection>
  )
}