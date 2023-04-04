import React from 'react';
import { Button } from './Button';

export const Classes = () => {
  return (
    <section className="classes">
      <div>
        <h2>OUR CLASSES</h2>
        <h3>WE HAVE SOMETHING FOR EVERYONE</h3>
        <h4>Three different levels. Read more</h4>
      </div>
      <div>
        <p>I am going to be a card with a button inside</p>
        <Button cardCta>Read more</Button>
      </div>
    </section>
  )
}