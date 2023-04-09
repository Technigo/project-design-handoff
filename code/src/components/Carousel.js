import React from 'react';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';

import '../carousel.css';

const cardboxes = [
  {
    id: 1,
    text: 'Fill the simple form',
    text2: 'Fill the primary questionnaire and we will contact you to know more about your health condition, fitness background and your special needs. ',
    logo: './images/list.png'
  },
  {
    id: 2,
    text: 'Get matched with a certified coach',
    text2: 'You then try our free 1-1 service to meet a coach who matched with your preferences and requirements ',
    logo: './images/users.png'
  },
  {
    id: 3,
    text: 'Enjoy your journey',
    text2: 'Your personal coach design a training plan and diet tailored to your individual needs, push, motivate and support you to make your life happier and healthier ',
    logo: './images/yoga-pose.png'
  }
];

const CarouselSection = ({ text, text2, logo }) => (
  <div className="carousel-section">
    <div className="carousel-wrapper" style={{ backgroundColor: '#D7CBFF' }}>
      <div className="carousel-box">
        <img src={logo} alt="Logo" style={{ width: '50px' }} />
        <p style={{ fontWeight: 'bold' }}>{text}</p>
        <p>{text2}</p>
      </div>
    </div>
  </div>
);

const Section = () => {
  // eslint-disable-next-line max-len
  const renderSlide = ({ text, text2, logo }) => <CarouselSection text={text} text2={text2} logo={logo} />;

  return (
    <div className="section">
      <h2>Take easy steps to your desired lifestyle</h2>
      <AwesomeSlider>
        {cardboxes.map((cardbox) => (
          <div key={cardbox.id}>{renderSlide(cardbox)}</div>
        ))}
      </AwesomeSlider>
    </div>
  );
};

export default Section;

