import React, { useState } from 'react'
import ReactSimplyCarousel from 'react-simply-carousel'

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
        <div style={{ width: 300, height: 300, background: '#ff80ed' }}>
          slide 0
        </div>
        <div style={{ width: 300, height: 300, background: '#065535' }}>
          slide 1
        </div>
        <div style={{ width: 300, height: 300, background: '#000000' }}>
          slide 2
        </div>
        <div style={{ width: 300, height: 300, background: '#133337' }}>
          slide 3
        </div>
        <div style={{ width: 300, height: 300, background: '#ffc0cb' }}>
          slide 4
        </div>

      </ReactSimplyCarousel>
    </div>
  );
}

export default Carousel;
