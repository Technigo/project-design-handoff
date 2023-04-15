import React from 'react'
import './AchieveBottomCss.css'
import Mobile from '../assets/mobile.svg'
import Heart from '../assets/heart.svg'
import Time from '../assets/time.svg'
import Cal from '../assets/cal.svg'
import Foot from '../assets/foot.svg'
import Pawicon from '../assets/pawicon.svg'
import { Button } from './Button'

const AchieveBottom = () => {
  return (
    <section className="achievebottom-container">
      <div className="text-button-box">
        <h1 className="header-achieve">
        WORKOUT <br /><span className="header-achieve-size">WHERE YOU ARE</span>
        </h1>
        <button type="button" className="button-achieve brighter">Download the app
        </button>
      </div>
      <hr className="line-achieve" />
      <div className="picture-text-box">
        <img
          src={Mobile}
          alt="mobile phone"
          className="mobile-picture" />
        <div className="text-icons-box">
          <h1 className="header-achieve-bottom">
            <span className="header-achieve-bottom-bold">SCHEDULE</span> WORKOUTS <br />
          GET <span className="header-achieve-bottom-bold">REMINDERS</span> <br />
            <span className="header-achieve-bottom-bold">TRACK</span> YOUR PROGRESS <br />
          BE <span className="header-achieve-bottom-bold">SPONTANEOUS</span> <br />
            <span className="header-achieve-bottom-bold">SAVE</span> YOUR FAVOURITES  <br />
          CELEBRATE YOUR <span className="header-achieve-bottom-bold">GOALS</span> <br />
          </h1>
          <div className="achieve-icons-box">
            <img
              src={Heart}
              alt="icon"
              className="icon-achieve" />
            <img
              src={Time}
              alt="icon"
              className="icon-achieve" />
            <img
              src={Cal}
              alt="icon"
              className="icon-achieve" />
            <img
              src={Foot}
              alt="icon"
              className="icon-achieve" />
            <img
              src={Pawicon}
              alt="icon"
              className="icon-achieve" />
          </div>
        </div>
      </div>
      <Button className="button-achieve-konst brighter"> Download The App </Button>
    </section>
  )
}

export default AchieveBottom