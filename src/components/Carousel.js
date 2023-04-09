import React, { useState } from 'react'
import ReactSimplyCarousel from 'react-simply-carousel'
import CarouselCard from './CarouselCard'

const Carousel = () => {
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
            itemsToShow: 2,
            itemsToScroll: 2,
            minWidth: 768
          }
        ]}
        dotsNav={{
          show: true,
          containerProps: {
            style: {
              display: 'flex',
              flexDirection: 'row',
              padding: 8,
              gap: 8
            }
          },
          itemBtnProps: {
            style: {
              height: 16,
              width: 16,
              borderRadius: '50%',
              border: 0
            }
          },
          activeItemBtnProps: {
            style: {
              height: 16,
              width: 16,
              borderRadius: '50%',
              border: 0,
              background: '#9A6D92'
            }
          }
        }}
        speed={400}
        easing="linear">
        <div>
          <CarouselCard text="slide 1" picture="picture-one.jpg" />
        </div>
        <div>
          <CarouselCard text="slide 2" />
        </div>
        <div>
          <CarouselCard text="slide 3" />
        </div>

      </ReactSimplyCarousel>
    </div>
  );
}

export default Carousel;
