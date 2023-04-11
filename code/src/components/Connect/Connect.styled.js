import styled from 'styled-components';

export const ConnectSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const ConnectText = styled.h2`
  font-size: 3em;
  font-weight: 800;
  margin: 102px 68px 0 68px;
  text-align: center;

  @media (min-width: 668px) {
    margin: 128px 68px 0 68px;
  }
`;

export const IconsDiv = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 10px;
  margin-bottom: 218px;
  gap: 10px;
  cursor: pointer;

  @media (min-width: 668px) {
    margin-top: 24px;
    margin-bottom: 128px;
  }
`;
