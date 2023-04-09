import React from 'react';
import styled from 'styled-components';

const Spys = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 45vh;
  background-color: #2E160E;
  margin-top: 15px;
 

  p {
    font-size: 0.8rem;
    font-weight: 400;
    line-height: 130%;
    padding: 10px 32px;
    align-self: center;
    text-align: center;
    color: #fff;
    max-width: 420px;
  }
  @media (max-width: 454px) {
        display: none;
    }
  @media (min-width: 455px) {
        display: flex;
    }
`;

export const SpyStudio = () => {
  return (
    <div>
      <Spys>
        <h4>Santulan Power Yoga Studio</h4>
        <p> Put simply, Yoga transformed our lives and we
            want to share that magic with you. We created
            Santulan to empower your journey to personal
            growth and well-being. Our classes weave
            ancient yogic philosophy into 21st century life,
            and everyone`&apos`s welcome, from absolute beginners
            to advanced practitioners. We passionately
            believe that Power Yoga is for everyone,
            and no matter your age or flexibility,
            our expert teachers will ensure you leave
            each class stronger in mind and body.
        </p>
      </Spys>
    </div>
  )
}