/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable max-len */

import React from 'react';
import Slider from 'react-slick';

const SwipeableCarouselClientReviews = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1
  };

  return (
    <>
      <h1>What our Clients say about their journey!</h1>
      <Slider {...settings}>
        <div>
          <p>“Arranging the free trial and signing up for a package afterward was quick and easy. My trainer Lola is AMAZING! I absolutely hate exercise and have not been able to stick to an exercise routine since school. But Lola makes my workouts fun and keeps me sessions!”</p>
          <h3>Liana Kelly</h3>
        </div>
        <div>
          <p>“My personal coach, Sara, makes my workouts fun and keeps me motivated by adjusting my workouts for my specific needs. Now that I am working with her, I look forward to my workout sessions!”</p>
          <h3>Nils Beck</h3>
        </div>
        <div>
          <p>“Thanks to my coach, I could finally stick to the lifestyle always looking for. Making customized eating diet and training based on my routine helps me to keep motivated  and easy to follow!”</p>
          <h3>Sara Jones</h3>
        </div>
        <div>
          <h3>Card 4</h3>
          <p>Vivamus malesuada posuere justo, sed egestas lectus bibendum et.</p>
        </div>
      </Slider>
    </>
  );
};

export default SwipeableCarouselClientReviews;
