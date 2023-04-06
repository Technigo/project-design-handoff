import React, { useState } from 'react';
import styled from 'styled-components';
import ReactSimplyCarousel from 'react-simply-carousel';

import Johan from './images/christian-buehner-DItYlc26zVI-unsplash.jpg'
import Emelie from './images/freestocks-9UVmlIb0wJU-unsplash.jpg'
import Ewa from './images/sk-jeEedhJXoR0-unsplash.jpg'

export const ImageSlider = () => {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);

  return (
    <div>
      <ReactSimplyCarousel
        activeSlideIndex={activeSlideIndex}
        onRequestChange={setActiveSlideIndex}
        itemsToShow={1}
        itemsToScroll={1}
        forwardBtnProps={{
          // here you can also pass className, or any other button element attributes
          style: {
            alignSelf: 'center',
            background: 'black',
            border: 'none',
            borderRadius: '50%',
            color: 'white',
            cursor: 'pointer',
            fontSize: '20px',
            height: 30,
            lineHeight: 1,
            textAlign: 'center',
            width: 30
          },
          children: <span>{'>'}</span>
        }}
        backwardBtnProps={{
          // here you can also pass className, or any other button element attributes
          style: {
            alignSelf: 'center',
            background: 'black',
            border: 'none',
            borderRadius: '50%',
            color: 'white',
            cursor: 'pointer',
            fontSize: '20px',
            height: 30,
            lineHeight: 1,
            textAlign: 'center',
            width: 30
          },
          children: <span>{'<'}</span>
        }}
        responsiveProps={[
          {
            itemsToShow: 3,
            itemsToScroll: 1,
            minWidth: 768
          }
        ]}
        speed={400}
        easing="linear">
        {/* here you can also pass any other element attributes.
         Also, you can use your custom components as slides */}
        <div style={{ width: 250, height: 250 }}>
          <img src={Johan} alt="johan" style={{ width: 250, height: 250, borderRadius: 200, objectFit: 'cover' }} />
        </div>
        <div style={{ width: 250, height: 250 }}>
          <img src={Emelie} alt="johan" style={{ width: 250, height: 250, borderRadius: 200, objectFit: 'cover' }} />
        </div>
        <div style={{ width: 250, height: 250 }}>
          <img src={Ewa} alt="johan" style={{ width: 250, height: 250, borderRadius: 200, objectFit: 'cover' }} />
        </div>
      </ReactSimplyCarousel>
    </div>
  );
}

export const ReviewHeader = styled.h1`
font-weight: 600;
font-size: 28px;
align-content: center;
color: #025323;
`

