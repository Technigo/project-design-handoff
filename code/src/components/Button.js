import styled, { css } from 'styled-components';

export const Button = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border: none;
  border-radius: 50px;

  &:hover {
    box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  }

  ${(props) => props.headerCta && css`
    background-color: var(--primary-color-2);
    color: var(--neutral-dark);
    font-size: 2rem;
    padding: 8px 55px;
    width: 100%;

    &:active {
      background-color: var(--secondary-color-2);
    }

    @media (min-width: 570px) {
      padding: 14px 48px;
      width: auto;
    }
  `}

  ${(props) => props.mainCta && css`
    font-size: 1.5rem;
    padding: 8px 55px;
    margin-top: 16px;
    background-color: var(--primary-color-2);
    align-self: center;
    width: 100%;

    &:active {
      background-color: var(--secondary-color-2);
    }
  `}

  ${(props) => props.cardCta && css`
    font-size: 1.25rem;
    background: var(--primary-color-3);
    color: var(--neutral-light);
    padding: 12px 30px;
    gap: 10px;

    &:active {
      background-color: var(--secondary-color-3);
    }
  `}

  ${(props) => props.footerCta && css`
    font-size: 1.5rem;
    line-height: 29px;
    padding: 12px 30px;
    width: 50%;
    background: var(--primary-color-2);

    &:active {
      background-color: var(--secondary-color-2);
    }
  `}
`;
