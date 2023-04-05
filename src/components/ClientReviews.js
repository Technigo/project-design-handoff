/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import './ClientReviews.css';
import Slider from 'react-slick';
// eslint-disable-next-line no-useless-escape

const ClientReviews = () => {
  const settings = {
    dots: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false
  };

  return (
    <div className="client-reviews-container">
      <h2>What our Clients say about their journey!</h2>
      <div className="slider-container-client">
        <Slider {...settings}>
          <div className="cards">
            <p1>
            “Arranging the free trial and signing up for
             a package afterward was quick and easy. My trainer Lola is AMAZING!
              I absolutely hate exercise and haven't been able to stick
              to an exercise routine since school. But Lola makes my workouts
               fun and keeps me sessions!”
            </p1>
            <div className="client-conatiner">
              <img src={`${process.env.PUBLIC_URL}/img/client1.png`} alt="client1" />
              <h3>Liana Kelly</h3>
            </div>
          </div>
          <div className="cards">
            <p1>
            “My personal coach, Sara, makes my workouts fun and keeps
             me motivated by adjusting my workouts for my specific needs.
              Now that I'm working with her, I look forward to my workout sessions!”
            </p1>
            <div className="client-conatiner">
              <img src={`${process.env.PUBLIC_URL}/img/client2.png`} alt="client2" />
              <h3>Nils Beck</h3>
            </div>
          </div>
          <div className="cards">
            <p1>
            “Thanks to my coach, I could finally stick to the lifestyle
             always looking for. Making customized eating diet and training
              based on my routine helps me to keep motivated  and easy to follow!”
            </p1>
            <div className="client-conatiner">
              <img src={`${process.env.PUBLIC_URL}/img/client3.png`} alt="client3" />
              <h3>Sara Jones</h3>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default ClientReviews;

