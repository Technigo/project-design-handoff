import React from 'react'
import './ExpertsCss.css'

const Experts = () => {
  return (
    <section className="experts-container">
      <div className="numbers-parent">
        <div className="numbers-child">
          <h1 className="header-numbers">150+</h1>
          <h2 className="header-numbers2">EXPERIENCED TRAINERS</h2>
        </div>
        <div className="numbers-child">
          <h1 className="header-numbers">10+ y</h1>
          <h2 className="header-numbers2">RESEARCH AND EXPERIENCE</h2>
        </div>
        <div className="numbers-child">
          <h1 className="header-numbers">254 k</h1>
          <h2 className="header-numbers2">HAPPY CLIENTS IN PROGRESS</h2>
        </div>
      </div>
      <div className="big-field">
        <p className="maintext-experts">
            This experience is
            beautiful. We get more out of
            our exercises and we have
            grown better at using the little
            moments for a laugh together.
            It has brought us so much closer, me and my terrier girl.
        </p>
        <p className="quoted-experts">
            Sanna, 32, and
            Leah the terrier, 4.
        </p>

      </div>
    </section>
  )
}

export default Experts