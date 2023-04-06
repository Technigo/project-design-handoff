import React from 'react';
import Endurancephoto from 'Images/Endurancephoto.png';
import Agilityphoto from 'Images/Agilityphoto.png';
import Strengthphoto from 'Images/Strengthphoto.png';
import Prehabphoto from 'Images/Prehabphoto.png'
import agilitysmall from 'Images/agilitysmall.png'
import ExerciseCards from './ExerciseCards';

const Benefits = () => {
  return (
    <section className="benefits-section">
      <h3 className="benefits-header">BENEFITS OF FIT2DERBY</h3>
      <div className="benefits-div">
        <p>sdjfnsödnfsdlanfkldsnfkldsnfkldsnxfklns
          sdlzfnödsklnfklsdnfklnsdkln ldsnflkdsanfklnsdaklnfkln
        </p>
        <h4 className="examples-header">EXAMPLES OF EXERCISES</h4>
        <ul className="examples-list">
          <li>ösnfjgn</li>
          <li>dfgdfgdfg</li>
          <li>dflkgndföklng</li>
        </ul>
      </div>

      <div className="exercise-card endurance-container">
        <ExerciseCards
          photo={Endurancephoto}
          alt="Endurance card"
          exercise="ENDURANCE"
          text="Endurance training is essential for roller derby players as it builds stamina for long games, aids in faster recovery,
          reduces fatigue-related injuries and ensures a high level of performance throughout the game" />
      </div>

      <div className="exercise-card agility-container">
        <ExerciseCards
          photo={Agilityphoto}
          alt="Agillty card"
          exercise="AGILITY"
          text="Agility training is crucial for roller derby athletes. It improves speed, balance, coordination, and reaction time on skates. It reduces the risk of injury and prepares players for the demands of the sport" />
      </div>

      <div>
        <img src={agilitysmall} alt="z" />
      </div>

      <div className="exercise-card strength-container">
        <ExerciseCards
          photo={Strengthphoto}
          alt="Strenght card"
          exercise="STRENGHT"
          text="Strength training is equally crucial, as it improves muscle strength, balance, stability, and resilience. It helps players hit harder, block better, and prevent injuries. It's essential for becoming a stronger, more agile athlete" />
      </div>

      <div className="exercise-card prehab-container">
        <ExerciseCards
          photo={Prehabphoto}
          alt="Prehab card"
          exercise="PREHAB"
          text="Often overlooked as it focuses on smaller muscles and sometimes “boring” exercises, but crucial to avoid common injuries such as concussions, twisted knees, broken ankles, dislocated shoulders and torn ligaments" />
      </div>
    </section>
  )
};

export default Benefits;