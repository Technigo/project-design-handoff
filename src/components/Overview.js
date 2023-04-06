import React from 'react'

const Overview = () => {
  return (
    <div className="overview">
      <div className="overviewContainer">
        <div className="imageOverlay" />
        <img className="shape" src="../assets/ShapeLightBlue.svg" alt="Decorative element" />
        <img className="overviewImage" src="../assets/RibbonsOnBarre.png" alt="Ribbons on barre" />
        <div>
          <h2>Come Sweat It Out at the Barre</h2>
          <p>Our Barre Classes are full-body workouts where we’ll pulse, plié, and sweat our way</p>
          <p>through a series of exercises. No dance experience required!</p>
          <button type="button" className="tabletDesktopBtn">Our Classes</button>
        </div>
      </div>
    </div>
  )
}

export default Overview