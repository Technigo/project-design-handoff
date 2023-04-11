import styled from 'styled-components';
import { Button } from 'components/Button';

// CLASSES
export const ClassesSection = styled.section`
  background-color: var(--primaryWhite);
  padding: 132px 0 132px 16px;

  @media (min-width: 668px) {
    padding: 0 0 0 16px;
    height: 100vh;
  }

  @media (min-width: 668px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-top: 10em;
  }

  @media (min-width: 1024px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 0;
    height: 940px;
  }
`;

export const ClassesContainer = styled.div`
  @media (min-width: 668px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  @media (min-width: 1024px) {
    max-width: 1010px;
  }
`;

export const ClassesH2 = styled.h2`
  font-size: 1rem;
  font-weight: 500;
`;

export const ClassesH3 = styled.h3`
  font-size: 2.5rem;
  font-weight: 800;
  margin: 24px 0;

  @media (min-width: 1024px) {
    font-size: 3rem;
    max-width: 380px;
  }
`;

export const ClassesH4 = styled.h4`
  font-size: 1rem;
  font-weight: 800;
  margin-bottom: 32px;
`;

// CAROUSEL

export const YellowRoundButton = styled.button`
  background-color: var(--primaryYellow);
  border: none;
  border-radius: 50%;
  width: 75px;
  height: 75px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  right: 0;
  bottom: 50%;
  transform: translateY(50%);
  cursor: pointer;

  &:focus {
    outline: none;
  }
`;

export const ButtonGroupContainer = styled.div`
  position: absolute;
  right: 0;
  bottom: 50%;
  transform: translateY(50%);
  margin-right: 2px;

  @media (min-width: 1024px) {
    display: none;
  }
`;

export const ArrowIcon = styled.img`
  width: 20px;
  height: 20px;
`;

// CARD

export const ClassCardContainer = styled.div`
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  margin: 0 16px 5px 5px;

  @media (min-width: 1024px) {
    box-shadow: none;

    &:hover {
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    }
  }
`;

export const StyledClassCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background-color: var(--neutralWhite);
  gap: 16px;
  height: 505px;
  overflow: hidden;

  @media (min-width: 1024px) {
    height: 470px;
    background-color: var(--primaryWhite);
    border: none;
    box-shadow: none;
    outline: none;
    filter: grayscale(100%);

    &:focus {
      outline: none;
    }
    &:hover {
      filter: none;
    }
  }
`;

export const ClassImg = styled.img`
  width: 100%;
  height: 50%;
  object-fit: cover;
`;

export const CardH3 = styled.h3`
  font-size: 2rem;
  font-weight: 800;
  padding: 0px 16px;
`;

export const CardP = styled.p`
  font-size: 1rem;
  font-weight: 400;
  padding: 0px 16px;
`;

export const CardButton = styled(Button)`
  position: absolute;
  padding: 10px 30px;
  bottom: 16px;
  left: 10px;
  color: var(--neutralWhite);
`;
