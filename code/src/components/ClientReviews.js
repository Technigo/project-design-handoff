/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable max-len */

import React from 'react';
import Slider from 'react-slick';
import './ClientReview.css';
import { BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill } from 'react-icons/bs'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const ClientReviewsCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false
  };

  return (
    <div className="client-review-container">
      <h1>What our Clients say about their journey!</h1>
      <Slider {...settings}>
        <div className="card">
          <p>“Arranging the free trial and signing up for a package afterward was quick and easy. My trainer Lola is AMAZING! I absolutely hate exercise and have not been able to stick to an exercise routine since school. But Lola makes my workouts fun and keeps me sessions!”</p>
          <img src="../assets/Liana.jpg" alt="picture of Liana" />
          <h3>Liana Kelly</h3>
        </div>
        <div className="card">
          <p>“My personal coach, Sara, makes my workouts fun and keeps me motivated by adjusting my workouts for my specific needs. Now that I am working with her, I look forward to my workout sessions!”</p>
          <img src="../assets/Nils.png" alt="picture of Nils" />
          <h3>Nils Beck</h3>
        </div>
        <div className="card">
          <p>“Thanks to my coach, I could finally stick to the lifestyle always looking for. Making customized eating diet and training based on my routine helps me to keep motivated  and easy to follow!”</p>
          <img src="../assets/Sara.png" alt="picture of Sara" />
          <h3>Sara Jones</h3>
        </div>
        <div className="arrow-container">
          <BsFillArrowLeftCircleFill />
          <BsFillArrowRightCircleFill />
        </div>
      </Slider>
    </div>
  );
};

export default ClientReviewsCarousel;
