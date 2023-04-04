import React from 'react';

export const Connect = () => {
  return (
    <section className="connect">
      <h2>CONNECT WITH US!</h2>
      <img
        src={`${process.env.PUBLIC_URL}/assets/facebook-icon.png`}
        alt="facebook icon" />
      <img
        src={`${process.env.PUBLIC_URL}/assets/instagram-icon.png`}
        alt="instagram icon" />
    </section>
  )
}