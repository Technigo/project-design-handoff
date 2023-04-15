import React from 'react';
import styled from 'styled-components';

const ConnectSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ConnectText = styled.h2`
  font-size: 3em;
  font-weight: 800;
  margin: 102px 68px 0 68px;
  text-align: center;

  @media (min-width: 668px) {
    margin: 128px 68px 0 68px;
  }
`;

const IconsDiv = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 10px;
  margin-bottom: 218px;
  gap: 10px;

  @media (min-width: 668px) {
    margin-top: 24px;
    margin-bottom: 128px;
  }
`;

export const Connect = () => {
  return (
    <ConnectSection className="connect">
      <ConnectText>CONNECT WITH US!</ConnectText>
      <IconsDiv>
        <img
          src={`${process.env.PUBLIC_URL}/assets/facebook-icon.png`}
          alt="facebook icon" />
        <img
          src={`${process.env.PUBLIC_URL}/assets/instagram-icon.png`}
          alt="instagram icon" />
      </IconsDiv>
    </ConnectSection>
  )
}