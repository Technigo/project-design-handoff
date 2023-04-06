import React from 'react';
import Slider from 'react-slick';

export const SliderApp = ({ images }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <Slider {...settings}>
      {images.map((image) => (
        <div key={image.id}>
          <img src={image.url} alt={image.alt} />
        </div>
      ))}
    </Slider>
  );
};
