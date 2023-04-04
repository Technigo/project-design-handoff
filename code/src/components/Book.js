import React from 'react';
import { Button } from './Button';

export const Book = () => {
  return (
    <section className="book">
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
    </section>
  )
}