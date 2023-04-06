import styled from 'styled-components';

export const StyledCallButton = styled.div`
height: 8em;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;

button {
  width: 85vw;
  border-radius: 12px;
  font-size: 16px;
  font-weight: bold;
  height: 3em;
  background-color: ${({ theme }) => (theme.colors.yellow)};
  color: ${({ theme }) => (theme.colors.white)};
  font-family: 'Libre Baskerville', serif;
  border: none;
}

button:active {
  background-color: ${({ theme }) => (theme.colors.darkyellow)};
}
`