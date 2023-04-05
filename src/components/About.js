/* eslint-disable max-len */
/* eslint-disable react/no-unescaped-entities */
import React from 'react';

export const About = () => {
  return (
    <section className="about">
      <p className="blue-txt">Physical activity is vital for the body. Learn how to master unique skills where you’ll develop strength, confidence and you'll defy yourself.</p>
      <svg className="left" width="486" height="523" viewBox="0 0 486 523" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M292.118 522.016H366.954L237.658 244.715L200.795 326.22L292.118 522.016Z" fill="#0962CF" />
        <path d="M357.138 412.71H357.324L406.597 522H485.508L242.847 0L183.571 127.444L146.153 207.837L0 522H78.9113L128.185 412.71H128.555L184.126 289.897L221.174 208.392L242.847 160.786L357.138 412.71Z" fill="#0962CF" />
      </svg>
      <svg className="right" width="486" height="523" viewBox="0 0 486 523" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M292.118 522.016H366.954L237.658 244.715L200.795 326.22L292.118 522.016Z" fill="#0962CF" />
        <path d="M357.138 412.71H357.324L406.597 522H485.508L242.847 0L183.571 127.444L146.153 207.837L0 522H78.9113L128.185 412.71H128.555L184.126 289.897L221.174 208.392L242.847 160.786L357.138 412.71Z" fill="#0962CF" />
      </svg>
      <img className="about-tag" src="./icons/whats-acrobatics.png" alt="about tag" />
      <img className="about-img" src="./images/manhanging.png" alt="man on rings" />
      <img className="about-stripes" src="./icons/lines.png" alt="stripes" />
      <p className="about-txt">Acrobatics is is the performance of human feats of balance, agility, and motor coordination. Acrobatic skills are used in performing arts, sporting events, and martial arts. Extensive use of acrobatic skills are most often performed in acro dance, circus, gymnastics, and freerunning and to a lesser extent in other athletic activities including ballet, slacklining and diving. Although acrobatics is most commonly associated with human body performance, the term is used to describe other types of performance, such as aerobatics.</p>
      <img className="our-classes-tag" src="./icons/our-classes.png" alt="our classes" />
      <div className="classes-container">
        <div className="classes-items">
          <img className="classes" src="./images/acrobatics-color.png" alt="acrobatic gymnastics" />
          <img className="classes-tag" src="./icons/learn-more.svg" alt="learn more" />
          <p>Acrobatic gymnastics</p>
        </div>
        <div className="classes-items">
          <img className="classes" src="./images/cheerleading-color.png" alt="cheerleading" />
          <img className="classes-tag" src="./icons/learn-more.svg" alt="learn more" />
          <p>Cheerleading</p>
        </div>
        <div className="classes-items">
          <img className="classes" src="./images/trampoline-color.png" alt="trampoline" />
          <img className="classes-tag" src="./icons/learn-more.svg" alt="learn more" />
          <p>Trampoline</p>
        </div>
        <div className="classes-items">
          <img className="classes" src="./images/tumble-color.png" alt="tumble" />
          <img className="classes-tag-reverse" src="./icons/learn-more-reverse.svg" alt="learn more" />
          <p>Tumble</p>
        </div>
        <div className="classes-items">
          <img className="classes" src="./images/parkour-color.png" alt="parkour" />
          <img className="classes-tag-reverse" src="./icons/learn-more-reverse.svg" alt="learn more" />
          <p>Parkour</p>
        </div>
        <div className="classes-items">
          <img className="classes" src="./images/aerial-circus-color.png" alt="aerial circus" />
          <img className="classes-tag-reverse" src="./icons/learn-more-reverse.svg" alt="learn more" />
          <p>Aerial circus</p>
        </div>
        <img className="classes-booking" src="./icons/booking.png" alt="booking" />
      </div>
    </section>
  )
}