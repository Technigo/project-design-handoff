import React from 'react';
import './Onlineyoga.css';
import { Carousel } from './Videoslider';

export const Onlineyoga = () => {
  return (
    <div className="online-background">
      <div className="online-text">
        <h1 className="online-yoga-bigtext">Our Online Yoga Offering</h1>
        <p className="video-description">Practice yoga conveniently and comfortably from home with our online yoga classes. Our experienced yoga teachers will guide you through a variety of classes and styles, from beginner to advanced, with clear and easy-to-follow instructions. </p>
      </div>
      <Carousel />
    </div>
  )
}