/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable max-len */

import React from 'react';
import './ClientReview.css';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const ClientReviewsCarousel = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
  return (
    <div className="client-review-container">
      <h1>What our Clients say about their journey!</h1>
      <Carousel responsive={responsive}>
        <div className="card">
          <p>“Arranging the free trial and signing up for a package afterward was quick and easy. My trainer Lola is AMAZING! I absolutely hate exercise and have not been able to stick to an exercise routine since school. But Lola makes my workouts fun and keeps me sessions!”</p>
          <img src="../assets/Liana.jpg" alt="picture of Liana" className="Liana" />
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
      </Carousel>
    </div>
  );
};

export default ClientReviewsCarousel;
