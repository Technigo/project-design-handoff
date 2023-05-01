import styled from 'styled-components'

export const StartButton = styled.button`
  background-color: ${(props) => (props.primary ? props.theme.primaryButton.bg : 'transparent')};
  border-radius: 8px 8px;
  border: none;
  color: white;
  font-size: 16px;
  padding: 5px 16px;
  font-style: italic;
  outline: ${(props) => (props.primary ? props.theme.primaryButton.outline : '1px solid white')};
  &:hover {
    box-shadow: 0 12px 16px 0 rgba(0, 0, 0, 0.24), 0 17px 50px 0 rgba(0, 0, 0, 0.19);
    transform: scale(1.1);
  }

`