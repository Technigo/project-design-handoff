// /* eslint-disable implicit-arrow-linebreak */
// /* eslint-disable react/jsx-props-no-spreading */
// import React from 'react';
// import Slider from 'react-slick';

// export const SimpleSlider = () => {
//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1
//   };

//   const SliderContent = [
//     {
//       id: 1,
//       image: './images/acrobatics.png',
//       tag: './icons/learn-more.png',
//       text: 'Acrobatic gymnastics'
//     },
//     {
//       id: 2,
//       image: './images/cheerleading.png',
//       tag: './icons/learn-more.png',
//       text: 'Cheerleading'
//     },
//     {
//       id: 3,
//       image: './images/trampoline.png',
//       tag: './icons/learn-more.png',
//       text: 'Trampoline'
//     },
//     {
//       id: 4,
//       image: './images/aerial-circus.png',
//       tag: './icons/learn-more.png',
//       text: 'Aerial circus'
//     },
//     {
//       id: 5,
//       image: './images/tumble.png',
//       tag: './icons/learn-more.png',
//       text: 'Tumble'
//     },
//     {
//       id: 6,
//       image: './images/parkour.png',
//       tag: './icons/learn-more.png',
//       text: 'Parkour'
//     }
//   ]

//   return (
//     <Slider className="slider-container" {...settings}>
//       {SliderContent.map((sliders) =>
//         <div key={sliders.id}>
//           <div>{sliders.image}</div>
//           <div>{sliders.tag}</div>
//           <div>{sliders.text}</div>
//         </div>)}
//     </Slider>
//   );
// }