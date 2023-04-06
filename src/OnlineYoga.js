import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const OnlineYoga = () => {
  return (
    <>
      <h1>Our Online Yoga Offering</h1>
      <p>Practice yoga conveniently and comfortably from home
          with our online yoga classes. Our experienced yoga teachers
          will guide you through a variety of classes and styles, from
          beginner to advanced, with clear and easy-to-follow instructions.
      </p>
      <Carousel
        infiniteLoop
        showStatus={false}
        showThumbs={false}
        showArrows
        centerMode
        centerSlidePercentage={77}
        showIndicators={false}>
        <div className="movie-card">
          <div className="movie-text">
            <p>Yinyoga to calm down 15 min
            </p>
          </div>
          <img src="./images/pexels-cottonbro-studio-4056535 - Edited.png" alt="yoga woman" />
        </div>
        <div className="movie-card">
          <div className="movie-text">
            <p>Yinyoga to calm down 15 min
            </p>
          </div>
          <img src="./images/laura-vienna.png" alt="woman eating" />

        </div>
        <div className="movie-card">
          <div className="movie-text">
            <p>Yinyoga to calm down 15 min
            </p>
          </div>
          <img src="./images/yoga-woman.png" alt="yoga woman" />
        </div>
      </Carousel>
    </>
  )
}

export default OnlineYoga;