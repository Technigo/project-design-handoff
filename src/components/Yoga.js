import React from 'react';

export const Yoga = () => {
  return (
    <>
      <h2>Our Online Yoga Offering</h2>
      <p>Practice yoga conveniently and comfortably from home with our online yoga classes.
        Our experienced yoga teachers will guide you through a variety of classes and styles,
        from beginner to advanced, with clear and easy-to-follow instructions.
      </p>
      <video width="320" height="240" muted controls>
        <source src="/assets/yoga.mp4" type="video/mp4" />
        Your browser does not support video.
      </video>
    </>
  )
}