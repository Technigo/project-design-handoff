import React from 'react';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';

import '../carousel.css';

const cardboxes = [
  {
    id: 1,
    text: 'Fill the simple form',
    logo: '/images/list.png'
  },
  {
    id: 2,
    text: 'Get matched with a certified coach',
    logo: '/images/users.png'
  },
  {
    id: 3,
    text: 'Enjoy your journey',
    logo: '/images/yoga-pose.png'
  }
];

const CarouselSection = ({ text, logo }) => (
  <div className="carousel-wrapper" style={{ backgroundColor: '#D7CBFF' }}>
    <div className="carousel-box">
      <img src={logo} alt="Logo" style={{ width: '50px' }} />
      <p>{text}</p>
    </div>
  </div>
);

const Section = () => {
  const renderSlide = ({ text, logo }) => <CarouselSection text={text} logo={logo} />;

  return (
    <div className="section">
      <AwesomeSlider>
        {cardboxes.map((cardbox) => (
          <div key={cardbox.id}>{renderSlide(cardbox)}</div>
        ))}
      </AwesomeSlider>
    </div>
  );
};

export default Section;

