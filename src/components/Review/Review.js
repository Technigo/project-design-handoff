import React from 'react';
import styled from 'styled-components';

const ComeJoin = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #66A1AE;

  h3 {
    font-size: 30px;
    font-weight: 700;
    padding: 20px 20px;
  }

  p {
    font-size: 16px;
    font-weight: 500;
    line-height: 130%;
    align-self: center;
    text-align: center;
    color: #fff;
    max-width: 310px;
  }
`;

const Reviews = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  height: 150px;
  max-width: 330px;
  background-color: #4796A8;
  margin: 25px;
  padding: 10px 30px;
  border-radius: 13px;

  img {
    height: 50px;
    padding: 0;
  }

  h5 {
    font-size: 12px;
    font-weight: 600;
    color: #fff;
  }

  p {
    font-size: 12px;
    font-weight: 600;
    align-self: center;
    padding: 0 10px; 
    color: #fff;
  }
`;

export const ReviewTemp = () => {
  return (
    <div>
      <ComeJoin>
        <h3>Come join us!</h3>
        <p>Discover all the benefits of Power Yoga and
            Become a part of our amazing community!
        </p>
        <Reviews>
          <h5>Anyone who thinks of joining a class,
             do it! Its such a great mix of physical
              exercise and a calm break from the everyday life.
          </h5>
          <img src="/img/adress.png" alt="Profilepicture" />
          <p>Bob M.Great
          </p>
        </Reviews>
      </ComeJoin>
    </div>
  )
}