/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';
import './Coaches.css';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const CoachesCarousel = () => {
  const responsiveCoaches = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
  return (
    <div className="coaches-container">
      <h1>Get to know our coaches</h1>
      <div className="coaches-inner-wrapper">
        <Carousel responsive={responsiveCoaches}>
          <div className="coaches-card">
            <img src="../assets/Maggi.jpg" alt="picture of Maggi" />
          </div>
          <div className="coaches-card">
            <img src="../assets/Helia.jpg" alt="picture of Helia" />
          </div>
          <div className="coaches-card">
            <img src="../assets/Viggo.jpg" alt="picture of Viggo" />
          </div>
          <div className="coaches-card">
            <img src="../assets/Lili.jpg" alt="picture of Lili" />
          </div>
          <div className="coaches-card">
            <img src="../assets/Liz.jpg" alt="picture of Liz" style={{ marginTop: '25px', marginLeft: '15px' }} />
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default CoachesCarousel;