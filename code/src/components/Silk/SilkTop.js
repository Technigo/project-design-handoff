import React from 'react';
import ribbonLarge from '../../assets/images/SilkLarge.png';
import ribbonMedium from '../../assets/images/SilkMedium.png';
import ribbonSmall from '../../assets/images/SilkSmall.png';

import './Silk.css';

const SilkTop = ({ screenSize }) => {
  const isMobile = screenSize <= 640;
  const isTablet = screenSize > 640 && screenSize < 1025;
  const isDesktop = screenSize >= 1025;

  // console.log('screenSize SilkTop', screenSize)

  return (
    <div className="top-silk">
      {isMobile && (<img src={ribbonSmall} alt="" />)}
      {isTablet && (<img src={ribbonMedium} alt="" />)}
      {isDesktop && (<img src={ribbonLarge} alt="" />)}
    </div>
  );
};

export default SilkTop;
