import React from 'react';
import './FinalSection.css';
import PrimaryButtonLarge from './PrimaryButtonLarge.js';

// import PurpleBackgroundMobile from '../assets/PurpleBackgroundMobile.svg';
// import PurpleBackgroundTabletOne from '../assets/PurpleBackgroundTabletOne.svg';
// import PurpleBackgroundTabletTwo from '../assets/PurpleBackgroundTabletTwo.svg';
// import PurpleBackgroundTabletThree from '../assets/PurpleBackgroundTabletThree.svg';
// import PurpleBackgroundDesktopOne from '../assets/PurpleBackgroundDesktopOne.svg';
// import PurpleBackgroundDesktopTwo from '../assets/PurpleBackgroundDesktopTwo.svg'
// import PurpleBackgroundDesktopThree from '../assets/PurpleBackgroundDesktopThree.svg'
// import PurpleBackgroundDesktopFour from '../assets/PurpleBackgroundDesktopFour.svg'

const FinalSection = () => {
//   let purpleBackgroundUrl = '';
//   if (screenSize < 667) {
//     purpleBackgroundUrl = PurpleBackgroundMobile;
//   } else if (screenSize >= 667 && screenSize < 1024) {
//     purpleBackgroundUrl = PurpleBackgroundTabletOne + ',' +
//     PurpleBackgroundTabletTwo + ',' PurpleBackgroundTabletThree;
//   } else {
//     purpleBackgroundUrl = PurpleBackgroundDesktopOne
//     PurpleBackgroundDesktopTwo, PurpleBackgroundDesktopThree, PurpleBackgroundDesktopFour;
//   }
//   console.log('background', screenSize)

  return (
    <div className="finalSection">
      {/* <img className="purpleBackground" src={purpleBackgroundUrl}
        alt="Purple background shape" /> */}
      <div className="purpleBackgroundContainerMobile">
        <img className="purpleBackground" src="../images/PurpleBackgroundMobile.svg" alt="Purple background shape" />
      </div>
      <div className="purpleBackgroundContainerTablet">
        <img className="purpleBackgroundT1" src="../images/PurpleBackgroundTabletOne.svg" alt="Purple background shape" />
        <img className="purpleBackgroundT2" src="../images/PurpleBackgroundTabletTwo.svg" alt="Purple background shape" />
        <img className="purpleBackgroundT3" src="../images/PurpleBackgroundTabletThree.svg" alt="Purple background shape" />
      </div>
      <div className="purpleBackgroundContainerDesktop">
        <img className="purpleBackgroundD1" src="../images/PurpleBackgroundDesktopOne.svg" alt="Purple background shape" />
        <img className="purpleBackgroundD2" src="../images/PurpleBackgroundDesktopTwo.svg" alt="Purple background shape" />
        <img className="purpleBackgroundD3" src="../images/PurpleBackgroundDesktopThree.svg" alt="Purple background shape" />
        <img className="purpleBackgroundD4" src="../images/PurpleBackgroundDesktopFour.svg" alt="Purple background shape" />
      </div>
      <div className="testimonalsWrapper">
        <h2 className="testimonialsTitle">Why Students Love Our Barre Classes</h2>
        <p style={{ marginBottom: '16px' }}>&quot;The instructors are amazing, the atmosphere is supportive,
            and the workouts are challenging yet fun!&quot;
        </p>
        <p style={{ marginBottom: '24px' }}>-Robyn Andersson, <span>Barre Basic Student</span></p>
        <p style={{ marginBottom: '16px' }}>&quot;I can feel the muscles working and getting stronger.
            I always feel energized at the end of the class&quot;
        </p>
        <p>-Paula Ray, <span>Barre Strong Student</span></p>
      </div>
      <div className="registerWrapper">
        <div className="topRegister">
          <h2 className="registerTitle">Register at Raise Studio</h2>
          <h3 className="accountTitle">Create an Account to Book Barre Classes and Buy Credits.</h3>
          <p className="accountText">Already have an account? <button type="button" className="logInButton">Login</button></p>
        </div>
        <div className="bottomFormRegister">
          <form className="registrationForm">
            <label htmlFor="firstName">
              <span>First Name</span>
              <input type="text" id="firstName" name="firstName" required /><br />
            </label>
            <label htmlFor="lastName">
              <span>Last Name</span>
              <input type="text" id="lastName" name="lastName" required /><br />
            </label>
            <label htmlFor="phone">
              <span>Phone number</span>
              <input type="tel" id="phone" name="phone" required /><br />
            </label>
            <label htmlFor="email">
              <span>Email (username) </span>
              <input type="email" id="email" name="email" required /><br />
            </label>
            <label htmlFor="password">
              <span>Password</span>
              <input type="password" id="password" name="passoword" required /><br />
            </label>
            <div className="checkboxContainer">
              <label htmlFor="newsletter">
                <span>I want to receive Raise Studio&apos;s
          Newsletter!
                </span>
                <input type="checkbox" id="newsletter" name="newsletter" value="newsletter" />
              </label><br />
              <label htmlFor="termsAndConditions">
                <span>I have read and understood the
                  <button type="button" className="registrationButton"> Terms & Conditions</button> and
                  <button type="button" className="registrationButton"> Privacy Policy</button>
                </span>
                <input type="checkbox" id="termsAndConditions" name="termsAndConditions" value="termsAndConditions" />
              </label>
            </div>
            {/* <input type="submit" value="Submit" /> */}
            <div className="formButtonWrapper">
              <PrimaryButtonLarge className="primaryButtonLarge" buttonText="Join Raise Studio" />
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default FinalSection;