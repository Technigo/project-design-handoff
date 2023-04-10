import styled from 'styled-components';

export const IntroSection = styled.section`
  padding: 0;

  @media (min-width: 668px) {
    height: 100vh;
  }

  @media (min-width: 1024px) {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const IntroContentDiv = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 1024px) {
    flex-direction: row;
    max-width: 1040px;
    margin: 200px 0;
  }
`;

export const IntroImg = styled.img`
  width: 100%;
  height: 50vh;
  transform: scaleX(-1);
  object-fit: cover;

  @media (min-width: 1024px) {
    width: 500px;
    height: 450px;
  }
`;

export const IntroDiv = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  gap: 16px;
  margin-bottom: 140px;
  margin-top: 24px;

  @media (min-width: 668px) {
    margin-bottom: 109px;
    align-items: flex-start;
    padding-left: 24px;
  }

  @media (min-width: 1024px) {
    margin-bottom: 0;
    margin-top: 0;
    padding-left: 65px;
    justify-content: center;
  }

  button {
    align-self: flex-start;
  }
`;

export const IntroH2 = styled.h2`
  font-size: 1rem;
  font-weight: 500;
`;

export const IntroH3 = styled.h3`
  font-size: 3rem;
  font-weight: 800;

  @media (min-width: 1024px) {
    font-size: 4rem;
  }
`;

export const IntroH4 = styled.h4`
  font-size: 1rem;
  font-weight: 800;
`;

export const IntroP = styled.p`
  font-size: 1.125rem;
  font-weight: 400;
  line-height: 22px;

  @media (min-width: 668px) {
    width: 55%;
  }

  @media (min-width: 1024px) {
    line-height: 19px;
    width: 100%;
  }
`;
