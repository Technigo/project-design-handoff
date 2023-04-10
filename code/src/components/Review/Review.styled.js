import styled from 'styled-components';

export const ReviewSection = styled.section`
  background-color: var(--neutralWhite);

  @media (min-width: 668px) {
    background-color: var(--primaryWhite);
  }
`;

export const ReviewContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (min-width: 668px) {
    flex-direction: column-reverse;
    padding-top: 53px;
    padding-bottom: 53px;
  }

  @media (min-width: 1024px) {
    flex-direction: row-reverse;
  }
`;

export const ReviewH2 = styled.h2`
  color: var(--primaryPink);
  font-weight: 800;
  font-size: 2rem;
  text-align: center;
  padding: 97px 16px 40px 16px;

  @media (min-width: 668px) {
    padding: 0 100px;
    font-size: 2.25rem;
  }

  @media (min-width: 1024px) {
    display: flex;
    flex-direction: column;
    padding: 0;
    width: 600px;
  }
`;

export const Quotation = styled.img`
  width: 40px;
  height: 30px;
  margin: 10px;

  @media (min-width: 1024px) {
    margin-left: 35px;
  }
`;

export const ReviewImg = styled.img`
  margin-bottom: 40px;

  @media (min-width: 668px) {
    margin-bottom: 48px;
  }
`;
