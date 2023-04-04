import React from 'react';
import { Button } from './Button';

export const Intro = () => {
  return (
    <section className="intro">
      <div>
        <h2>OUR GOAL IS TO PROMOTE</h2>
        <h3>THE JOY OF EXERCISE</h3>
        <h4>Teamwork. Bodyweight. Fresh air</h4>
        <p>CrossPark is currently located in Stockholm, Göteborg and Malmö.
              We offer outdoor training sessions where nature and
              your body are the only tools needed.
              With our fun, simple and effective exercises we
              train strength, fitness, balance and agility.
        </p>
      </div>
      <div>
        <Button mainCta>Read more</Button>
      </div>
    </section>
  )
}