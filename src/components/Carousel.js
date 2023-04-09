import React, { useState } from 'react'
import ReactSimplyCarousel from 'react-simply-carousel'
import CarouselCard from './CarouselCard'
import CarouselCardOne from '../assets/carousel-card-one.png'
import CarouselCardTwo from '../assets/carousel-card-two.png'
import CarouselCardThree from '../assets/carousel-card-three.png'
import CarouselCardFour from '../assets/carousel-card-four.png'

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
          <CarouselCard
            title="Barre Basic"
            text="Our Beginner’s Class will give you a solid foundation on your Barre Journey.

Learn the basic Techniques and Terminology. Practice proper posture while building strength, toning muscles and improving flexibility

Our Experienced Instructors will make sure you feel confident and comfortable, by modifying the movements for you."
            image={CarouselCardOne} />
        </div>
        <div>
          <CarouselCard
            title="Barre Strong"
            text="Challenge Yourself and take your Barre skills to the next level.

In this Class you’ll use controlled movements and props such as resistance bands and weights to intensify the workout and increase your Strength and Endurance.

Our Experienced Instructors offer advanced modifications to help you push beyond your limits."
            image={CarouselCardTwo} />
        </div>
        <div>
          <CarouselCard
            title="Barre Flex"
            text="Increase your Flexibility and Range of Motion with Barre Flex.

Here we focus on dynamic stretches and movements to take your agility to the next level. You’ll use props such as blocks to enhance your workout even more.You’ll notice improved flexibility, better posture, and reduced stress after just a few times."
            image={CarouselCardThree} />
        </div>
        <div>
          <CarouselCard
            title="Barre Dance"
            text="Get ready to move, groove and feel the music with Barre Dance.

This high-energy class combines the strength-building benefits of traditional Barre with grace and fluidity of dance.

Whether you're a seasoned dancer or a complete beginner, you'll leave class feeling energized and inspired by the power of dance!"
            image={CarouselCardFour} />
        </div>

      </ReactSimplyCarousel>
    </div>
  );
}

export default Carousel;
