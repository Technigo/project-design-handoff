// /////////////// IMPORT //////////////////////// //

import React from 'react';
import './Grid.css';

// /////////////// COMPONENT //////////////////////// //

// This component returns a grid of images that displays in tablet and desktop view.

export const Grid = () => {
  return (
    <div className="grid-container">
      <div>
        <img src="./Pictures/CardActiveWalks.svg" alt="CardActiveWalks" />
      </div>
      <div>
        <img src="./Pictures/CardBalance.svg" alt="CardActiveWalks" />
      </div>
      <div>
        <img src="./Pictures/CardBallGames.svg" alt="CardActiveWalks" />
      </div>
      <div>
        <img src="./Pictures/CardRun.svg" alt="CardActiveWalks" />
      </div>
      <div>
        <img src="./Pictures/CardSwim.svg" alt="CardActiveWalks" />
      </div>
      <div>
        <img src="./Pictures/CardYoga.svg" alt="CardActiveWalks" />
      </div>
    </div>
  )
}
