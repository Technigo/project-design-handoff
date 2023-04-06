import React from 'react';
import styled from 'styled-components';

const AdressImg = styled.div`
  display: flex;
  max-width: 422px;
  height: 200px;
  background-color: #66A1AE;
  margin: 10px;

  img {
    height: 200px;
  }

  p {
    font-size: 1rem;
    font-weight: 600;
    line-height: 130%;
    padding: 18px;
    align-self: center;
    color: #fff;
  }
`;

export const Adress = () => {
  return (
    <div className="adress-container">
      <div>
        <AdressImg>
          <img src="/img/adress.png" alt="Location" />
          <p>Find us at:
            Fridhemsplansgatan No.10
            Stockholm, Sweden
          </p>
        </AdressImg>
      </div>
    </div>
  )
}