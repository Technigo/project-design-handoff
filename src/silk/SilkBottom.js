import React from 'react'
import SilkLarge from '../assets/images/Silk-Large.png'
import SilkMedium from '../assets/images/Silk-Medium.png'
import SilkSmall from '../assets/images/Silk-Small.png'

import './Silk.css'

const SilkBottom = ({ screenSize }) => {
  const isMobile = screenSize <= 640;
  const isTablet = screenSize > 640 && screenSize < 1025;
  const isDesktop = screenSize >= 1025;

  return (
    <div className="bottom-silk">
      {isMobile && (<img src={SilkSmall} alt="" />)}
      {isTablet && (<img src={SilkMedium} alt="" />)}
      {isDesktop && (<img src={SilkLarge} alt="" />)}
    </div>
  )
}

export default SilkBottom;