import React from 'react';
import styled from 'styled-components';

const AdressImg = styled.div`
  display: flex;
  max-width: 422px;
  height: 182px;
  background-color: #66A1AE;
  margin: 8px 8px;

  img {
    height: 182px;
    width: 175px;
  }

  p {
    font-size: 10px;
    font-weight: 600;
    line-height: 130%;
    padding: 0;
    margin: 10px;
    align-self: center;
    color: #fff;
  }

  @media (min-width: 768px) {
    height: 226px;
    width: 760px;
    margin: 22px 0;

    img {
    height: 226px;
    width: 214px;
  }

  p {
    font-size: 14px;
    margin: 10px;
  }
      
  }
`;

export const Adress = () => {
  return (
    <div className="adress-container">
      <AdressImg>
        <img src="/img/adress192x185.png" alt="Location" />
        <p>Find us at: <br />
            Fridhemsplansgatan No.10 <br />
            Stockholm, Sweden
        </p>
      </AdressImg>
    </div>
  )
}