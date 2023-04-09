/* eslint-disable indent */
// /////////////// IMPORT //////////////////////// //
import React from 'react';
import './Numbers.css';
// /////////////// COMPONENT //////////////////////// //
export const Numbers = () => {
    return (
        <div className="master-number">
            <div className="numbers-container">
                <div className="blue-box-container">
                    <div className="blue-box">
                        <img src="./images/Component1.svg" alt="Numbers" />
                    </div>
                    <div className="blue-box">
                        <img src="./images/Component2.svg" alt="Numbers" />
                    </div>
                    <div className="blue-box">
                        <img src="./images/Component3.svg" alt="Numbers" />
                    </div>
                </div>
                <hr className="" />
                <div className="big-box">
                    <img src="./images/review.svg" alt="review" />
                </div>
            </div>
        </div>
    )
}