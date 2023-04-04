import styled, { css } from 'styled-components';

export const Button = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border: none;
  border-radius: 50px;

  &:hover {
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }

  ${(props) => props.headerCta && css`
    background-color: #FAC65D;
    color: black;
    font-size: 32px;
    padding: 8px 55px;
    gap: 30px;
    width: 358px;
    height: 67px;

    &:active {
      background-color: #E39F49;
    }
  `}

  ${(props) => props.mainCta && css`
    font-size: 24px;
    padding: 8px 55px;
    gap: 30px;
    width: 358px;
    height: 48px;
    background: #FAC75D;

    &:active {
      background-color: #E39F49;
    }
  `}

  ${(props) => props.cardCta && css`
    font-size: 20px;
    gap: 10px;
    width: 138px;
    height: 48px;
    background: #4E80D5;
    color: #FFFFFF;

    &:active {
      background-color: #3253A8;
    }
  `}

  ${(props) => props.footerCta && css`
    font-size: 24px;
    padding: 12px 30px;
    gap: 10px;
    width: 152px;
    height: 53px;
    background: #FAC65D;

    &:active {
      background-color: #E39F49;
    }
  `}
`;
