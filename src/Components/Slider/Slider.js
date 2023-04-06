/* eslint-disable no-useless-escape */
/* eslint-disable indent */
import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import './Slider.css';

const Slider = () => {
    return (
        <Slide>
            <div className="each-slide-effect">
                <div className="sliderImg">
                    <img src="./Pictures/CardActiveWalks.svg" alt="CardActiveWalks" />
                </div>
            </div>
            <div className="each-slide-effect">
                <div>
                    <img src="./Pictures/CardBalance.svg" alt="CardActiveWalks" />
                </div>
            </div>
            <div className="each-slide-effect">
                <div>
                    <img src="./Pictures/CardBallGames.svg" alt="CardActiveWalks" />
                </div>
            </div>
            <div className="each-slide-effect">
                <div>
                    <img src="./Pictures/CardRun.svg" alt="CardActiveWalks" />
                </div>
            </div>
            <div className="each-slide-effect">
                <div>
                    <img src="./Pictures/CardSwim.svg" alt="CardActiveWalks" />
                </div>
            </div>
            <div className="each-slide-effect">
                <div>
                    <img src="./Pictures/CardYoga.svg" alt="CardActiveWalks" />
                </div>
            </div>
        </Slide>
    );
};
export default Slider;