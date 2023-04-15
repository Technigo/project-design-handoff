import React from 'react'
import './FooterCss.css'
import IconFcb from '../assets/fcb.svg'
import IconIg from '../assets/ig.svg'
import IconYb from '../assets/yt.svg'
import IconLi from '../assets/li.svg'
import { ButtonL } from './ButtonL'

const Footer = () => {
  return (
    <section className="footer-container">
      <div className="footer-content-wrapper">
        <div className="mobile-buttons-container">
          <button type="button" className="button-footer primary">Get started
          </button>
          <button type="button" className="button-footer brighter">Download App
          </button>
        </div>
        <div className="subscribe-container">
          <h1 className="subscribe-header">Subscribe</h1>
          <p className="paragraph">Catch up on research, meet the trainers and experts behind our concept and courses. Receive invitations to events and additional courses online and on site world-wide.</p>
          <div className="input-container">
            <input type="text" placeholder="Enter your email" />
            <ButtonL>Submit</ButtonL>
          </div>
        </div>
        <div className="bottom-footer-container">
          <div className="links-box">
            <ul className="ul-footer">
              <li><a className="links-footer" href="#">Gift cards</a></li>
              <li><a className="links-footer" href="#">Promo codes</a></li>
              <li><a className="links-footer" href="#">About us</a></li>
              <li><a className="links-footer" href="#">Contact us</a></li>
            </ul>
          </div>
          <div className="icons-box">
            <img
              src={IconFcb}
              alt="Logotyp"
              className="icon-footer" />
            <img
              src={IconIg}
              alt="Logotyp"
              className="icon-footer" />
            <img
              src={IconYb}
              alt="Logotyp"
              className="icon-footer" />
            <img
              src={IconLi}
              alt="Logotyp"
              className="icon-footer" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Footer